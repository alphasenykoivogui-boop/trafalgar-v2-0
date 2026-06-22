const { activeUsers } = require("./trafalgaroff")

exports.run = async (bot, chatId, number) => {

try {

if (!activeUsers.has(number)) {

return bot.sendMessage(

chatId,

`╭━━━〔 ⚠️ SYSTEM ⚠️ 〕━━━⬣
┃
┃ ❌ Aucune protection active.
┃
╰━━━━━━━━━━━━━━━━⬣`

)

}

activeUsers.delete(number)

bot.sendMessage(

chatId,

`╭━━━〔 🛑 SYSTEM OFF 🛑 〕━━━⬣
┃
┃ ✅ TRAFALGAROFF ARRÊTÉ
┃
┃ ⚡ Protection désactivée
┃
┃ 🔓 Cycle terminé
┃
╰━━━━━━━━━━━━━━━━⬣`

)

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
