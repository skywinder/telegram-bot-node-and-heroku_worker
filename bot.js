const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();
const token = process.env.TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
    l(msg);
    const chatId = msg.chat.id;
    var d = new Date().toLocaleTimeString();
    l("WEB: " + d);
    bot.sendMessage(chatId, d);
});

function l(obj) {
    // obj = JSON.stringify(obj, null, 4); // (Optional) beautiful indented output.
    console.log(obj); // Logs output to dev tools console.
}
