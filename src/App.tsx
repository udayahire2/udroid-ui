import { Header } from "./components/header";
import "./App.css";
import { TypographyH1 } from "./components/hero";
import { ThemeProvider } from "@/components/theme-provider";
import { FeatureSection } from "./components/feature-section";
import { ComponentSection } from "./components/component-section";
import { FAQSection } from "./components/faq-section";
import { Routes, Route } from "react-router-dom";
import { Footer } from "@/components/footer";
import DocsLayout from "@/app/docs/layout";
import DocsPageIndex from "@/app/docs/page";
import DocsSlugPage from "@/app/docs/[slug]/page";
import { FigmaUI } from "./components/figma-ui";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/docs" element={<DocsLayout />}>
              <Route index element={<DocsPageIndex />} />
              <Route path="*" element={<DocsSlugPage />} />
            </Route>
            <Route path="/components" element={<ComponentSection />} />
            <Route path="/figma" element={<FigmaUI />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

function HomePage() {
  return (
    <>
      <TypographyH1 />
      <FeatureSection />
      <ComponentSection />
      <FAQSection />
    </>
  );
}

