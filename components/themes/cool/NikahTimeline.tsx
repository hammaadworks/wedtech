import { Timeline } from "@/components/themes/cool/ui/timeline";
import { SparklesText } from "./magicui/sparkles-text";
import { Heading } from "lucide-react";
import HeadingSparkle from "./myui/heading-sparkle";

export function NikahTimeline() {
  const data = [
    {
      title: "Nikah Ceremony",
      content: (
        <div>
          <p className="mb-4 text-sm text-neutral-800 dark:text-neutral-200">
            A sacred and serene Nikah ceremony held after Maghrib, marking the
            beautiful beginning of a new journey.
          </p>
          <p className="text-xs text-neutral-600 dark:text-neutral-300">
            🕌 Masjid Al Noor — 6:30pm - 7:30pm
          </p>
        </div>
      ),
    },
    {
      title: "Arrival & Refreshments",
      content: (
        <div>
          <p className="mb-4 text-sm text-neutral-800 dark:text-neutral-200">
            Guests proceed to the hall for warm welcomes, light refreshments,
            and heartfelt reunions.
          </p>
          <p className="text-xs text-neutral-600 dark:text-neutral-300">
            🏛️ Cutchi Memon Hall — 7:30pm - 8:00pm
          </p>
        </div>
      ),
    },
    {
      title: "Dua & Ceremony",
      content: (
        <div>
          <p className="mb-4 text-sm text-neutral-800 dark:text-neutral-200">
            A special moment of gratitude and blessings on stage with heartfelt
            duas and photo memories.
          </p>
          <p className="text-xs text-neutral-600 dark:text-neutral-300">
            🏛️ Cutchi Memon Hall — 8:00pm - 8:30pm
          </p>
        </div>
      ),
    },
    {
      title: "Dinner & Celebration",
      content: (
        <div>
          <p className="mb-4 text-sm text-neutral-800 dark:text-neutral-200">
            A warm dinner is served. Stay, enjoy, and celebrate this joyous
            occasion with us.
          </p>
          <p className="text-xs text-neutral-600 dark:text-neutral-300">
            🏛️ Cutchi Memon Hall — 8:30pm onwards
          </p>
        </div>
      ),
    },
    {
      title: "Treasure Hunt Game",
      content: (
        <div>
          <p className="mb-4 text-sm text-neutral-800 dark:text-neutral-200">
            A light-hearted and fun-filled late-night treasure hunt to end the
            celebration on a high note. Join the laughter and surprises!
          </p>
          <p className="text-xs text-neutral-600 dark:text-neutral-300">
            🍦 Starts at the Ice Cream Stall — 10:30pm onwards
          </p>
        </div>
      ),
    },
  ];

  return (
    <section id="timeline" className="relative w-full bg-secondary py-16 md:py-24 px-4 sm:px-6 md:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <HeadingSparkle
          heading="Event Timeline"
          description="Mark your moments - a simple guide to the blessed evening, Alhamdulillah."
        />
        <Timeline data={data} />
      </div>
    </section>
  );
}

/* 

All events in one day 19th June 2025

6:30 - 7:30 pm : Nikah after Maghrib Salah at Masjid Al Noor
7:30 - 8:00 pm : All gather at the Hall. Refreshments served at Cutchi Memon Hall.
8:00 - 8:30 pm : Dua and Cermony at the stage with photo session
8:30 pm : Dinner served. Stay as long as you wish to
*/
