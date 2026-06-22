const { getSocket } = require("../whatsapp/connection")

const activeUsers = new Set()

async function run(bot, chatId, number) {

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

if (!number) {

return bot.sendMessage(

chatId,

`╭━━━〔 ⚠️ NUMBER ⚠️ 〕━━━⬣
┃
┃ Veuillez fournir un numéro.
┃    À bannir🪬
┃ Exemple :
┃ /trafalgaroff 224XXXXXXXX
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
┃ 🛑 Arrêt :
┃ /stop ${number}
┃
╰━━━━━━━━━━━━━━━━⬣`

)

console.log(`Cycle démarré : ${number}`)

while (activeUsers.has(number)) {

await sock.updateBlockStatus(
number + "@s.whatsapp.net",
"block"
)

console.log(`Bloqué : ${number}`)

await new Promise(resolve =>
setTimeout(resolve, 5000)
)

if (!activeUsers.has(number)) break

await sock.updateBlockStatus(
number + "@s.whatsapp.net",
"unblock"
)

console.log(`Débloqué : ${number}`)

await new Promise(resolve =>
setTimeout(resolve, 5000)

)

}

console.log(`Cycle terminé : ${number}`)

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

module.exports = {
run,
activeUsers
}
