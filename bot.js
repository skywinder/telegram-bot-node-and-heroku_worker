const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();
const token = process.env.TOKEN;
const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
    l(msg);
    const chatId = msg.chat.id;
    var date = new Date().toLocaleTimeString();

    let web = process.env.ENV_TYPE || "UNDEF_TYPE";
    let str = web + ": " + date + "\nChatId: " + chatId.toString();
    l(str);
    bot.sendMessage(chatId, str).then(r =>
    {
        bot.sendMessage(chatId, s([str , r.message_id, r.from.id, r.chat.id]));
    });
    bot.getMe().then(sucess =>
    {
        bot.sendMessage(chatId, s(sucess.id));
    })

});

function l(obj) {
    obj = JSON.stringify(obj, null, 4); // (Optional) beautiful indented output.
    console.log(obj); // Logs output to dev tools console.
}

function s(obj) {
    return JSON.stringify(obj, null, 4); // (Optional) beautiful indented output
}
