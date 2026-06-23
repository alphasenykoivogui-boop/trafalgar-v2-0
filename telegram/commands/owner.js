module.exports = {

name: "owner",

run: async (bot, chatId) => {

await bot.sendVideo(
chatId,
"https://files.catbox.moe/zxj9a0.mp4",
{
caption:
`👑 TRAFALGAR V2

⚡ OWNER PROFILE
💎 PREMIUM ACCESS
🚀 VERIFIED DEVELOPER`
}
);

await bot.sendMessage(
chatId,

`━━━━━━━━━━━━━━━━━━━━

👑 DEV TRAFALGAR

⚡ Founder of TRAFALGAR V2
🛡 Premium System Developer
🚀 WhatsApp & Telegram Engineer

━━━━━━━━━━━━━━━━━━━━

📡 CONTACT

➜ @Dev_Trafalgar

━━━━━━━━━━━━━━━━━━━━

🟢 STATUS : ONLINE
💎 ACCESS : ELITE
⚡ SUPPORT : ACTIVE

━━━━━━━━━━━━━━━━━━━━

「 TRAFALGAR V2 PREMIUM 」`
);

}

};
