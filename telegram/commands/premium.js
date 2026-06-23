module.exports = {
name: "premium",

run: async (bot, chatId) => {

await bot.sendMessage(
chatId,
`📂 SYSTÈME BAN

Choisissez une page :`,
{
reply_markup: {
inline_keyboard: [
[
{ text: "📂 BAN 1", callback_data: "unban1" }
],
[
{ text: "📂 BAN 2", callback_data: "unban2" }
],
[
{ text: "📂 BAN 3", callback_data: "ban3" }
],
[
{ text: "⬅️ RETOUR", callback_data: "menu" }
]
]
}
}
);

}
};}
);

}
};
