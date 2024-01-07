const projects = [
  {
    title: "Sandra",
    href: "https://sandraokpara.com",
    description: "Sandra Okpara's personal website.",
  },
  {
    title: "Z",
    tech: "Typescript, NextJs, Prisma, Next-Auth, React-Query, Upload-Thing, Tailwind",
    href: "https://z.joshuaedo.com",
    description: "A community-oriented social network.",
  },
  {
    title: "Galleria",
    tech: "Typescript, NextJs, Pexels API, Next-Auth, React-Query, DND-Kit, Tailwind",
    href: "https://galleria.joshuaedo.com",
    description: "An interactive stock image gallery.",
  },
  {
    title: "Spotify",
    href: "https://joshuaedo-spotify.vercel.app/",
    description: "A recreation of the Spotify web app.",
  },
  {
    title: "Prime",
    tech: "NextJs, Stripe, Firebase & Firestore, Redux, Tailwind",
    href: "https://joshuaedo-prime.vercel.app/",
    year: 2023,
    description: "An E-commerce app.",
  },
  {
    title: "Blog",
    href: "https://blog.joshuaedo.com/",
    description: "My personal blog.",
  },
  {
    title: "Google",
    href: "https://joshuaedo-google.vercel.app/",
    description: "It's basically google.com but not quite.",
  },
  {
    title: "Apple",
    href: "https://joshuaedo-apple.vercel.app/",
    description: "Apple's landing page.",
  },
  {
    title: "Portfolio V3",
    href: "https://v3.joshuaedo.com/projects",
    description: "My third portfolio website.",
  },
  {
    title: "Ryter",
    href: "https://ryter.vercel.app/",
    description: "A productivity app for writers.",
  },
];

const defaultReplies = [
  {
    prompt: ["about", "who are you"],
    reply:
      "I'm an experienced Software Developer specialized in building web apps with great functionality, user-friendly interfaces, and strong SEO.",
  },
  {
    prompt: ["fun", "hobbies"],
    reply:
      "In my free time, I enjoy reading, playing chess, and watching Chelsea, my favorite club, even though they're pretty bad right now.",
  },
  {
    prompt: ["website"],
    reply: "Visit my website => https://joshuaedo.com.",
  },
  {
    prompt: ["skills", "technologies"],
    reply:
      "I'm proficient in JavaScript and TypeScript, React and NextJs, CSS and Tailwind, and various other web technologies.",
  },
  {
    prompt: ["music", "genre"],
    reply:
      "I like anything that sounds good really, but this is my favorite genre of music => https://open.spotify.com/playlist/2Socm9A6oHxtrRoGdtCkU9.",
  },
  {
    prompt: ["movies", "favorite movie"],
    reply: "I don't really like movies, but I love TV shows",
  },
  {
    prompt: ["shows", "favorite show"],
    reply:
      "My best TV show is HIMYM, here's a list of my favorite shows => https://joshuaedo.notion.site/joshuaedo/TV-Shows-5ce25f31c73d4cc588824ed9a85a6466",
  },
  {
    prompt: ["book", "favorite book"],
    reply:
      "I like mystery/thriller, and one of my favorite books is Origin by Dan Brown.",
  },
  {
    prompt: ["food", "favorite cuisine"],
    reply: "I love pizza man, I'd eat it everyday if I could.",
  },
  {
    prompt: ["programming language"],
    reply:
      "I'm proficient in multiple programming languages, with a focus on JavaScript and TypeScript.",
  },
  {
    prompt: ["coding", "favorite project"],
    reply: "My biggest project is probably Z (https://z.joshuaedo.com).",
  },
  {
    prompt: ["pets", "favorite pet"],
    reply: "I want a cat.",
  },
  {
    prompt: ["games", "favorite game"],
    reply: "FIFA or nothing.",
  },
  {
    prompt: ["weather", "favorite season"],
    reply: "I like the cold. Wish I could live in London.",
  },
  // {
  //   prompt: ["tech", "latest technology"],
  //   reply: "I'm excited about the latest advancements in [insert latest technology]. It's truly revolutionary.",
  // },
  // {
  //   prompt: ["exercise", "fitness routine"],
  //   reply: "Staying fit is important to me. My fitness routine includes [insert fitness routine details].",
  // },
  // {
  //   prompt: ["podcast", "favorite podcast"],
  //   reply: "I love listening to podcasts, and my current favorite is [insert favorite podcast title].",
  // },
  // {
  //   prompt: ["art", "favorite artist"],
  //   reply: "Art has a special place in my heart. One of my favorite artists is [insert favorite artist name].",
  // },
  // {
  //   prompt: ["motivation", "source of motivation"],
  //   reply: "I find motivation in [insert source of motivation]. It keeps me driven and focused.",
  // },
  // {
  //   prompt: ["future", "aspirations"],
  //   reply: "In the future, I aspire to [insert future aspiration]. It's a big goal, but I'm working towards it.",
  // },
  {
    prompt: ["learning", "current skill focus"],
    reply:
      "Currently, I'm focusing on improving my skills in NodeJS and Typescript.",
  },
  {
    prompt: ["wyd", "what are you doing"],
    reply: "With my woman of course. Lmfao. Probably coding or something.",
  },
  {
    prompt: ["lucky"],
    reply: "You're not lucky.",
  },
  {
    prompt: ["bye"],
    reply: "Hope to see you around again, Bye!",
  },
  {
    prompt: ["fuck you"],
    reply: "Fuck you too!",
  },
];

module.exports = {
  projects,
  defaultReplies,
};
