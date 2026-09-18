# BlessedNikah Agent Guidelines

Welcome, Agent. You are working on **BlessedNikah**, a specialized SaaS for "Blessed" (Islamic-oriented) wedding sites. Your goal is to maintain the platform's elegance, technical integrity, and thematic consistency.

## 🏗 Architectural Principles

1. **Configuration-First:** Content should never be hardcoded into components. Always derive data from `config/weddingConfig.ts` or the `WeddingContext`.
2. **Thematic Consistency:** Every UI change must respect the "Blessed" aesthetic—elegant, respectful, and dignified. Avoid flashy or distracting elements that detract from the sacred nature of the events.
3. **Template Modularity:** New features should be built as reusable components in `components/sections/` and then integrated into templates under `app/templates/`.
4. **Islamic Sensitivities:** Ensure correct usage of Islamic terminology (Nikah, Valima, In Sha Allah, Alhamdulillah, etc.) and respectful placement of components like the `Bismillah` header.

## 🛠 Tech Stack Specifics

- **Next.js 15 (App Router):** We use the latest Next.js features. Be aware of Server vs. Client components. Use `'use client'` only where necessary for interactivity (RSVP, Treasure Hunt, Audio).
- **MagicUI & Framer Motion:** We use these for high-end visual polish. Prioritize performance and smooth transitions.
- **Tailwind CSS 4:** We use Tailwind 4 for modern styling. Respect the primary/secondary/accent color tokens defined in the configuration.

## 📋 Common Tasks

- **Adding a Template:** Create a new directory in `app/templates/`, implement the layout using shared components, and ensure it respects the `WeddingConfig`.
- **Modifying the Treasure Hunt:** Logic is primarily in `components/sections/TreasureHunt.tsx`. Ensure QR scanning and level progression are robust.
- **RSVP Logic:** WhatsApp integration is the preferred method for guest responses. Maintain the current format for consistency.

## ⚠️ Important Warnings

- **Breaking Changes:** This project uses specific versions of Next.js 15 and MagicUI. Verify documentation if you encounter unexpected behavior.
- **Context Usage:** Always use `useWedding()` from `lib/context/WeddingContext.tsx` to access global state.
- **Audio:** Audio should always be user-initiated or respect the `mainAudio` config path.

## 🎨 Cool Template (Aesthetic)

The 'Cool' template (found in `app/templates/cool/` and `components/templates/cool/`) is our high-end, modern, and interactive flagship theme. It utilizes `SparklesText`, `HyperText`, and complex `AnimatePresence` transitions to deliver a premium user experience.
