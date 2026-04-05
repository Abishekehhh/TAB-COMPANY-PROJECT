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

const ServicesPreview = () => (
  <section className="bg-section-alt py-16 sm:py-20">
    <div className="container mx-auto px-4">
      <AnimatedSection className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Core Services</h2>
        <div className="mx-auto h-1 w-16 rounded-full bg-accent" />
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
          Complete HVAC testing, adjusting, and balancing services with field-ready instruments and practical reporting.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {featured.map((service, index) => (
          <AnimatedSection key={service.title} delay={index * 0.1}>
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
      </div>
    </div>
  </section>
);

export default ServicesPreview;
