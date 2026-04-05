import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import Seo from "@/components/Seo";
import tabIcons from "@/assets/tab-icons.png";
import siteActivities from "@/assets/site-activities.jpg";
import siteActivitiesMobile from "@/assets/site-activities-mobile.jpg";
import { MapPin, Users, Award, Target, CheckCircle } from "lucide-react";

const AboutPage = () => (
  <Layout>
    <Seo
      title="About"
      description="Learn about TAB Technical Services, our HVAC testing and commissioning experience, offices in Chennai and Kerala, and our project-focused engineering team."
      path="/about"
      keywords="About TAB Technical Services, HVAC engineers Chennai, HVAC commissioning team Kerala, TAB company profile"
    />
    {/* Hero Banner */}
    <section className="bg-primary text-primary-foreground py-20">
      <div className="container mx-auto px-4 text-center">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About TAB Technical Services</h1>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">Independent HVAC Testing, Adjusting & Balancing agency since 2022</p>
        </AnimatedSection>
      </div>
    </section>

    {/* Main About */}
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <AnimatedSection direction="left">
            <h2 className="text-2xl font-bold text-foreground mb-6">Who We Are</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              TAB Technical Services is an independent testing agency with its head office in Chennai. Our team of experienced engineers provides high quality, responsive, reliable and cost-effective TAB services.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The company is one of the most outstanding and fast-growing in the field of duct Testing & Commissioning Management Services. We were established to provide technical services for commercial, residential, and industrial sectors.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our team comprised of fully qualified, experienced engineers and technicians dedicated to providing a truly independent service. Our history covers almost every MEP application including Airports, pharmaceutical production facilities, hospitals, libraries, hotels, malls, residential and commercial complexes.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              TAB Technical Services is always capable of meeting the demands to mobilize required number of trained and qualified resources equipped with adequate instruments and tools to comply with any project execution schedule.
            </p>
          </AnimatedSection>
          <AnimatedSection direction="right">
            <picture>
              <source media="(max-width: 768px)" srcSet={siteActivitiesMobile} />
              <img
                src={siteActivities}
                alt="TAB engineers at work"
                className="w-full rounded-lg shadow-xl mb-6"
                loading="lazy"
                decoding="async"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </picture>
            <img src={tabIcons} alt="Testing Adjusting Balancing" className="max-w-xs mx-auto" loading="lazy" decoding="async" />
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Our Employees */}
    <section className="py-16 bg-section-alt">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Our Employees</h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
        </AnimatedSection>
        <AnimatedSection className="max-w-3xl mx-auto">
          <div className="bg-card rounded-lg border border-border p-8 shadow-sm">
            <div className="flex items-start gap-4 mb-4">
              <Users className="text-accent flex-shrink-0 mt-1" size={28} />
              <p className="text-muted-foreground leading-relaxed">
                We have highly skilled engineers with excellent technical knowledge and experience in Testing and Commissioning of HVAC Systems. Our senior staff gained extensive experience in executing many different types of projects with many different systems.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-4 mt-8">
              {[
                { icon: Award, label: "Experienced Engineers" },
                { icon: Target, label: "Precision Instruments" },
                { icon: CheckCircle, label: "Quality Assured" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 bg-section-alt rounded-md p-3">
                  <item.icon className="text-accent flex-shrink-0" size={20} />
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Offices */}
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Our Offices</h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {[
            { city: "Chennai", address: "Nandampakkam, Kundrathur, Chennai 600069", state: "Tamil Nadu" },
            { city: "Kerala", address: "Udhayanapuram, Vaikom, Kottayam, Kerala 686146", state: "Kerala" },
          ].map((loc, i) => (
            <AnimatedSection key={loc.city} delay={i * 0.15}>
              <div className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <MapPin className="text-accent mb-3" size={24} />
                <h3 className="font-bold text-foreground text-lg mb-1">{loc.city} Office</h3>
                <p className="text-muted-foreground text-sm">{loc.address}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default AboutPage;
