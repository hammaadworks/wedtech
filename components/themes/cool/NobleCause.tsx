import { CircularTestimonials } from "@/components/themes/cool/ui/circular-testimonials";
import HeadingSparkle from "./myui/heading-sparkle";

const testimonials = [
  {
    quote:
      "Alhamdulillah, the couple has decided to begin their journey together by encouraging loved ones to give in charity instead of bringing gifts. 🎁💖 Donations will support orphans at the Muslim Orphanage in Bangalore — a cause close to their hearts. May ALLAH SWT accept this noble intention and fill their marriage with barakah.",
    name: "The Muslim Orphanage",
    designation: "A call to sadaqah over gifts",
    src: "https://images.unsplash.com/photo-1521790367261-13e09d3d0250?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    quote:
      "Donation Details:\n🏢 Muslim Orphanage, Bangalore\n🏦 Bank: HDFC Bank\n🔢 A/C No: 50200012345678\n🔁 IFSC: HDFC0000123\n📱 UPI: muslimorphanage@hdfcbank\n📞 Queries/Receipt: +91-9876543210\nMay this sadaqah become a source of happiness and success in this world and the next.",
    name: "🤝 How to Contribute",
    designation: "Support the orphanage directly",
    src: "https://images.unsplash.com/photo-1549187774-b4e9b0445b06?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    quote:
      "Jazakum Allahu Khayran for your kindness and support. 🌸 May ALLAH SWT reward you abundantly and grant the couple a life of sakoon, mercy, and love. All praise and thanks are due to ALLAH SWT alone. 🤲",
    name: "💐 Gratitude & Du'a",
    designation: "All praise is to ALLAH SWT",
    src: "https://images.unsplash.com/photo-1531986362435-16b427eb9c3b?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
];

export function NobleCause() {
  return (
    <section id="charity" className="w-full bg-secondary py-16 md:py-24 px-4 sm:px-6 md:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <HeadingSparkle
          heading="Noble Charity"
          description="A simple gesture, a lasting reward."
        />

        {/* Light testimonials section */}
        <div className="bg-[#f7f7fa] p-20 rounded-lg min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative">
          <div
            className="items-center justify-center relative flex"
            style={{ maxWidth: "1456px" }}
          >
            <CircularTestimonials
              testimonials={testimonials}
              autoplay={false}
              colors={{
                name: "#0a0a0a",
                designation: "#454545",
                testimony: "#171717",
                arrowBackground: "#141414",
                arrowForeground: "#f1f1f7",
                arrowHoverBackground: "#00A6FB",
              }}
              fontSizes={{
                name: "28px",
                designation: "20px",
                quote: "20px",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
