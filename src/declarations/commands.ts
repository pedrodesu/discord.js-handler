import { Message, Collection, PermissionResolvable } from 'discord.js';

import { CallbackType, GenericUtils } from './main';

interface CommandArguments extends GenericUtils {
  commandName: string;
  args: string[];
  prefix: string;
  message: Message;
}

type MessageEvent = (utils: GenericUtils, message: Message) => CallbackType;

interface Locations {
  locationType: 'server' | 'dm' | 'both';
  notLocationCallback: MessageEvent;
}

interface Permissions {
  permissionCheck: (emittedArguments: CommandArguments) => CallbackType<boolean> | PermissionResolvable;
  noPermissionCallback: MessageEvent;
}

interface Cooldowns {
  cooldownTime: number;
  cooldownLeftCallback: MessageEvent;
}

interface SyntaxInfo {
  type: ('channel' | 'role' | 'member' | 'plain')[];
  onlyMention?: boolean;
  required?: boolean;
  position: number;
}

export abstract class GenericCommand {
  aliases: string[];
  description?: string;
  locations?: Locations;
  permissions?: Permissions;
  cooldowns?: Cooldowns;
  syntax: SyntaxInfo[][];
  abstract listener: (emittedArguments: CommandArguments) => CallbackType;
}

export type AnyGenericCommandType =
  | 'aliases'
  | 'cooldowns'
  | 'description'
  | 'listener'
  | 'locations'
  | 'permissions'
  | 'syntax';

export type CommandCache<T extends AnyGenericCommandType> = Collection<GenericCommand['aliases'], GenericCommand[T]>;

export interface CommandProperties {
  descriptions: CommandCache<'description'>;
  locations: CommandCache<'locations'>;
  permissions: CommandCache<'permissions'>;
  cooldowns: CommandCache<'cooldowns'>;
  syntax: CommandCache<'syntax'>;
}
