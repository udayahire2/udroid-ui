import { Header } from "./components/header";
import { ScrollToTop } from "@/components/scroll-to-top";
import "./App.css";
import { Hero } from "./components/hero";
import { ThemeProvider } from "@/components/theme-provider";
import { FeatureSection } from "./components/feature-section";
import { TrustedBySection } from "./components/trusted-by-section";
import { VisualComponentPreview } from "./components/visual-component-preview";

import { FAQSection } from "./components/faq-section";
import { RoadmapSection } from "./components/roadmap-section";
import { DeveloperFirstSection } from "./components/developer-first-section";
import { Routes, Route, useLocation } from "react-router-dom";
import { Footer } from "@/components/footer";
import DocsLayout from "@/app/docs/layout";
import DocsPageIndex from "@/app/docs/page";
import DocsSlugPage from "@/app/docs/[slug]/page";
import { FigmaUI } from "./components/figma-ui";
import { ReactLenis } from "lenis/react";
import { useRef, useEffect } from "react";
import gsap from "gsap";

function App() {
  const lenisRef = useRef<any>(null);
  const location = useLocation();
  const isDocsPage = location.pathname.startsWith("/docs");

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }

    gsap.ticker.add(update)

    return () => {
      gsap.ticker.remove(update)
    }
  }, [])

  return (
    <ReactLenis root ref={lenisRef} autoRaf={false}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="min-h-screen bg-background text-foreground flex flex-col">
          <ScrollToTop />
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/docs" element={<DocsLayout />}>
                <Route index element={<DocsPageIndex />} />
                <Route path="*" element={<DocsSlugPage />} />
              </Route>
              <Route path="/figma" element={<FigmaUI />} />
              <Route path="/roadmap" element={<RoadmapSection />} />
            </Routes>
          </main>
          {!isDocsPage && <Footer />}
        </div>
      </ThemeProvider>
    </ReactLenis>
  );
}

export default App;

function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBySection />
      <FeatureSection />
      <DeveloperFirstSection />
      <VisualComponentPreview />
      <RoadmapSection />
      <FAQSection />
    </>
  );
}

