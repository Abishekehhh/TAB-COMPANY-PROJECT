import type { CSSProperties } from "react";
import { MessageCircle, Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg-optimized.jpg";
import heroBgMobile from "@/assets/hero-bg-mobile.jpg";

const highlights = [
  "Air balancing and airflow testing",
  "Calibrated instruments and clear reporting",
  "Fast support for commercial pro teams",
];

const Hero = () => {
  return (
    <section className="relative flex min-h-[84svh] items-center overflow-hidden">
      <picture>
        <source media="(max-width: 768px)" srcSet={heroBgMobile} />
        <img
          src={heroBg}
          alt="HVAC systems"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
          sizes="100vw"
        />
      </picture>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/82 to-accent/40" />

      <div className="relative z-10 container mx-auto px-4 py-16 text-center text-primary-foreground sm:py-20">
        <h1
          style={{ "--hero-delay": "0s", "--hero-offset": "40px" } as CSSProperties}
          className="hero-fade mx-auto mb-4 max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl"
        >
          TAB Technical Services
        </h1>

        <p
          style={{ "--hero-delay": "0.15s", "--hero-offset": "20px" } as CSSProperties}
          className="hero-fade mx-auto mb-3 max-w-2xl text-base font-medium opacity-90 sm:text-xl"
        >
          Testing . Adjusting . Balancing
        </p>

        <p
          style={{ "--hero-delay": "0.3s", "--hero-offset": "0px" } as CSSProperties}
          className="hero-fade mx-auto mb-8 max-w-xl text-sm leading-6 opacity-[0.82] sm:text-base"
        >
          Reliable HVAC testing and commissioning support for hospitals, airports, hotels, and commercial facilities
          across Chennai and Kerala.
        </p>

        <div
          style={{ "--hero-delay": "0.45s", "--hero-offset": "20px" } as CSSProperties}
          className="hero-fade flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href="tel:+916380513174"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent px-7 py-3 text-base font-semibold text-accent-foreground shadow-lg shadow-accent/30 transition-transform hover:scale-[1.02]"
          >
            <Phone size={18} />
            Call Us
          </a>
          <a
            href="https://chat.whatsapp.com/LbIjl9dvfdJ9CBNSe3cWJG?mode=gi_t"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3 text-base font-semibold text-primary-foreground shadow-lg shadow-black/10 backdrop-blur transition-transform hover:scale-[1.02]"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
        </div>

        <div
          style={{ "--hero-delay": "0.6s", "--hero-offset": "20px" } as CSSProperties}
          className="hero-fade mx-auto mt-10 grid max-w-3xl gap-3 text-left sm:grid-cols-3"
        >
          {highlights.map((item) => (
            <div key={item} className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm backdrop-blur">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
