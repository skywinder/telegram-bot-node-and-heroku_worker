const {l, s} = require("./utils");

require('dotenv').config();
const token = process.env.TOKEN;
let SKY_ID = 84380711;

const Telegraf = require('telegraf')

const bot = new Telegraf(token)
bot.start((ctx) => ctx.reply('Welcome!'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))

// Naive authorization middleware
bot.use((ctx, next) => {
    ctx.state.role = getUserRole(ctx.message)
    return next()
})

function getUserRole(msg){
   return "@" + msg.from.username
}
//
// bot.on('text', (ctx) => {
//     return ctx.reply(`Hello ${ctx.state.role}`)
// })


let web = process.env.ENV_TYPE || "UNDEF_TYPE";

init_msg(SKY_ID);

function init_msg(chatId) {
    let date = new Date().toLocaleTimeString();
    let str = `${web}: ${date}\nChatId: ${chatId.toString()}`;

    bot.telegram.sendMessage(chatId, str)
}

bot.on('text', (msg) => {
    l(msg);
    const chatId = msg.chat.id;
    let date = new Date().toLocaleTimeString();
    let str = `${web}: ${date}\n ChatId: ${chatId.toString()}`;
    l(str);
    bot.telegram.sendMessage(chatId, str).then(r => {
        bot.telegram.sendMessage(chatId, s([str, r.message_id, r.from.id, r.chat.id]));
    }).catch(err => {
        console.warn(err.message);
    })
})

bot.launch()
