## discord.js-handler

---

<p align="center">
  <span>Simple yet powerful handler for discord.js.</span>
</p>

<p align="center">
  <a href="https://www.npmjs.org/package/discord.js-handler"><img src="https://img.shields.io/npm/dm/discord.js-handler.svg?color=blue" alt="Downloads"></a>
  <a href="https://www.npmjs.org/package/discord.js-handler"><img src="https://img.shields.io/npm/v/discord.js-handler.svg?color=orange" alt="NPM Version"></a>
  <a href="https://depfu.com/github/hSel3triK/discord.js-handler?project_id=11233"><img src="https://badges.depfu.com/badges/8dde868edf0ec39e974d9688eabbf2c9/overview.svg" alt="Dependencies Update Rate"></a>
  <a href="https://www.codacy.com/manual/hSel3triK/discord.js-handler?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=hSel3triK/discord.js-handler&amp;utm_campaign=Badge_Grade"><img src="https://api.codacy.com/project/badge/Grade/cc7816940cc0458c82aae1054431d011" alt="Code Quality"></a>
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
  commandsFolder: './commands'
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
      }
    });
  }
};
```

### Command example 📡

```js
const { CommandListener } = require('discord.js-handler');

module.exports = class PingCommand extends CommandListener {
  constructor() {
    super({
      aliases: ['ping', 'pong'],
      listener: async ({ client, message }) => {
        try {
          await message.reply(`Pong! :ping_pong: ${Math.round(client.ws.ping)}ms`);
          await message.delete();
        } catch (e) {
          console.error(e);
        }
      }
    });
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

[Report error](https://github.com/hSel3triK/discord.js-handler/issues/new?assignees=&labels=&template=bug_report.md&title=)

[Give suggestion](https://github.com/hSel3triK/discord.js-handler/issues/new?assignees=&labels=&template=feature_request.md&title=)

## License 📝

MIT - [hSel3triK](https://github.com/hSel3triK/)
