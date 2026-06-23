const { getSocket } = require("../whatsapp/connection")

exports.run = async (bot, chatId, number) => {

    try {

        const sock = getSocket()

        if (!sock) {

            return bot.sendMessage(
                chatId,
`╔══════════════════════════════╗
║        👑 TRAFALGAR V2       ║
╠══════════════════════════════╣
║ ❌ WHATSAPP NON CONNECTÉ     ║
║                              ║
║ 🔄 Veuillez patienter...     ║
╚══════════════════════════════╝`
            )

        }

        if (!number) {

            return bot.sendMessage(
                chatId,
`╔══════════════════════════════╗
║         📱 UTILISATION       ║
╠══════════════════════════════╣
║ /pair 224XXXXXXXX            ║
╚══════════════════════════════╝`
            )

        }

        const loading = await bot.sendMessage(
            chatId,
`╭━━━━━━━━━━━━━━━━━━━━━━━╮
┃ 👑 TRAFALGAR DEV ┃
╰━━━━━━━━━━━━━━━━━━━━━━━╯

⚡ Connexion aux serveurs...
📡 Synchronisation WhatsApp...
🔐 Génération du Pair Code...
⏳ Veuillez patienter...`
        )

        const code = await sock.requestPairingCode(number)

        await bot.editMessageText(
`╔══════════════════════════════╗
║      👑 TRAFALGAR V2 👑      ║
╠══════════════════════════════╣
║      🔐 PAIRING CODE         ║
╚══════════════════════════════╝

┏━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃  🎟️ ${code}
┗━━━━━━━━━━━━━━━━━━━━━━━━━━┛

📱 NUMÉRO
➜ +${number}

━━━━━━━━━━━━━━━━━━━━━━

🟢 Code généré avec succès
🛡️ Session protégée
⚡ Pair System
🚀 WhatsApp Ready

━━━━━━━━━━━━━━━━━━━━━━

👨‍💻 Developer :
@trafalgar2010dev

🌐 Trafalgar V2`,
            {
                chat_id: chatId,
                message_id: loading.message_id
            }
        )

    } catch (err) {

        console.log(err)

        return bot.sendMessage(
            chatId,
`╔══════════════════════════════╗
║         ❌ ERREUR ❌         ║
╠══════════════════════════════╣
║ Impossible de générer        ║
║ le code de connexion.        ║
╠══════════════════════════════╣
║ ✔ Vérifie le numéro          ║
║ ✔ Vérifie WhatsApp           ║
║ ✔ Réessaie plus tard         ║
╚══════════════════════════════╝`
        )

    }

}
