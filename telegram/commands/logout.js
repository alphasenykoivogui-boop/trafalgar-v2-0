const { logout } = require("../whatsapp/connection")

exports.run = async (bot, chatId) => {

try {

await logout()

bot.sendMessage(

chatId,

`╭━━〔 👑 TRAFALGAR V2 👑 〕━━╮

🔒 Session WhatsApp supprimée

✅ Déconnexion effectuée

⚡ Toutes les données ont été fermées

╰━━━━━━━━━━━━━━━━━━━━━━╯`

)

}

catch (e) {

console.log(e)

bot.sendMessage(

chatId,

`╭━━〔 ❌ ERROR ❌ 〕━━╮

Impossible de déconnecter la session.

╰━━━━━━━━━━━━━━━━━━━━━━╯`

)

}

}
