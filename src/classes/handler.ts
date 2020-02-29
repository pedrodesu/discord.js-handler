import { promises } from 'fs';
import { join } from 'path';
import { Message, Collection } from 'discord.js';

import { errorLog, successLog } from '../utils/logs';
import EventListener from './eventListener';
import CommandListener from './commandListener';
import { HandlerOptions } from '../interfaces/main';
import { GenericEvent } from '../interfaces/events';

const { lstat, readdir } = promises;

// Define Handler class

export default class Handler {
  // Define its properties
  private readonly client: HandlerOptions['client'];

  private readonly token?: HandlerOptions['token'];
  private readonly verbose?: HandlerOptions['verbose'];

  private readonly eventsFolder?: HandlerOptions['eventsFolder'];
  private readonly commandsFolder?: HandlerOptions['commandsFolder'];

  // Representation of all the available commands
  private readonly commands: Collection<CommandListener['aliases'], CommandListener['listener']> = new Collection();

  constructor({ client, token, verbose, eventsFolder, commandsFolder }: HandlerOptions) {
    this.client = client;
    this.token = token;
    this.verbose = verbose;
    this.eventsFolder = eventsFolder;
    this.commandsFolder = commandsFolder;
  }

  /*
   * Login with the provided token using the library
   */
  readonly login = async (): Promise<void> => {
    try {
      await this.client.login(this.token);
    } catch (e) {
      throw errorLog('Invalid token or Discord API down');
    }
  };

  /*
   * Scans folders and their types and does actions with them
   * @param path Full path of the folder that is going to be read
   * @param type Type of the scan we are doing, can be both events or commands
   */
  private readonly scanFolder = async (path: string, type: 'events' | 'commands'): Promise<void> => {
    try {
      // Checks if given path is a file
      if (!(await lstat(path)).isDirectory()) throw errorLog(`The path ${path} is a file. It must be a directory`);

      // Reads the files inside the directory and loops around each one
      const files = await readdir(path);
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const newFullPath = join(path, file);

        // If the child is a file, proceed with action. Else, run this same function again, which allows recursive and categorized commands and events
        if ((await lstat(newFullPath)).isDirectory()) return await this.scanFolder(newFullPath, type);

        // Ignore the file if it is not a JavaScript or TypeScript file
        if (!file.endsWith('.js') && !file.endsWith('.ts')) return;

        const fileContent = await import(newFullPath);
        const ListenerClass = fileContent || fileContent.default;

        // Ignore the file if we cannot find a valid class (CommandListener or EventListener)
        if (!ListenerClass) return;

        if (type === 'events') {
          // If we are searching for events, treat the export as an event, get its properties and make the client listen for them, with the correct callback
          const eventClass: EventListener = new ListenerClass();
          const callback: GenericEvent['listener'] = eventClass.listener.bind(eventClass, {
            client: this.client,
            handler: this
          });

          this.client.on(eventClass.event, callback);
          if (this.verbose) console.log(successLog(`[HANDLER] Event '${eventClass.event}' loaded`));
        } else if (type === 'commands') {
          // If we are searching for commands, treat the export as a command, get its properties and push them to the command collection
          const commandClass: CommandListener = new ListenerClass();
          const { aliases, listener } = commandClass;

          this.commands.set(typeof aliases === 'string' ? aliases : aliases.map(a => a.toLowerCase()), listener);
          if (this.verbose)
            console.log(successLog(`[HANDLER] Command which aliases are [${typeof aliases === 'string' ? aliases : aliases.join(', ')}] loaded`));
        }
      }
    } catch (e) {
      console.error(e);
    }
  };

  /*
   * Runs the events and commands (if both are called) folders scan
   */
  readonly run = async (): Promise<void> => {
    try {
      // Get full path from the directory from which the function was called, which would equal the main file of the project
      const basePath = module.parent.parent.filename;

      // Make desired actions run
      if (this.eventsFolder) await this.scanFolder(join(basePath, '..', this.eventsFolder), 'events');
      if (this.commandsFolder) await this.scanFolder(join(basePath, '..', this.commandsFolder), 'commands');
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
    // Define initial properties
    const args = message.content.split(' ');
    const commandName = args.shift().slice(prefix.length);

    // Check if the message starts with the correct prefix
    if (!message.content.startsWith(prefix)) return;

    const { client } = this;

    try {
      // Attempt to find the callback from the correct command (if one exists)
      const commandCallback = this.commands.find((_k, v) => v.includes(commandName.toLowerCase()));

      // Run the command with its correct arguments
      if (commandCallback) await commandCallback({ commandName, args, prefix, message, client, handler: this });
    } catch (e) {
      console.error(e);
    }
  };
}
