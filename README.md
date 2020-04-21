## discord.js-handler

---

<p align="center">
  <span>Simple yet powerful handler for discord.js.</span>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/discord.js-handler">
    <img src="https://img.shields.io/npm/dt/discord.js-handler?color=dc143c&style=flat-square" alt="downloads">
  </a>
  <a href="https://www.npmjs.com/package/discord.js-handler">
    <img src="https://img.shields.io/npm/v/discord.js-handler?style=flat-square&color=9400d3" alt="npm version">
  </a>
  <a href="https://www.npmjs.com/package/discord.js-handler">
    <img src="https://img.shields.io/bundlephobia/min/discord.js-handler?style=flat-square&color=ff6347" alt="minified size">
  </a>
  <a href="https://david-dm.org/hSel3triK/discord.js-handler">
    <img src="https://img.shields.io/david/hSel3triK/discord.js-handler?style=flat-square" alt="dependencies update rate">
  </a>
  <a href="https://app.codacy.com/manual/hSel3triK/discord.js-handler/dashboard">
    <img src="https://img.shields.io/codacy/grade/cc7816940cc0458c82aae1054431d011?style=flat-square" alt="code quality">
  </a>
  <a href="https://github.com/hSel3triK/discord.js-handler/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/discord.js-handler?style=flat-square&color=4169e1" alt="license">
  </a>
</p>

---

## Features 📋

- Organized and class-oriented
- CommonJS and EcmaScript friendly
- Typings included
- Categories and recursive events and commands

## Installation 🔥

### npm 🐿️

```
npm install discord.js-handler
```

### Yarn 🧶

```
yarn add discord.js-handler
```

## Usage 🚀

### Activation example ✔️

```js
const { Client } = require('discord.js');
const { Handler } = require('discord.js-handler');

const handler = new Handler({
  client: new Client(),
  token: 'TOKEN',
  eventsFolder: './events',
  commandsFolder: './commands',
});

try {
  handler.login();
  handler.run();
} catch (e) {
  console.error(e);
}
```

### Event example 📡

```js
const { EventListener } = require('discord.js-handler');

module.exports = class MessageEvent extends EventListener {
  constructor() {
    super({
      event: 'message',
      listener: async ({ handler }, message) => {
        try {
          await handler.importCommands('PREFIX', message);

          await message.react('💡');
        } catch (e) {
          console.error(e);
        }
      },
    });
  }
};
```

### Command example 📡

```js
const { CommandListener } = require('discord.js-handler');

module.exports = class PingCommand extends CommandListener {
  constructor() {
    const parameters = {
      aliases: ['ping', 'pong'],
      listener: async ({ client, message }) => {
        try {
          await message.reply(`Pong! :ping_pong: ${Math.round(client.ws.ping)}ms`);
          await message.delete();
        } catch (e) {
          console.error(e);
        }
      },
    };
    super(parameters);
  }
};
```

### Warnings ⚠️

When using commands with the handler, you must specify the commands' folder in the handler settings (`commandsFolder` parameter) **and** have a message event, in which you call the `importCommands` method from the handler instance (`Handler.importCommands()`), otherwise the commands will not be called (As specified in the event example)

This happens because the handler needs a prefix, and it must be defined on the message event, because you could want the prefix to be dynamic (change from guild to guild)

---

Login and token management done by the handler is completely optional. If you prefer doing so, create the client instance and login by yourself using discord.js

## Feedback 👥

If you want to report an error or give a suggestion, please refer to the following links

[Report bug](https://github.com/hSel3triK/discord.js-handler/issues/new?labels=bug&title=Bug)

[Give suggestion](https://github.com/hSel3triK/discord.js-handler/issues/new?labels=enhancement&title=Suggestion)

## License 📝

MIT - [hSel3triK](https://github.com/hSel3triK/)
