const { getSocket } = require("../whatsapp/connection")

exports.run = async (bot, chatId, number) => {

try {

const sock = getSocket()

if (!sock) {

return bot.sendMessage(

chatId,

`╭━━〔 ❌ TRAFALGAR V2 ❌ 〕━━╮

⚠️ WhatsApp n'est pas encore connecté.

🔄 Veuillez patienter...

╰━━━━━━━━━━━━━━━━━━━━━━╯`

)

}

await bot.sendMessage(

chatId,

`╭━━〔 ⏳ GENERATION DU CODE ⏳ 〕━━╮

📱 Numéro :
+${number}

⚡ Préparation du code...

╰━━━━━━━━━━━━━━━━━━━━━━╯`

)

const code = await sock.requestPairingCode(number)

return bot.sendMessage(

chatId,

`╭━━〔 👑 TRAFALGAR V2 🎭 〕━━╮

🔐 CODE DE PAIRING

➜ ${code}

━━━━━━━━━━━━━━━━━━

📱 Numéro :
+${number}

🛡️ Session sécurisée
⚡ Premium Pair System
🚀 Profite bien !

╰━━━━━━━━━━━━━━━━━━━━━━╯`

)

}

catch (e) {

console.log(e)

return bot.sendMessage(

chatId,

`╭━━〔 ❌ ERROR ❌ 〕━━╮

⚠️ Impossible de générer le code.

📌 Vérifie le numéro et réessaie.

╰━━━━━━━━━━━━━━━━━━━━━━╯`

)

}

}��━━━━━━━━━━━━━━━━━━━━━╯`

        )

    }

}
