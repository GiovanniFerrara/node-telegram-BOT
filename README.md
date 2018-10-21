# node-telegram-BOT
###### Create a BOT that responds to messages, created by using Node.js, RiveScript and Telegraf.

### Get started

This app requires [Node.js](https://nodejs.org/) to run.

Install the dependencies and devDependencies and start the server.

```sh
$ git clone https://github.com/GiovanniFerrara/node-telegram-BOT
$ cd node-telegram-BOT
$ npm install
```
The frameworks used are RiveScript and Telegraf:

[RiveScript](https://www.rivescript.com/) is an open source scripting language for chatbots with a friendly syntax. The app uses an interpreter library of RiveScript language that allows the use of it on Node.js.
[Telegraf](https://telegraf.js.org) is a framework to handle the Telegram API very easily.

###### Get the token to use the Telegram API:
Open the app of Telegram and search for BotFather.

Clicking on /token will create the BOT. Once the BOT is named get the token and put it in the file server/config.keys and export it like this:

```
// Token telegram
const token = "12345678abcdefg"
module.exports = {token};
```

Save the token and in the file inside your folder config: NodeBotApp/server/config/keys.js
And run:

```
node server.js
```

If you want to know more read my article where I talk about it, on my [linkedin profile](https://www.linkedin.com/in/giovanni-marco-ferrara-6aa458137/)
