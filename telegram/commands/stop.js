const { activeUsers } = require("./trafalgaroff")

exports.run = async (bot, chatId, number) => {

try {

if (!number) {

return bot.sendMessage(

chatId,

`╭━━━〔 ⚠️ NUMBER ⚠️ 〕━━━⬣
┃
┃ Exemple :
┃ /stop 224XXXXXXXX
┃
╰━━━━━━━━━━━━━━━━⬣`

)

}

if (!activeUsers.has(number)) {

return bot.sendMessage(

chatId,

`╭━━━〔 ⚠️ SYSTEM ⚠️ 〕━━━⬣
┃
┃ Aucune protection active.
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
┃ Numéro :
┃ ${number}
┃
╰━━━━━━━━━━━━━━━━⬣`

)

}

catch (err) {

console.log(err)

}

}
