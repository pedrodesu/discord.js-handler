import { Client } from 'discord.js';

export interface HandlerOptions {
  client: Client;
  token?: string;
  verbose?: boolean;
  eventsFolder?: string;
  commandsFolder?: string;
}
