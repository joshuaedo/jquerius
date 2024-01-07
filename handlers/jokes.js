const { fetchJoke } = require("../utils/lib.js");

async function handleJokes(msg, bot) {
  const chatId = msg.chat.id;
  const joke = await fetchJoke();
  bot.sendMessage(chatId, joke);
}

module.exports = handleJokes;
