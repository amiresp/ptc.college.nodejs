
const TelegramBot = require('telegram-bot-api.js').default,
    Token = '417941177:AAH9Iq_vGCE4Z1if53wGg3ZFKmYHL_kywLU',

    bot = new TelegramBot(Token, { autoUpdate: true });


bot.on('update.message.text', async (msg) => {
    console.log(msg);
    if (msg.text === '/start') {
        await bot.sendMessage({
            reply_to_message_id: msg.message_id,
            chat_id: msg.chat.id,
            text: `Hi
command line is :
send any massage For get chat id
/stop for stop bot`,
        })
    } else {
        await bot.sendMessage({
            reply_to_message_id: msg.message_id,
            chat_id: msg.chat.id,
            text: `Your chat id is :
            ${msg.chat.id}`,
        });
    };
})

