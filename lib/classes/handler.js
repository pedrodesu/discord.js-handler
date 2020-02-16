"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const discord_js_1 = require("discord.js");
const logs_1 = require("utils/logs");
const { lstat, readdir } = fs_1.promises;
class Handler {
    constructor({ client, token, verbose, eventsFolder, commandsFolder }) {
        this.commands = new discord_js_1.Collection();
        this.login = async () => {
            try {
                await this.client.login(this.token);
            }
            catch (e) {
                throw logs_1.errorLog('Invalid token or Discord API down');
            }
        };
        this.scanFolder = async (path, type) => {
            try {
                if (!(await lstat(path)).isDirectory())
                    throw logs_1.errorLog(`The path ${path} is a file. It must be a directory`);
                const files = await readdir(path);
                for (let i = 0; i < files.length; i += 1) {
                    const file = files[i];
                    const newFullPath = path_1.join(path, file);
                    if (!(await lstat(newFullPath)).isDirectory()) {
                        const ListenerClass = (await Promise.resolve().then(() => require(newFullPath))).default;
                        if (ListenerClass) {
                            if (type === 'events') {
                                const eventClass = new ListenerClass();
                                const callback = eventClass.listener.bind(eventClass, { client: this.client, handler: this });
                                this.client.on(eventClass.event, callback);
                                if (this.verbose)
                                    console.log(logs_1.successLog(`[HANDLER] Event '${eventClass.event}' loaded`));
                            }
                            else if (type === 'commands') {
                                const commandClass = new ListenerClass();
                                const { aliases } = commandClass;
                                const callback = commandClass.listener;
                                this.commands.set(aliases, callback);
                                if (this.verbose)
                                    console.log(logs_1.successLog(`[HANDLER] Command which aliases are [${aliases.join(', ')}] loaded`));
                            }
                        }
                    }
                    else {
                        this.scanFolder(newFullPath, type);
                    }
                }
            }
            catch (e) {
                console.error(e);
            }
        };
        this.run = async () => {
            try {
                const basePath = module.parent.filename;
                if (this.eventsFolder)
                    await this.scanFolder(path_1.join(basePath, '..', this.eventsFolder), 'events');
                if (this.commandsFolder)
                    await this.scanFolder(path_1.join(basePath, '..', this.commandsFolder), 'commands');
            }
            catch (e) {
                console.error(e);
            }
        };
        this.importCommands = async (prefix, message) => {
            const args = message.content.split(' ');
            const commandName = args.shift().slice(prefix.length);
            if (!message.content.startsWith(prefix))
                return;
            const { client } = this;
            try {
                const commandCallback = this.commands.find((_k, v) => v.includes(commandName));
                if (commandCallback)
                    await commandCallback({ commandName, args, prefix, message, client, handler: this });
            }
            catch (e) {
                console.error(e);
            }
        };
        this.client = client;
        this.token = token;
        this.verbose = verbose;
        this.eventsFolder = eventsFolder;
        this.commandsFolder = commandsFolder;
    }
}
exports.default = Handler;
