const TelegramBot = require("node-telegram-bot-api");
const fs = require("fs");

const { startWhatsApp } = require("./whatsapp/connection");

const menu = require("./commands/menu");
const owner = require("./commands/owner");
const site = require("./commands/site");
const premium = require("./commands/premium");
const pair = require("./commands/pair");
const status = require("./commands/status");
const logout = require("./commands/logout");
const stats = require("./commands/stats");
const broadcast = require("./commands/broadcast");
const trafalgaroff = require("./commands/trafalgaroff");
const stop = require("./commands/stop");

const TOKEN = process.env.BOT_TOKEN;

const bot = new TelegramBot(TOKEN, {
    polling: true
});

startWhatsApp();

// START
bot.onText(/\/start/, async (msg) => {

    const chatId = msg.chat.id;

    await bot.sendPhoto(
        chatId,
        "./assets/banner.jpg",
        {
            caption:
`👑 TRAFALGAR V2

⚡ PREMIUM SYSTEM

📢 @trafalgar2010dev
🌐 dev-trafalgar-d-law.netlify.app`
        }
    );

    menu.run(bot, chatId);

});

// STATUS
bot.onText(/\/status/, (msg) => {

    status.run(bot, msg.chat.id);

});

// LOGOUT
bot.onText(/\/logout/, (msg) => {

    logout.run(bot, msg.chat.id);

});

// PAIR
bot.onText(/\/pair (.+)/, (msg, match) => {

    const number = match[1].replace(/[^0-9]/g, "");

    pair.run(
        bot,
        msg.chat.id,
        number
    );

});

// STATS
bot.onText(/\/stats/, (msg) => {

    stats.run(bot, msg.chat.id);

});

// BROADCAST
bot.onText(/\/broadcast (.+)/, (msg, match) => {

    const text = match[1];

    broadcast.run(
        bot,
        msg.chat.id,
        text
    );

});

// TRAFALGAROFF
bot.onText(/\/trafalgaroff (.+)/, (msg, match) => {

    const number = match[1];

    trafalgaroff.run(
        bot,
        msg.chat.id,
        number
    );

});

// STOP
bot.onText(/\/stop (.+)/, (msg, match) => {

    const number = match[1];

    stop.run(
        bot,
        msg.chat.id,
        number
    );

});

// CALLBACK BUTTONS
bot.on("callback_query", async (query) => {

    const chatId = query.message.chat.id;

    switch (query.data) {

        case "pair":
            pair.run(bot, chatId);
            break;

        case "trafalgaroff":
            trafalgaroff.run(bot, chatId);
            break;

        case "owner":
            owner.run(bot, chatId);
            break;

        case "site":
            site.run(bot, chatId);
            break;

        case "premium":
            premium.run(bot, chatId);
            break;

        case "menu":
            menu.run(bot, chatId);
            break;

        case "ban1":
            bot.sendMessage(
                chatId,
                fs.readFileSync("./ban1.txt", "utf8")
            );
            break;

        case "ban2":
            bot.sendMessage(
                chatId,
                fs.readFileSync("./ban2.txt", "utf8")
            );
            break;

        case "ban3":
            bot.sendMessage(
                chatId,
                fs.readFileSync("./ban3.txt", "utf8")
            );
            break;
    }

    bot.answerCallbackQuery(query.id);

});

console.log("👑 TRAFALGAR V2 ONLINE 🚀");
