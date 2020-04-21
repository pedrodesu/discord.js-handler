import { Client } from 'discord.js';

import Handler from '../structures/Handler';
import CommandsCache from '../structures/CommandsCache';

export type CallbackType<T = void> = Promise<T> | T;

export interface GenericUtils {
  client: Client;
  handler: Handler;
  cache: CommandsCache;
}
