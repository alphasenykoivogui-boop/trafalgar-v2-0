const fs = require("fs")

exports.run = async (bot, chatId, text) => {

try {

if (!fs.existsSync("./users.json")) {

return bot.sendMessage(
chatId,
"❌ Aucun utilisateur enregistré."
)

}

const users = JSON.parse(
fs.readFileSync("./users.json")
)

let success = 0
let failed = 0

for (const user of users) {

try {

await bot.sendMessage(

user,

`╭━━〔 📢 TRAFALGAR V2 📢 〕━━╮

${text}

━━━━━━━━━━━━━━━━━━

🚀 Powered By TRAFALGAR D LAW

╰━━━━━━━━━━━━━━━━━━━━━━╯`

)

success++

}

catch {

failed++

}

}

bot.sendMessage(

chatId,

`╭━━〔 👑 BROADCAST 👑 〕━━╮

✅ Envoyés : ${success}

❌ Échecs : ${failed}

╰━━━━━━━━━━━━━━━━━━━━━━╯`

)

}

catch (e) {

console.log(e)

}

}
