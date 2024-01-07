const { projectsKeyboard } = require("../utils/keyboards");

function handleProjects(msg, bot) {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, "My last 10 noteworthy projects:", {
    reply_markup: {
      inline_keyboard: projectsKeyboard,
    },
  });
}

module.exports = handleProjects;
