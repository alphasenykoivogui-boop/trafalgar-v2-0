module.exports = {
name: "menu",

run: async (bot, chatId) => {

await bot.sendMessage(chatId,

`👑 TRAFALGAR V2

━━━━━━━━━━━━━━

👤 OWNER
🌐 SITE
📢 CHAÎNE
📂 BAN

━━━━━━━━━━━━━━

⚡ PREMIUM SYSTEM`,
{
reply_markup: {
inline_keyboard: [
[
{ text: "👤 OWNER", callback_data: "owner" }
],
[
{ text: "🌐 SITE", callback_data: "site" }
],
[
{ text: "📂 BAN", callback_data: "premium" }
]
]
}
}
);

}
};}
};
