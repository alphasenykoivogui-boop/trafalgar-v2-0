const TelegramBot = require("node-telegram-bot-api");
const fs = require("fs");

const {
startWhatsApp
} = require("./whatsapp/connection")
const menu = require("./commands/menu");
const owner = require("./commands/owner");
const site = require("./commands/site");
const premium = require("./commands/premium");
const pair = require("./commands/pair");
const trafalgaroff = require("./commands/trafalgaroff");
const status = require("./commands/status")
const logout = require("./commands/logout")
const stats = require("./commands/stats")
const broadcast = require("./commands/broadcast")

const TOKEN = "8721224684:AAHessSC-Z_Cqh90omGyphZyni4VEizhGYc";

const bot = new TelegramBot(TOKEN, {
    polling: true
});

startWhatsApp()

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

bot.onText(/\/status/, async (msg) => {

status.run(bot, msg.chat.id)

})

bot.onText(/\/logout/, async (msg) => {

logout.run(bot, msg.chat.id)

})

bot.onText(/\/pair (.+)/, async (msg, match) => {

const number = match[1]

pair.run(

bot,
msg.chat.id,
number.replace(/[^0-9]/g, "")

)

})

bot.onText(/\/stats/, async (msg) => {

stats.run(
bot,
msg.chat.id
)

})

bot.onText(/\/broadcast (.+)/, async (msg, match) => {

const text = match[1]

broadcast.run(
bot,
msg.chat.id,
text
)

})

bot.onText(/\/trafalgaroff/, async (msg) => {
trafalgaroff.run(bot, msg.chat.id);
});

bot.on("callback_query", async (query) => {

const chatId = query.message.chat.id;

if(query.data === "pair") {
return pair.run(bot, chatId);
}

if(query.data === "trafalgaroff") {
return trafalgaroff.run(bot, chatId);
}

if(query.data === "owner") {
return owner.run(bot, chatId);
}

if(query.data === "site") {
return site.run(bot, chatId);
}

if(query.data === "premium") {
return premium.run(bot, chatId);
}

if(query.data === "ban1") {

let text = fs.readFileSync("./ban1.txt","utf8");

return bot.sendMessage(chatId, text);
}

if(query.data === "ban2") {

let text = fs.readFileSync("./ban2.txt","utf8");

return bot.sendMessage(chatId, text);
}

if(query.data === "ban3") {

let text = fs.readFileSync("./ban3.txt","utf8");

return bot.sendMessage(chatId, text);
}

if(query.data === "menu") {
return menu.run(bot, chatId);
}

});tId);
}

});
