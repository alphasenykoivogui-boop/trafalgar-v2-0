const TelegramBot = require("node-telegram-bot-api");
const fs = require("fs");

const { startWhatsApp } = require("./telegram/whatsapp/connection");

const menu = require("./telegram/commands/menu");
const owner = require("./telegram/commands/owner");
const site = require("./telegram/commands/site");
const pair = require("./telegram/commands/pair");
const premium = require("./telegram/commands/premium");
const status = require("./telegram/commands/status");
const logout = require("./telegram/commands/logout");
const stats = require("./telegram/commands/stats");
const broadcast = require("./telegram/commands/broadcast");
const trafalgaroff = require("./telegram/commands/trafalgaroff");
const stop = require("./telegram/commands/stop");

const TOKEN = process.env.BOT_TOKEN;

if (!TOKEN) {
    console.log("8721224684:AAHessSC-Z_Cqh90omGyphZyni4VEizhGYc");
    process.exit(1);
}

const bot = new TelegramBot(TOKEN, {
    polling: true
});

startWhatsApp();

bot.onText(/\/start/, async (msg) => {

    const chatId = msg.chat.id;

    if (fs.existsSync("./assets/banner.jpg")) {

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

    } else {

        await bot.sendMessage(
            chatId,
`👑 TRAFALGAR V2

⚡ PREMIUM SYSTEM

📢 @trafalgar2010dev
🌐 dev-trafalgar-d-law.netlify.app`
        );

    }

    menu.run(bot, chatId);

});

bot.onText(/\/status/, (msg) => {
    status.run(bot, msg.chat.id);
});

bot.onText(/\/logout/, (msg) => {
    logout.run(bot, msg.chat.id);
});

bot.onText(/\/pair (.+)/, (msg, match) => {

    const number = match[1].replace(/[^0-9]/g, "");

    pair.run(
        bot,
        msg.chat.id,
        number
    );

});

bot.onText(/\/stats/, (msg) => {
    stats.run(bot, msg.chat.id);
});

bot.onText(/\/broadcast (.+)/, (msg, match) => {

    const text = match[1];

    broadcast.run(
        bot,
        msg.chat.id,
        text
    );

});

bot.onText(/\/trafalgaroff (.+)/, (msg, match) => {

    const number = match[1].replace(/[^0-9]/g, "");

    trafalgaroff.run(
        bot,
        msg.chat.id,
        number
    );

});

bot.onText(/\/stop (.+)/, (msg, match) => {

    const number = match[1].replace(/[^0-9]/g, "");

    stop.run(
        bot,
        msg.chat.id,
        number
    );

});

bot.on("callback_query", async (query) => {

    const chatId = query.message.chat.id;

    switch (query.data) {

        case "pair":

            bot.sendMessage(
                chatId,
`👑 TRAFALGAR V2

📱 Utilisation :

/pair 224XXXXXXXX

Exemple :

/pair 224620503751

⚡ Génère un code WhatsApp sécurisé.`
            );

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
