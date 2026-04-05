import { lazy, Suspense } from "react";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";

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

const Index = () => (
  <Layout>
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

export default Index;
