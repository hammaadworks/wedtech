"use client";

import React from "react";
import { BackgroundGradient } from "@/components/themes/cool/ui/background-gradient";
import { MapPinIcon, ClockIcon, CalendarIcon } from "lucide-react";
import { Marquee } from "../magicui/marquee";
import { CoolMode } from "../magicui/cool-mode";
import { AnimatedGradientText } from "../magicui/animated-gradient-text";
import { HyperText } from "../magicui/hyper-text";

// Tailwind-safe swatch map
const swatchMap = {
  emerald: {
    bg: "bg-emerald-100",
    text: "text-emerald-700",
    icon: "text-emerald-500",
    btnBg: "bg-emerald-600 hover:bg-emerald-700",
    btnText:
      "text-emerald-600 hover:bg-emerald-600 hover:text-white border border-emerald-200",
    marqueeFrom: "from-emerald-50",
    marqueeTo: "to-emerald-100",
  },
  pink: {
    bg: "bg-pink-100",
    text: "text-pink-700",
    icon: "text-pink-500",
    btnBg: "bg-pink-600 hover:bg-pink-700",
    btnText:
      "text-pink-600 hover:bg-pink-600 hover:text-white border border-pink-200",
    marqueeFrom: "from-pink-50",
    marqueeTo: "to-pink-100",
  },
  rose: {
    bg: "bg-rose-100",
    text: "text-rose-700",
    icon: "text-rose-500",
    btnBg: "bg-rose-600 hover:bg-rose-700",
    btnText:
      "text-rose-600 hover:bg-rose-600 hover:text-white border border-rose-200",
    marqueeFrom: "from-rose-50",
    marqueeTo: "to-rose-100",
  },
} as const;

interface VenueCardProps {
  eventType: string;
  venueName: string;
  venueAddress: string;
  eventDate: string;
  eventTime: string;
  venueImage: string;
  moreInfoLink: string;
  directionsLink: string;
  announcement: string;
  swatchColor?: keyof typeof swatchMap;
}

export function VenueCardComponent({
  eventType,
  venueName,
  venueAddress,
  eventDate,
  eventTime,
  venueImage,
  moreInfoLink,
  directionsLink,
  announcement,
  swatchColor = "emerald",
}: VenueCardProps) {
  const color = swatchMap[swatchColor];

  return (
    <section className="py-10 bg-slate-50 dark:bg-zinc-950">
      <div className="mx-auto max-w-sm">
        <BackgroundGradient className="rounded-3xl p-6 sm:p-8 bg-white dark:bg-zinc-900 space-y-5 shadow-lg shadow-emerald-100/30 dark:shadow-none">
          {/* Venue Image */}
          <div className="rounded-2xl overflow-hidden relative">
            <img
              src={venueImage}
              alt={venueName}
              className="w-full h-56 object-cover"
            />
            {/* Announcement Marquee */}
            {announcement && (
              <Marquee
                className={`bg-gradient-to-r ${color.marqueeFrom} ${color.marqueeTo} dark:from-zinc-800 dark:to-zinc-900 py-1`}
              >
                <AnimatedGradientText
                  speed={1.5}
                  colorFrom="#10b981"
                  colorTo="#0ea5e9"
                  className="font-semibold text-sm"
                >
                  {announcement}
                </AnimatedGradientText>
              </Marquee>
            )}
          </div>

          {/* Venue Name + Address + Event Type */}
          <div className="space-y-1">
            <div className="flex items-start justify-between flex-wrap gap-2">
              <HyperText className="text-lg sm:text-xl font-bold leading-snug">
                {venueName}
              </HyperText>
              <span
                className={`whitespace-nowrap ${color.bg} ${color.text} text-xs font-medium px-3 py-1 rounded-full`}
              >
                {eventType}
              </span>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-300 flex items-center gap-1">
              <MapPinIcon className={`w-4 h-4 ${color.icon}`} />
              {venueAddress}
            </p>
          </div>

          {/* Event Date */}
          <div className="flex items-center text-sm text-zinc-600 dark:text-zinc-300 gap-2">
            <CalendarIcon className={`w-4 h-4 ${color.icon}`} />
            <span>{eventDate}</span>
          </div>

          {/* Event Time */}
          <div className="flex items-center text-sm text-zinc-600 dark:text-zinc-300 gap-2">
            <ClockIcon className={`w-4 h-4 ${color.icon}`} />
            <span>{eventTime}</span>
          </div>

          {/* Action Buttons */}
          <CoolMode>
            <div className="flex gap-3 pt-2">
              <a
                href={moreInfoLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 text-center ${color.btnBg} transition text-white text-sm py-2 rounded-full font-semibold shadow-md`}
              >
                More Info
              </a>
              <a
                href={directionsLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 text-center bg-white dark:bg-zinc-800 ${color.btnText} transition text-sm py-2 rounded-full font-semibold shadow-md`}
              >
                Directions
              </a>
            </div>
          </CoolMode>
        </BackgroundGradient>
      </div>
    </section>
  );
}
