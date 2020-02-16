import { Message } from 'discord.js';
import { HandlerOptions } from '@interfaces/main';
export default class Handler {
    private readonly client;
    private readonly token;
    private readonly verbose;
    private readonly eventsFolder?;
    private readonly commandsFolder?;
    private readonly commands;
    constructor({ client, token, verbose, eventsFolder, commandsFolder }: HandlerOptions);
    readonly login: () => Promise<void>;
    private readonly scanFolder;
    readonly run: () => Promise<void>;
    readonly importCommands: (prefix: string, message: Message) => Promise<void>;
}
