module.exports = {

name: "channel",

run: async (bot, chatId) => {

await bot.sendMessage(
chatId,

`👑 TRAFALGAR V2 • OFFICIAL CHANNEL

━━━━━━━━━━━━━━━━━━

📢 Rejoignez notre communauté officielle

⚡ Dernières mises à jour
💎 Contenu Premium
🚀 Nouveaux systèmes
🔥 Annonces exclusives

━━━━━━━━━━━━━━━━━━

🎯 Accès rapide via le bouton ci-dessous.`,

{
reply_markup: {
inline_keyboard: [
[
{
text: "📢 REJOINDRE LE CANAL",
url: "https://t.me/trafalgar2010dev"
}
],
[
{
text: "⬅️ RETOUR AU MENU",
callback_data: "menu"
}
]
]
}
}
);

}

};
