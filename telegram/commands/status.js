const {
isConnected,
getUser
} = require("../whatsapp/connection")

exports.run = async (bot, chatId) => {

try {

if (!isConnected()) {

return bot.sendMessage(

chatId,

`╭━━〔 ❌ TRAFALGAR V2 ❌ 〕━━╮

🔴 Statut : Déconnecté

⚠️ Aucun compte WhatsApp connecté.

╰━━━━━━━━━━━━━━━━━━━━━━╯`

)

}

const user = getUser()

const number =
user.id.split(":")[0]

const name =
user.name || "Inconnu"

bot.sendMessage(

chatId,

`╭━━〔 👑 TRAFALGAR V2 👑 〕━━╮

🟢 Statut : CONNECTÉ

📱 Numéro :
+${number}

👤 Nom :
${name}

⚡ Mode :
Premium System

🚀 Serveur :
Online

🔒 Session :
Active

╰━━━━━━━━━━━━━━━━━━━━━━╯`

)

}

catch (e) {

console.log(e)

bot.sendMessage(

chatId,

`╭━━〔 ❌ ERROR ❌ 〕━━╮

Impossible d'obtenir le statut.

╰━━━━━━━━━━━━━━━━━━━━━━╯`

)

}

}
