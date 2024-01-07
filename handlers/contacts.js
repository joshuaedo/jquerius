const { contactsKeyboard } = require("../utils/keyboards");

function handleContacts(msg, bot) {
  const chatId = msg.chat.id;

  bot.sendMessage(
    chatId,
    "Send me an e-mail at joshua.edo01@gmail.com. You can also contact me on any of these platforms:",
    {
      reply_markup: {
        inline_keyboard: contactsKeyboard,
      },
    },
  );
}

module.exports = handleContacts;
