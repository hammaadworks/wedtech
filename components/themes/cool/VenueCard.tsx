"use client";

import { useWedding } from "@/lib/context/WeddingContext";
import { VenueCardComponent } from "./myui/venue-card-component";
import HeadingSparkle from "./myui/heading-sparkle";

export function VenueCard() {
  const { config } = useWedding();
  const { venues } = config;

  return (
    <section id="venues" className="w-full bg-slate-50 dark:bg-zinc-950 py-16 md:py-24 px-4 sm:px-6 md:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <HeadingSparkle
          heading="Venue Details"
          description="All about the venue, directions, timings, and more."
        />

        {venues.map((venue, idx) => (
          <VenueCardComponent
            key={idx}
            eventType={venue.type}
            venueName={venue.name}
            venueAddress={venue.address}
            eventDate={config.weddingDate}
            eventTime={venue.type === "Nikah" ? "After Maghrib" : "8:30 PM onwards"}
            venueImage={venue.image}
            moreInfoLink={venue.link}
            directionsLink={venue.link}
            announcement={venue.announcement || (venue.type === "Nikah" ? "🤍 Keep us in your righteous duʿās 🤍" : "🎉 Join us for the celebration!")}
            swatchColor={venue.type === "Nikah" ? "emerald" : "pink"}
          />
        ))}
      </div>
    </section>
  );
}
