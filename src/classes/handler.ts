import { promises } from 'fs';
import { join } from 'path';
import { Message, Collection } from 'discord.js';
import { red, green } from 'chalk';

import EventListener from './eventListener';
import CommandListener from './commandListener';
import { HandlerOptions, RunCallbacks, GenericUtils } from '../interfaces/main';
import { GenericEvent } from '../interfaces/events';

const { lstat, readdir } = promises;

export default class Handler {
  private readonly client: HandlerOptions['client'];

  private readonly token?: HandlerOptions['token'];
  private readonly verbose?: HandlerOptions['verbose'];

  private readonly eventsFolder?: HandlerOptions['eventsFolder'];
  private readonly commandsFolder?: HandlerOptions['commandsFolder'];

  private readonly moduleFolder = join(module.parent.parent.filename, '..');

  private readonly commands: Collection<CommandListener['aliases'], CommandListener['listener']> = new Collection();

  readonly categories: Collection<string, string[]> = new Collection();
  readonly descriptions: Collection<string[], string> = new Collection();

  constructor(options: Pick<HandlerOptions, 'client' | 'token' | 'verbose' | 'eventsFolder' | 'commandsFolder'>) {
    Object.assign(this, options);
  }

  /*
   * Login with the provided token using the library
   */
  readonly login = async (): Promise<void> => {
    try {
      await this.client.login(this.token);
    } catch (e) {
      throw red('Invalid token or Discord API down');
    }
  };

  /*
   * Scans folders and their types and does actions with them
   * @param path Full path of the folder that is going to be read
   * @param type Type of the scan we are doing, can be both events or commands
   */
  private readonly scanFolder = async (path: string, type: 'events' | 'commands'): Promise<void> => {
    try {
      if (!(await lstat(path)).isDirectory()) throw red(`The path ${path} is a file. It must be a directory`);

      const files = await readdir(path);

      const categoryRelativePath = path.substring(this.moduleFolder.length + 1);

      if (type === 'commands' && categoryRelativePath !== type) {
        const categoryName = categoryRelativePath.substring((categoryRelativePath.lastIndexOf('\\') || categoryRelativePath.lastIndexOf('/')) + 1);
        const commandNames = files.map(file => file.substring(0, file.lastIndexOf('.')));

        this.categories.set(categoryName, commandNames);
      }

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const newFullPath = join(path, file);

        if ((await lstat(newFullPath)).isDirectory()) {
          await this.scanFolder(newFullPath, type);
          continue;
        }

        if (!file.endsWith('.js') && !file.endsWith('.ts')) continue;

        const fileContent = await import(newFullPath);
        const ListenerClass = fileContent.default || fileContent;

        if (!ListenerClass) continue;

        const importedListener: EventListener | CommandListener = new ListenerClass();
        const { listener } = importedListener;

        if (type === 'events') {
          const { event } = importedListener as EventListener;

          const callback: GenericEvent['listener'] = listener.bind(importedListener, { client: this.client, handler: this });

          this.client.on(event, callback);
          if (this.verbose) console.log(green(`[HANDLER] Event ${event} loaded`));
        } else if (type === 'commands') {
          const { description, aliases: _aliases } = importedListener as CommandListener;
          const aliases = (_aliases as string[]).map(a => a.toLowerCase());

          this.commands.set(aliases, listener);
          if (description) this.descriptions.set(aliases, description);
          if (this.verbose) {
            console.log(green(`[HANDLER] Command [${aliases.join(', ')}] loaded`));
          }
        }
      }
    } catch (e) {
      console.error(e);
    }
  };

  /*
   * Runs the events and commands (if both are called) folders scan
   */
  readonly run = async (loadedCallbacks?: RunCallbacks): Promise<void> => {
    try {
      /*
       * Join absolute folder paths
       */
      const joinFolder = (...folder: string[]): string => join(this.moduleFolder, ...folder);

      /*
       * Run the folder scan and check for an eventual callback after the scan end
       */
      const checkFolderScan = async (type: 'events' | 'commands'): Promise<void> => {
        const folder = type === 'events' ? this.eventsFolder : this.commandsFolder;
        if (!folder) return;

        await this.scanFolder(joinFolder(folder), type);

        if (!loadedCallbacks) return;

        const callback = type === 'events' ? loadedCallbacks.onLoadedEvents : loadedCallbacks.onLoadedCommands;
        const options: GenericUtils = { client: this.client, handler: this };
        if (callback) await callback(options);
      };

      await checkFolderScan('events');
      await checkFolderScan('commands');
    } catch (e) {
      console.error(e);
    }
  };

  /*
   * Searches for commands based on the received message and makes some verifications
   * @param prefix Supposed prefix to be verified in the message
   * @param message Message instance of the message event
   */
  readonly importCommands = async (prefix: string, message: Message): Promise<void> => {
    const args = message.content.split(' ');
    const commandName = args.shift().slice(prefix.length);

    if (!message.content.startsWith(prefix)) return;

    const { client } = this;

    try {
      const commandCallback = this.commands.find((_emittedArgs, aliases) => aliases.includes(commandName.toLowerCase()));

      if (commandCallback) await commandCallback({ commandName, args, prefix, message, client, handler: this });
    } catch (e) {
      console.error(e);
    }
  };
}
