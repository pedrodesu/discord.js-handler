# discord.js-handler

[![](https://img.shields.io/npm/dm/discord.js-handler.svg?style=flat)](https://www.npmjs.org/package/discord.js-handler) [![](https://img.shields.io/npm/v/discord.js-handler.svg?style=flat)](https://www.npmjs.org/package/discord.js-handler)

> Simple to use handler for discord.js.

## Installation

### npm

```
npm install discord.js-handler
```

### Yarn

```
yarn add discord.js-handler
```

## Usage & Types

### Activation example

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

### Event example

```js
const { EventListener } = require('discord.js-handler');

module.exports = class MessageEvent extends EventListener {
  constructor() {
    super({
      event: 'message',
      listener: async ({ handler }, message) => {
        try {
          await handler.importCommands('PREFIX', message);

          await message.react('⚡️');
        } catch (e) {
          console.error(e);
        }
      }
    });
  }
};
```

### Command example

```js
const { CommandListener } = require('discord.js-handler');

module.exports = class PingCommand extends CommandListener {
  constructor() {
    super({
      aliases: ['ping', 'pong'],
      listener: async ({ client, message }) => {
        try {
          await message.reply(`Pong! :ping_pong: ${Math.round(client.ping)}ms`);
          await message.delete();
        } catch (e) {
          console.error(e);
        }
      }
    });
  }
};
```

## License

MIT - [hSel3triK](https://github.com/hSel3triK/)
