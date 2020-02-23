import { Message, Client } from 'discord.js';

import Handler from '../classes/handler';

export interface CommandArguments {
  commandName: string;
  args: string[];
  prefix: string;
  message: Message;
  client: Client;
  handler: Handler;
}

export interface Command {
  aliases: string[];
  listener: (emittedArguments: CommandArguments) => Promise<void> | void;
}
