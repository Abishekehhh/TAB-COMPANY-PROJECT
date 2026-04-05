import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import tabIcons from "@/assets/tab-icons.png";
import siteActivities from "@/assets/site-activities.jpg";
import siteActivitiesMobile from "@/assets/site-activities-mobile.jpg";
import { ArrowRight, Award, MapPin, Users } from "lucide-react";

const stats = [
  { icon: Award, label: "Since 2022", desc: "Years of excellence" },
  { icon: Users, label: "Expert Team", desc: "Qualified engineers" },
  { icon: MapPin, label: "2 Offices", desc: "Chennai and Kerala" },
];

const AboutPreview = () => (
  <section className="bg-background py-16 sm:py-20">
    <div className="container mx-auto px-4">
      <AnimatedSection className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">About Us</h2>
        <div className="mx-auto h-1 w-16 rounded-full bg-accent" />
      </AnimatedSection>

      <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <AnimatedSection direction="left">
          <p className="mb-4 text-base leading-7 text-muted-foreground">
            <strong className="text-foreground">TAB Technical Services</strong> is an independent testing agency based
            in Chennai, delivering dependable Testing, Adjusting and Balancing services for commercial, residential, and
            industrial projects.
          </p>
          <p className="mb-6 text-base leading-7 text-muted-foreground">
            Our project experience covers airports, hospitals, pharmaceutical facilities, hotels, malls, and major
            commercial complexes.
          </p>
          <img
            src={tabIcons}
            alt="Testing Adjusting Balancing"
            className="mb-6 h-auto w-full max-w-xs object-contain"
            loading="lazy"
            decoding="async"
          />
          <Link to="/about" className="inline-flex items-center gap-2 font-semibold text-accent hover:underline">
            Learn More <ArrowRight size={16} />
          </Link>
        </AnimatedSection>

        <AnimatedSection direction="right" className="overflow-hidden rounded-3xl border border-border bg-card shadow-xl">
          <div className="aspect-[4/3] w-full overflow-hidden">
            <picture>
              <source media="(max-width: 768px)" srcSet={siteActivitiesMobile} />
              <img
                src={siteActivities}
                alt="TAB engineers at work"
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </picture>
          </div>
        </AnimatedSection>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-3 sm:gap-6">
        {stats.map((stat, index) => (
          <AnimatedSection
            key={stat.label}
            delay={index * 0.15}
            className="rounded-2xl border border-border bg-card p-5 text-center shadow-sm"
          >
            <stat.icon className="mx-auto mb-3 text-accent" size={40} />
            <h3 className="text-lg font-bold text-foreground">{stat.label}</h3>
            <p className="text-sm text-muted-foreground">{stat.desc}</p>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default AboutPreview;
