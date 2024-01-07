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
