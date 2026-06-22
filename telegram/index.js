import { Telegraf } from "telegraf";

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(async (ctx) => {

await ctx.replyWithVideo(
{
source: "./videos/start.mp4"
},
{
caption: `
╭━━━〔 👑 TRAFALGAR V2 👑 〕━━━⬣
┃
┃ ⚡ BIENVENUE
┃ 🚀 BOT PREMIUM ONLINE
┃
┃ 📖 Utilise /help
┃ pour voir les commandes
┃
╰━━━━━━━━━━━━━━━━⬣`
}
);

});

bot.command("help", async (ctx) => {

await ctx.reply(`
╭━━━〔 📖 COMMANDES 📖 〕━━━⬣
┃
┃ 👑 /premium
┃ 📊 /status
┃ 👤 /owner
┃ ⚖️ /trafalgaroff
┃ 🛑 /stop
┃
╰━━━━━━━━━━━━━━━━⬣`
);

});

bot.command("status", async (ctx) => {

await ctx.reply(
"🟢 TRAFALGAR V2 ONLINE 🚀"
);

});

bot.command("owner", async (ctx) => {

await ctx.reply(
"👑 Owner : @Dev_Trafalgar"
);

});

bot.command("premium", async (ctx) => {

await ctx.reply(
"⭐ Version Premium active."
);

});

bot.command("trafalgaroff", async (ctx) => {

await ctx.replyWithVideo(
{
source: "./videos/trafalgaroff.mp4"
},
{
caption: `
╭━━━〔 ⚖️ TRAFALGAROFF ⚖️ 〕━━━⬣
┃
┃ 🔒 Protection ON
┃
┃ 🛑 Arrêt :
┃ ➜ /stop
┃
╰━━━━━━━━━━━━━━━━⬣`
}
);

});

bot.launch();

console.log("👑 TRAFALGAR V2 ONLINE 🚀");
