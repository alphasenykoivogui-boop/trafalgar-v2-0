exports.run = async (bot, chatId) => {

const uptime = process.uptime()

const hours = Math.floor(uptime / 3600)
const minutes = Math.floor((uptime % 3600) / 60)
const seconds = Math.floor(uptime % 60)

const memory =
(Math.round(process.memoryUsage().heapUsed / 1024 / 1024))

bot.sendMessage(

chatId,

`╭━━〔 👑 TRAFALGAR V2 👑 〕━━╮

📊 BOT STATISTICS

⚡ RAM :
${memory} MB

⏳ Uptime :
${hours}h ${minutes}m ${seconds}s

🚀 Version :
2.0 Premium

🟢 Status :
Online

💎 Powered By :
TRAFALGAR D LAW

╰━━━━━━━━━━━━━━━━━━━━━━╯`

)

}
