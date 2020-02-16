import { Command } from '@interfaces/commands';
export default class CommandListener {
    readonly aliases: Command['aliases'];
    readonly listener: Command['listener'];
    constructor({ aliases, listener }: Command);
}
