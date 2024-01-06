require("dotenv").config();
const express = require("express");
const fetch = require("node-fetch")
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`server is running at http:localhost:${port}`);
});

const about_me = "Tell me about Joshua Edo";
const about_gpt = "Who are You?";
const projects = "Show me his best work.";
const website = "Where can I see more?";
const contact = "How can I contact Josh?";
const jokes = "Tell me a Joke.";

const start_keyboard = [
  [about_gpt, about_me],
  [projects, website],
  [contact, jokes],
];

const contact_keyboard = [
  [
    {
      text: "X",
      url: "https://x.com/j0shuaedo",
    },
    {
      text: "LinkedIn",
      url: "https://www.linkedin.com/in/joshuaedo",
    },
  ],
];

const my_bio = `Joshua Edo is an experienced Software Developer specialized in building web apps with great functionality, user-friendly interfaces, and strong SEO; leveraging technologies like NextJS, Tailwind, and Typescript. Recent projects include revamping Sandra Okpara's blog and contributing to the Zuri Portfolio during an impactful HNGX internship. In his free time, Josh enjoys chess and football, passionately supporting Chelsea, his favorite club, despite its current challenges.
`;

const gpt_bio = `
I am a Telegram Bot created by Joshua Edo.
`;

const TelegramBot = require("node-telegram-bot-api");
const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

async function fetchJoke() {
  const response = await fetch("http://icanhazdadjoke.com", {
    headers: {
      Accept: "application/json",
    },
  });
  const data = await response.json();
  return data.joke;
}

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const userInput = msg.text;
  // const userId = msg.from.id;

  if (msg.hasOwnProperty("text")) {
    switch (userInput) {
      case "/start":
        bot.sendMessage(chatId, "Hey there!", {
          reply_markup: {
            keyboard: start_keyboard,
          },
        });
        break;

      case "/help":
        bot.sendMessage(chatId, "Need Help? try one of these commands.", {
          reply_markup: {
            keyboard: start_keyboard,
          },
        });
        break;

      case about_me:
        bot.sendMessage(chatId, my_bio);
        break;

      case about_gpt:
        bot.sendMessage(chatId, gpt_bio);
        break;

      case projects:
        bot.sendPhoto(
          chatId,
          "https://joshuaedo.sirv.com/joshuaedo/public/images/webp/projects/z.webp",
          {
            caption:
              "Z - A community-oriented social network inspired by Reddit and Twitter. \nLive Build:  https://z.joshuaedo.com.",
          },
        );
        bot.sendPhoto(
          chatId,
          "https://joshuaedo.sirv.com/joshuaedo/public/images/webp/projects/sandra.webp",
          {
            caption:
              "Sandra - This blog is a canvas for Sandra Okpara's diverse range of interests. \nLive Build: https://sandraokpara.com.",
          },
        );
        // bot.sendPhoto(
        //   chatId,
        //   "https://joshuaedo.sirv.com/stanq/molecule-purple.png",
        //   {
        //     caption:
        //       "Stanq - Stanq is an opinionated collection of libraries, components, hooks, and utilities for your Next.js project. \nLive Build: https://stanq.joshuaedo.com",
        //     width: 100,
        //     height: 100,
        //   },
        // );
        break;

      case website:
        bot.sendMessage(chatId, "Visit his website => https://joshuaedo.com.");
        break;

      case contact:
        bot.sendMessage(
          chatId,
          "Send him an e-mail at joshua.edo01@gmail.com. Alternatively, you can reach him on any of these platforms:",
          {
            reply_markup: {
              inline_keyboard: contact_keyboard,
            },
          },
        );
        break;

      case jokes:
        const joke = await fetchJoke();
        bot.sendMessage(chatId, joke);
        break;

      default:
        if (/^(hey|hi|hello|hola|bonjour)$/i.test(userInput)) {
          bot.sendMessage(chatId, "Ask me anything");
          bot.sendMessage(
            chatId,
            "Alternatively, you can click on any of the buttons that replaced your keyboard",
            {
              reply_markup: {
                keyboard: start_keyboard,
              },
            },
          );
        } else if (userInput.toString().toLowerCase().includes("bye")) {
          bot.sendMessage(chatId, "Hope to see you around again, Bye!");
        } else {
          bot.sendMessage(
            chatId,
            "Sorry, I'm currently unable to connect to OpenAI servers and so I can't understand that. Try using the /start command to see what I can do or come back later.",
          );
        }
    }
  } else if (msg.hasOwnProperty("voice")) {
    bot.sendMessage(
      chatId,
      "Sorry, I can't handle voice messages at the moment.",
    );
  }
});

