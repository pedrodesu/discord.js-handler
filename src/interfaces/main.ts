import { Client } from 'discord.js';

export interface HandlerOptions {
  client: Client;
  token: string;
  eventsFolder?: string;
  commandsFolder?: string;
  verbose?: boolean;
}
