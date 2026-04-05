import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import AnimatedSection from "@/components/AnimatedSection";
import anemometer from "@/assets/anemometer.jpg";
import captureHood from "@/assets/capture-hood.jpg";
import infraredThermometer from "@/assets/infrared-thermometer.png";
import noiseMeter from "@/assets/noise-meter.jpg";

const featured = [
  { title: "HVAC Functional Performance", img: captureHood },
  { title: "Testing and Commissioning", img: anemometer },
  { title: "Noise Level Measurement", img: noiseMeter },
  { title: "Temperature Measurement", img: infraredThermometer },
];

const ServicesPreview = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const scrollToMoreServices = () => {
    scrollContainerRef.current?.scrollTo({
      left: scrollContainerRef.current.scrollWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-section-alt py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Core Services</h2>
          <div className="mx-auto h-1 w-16 rounded-full bg-accent" />
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
            Complete HVAC testing, adjusting, and balancing services with field-ready instruments and practical reporting.
          </p>
          <div className="mt-6 flex justify-center">
            <button
              type="button"
              onClick={scrollToMoreServices}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              Scroll to More Services
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </AnimatedSection>

        <div
          ref={scrollContainerRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 sm:gap-5 lg:grid lg:grid-cols-5 lg:gap-6 lg:overflow-visible lg:pb-0"
        >
          {featured.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 0.1} className="min-w-[280px] flex-1 snap-start lg:min-w-0">
              <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-foreground">{service.title}</h3>
                </div>
              </div>
            </AnimatedSection>
          ))}

          <AnimatedSection delay={featured.length * 0.1} className="min-w-[280px] flex-1 snap-start lg:min-w-0">
            <Link
              to="/services"
              className="group flex h-full min-h-[100%] flex-col justify-between rounded-2xl border border-dashed border-accent/40 bg-background p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-xl"
            >
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">More Services</p>
                <h3 className="mt-4 text-2xl font-bold text-foreground">See the full HVAC service list</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Open the complete services page for airflow, humidity, vibration, flushing, and other project support.
                </p>
              </div>
              <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                View all services
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
