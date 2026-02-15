export type Tool = {
  slug: string;
  title: string;
  emoji: string;
  preview: string;
  description: string;
  appUrl?: string;
  buildExperience: string[];
  keyFeatures: string[];
  tags: string[];
  images: string[];
  tweetLinks: string[];
};

export const tools: Tool[] = [
  {
    slug: "problemhunt",
    title: "ProblemHunt",
    emoji: "🧩",
    appUrl: "https://problem-finder-13.preview.emergentagent.com/",
    preview:
      "A Product Hunt for problems: users post pain points, others validate demand with upvotes and willingness-to-pay signals.",
    description:
      "ProblemHunt helps founders discover what people actually struggle with before building. Users share real problems, other users upvote and add how much they would pay, and builders can reach out only when people opt in.",
    buildExperience: [
      "The idea came from a simple gap: products have discovery platforms, but validated problems rarely do.",
      "I used a prompt-first workflow with ChatGPT to define requirements and user flow before touching the build.",
      "Built the product on Emergent and iterated quickly by fixing edge cases in the posting, validation, and opt-in flow.",
      "The most useful learning: clearer prompts and tighter scope dramatically improve output quality and speed.",
    ],
    keyFeatures: [
      "Problem feed with upvotes and demand signals.",
      "Willingness-to-pay layer so builders can prioritize high-value pain points.",
      "Opt-in builder outreach to keep interactions consent-based.",
      "Simple UX that makes idea validation fast and collaborative.",
    ],
    tags: ["Emergent", "Problem Discovery", "Validation", "Vibe Coding"],
    images: [
      "/ai-tools/problemhunt-1.jpg",
      "/ai-tools/problemhunt-2.jpg",
      "/ai-tools/problemhunt-3.jpg",
      "/ai-tools/problemhunt-4.jpg",
    ],
    tweetLinks: [
      "https://x.com/Sameer_jain22/status/2014618800776478736?s=20",
      "https://x.com/Sameer_jain22/status/2014618812285649391?s=20",
    ],
  },
  {
    slug: "fantasytube",
    title: "FantasyTube",
    emoji: "🏟️",
    appUrl: "https://creatorcamp-1.preview.emergentagent.com/",
    preview:
      "Fantasy Football energy for YouTube: draft creators with friends and compete on subscriber growth over 180 days.",
    description:
      "FantasyTube turns creator growth into a social game. You and your friends pick 10 YouTubers each, lock your roster, and track who grows the most over 180 days on a leaderboard.",
    buildExperience: [
      "This started from observing how fast small YouTube creators are growing and wondering how to make that growth interactive.",
      "Built the product mechanics to feel game-like: creator search, roster picks, lock-in, and leaderboard tracking.",
      "Used Emergent for rapid development and resolved build issues while keeping the UX simple and fun.",
      "I also explored integration paths (Sheets/Notion/alerts) to make tracking and updates more automated end-to-end.",
    ],
    keyFeatures: [
      "Draft flow to pick 10 creators per player.",
      "Creator search with channel identity context before selection.",
      "180-day locked picks and subscriber-growth-based scoring.",
      "Competitive leaderboard to make creator discovery social.",
    ],
    tags: ["Emergent", "Creator Economy", "Gamification", "Vibe Coding"],
    images: ["/ai-tools/fantasytube-1.jpg", "/ai-tools/fantasytube-2.jpg", "/ai-tools/fantasytube-3.jpg"],
    tweetLinks: [
      "https://x.com/Sameer_jain22/status/2015346271717138552?s=20",
      "https://x.com/Sameer_jain22/status/2015346275626168436?s=20",
      "https://x.com/Sameer_jain22/status/2015346280709668929?s=20",
      "https://x.com/Sameer_jain22/status/2015346284090253819?s=20",
      "https://x.com/Sameer_jain22/status/2015346286300627099?s=20",
    ],
  },
  {
    slug: "clawdbot-setup-experience",
    title: "Clawdbot Setup Experience",
    emoji: "🤖",
    preview:
      "A quick non-technical build story: how I set up a Telegram assistant in minutes and why this felt unusually beginner-friendly.",
    description:
      "This wasn’t a full app launch; it was a hands-on setup experience with Clawdbot on Telegram using Emergent. I shared the journey because the process felt surprisingly smooth for a non-technical flow and shows how accessible AI tooling is becoming.",
    buildExperience: [
      "I set up Clawdbot on Telegram through Emergent and expected friction, but the workflow felt simple and guided end-to-end.",
      "There was no terminal setup or heavy configuration; I could get it live in minutes through straightforward steps.",
      "I tested it on both laptop and phone with the same experience, which made the setup feel dependable and practical.",
      "The biggest takeaway: tools like this reduce setup anxiety and make it easier for non-technical users to start experimenting.",
    ],
    keyFeatures: [
      "Telegram bot setup without terminal-heavy onboarding.",
      "Low-friction guided flow suitable for non-technical users.",
      "Cross-device usability from the start (desktop and mobile).",
      "Good base for extending into custom assistant workflows.",
    ],
    tags: ["Emergent", "AI Assistant", "No-Code Setup", "Experience Log"],
    images: ["/ai-tools/clawdbot-1.jpg", "/ai-tools/clawdbot-2.jpg"],
    tweetLinks: [
      "https://x.com/Sameer_jain22/status/2019435792947638552?s=20",
      "https://x.com/Sameer_jain22/status/2019435796525470152?s=20",
      "https://x.com/Sameer_jain22/status/2019435799092293679?s=20",
      "https://x.com/Sameer_jain22/status/2019435804104552477?s=20",
    ],
  },
  {
    slug: "ingredient-scanner",
    title: "Ingredient Scanner",
    emoji: "💊",
    appUrl: "https://ingredient-scanner-4.preview.emergentagent.com/",
    preview:
      "A practical medicine-label scanner that helps identify veg vs non-veg ingredient risk with OCR + credible source-backed checks.",
    description:
      "I built Ingredient Scanner after learning that some medicines can include animal-derived ingredients (like gelatin). The app scans medicine labels and helps users quickly evaluate whether ingredients are likely vegetarian-safe, with traceable references instead of guesswork.",
    buildExperience: [
      "The idea came from a real personal need: avoiding hidden animal-derived ingredients in medicines.",
      "I shipped a working version in around 2 hours, then did multiple iterations to improve accuracy and UX.",
      "I enhanced image preprocessing and OCR quality to handle small, noisy packaging text better.",
      "To reduce hallucinations, I added a knowledge base + trusted-source lookup so results stay credible and traceable.",
      "The project reinforced how quickly non-developers can build useful products with the right AI tooling and iteration loops.",
    ],
    keyFeatures: [
      "Label scanning workflow for medicine strips and bottles.",
      "OCR pipeline tuned for small-text ingredient panels.",
      "Veg / non-veg ingredient risk guidance for dietary restrictions.",
      "Source-backed checks to keep outputs auditable and trustworthy.",
    ],
    tags: ["Emergent", "OCR", "Healthcare Utility", "Vibe Coding"],
    images: ["/ai-tools/ingredient-scanner-1.jpg", "/ai-tools/ingredient-scanner-2.jpg", "/ai-tools/ingredient-scanner-3.jpg"],
    tweetLinks: [
      "https://x.com/Sameer_jain22/status/2022319367367852349?s=20",
      "https://x.com/Sameer_jain22/status/2022319369641234465?s=20",
      "https://x.com/Sameer_jain22/status/2022319378214298052?s=20",
      "https://x.com/Sameer_jain22/status/2022319382953894094?s=20",
      "https://x.com/Sameer_jain22/status/2022319385822814558?s=20",
    ],
  },
];

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((tool) => tool.slug === slug);
}
