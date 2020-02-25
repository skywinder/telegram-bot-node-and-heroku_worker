const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();
const token = process.env.TOKEN
console.log(token)
const bot = new TelegramBot(token, {polling: true});

// YOUR CODE STARTS HERE
