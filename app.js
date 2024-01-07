require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
const TelegramBot = require("node-telegram-bot-api");
const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });
const startHandler = require("./handlers/start");
const projectsHandler = require("./handlers/projects");
const contactHandler = require("./handlers/contacts");
const jokeHandler = require("./handlers/jokes");
const { defaultReplies } = require("./utils/database");
const html = require("./utils/html");

app.get("/", (req, res) => res.type("html").send(html));

const server = app.listen(port, () => {
  console.log(`jQuerius is running at http:localhost:${port}`);
});

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const userInput = msg.text.toLowerCase();
  // const userId = msg.from.id;

  if (msg.hasOwnProperty("text")) {
    switch (true) {
      case userInput.includes("/start") ||
        /^(hey|hi|hello|hola|bonjour|hallo)$/i.test(userInput):
        startHandler(msg, bot);
        break;

      case userInput.includes("projects") || userInput.includes("your work"):
        projectsHandler(msg, bot);
        break;

      case userInput.includes("contact") || userInput.includes("email"):
        contactHandler(msg, bot);
        break;

      case userInput.includes("joke"):
        jokeHandler(msg, bot);
        break;

      case defaultReplies.some(({ prompt }) =>
        prompt.some((keyword) => userInput.includes(keyword.toLowerCase())),
      ):
        const matchedReply = defaultReplies.find(({ prompt }) =>
          prompt.some((keyword) => userInput.includes(keyword.toLowerCase())),
        );
        bot.sendMessage(chatId, matchedReply.reply);
        break;

      default:
        bot.sendMessage(chatId, "Sorry, I don't understand that.");
    }
  } else if (msg.hasOwnProperty("voice")) {
    bot.sendMessage(
      chatId,
      "Sorry, I can't handle voice messages at the moment.",
    );
  }
});

module.exports = app;
