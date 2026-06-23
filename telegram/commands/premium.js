module.exports = {
    name: "premium",

    run: async (bot, chatId) => {

        await bot.sendMessage(
            chatId,
            `👑 TRAFALGAR V2 PREMIUM

Choisissez une catégorie :

📂 BAN 1
📂 BAN 2
📂 BAN 3

⚡ Premium System`,
            {
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: "📂 BAN 1",
                                callback_data: "ban1"
                            }
                        ],
                        [
                            {
                                text: "📂 BAN 2",
                                callback_data: "ban2"
                            }
                        ],
                        [
                            {
                                text: "📂 BAN 3",
                                callback_data: "ban3"
                            }
                        ],
                        [
                            {
                                text: "⬅️ RETOUR",
                                callback_data: "menu"
                            }
                        ]
                    ]
                }
            }
        );

    }
};
