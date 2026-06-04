"use client";

import { Home, MapPin, Calendar, Heart, MessageCircle, HelpCircle, Phone } from "lucide-react"
import { AnimeNavBar } from "@/components/themes/cool/ui/anime-navbar"

const items = [
  {
    name: "Home",
    url: "#hero",
    href: "#hero",
    icon: Home,
  },
  {
    name: "Venues",
    url: "#venues",
    href: "#venues",
    icon: MapPin,
  },
  {
    name: "Timeline",
    url: "#timeline",
    href: "#timeline",
    icon: Calendar,
  },
  {
    name: "Charity",
    url: "#charity",
    href: "#charity",
    icon: Heart,
  },
  {
    name: "RSVP",
    url: "#rsvp",
    href: "#rsvp",
    icon: MessageCircle,
  },
  {
    name: "FAQ",
    url: "#faq",
    href: "#faq",
    icon: HelpCircle,
  },
  {
    name: "Contact",
    url: "#contact",
    href: "#contact",
    icon: Phone,
  },
]

export function BlessedNavBar() {
  return <AnimeNavBar items={items} defaultActive="Home" />
}
