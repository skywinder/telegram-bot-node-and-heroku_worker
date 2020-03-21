const {l, s} = require("./utils");

const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();
const token = process.env.TOKEN;
const bot = new TelegramBot(token, {polling: true});
let SKY_ID = 84380711;
let web = process.env.ENV_TYPE || "UNDEF_TYPE";

init_msg(SKY_ID);

function init_msg(chatId) {
    let date = new Date().toLocaleTimeString();
    let str = `${web}: ${date}\nChatId: ${chatId.toString()}`;

    bot.sendMessage(chatId, str)
}

bot.on('message', (msg) => {
    l(msg);
    const chatId = msg.chat.id;
    let date = new Date().toLocaleTimeString();
    let str = `${web}: ${date}\n ChatId: ${chatId.toString()}`;
    l(str);
    bot.sendMessage(chatId, str).then(r => {
        bot.sendMessage(chatId, s([str, r.message_id, r.from.id, r.chat.id]));
    }).catch(err => {
        console.warn(err.message);
    })

    // bot.getMe().then(success =>
    // {
    //     bot.sendMessage(chatId, s(success));
    // })

});