"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CommandListener {
    constructor({ aliases, listener }) {
        this.aliases = aliases;
        this.listener = listener;
    }
}
exports.default = CommandListener;
