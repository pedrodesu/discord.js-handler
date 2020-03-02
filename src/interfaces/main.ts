import { Client } from 'discord.js';

import Handler from '../classes/handler';

export interface GenericUtils {
  client?: Client;
  handler?: Handler;
}

export interface HandlerOptions {
  client: Client;
  token?: string;
  verbose?: boolean;
  eventsFolder?: string;
  commandsFolder?: string;
}

export interface RunCallbacks {
  onLoadedEvents?: (utils: GenericUtils) => Promise<void> | void;
  onLoadedCommands?: (utils: GenericUtils) => Promise<void> | void;
}
