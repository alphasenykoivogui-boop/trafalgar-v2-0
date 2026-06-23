module.exports = {
  name: "menu",

  run: async (bot, chatId) => {

    // VIDÉO INTRO
    await bot.sendVideo(
      chatId,
      "https://files.catbox.moe/dinbtq.mp4", // ← remplace ici
      {
        caption: "👑 TRAFALGAR V2\n\n⚡ Premium System"
      }
    );

    // MENU
    await bot.sendMessage(
      chatId,
      `╔══════════════════╗
       👑 TRAFALGAR V2
╚══════════════════╝

⚡ PREMIUM CONTROL PANEL

🟢 Status : Online
🚀 Version : 2.0.0
🛡 Security : Active

━━━━━━━━━━━━━━

🔐 Pair Device
📂 Premium System
📊 Statistics
🌐 Official Website
👤 Official Owner

━━━━━━━━━━━━━━

💎 TRAFALGAR V2 PREMIUM`,
      {
        reply_markup: {
          inline_keyboard: [
            [
              { text: "🔐 PAIR", callback_data: "pair" },
              { text: "📊 STATS", callback_data: "stats" }
            ],
            [
              { text: "📂 PREMIUM", callback_data: "premium" },
              { text: "📈 STATUS", callback_data: "status" }
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
