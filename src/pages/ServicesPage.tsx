import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import Seo from "@/components/Seo";
import { Link } from "react-router-dom";

import anemometer from "@/assets/anemometer.jpg";
import captureHood from "@/assets/capture-hood.jpg";
import noiseMeter from "@/assets/noise-meter.jpg";
import infraredThermometer from "@/assets/infrared-thermometer.png";
import vibrationMeasurement from "@/assets/vibration-measurement.jpg";
import ultrasonicMeter from "@/assets/ultrasonic-meter.jpg";
import ductTesting from "@/assets/duct-testing.jpg";
import flushingProcess from "@/assets/flushing-process.jpg";

const services = [
  {
    title: "HVAC Functional Performance & Startup",
    desc: "Functional performance test allows us to better understand the 'brains' behind why equipment performs and reacts as it does. To make sure a piece of equipment works as intended and can provide the expected performance is the main reason to functionally test HVAC systems. TAB Technical Services offers the assurance that systems are working correctly and as intended.",
    img: captureHood,
  },
  {
    title: "Testing & Commissioning (HVAC System)",
    desc: "Our TAB specialist ensures to achieve optimum performance of the building HVAC equipment by adjusting and balancing the air and water system. TAB Specialist performs air and hydronic measurements on the MEP systems and adjusts the flow rates as required for achieving optimum performance of the building environmental equipment.",
    img: anemometer,
  },
  {
    title: "Airflow Measurement",
    desc: "Precision airflow measuring using capture hoods and digital anemometers. Air flow measurement in terminals, grills & diffusers using state-of-the-art instruments for accurate readings.",
    img: ductTesting,
  },
  {
    title: "Noise Level Measurement",
    desc: "Unwanted noise is a nuisance. Too much echo can garble speech clarity and intelligibility. We ensure the noise level of all HVAC systems remain within the limits recommended by the NEBB standard.",
    img: noiseMeter,
  },
  {
    title: "Temperature Measurement",
    desc: "Temperature is a particularly important measure in the built environment when considering thermal comfort of occupants. Our team measures air temperatures using sling psychrometers and infrared thermometers and assists in diagnosing what may be wrong and what repairs may be needed.",
    img: infraredThermometer,
  },
  {
    title: "Relative Humidity Measurement",
    desc: "Office humidity is very important for every building. If it's too high or too low, it can affect your health, the building materials, and equipment. We measure the relative humidity level to optimize conditions inside a building and ensure comfort and safety.",
    img: ultrasonicMeter,
  },
  {
    title: "Vibration Measurement",
    desc: "Vibration in its simplest form can be considered an oscillation or repetitive motion of an object around an equilibrium position. In the HVAC industry, sound is not generated without some form of vibration from equipment. We detect and measure equipment vibration to prevent issues.",
    img: vibrationMeasurement,
  },
  {
    title: "Chilled Water System Flushing",
    desc: "The main objective of chilled water flushing is to remove dirt and debris from the pipes work system. The process involves: Initial static flushing with plain water and strainer cleaning, Dynamic flushing, Chemical flushing, and Passivation.",
    img: flushingProcess,
  },
];

const ServicesPage = () => (
  <Layout>
    <Seo
      title="Services"
      description="Explore TAB Technical Services for HVAC startup, testing and commissioning, airflow, noise, temperature, humidity, vibration, and chilled water flushing."
      path="/services"
      keywords="HVAC services Chennai, testing and commissioning, airflow measurement, vibration measurement, temperature measurement, chilled water flushing"
    />
    <section className="bg-primary text-primary-foreground py-20">
      <div className="container mx-auto px-4 text-center">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Services</h1>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">Comprehensive HVAC testing, adjusting, and balancing services with state-of-the-art instruments</p>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 space-y-20">
        {services.map((s, i) => (
          <AnimatedSection key={s.title} direction={i % 2 === 0 ? "left" : "right"}>
            <div className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 !== 0 ? "md:[direction:rtl]" : ""}`}>
              <div className={i % 2 !== 0 ? "md:[direction:ltr]" : ""}>
                <h2 className="text-2xl font-bold text-foreground mb-4">{s.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                {s.title === "Chilled Water System Flushing" && (
                  <ul className="mt-4 space-y-2">
                    {["Initial static flushing with plain water & strainer cleaning", "Dynamic flushing", "Chemical flushing", "Passivation"].map((step) => (
                      <li key={step} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                        {step}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className={`space-y-4 ${i % 2 !== 0 ? "md:[direction:ltr]" : ""}`}>
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full md:max-w-xl md:h-96 rounded-lg shadow-lg object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>

    <section className="py-16 bg-primary text-primary-foreground text-center">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-4">Need Our Services?</h2>
          <p className="opacity-80 mb-6 max-w-xl mx-auto">Get in touch to discuss your HVAC testing and commissioning requirements.</p>
          <Link to="/contact" className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-md font-semibold hover:scale-105 transition-transform">
            Contact Us
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default ServicesPage;
