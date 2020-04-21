import { promises } from 'fs';
import { join } from 'path';
import { Message } from 'discord.js';
import { red, green } from 'chalk';

import EventListener from './listeners/EventListener';
import CommandListener from './listeners/CommandListener';
import { GenericUtils } from '../declarations/main';
import { GenericEvent } from '../declarations/events';
import CommandsCache from './CommandsCache';
import CooldownManager from './CooldownManager';
import FinalizerListener from './listeners/FinalizerListener';
import { CommandCache } from '../declarations/commands';
import { HandlerBase, HandlerOptions } from '../declarations/handler';

const { lstat, readdir } = promises;

export default class Handler extends HandlerBase {
  constructor(options: HandlerOptions) {
    super();
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
   * Runs the events and commands (if both are called) folders scan
   */
  readonly run = async (): Promise<void> => {
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

        const finalizersFolder = await readdir(joinFolder(this.finalizersFolder));
        if (!finalizersFolder || finalizersFolder.length === 0) return;

        const options: GenericUtils = { client: this.client, handler: this, cache: CommandsCache };
        for (let i = 0; i < finalizersFolder.length; i++) {
          const finalizerImport = await import(joinFolder(this.finalizersFolder, finalizersFolder[i]));
          const FinalizerClass = finalizerImport.default || finalizerImport;
          const { listener, type: finalizerType }: FinalizerListener = new FinalizerClass();

          if (type === 'events' && finalizerType === 'event') await listener(options);
          if (type === 'commands' && finalizerType === 'command') await listener(options);
        }
      };

      await checkFolderScan('events');
      await checkFolderScan('commands');
    } catch (e) {
      console.error(e);
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
        const categoryName = categoryRelativePath.substring(
          (categoryRelativePath.lastIndexOf('\\') || categoryRelativePath.lastIndexOf('/')) + 1
        );
        const commandNames = files.map((file) => file.substring(0, file.lastIndexOf('.')));

        CommandsCache.categories.set(categoryName, commandNames);
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
          const { name } = importedListener as EventListener;

          const callbackDefaultParams: GenericUtils = {
            client: this.client,
            handler: this,
            cache: CommandsCache,
          };

          const callback = (listener as GenericEvent['listener']).bind(
            importedListener,
            callbackDefaultParams,
            this.importCommands
          );

          this.client.on(name, callback);

          if (this.verbose) console.log(green(`[HANDLER] Event ${name} loaded`));
        } else if (type === 'commands') {
          const { aliases: _aliases } = importedListener as CommandListener;
          const aliases = (_aliases as string[]).map((a) => a.toLowerCase());

          CommandsCache.commands.set(aliases, listener as CommandListener['listener']);

          // Add property to command cache
          const setToCache = (param: string): void => {
            const value = (importedListener as CommandListener)[param];
            if (value) (CommandsCache.properties[param] as CommandCache<typeof value>).set(aliases, value);
          };

          const props = Object.keys(CommandsCache.properties);
          for (let j = 0; j < props.length; j++) setToCache(props[j]);

          if (this.verbose) console.log(green(`[HANDLER] Command [${aliases.join(', ')}] loaded`));
        }
      }
    } catch (e) {
      console.error(e);
    }
  };

  /*
   * Searches for commands based on the received message and makes some verifications
   * @param prefix Supposed prefix to be verified in the message
   * @param message Message instance of the message event
   */
  private readonly importCommands = async (prefix: string, message: Message): Promise<void> => {
    try {
      const args = message.content.split(' ');
      const commandName = args.shift().slice(prefix.length);
      const compatibleCommandName = commandName.toLowerCase();

      if (!message.content.startsWith(prefix)) return;

      const { client } = this;
      const allArguments = {
        commandName,
        args,
        prefix,
        message,
        client,
        handler: this,
        cache: CommandsCache,
      };
      const genericLikeArguments = { client, handler: this, cache: CommandsCache };

      const {
        properties: { locations, permissions, cooldowns, syntax },
        commands,
        findSelfProperty,
      } = CommandsCache;

      const locationsProp = findSelfProperty(locations, compatibleCommandName);
      if (locationsProp) {
        const { locationType, notLocationCallback } = locationsProp;

        if (locationType === 'dm' && message.channel.type !== 'dm')
          return notLocationCallback(genericLikeArguments, message);
        if (locationType === 'server' && message.channel.type === 'dm')
          return notLocationCallback(genericLikeArguments, message);
      }

      const permissionsProp = findSelfProperty(permissions, compatibleCommandName);
      if (permissionsProp) {
        const { permissionCheck, noPermissionCallback } = permissionsProp;
        if (
          (typeof permissionCheck === 'function' && !(await permissionCheck(allArguments))) ||
          (typeof permissionCheck === 'string' && !message.member.hasPermission(permissionCheck))
        )
          return noPermissionCallback(genericLikeArguments, message);
      }

      const cooldownProp = findSelfProperty(cooldowns, compatibleCommandName);
      if (cooldownProp) {
        const { cooldownIds } = CooldownManager;
        const { cooldownLeftCallback, cooldownTime } = cooldownProp;
        const authorId = message.author.id;

        if (cooldownIds.has(authorId)) return cooldownLeftCallback(genericLikeArguments, message);

        cooldownIds.add(authorId);
        setTimeout(() => cooldownIds.delete(authorId), cooldownTime);
      }

      const syntaxProp = findSelfProperty(syntax, compatibleCommandName);
      let syntaxValidation = false;
      if (syntaxProp) {
        const rawArgs = args.map((arg) => arg.replace(/[^a-z0-9 ]/gi, ''));

        for (let i = 0; i < syntaxProp.length; i++) {
          const syntaxChunk = syntaxProp[i];

          if (args.length < syntaxChunk.filter((c) => c.required !== false).length || args.length > syntaxChunk.length)
            continue;

          let passedArgs = 0;
          for (let j = 0; j < syntaxChunk.length; j++) {
            const { type, onlyMention, required, position } = syntaxChunk[j];
            const [argReference, rawArgReference] = [args[position], rawArgs[position]];

            if (!argReference) {
              if (required === false) continue;
              else break;
            }

            const foundMentionTypes: typeof type = [];

            for (let k = 0; k < type.length; k++) {
              const selectedType = type[k];
              const propName = `${selectedType}s`;
              if (
                (selectedType !== 'plain' && message.guild[propName].cache.has(rawArgReference)) ||
                rawArgReference === argReference
              )
                foundMentionTypes.push(selectedType);
            }

            if (
              !foundMentionTypes.length ||
              (foundMentionTypes.every((mentionType) => !type.includes(mentionType)) && !type.includes('plain')) ||
              (argReference === rawArgReference && onlyMention && !type.includes('plain'))
            )
              break;

            passedArgs += 1;
          }
          if (passedArgs === args.length) syntaxValidation = true;
        }
      }

      if (!syntaxValidation) return;

      const commandCallback = findSelfProperty(commands, compatibleCommandName);

      if (commandCallback) await commandCallback(allArguments);
    } catch (e) {
      console.error(e);
    }
  };
}
