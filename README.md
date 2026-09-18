# BlessedNikah: The Premium Wedding Site Builder

BlessedNikah is an efficient, high-end SaaS platform designed specifically for the Muslim community to create beautiful, respectful, and interactive wedding invitation sites. 

## ✨ Key Features

- **Instant Builder:** Fill your details once and see them instantly applied across all premium templates.
- **Elite Design Collection:** Multiple curated themes including *Blessed Nikah*, *Minimal Grace*, *Royal Garden*, and *Classic Heritage*.
- **Islamic Integration:** Built-in support for Bismillah components, Hijri dates, and Nikah-specific event timelines.
- **Interactive Treasure Hunt:** A unique QR-based gamification feature to engage guests during the wedding events.
- **Mobile-First Experience:** Stunning performance and visuals on all devices, optimized for sharing via WhatsApp and social media.
- **Modern RSVP:** Seamless guest responses via WhatsApp and Email integration.
- **Rich Media:** Integrated audio player for nasheeds and beautiful animations using MagicUI and Framer Motion.

## 🛠 Tech Stack

- **Framework:** [Next.js 15+](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/) & [MagicUI](https://magicui.design/)
- **Components:** [Radix UI](https://www.radix-ui.com/)

## 🚀 Getting Started

First, install dependencies:

```bash
npm install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## ⚙️ Customization & SaaS Logic

The platform is designed to be highly configurable. Core site content is driven by `config/weddingConfig.ts`.
- **Global Context:** The `WeddingContext` provides real-time access to configuration across all components.
- **Template System:** Found in `app/templates/`, templates are modular and pick up data from the central config.
- **Assets:** Manage images and audio in the `public/assets/` directory.

## 📂 Project Structure

- `app/templates/`: Various page layouts for different wedding themes.
- `components/Islamic/`: Specialized components (e.g., Bismillah).
- `components/sections/`: Core building blocks (Hero, Timeline, RSVP, Venues, TreasureHunt).
- `components/templates/`: Theme-specific UI components.
- `config/`: Central configuration management (`weddingConfig.ts`).
- `lib/context/`: Global state management for the wedding configuration.
