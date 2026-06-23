module.exports = {
name: "menu",

run: async (bot, chatId) => {

await bot.sendMessage(
chatId,

`╭━━━━━━━━━━━━━━━━━━━━━━╮
        👑 TRAFALGAR V2
╰━━━━━━━━━━━━━━━━━━━━━━╯

⚡ Premium Control Panel

🟢 Status : Online
🚀 Version : 2.0.0
🔒 Security : Active

━━━━━━━━━━━━━━━━━━

⚡ Pair Device
📂 Premium System
📊 Statistics
🌐 Official Website
👤 Official Owner

━━━━━━━━━━━━━━━━━━

💎 TRAFALGAR V2 PREMIUM`,

{
reply_markup: {
inline_keyboard: [

[
{ text: "⚡ PAIR", callback_data: "pair" },
{ text: "📊 STATUS", callback_data: "status" }
],

[
{ text: "📂 PREMIUM", callback_data: "premium" },
{ text: "📈 STATS", callback_data: "stats" }
],

[
{ text: "👤 OWNER", callback_data: "owner" },
{ text: "🌐 SITE", callback_data: "site" }
]

]
}
}

);

}
};
