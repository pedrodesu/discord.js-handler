import { Collection } from 'discord.js';

import { GenericCommand, CommandCache, CommandProperties, AnyGenericCommandType } from '../declarations/commands';

export default class CommandsCache {
  static readonly commands: CommandCache<'listener'> = new Collection();

  static readonly properties: CommandProperties = {
    descriptions: new Collection(),
    locations: new Collection(),
    permissions: new Collection(),
    cooldowns: new Collection(),
    syntax: new Collection(),
  };

  static readonly categories: Collection<string, GenericCommand['aliases']> = new Collection();

  static readonly findSelfProperty = <T extends AnyGenericCommandType>(
    collection: CommandCache<T>,
    commandName: string
  ): GenericCommand[T] => collection.find((_value, key) => key.includes(commandName));
}
