const { startKeyboard } = require("../utils/keyboards");

function handleStart(msg, bot) {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "Hey there!", {
    reply_markup: { keyboard: startKeyboard },
  });
}

module.exports = handleStart;
