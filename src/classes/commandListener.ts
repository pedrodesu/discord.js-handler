import { Command } from '../interfaces/commands';

// Define CommandListener class
export default class CommandListener {
  // Define its properties
  readonly aliases: Command['aliases'];
  readonly listener: Command['listener'];

  constructor({ aliases, listener }: Command) {
    this.aliases = aliases;
    this.listener = listener;
  }
}
