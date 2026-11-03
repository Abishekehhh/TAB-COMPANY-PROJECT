import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Chatbot from "@/components/Chatbot/Chatbot";

const loadIndex = () => import("./pages/Index");
const loadAboutPage = () => import("./pages/AboutPage");
const loadServicesPage = () => import("./pages/ServicesPage");
const loadProjectsPage = () => import("./pages/ProjectsPage");
const loadContactPage = () => import("./pages/ContactPage");
const loadNotFound = () => import("./pages/NotFound");

const Index = lazy(loadIndex);
const AboutPage = lazy(loadAboutPage);
const ServicesPage = lazy(loadServicesPage);
const ProjectsPage = lazy(loadProjectsPage);
const ContactPage = lazy(loadContactPage);
const NotFound = lazy(loadNotFound);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const RouteWarmup = () => {
  useEffect(() => {
    const warmRoutes = () => {
      void loadAboutPage();
      void loadServicesPage();
      void loadProjectsPage();
      void loadContactPage();
    };

    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(warmRoutes, { timeout: 1500 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = window.setTimeout(warmRoutes, 1200);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return null;
};

const RouteFallback = () => (
  <div className="flex min-h-[40vh] items-center justify-center bg-background px-4">
    <div className="text-center">
      <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-accent/20 border-t-accent" />
      <p className="text-sm text-muted-foreground">Loading page...</p>
    </div>
  </div>
);

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <RouteWarmup />
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
    <Chatbot />
  </BrowserRouter>
);

export default App;
