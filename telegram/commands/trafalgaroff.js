const { getSocket } = require("../whatsapp/connection")

const activeUsers = new Set()
let stopProtection = false

exports.run = async (bot, chatId, number) => {

try {

const sock = getSocket()

if (!sock) {

return bot.sendMessage(

chatId,

`╭━━━〔 ❌ TRAFALGAR V2 ❌ 〕━━━⬣
┃
┃ WhatsApp n'est pas connecté.
┃
╰━━━━━━━━━━━━━━━━⬣`

)

}

if (activeUsers.has(number)) {

return bot.sendMessage(

chatId,

`╭━━━〔 ⚠️ SYSTEM ⚠️ 〕━━━⬣
┃
┃ Protection déjà active.
┃
╰━━━━━━━━━━━━━━━━⬣`

)

}

activeUsers.add(number)

await bot.sendMessage(

chatId,

`╭━━━〔 👑 TRAFALGAR V2 👑 〕━━━⬣
┃
┃ ✅ TRAFALGAROFF ACTIVÉ
┃
┃ 🔒 Blocage/Déblocage
┃ toutes les 5 secondes
┃
┃ 🛑 Arrêt : /stop
┃
╰━━━━━━━━━━━━━━━━⬣`

)

while (!stopProtection) {

await sock.updateBlockStatus(
number + "@s.whatsapp.net",
"block"
)

console.log(`Bloqué : ${number}`)

await new Promise(resolve =>
setTimeout(resolve, 5000)
)

await sock.updateBlockStatus(
number + "@s.whatsapp.net",
"unblock"
)

console.log(`Débloqué : ${number}`)

await new Promise(resolve =>
setTimeout(resolve, 5000)
)

}

stopProtection = false

activeUsers.delete(number)

}

catch (err) {

console.log(err)

bot.sendMessage(

chatId,

`╭━━━〔 ❌ ERROR ❌ 〕━━━⬣
┃
┃ Une erreur est survenue.
┃
╰━━━━━━━━━━━━━━━━⬣`

)

}

}
