const TelegramBot = require('node-telegram-bot-api');
require('dotenv').load();
const token = 'YOUR_TOKEN_HERE';
const bot = new TelegramBot(token, {polling: true});

// YOUR CODE STARTS HERE
