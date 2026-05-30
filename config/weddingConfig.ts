export interface WeddingEvent {
  title: string;
  date: string;
  time: string;
  description: string;
  locationName: string;
  locationAddress: string;
  locationLink: string;
  icon?: string;
}

export interface Venue {
  name: string;
  image: string;
  address: string;
  link: string;
  type: "Nikah" | "Valima" | "Other";
  announcement?: string;
  moreInfoLink?: string;
}

export interface TreasureHuntLevel {
  level: number;
  hint: string;
  answer?: string; // If we want to support text answers instead of just QR scanning
}

export interface WeddingConfig {
  couple: {
    groom: string;
    bride: string;
    groomFull: string;
    brideFull: string;
    hashtag: string;
  };
  weddingDate: string;
  hijriDate?: string;
  mainAudio: string;
  events: WeddingEvent[];
  venues: Venue[];
  treasureHunt: {
    enabled: boolean;
    startTime: string; // ISO string
    endTime: string; // ISO string
    totalLevels: number;
    levels: TreasureHuntLevel[];
  };
  rsvp: {
    enabled: boolean;
    whatsappNumber: string;
    email: string;
  };
  social: {
    instagramHashtag?: string;
  };
  theme: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

export const defaultWeddingConfig: WeddingConfig = {
  couple: {
    groom: "Inam",
    bride: "Maryam",
    groomFull: "Inam Ul Hassan",
    brideFull: "Saba Maryam",
    hashtag: "#Inam❤️Maryam",
  },
  weddingDate: "19 June 2025",
  hijriDate: "23 Dhu al-Hijjah 1446",
  mainAudio: "/assets/audio/barakallah.mp3",
  events: [
    {
      title: "Nikah Ceremony",
      date: "19 June 2025",
      time: "after Maghrib Salah",
      description: "A sacred and serene Nikah ceremony, marking the beautiful beginning of a new journey, In Sha Allah.",
      locationName: "Masjid Noor",
      locationAddress: "Bangalore",
      locationLink: "https://g.co/kgs/bhVZ2SJ",
    },
    {
      title: "Valima Celebration",
      date: "19 June 2025",
      time: "8:30 PM onwards",
      description: "A warm dinner celebration with family and friends. Join us in our happiness!",
      locationName: "Cutchi Memon Jamath Khana Marriage Hall",
      locationAddress: "Bangalore",
      locationLink: "https://g.co/kgs/zpg8QEf",
    }
  ],
  venues: [
    {
      name: "Masjid Noor",
      image: "/assets/img/masjid.webp",
      address: "Bangalore",
      link: "https://g.co/kgs/bhVZ2SJ",
      type: "Nikah",
    },
    {
      name: "Cutchi Memon Jamath Khana",
      image: "/assets/img/hall.png",
      address: "Bangalore",
      link: "https://g.co/kgs/zpg8QEf",
      type: "Valima",
    }
  ],
  treasureHunt: {
    enabled: true,
    startTime: "2025-06-19T22:19:00+05:30",
    endTime: "2025-06-19T23:59:59+05:30",
    totalLevels: 19,
    levels: Array.from({ length: 19 }, (_, i) => ({
      level: i + 1,
      hint: `🔍 Hint for level ${i + 1}`,
    })),
  },
  rsvp: {
    enabled: true,
    whatsappNumber: "918310428923",
    email: "hammaadworks@gmail.com",
  },
  social: {
    instagramHashtag: "#InamMaryam",
  },
  theme: {
    primary: "#064e3b", // Deep Emerald
    secondary: "#d4af37", // Gold
    accent: "#f5f5dc", // Cream
  },
};
