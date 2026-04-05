import { lazy, Suspense } from "react";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";

const AboutPreview = lazy(() => import("@/components/AboutPreview"));
const ServicesPreview = lazy(() => import("@/components/ServicesPreview"));
const Projects = lazy(() => import("@/components/Projects"));

const SectionFallback = () => (
  <div className="container mx-auto px-4 py-12 sm:py-16">
    <div className="overflow-hidden rounded-3xl border border-border bg-card/60 p-6 shadow-sm">
      <div className="mb-4 h-6 w-40 animate-pulse rounded bg-muted" />
      <div className="space-y-3">
        <div className="h-4 w-full animate-pulse rounded bg-muted" />
        <div className="h-4 w-5/6 animate-pulse rounded bg-muted" />
        <div className="h-4 w-2/3 animate-pulse rounded bg-muted" />
      </div>
    </div>
  </div>
);

const Index = () => {
  const siteUrl = "https://www.tabtechnicalservices.com";

  return (
    <Layout>
      <Seo
        title="TAB TECHNICAL SERVICE"
        description="TAB Technical Services delivers HVAC testing, adjusting, balancing, commissioning, airflow, noise, temperature, and flushing support for commercial projects across Chennai and Kerala."
        path="/"
        keywords="HVAC testing Chennai, TAB services Kerala, air balancing, commissioning, airflow measurement, chilled water flushing, HVAC validation"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "TAB Technical Services",
            url: `${siteUrl}/`,
            image: `${siteUrl}/image/favicon.ico`,
            telephone: "+91 6380513174",
            email: "tabtechnicalservice@gmail.com",
            areaServed: ["Chennai", "Kerala", "Tamil Nadu"],
            address: [
              {
                "@type": "PostalAddress",
                streetAddress: "Nandampakkam, Kundrathur",
                addressLocality: "Chennai",
                postalCode: "600069",
                addressCountry: "IN",
              },
              {
                "@type": "PostalAddress",
                streetAddress: "Udhayanapuram, Vaikom",
                addressLocality: "Kottayam",
                postalCode: "686146",
                addressCountry: "IN",
              },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "TAB Technical Services",
            url: `${siteUrl}/`,
          },
        ]}
      />
      <Hero />
      <Suspense fallback={<SectionFallback />}>
        <AboutPreview />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <ServicesPreview />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Projects />
      </Suspense>
    </Layout>
  );
};

export default Index;
