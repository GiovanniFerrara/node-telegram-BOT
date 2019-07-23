const Telegraf = require('telegraf');
const bot = require('./modules/bot');
const { token } = require('./config/keys');
const axios = require("axios");
// Instance of Telegraf
const chat = new Telegraf(token);
// Initialize bot
bot.init()


// Recieve a message
chat.start((ctx) => ctx.reply('Hi mate, tell me how can I help you!'))
chat.help((ctx) => ctx.reply('Ask me something'));
chat.on('sticker', (ctx) => ctx.reply('👍'))

chat.hears('Who is the real king?', (ctx) => ctx.reply(`No, the REAL KING is ${ctx.from.first_name + " " + ctx.from.last_name}, my dear lord.`));

// The chat is listening for message
chat.hears(/planet (.+)/i, (ctx) => {
    let user = ctx.from.first_name;
    let query = ctx.message.text.trim();
    try {
        // Get only the info about the planet choosen
        query = query.split("").slice(("planet ").split("").length).join("");
    } catch (err) {
        console.log(err)
    }
    console.log(query)
    axios.get(`https://swapi.co/api/planets/${query}`)
        .then(res => {
            // console.log(res.data)
            if (res.data.population) {
                ctx.reply(`${user}, the planet ${res.data.name} of Star Wars that you've asked for has ${res.data.population} inhabitants.`);
            } else {
                Promise.reject()
            }
        })
        .catch(err => {
            console.log(err)
            ctx.reply(`I haven't found this planet, type something like: "planet" 5`)
        }
        )
})


// On non standard message responds the rivescript bot
chat.on('message', (ctx) => {
    // let user = ctx.from.first_name;
    let message = ctx.message.text.trim();
    bot.ask(message, (reply) => {
        return ctx.reply(reply);
    })
})

// Like app.listen()
chat.startPolling()