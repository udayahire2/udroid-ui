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
import { Routes, Route, useLocation } from "react-router-dom";
import { Footer } from "@/components/footer";
import { FigmaUI } from "./components/figma-ui";
import { ReactLenis } from "lenis/react";
import DocsLayout from "@/layouts/docs-layout";
import { Navigate } from "react-router-dom";
import Introduction from "@/docs/introduction.mdx";
import Installation from "@/docs/installation.mdx";
import Theming from "@/docs/theming.mdx";
import Avatar from "@/docs/components/avatar.mdx";
import Button from "@/docs/components/button.mdx";
import Input from "@/docs/components/input.mdx";
import Dialog from "@/docs/components/dialog.mdx";
import Label from "@/docs/components/label.mdx";
import RadioGroup from "@/docs/components/radio.mdx";
import Separator from "@/docs/components/separator.mdx";
import Switch from "@/docs/components/switch.mdx";
import Tooltip from "@/docs/components/tooltip.mdx";
import Textarea from "@/docs/components/textarea.mdx";

import { MDXContent } from "@/components/mdx-content";

function App() {
  const location = useLocation();
  const isDocs = location.pathname.startsWith("/docs");

  return (
    <ReactLenis root autoRaf={true}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="min-h-screen bg-background text-foreground flex flex-col">
          <ScrollToTop />
          {!isDocs && <Header />}
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/figma" element={<FigmaUI />} />
              <Route path="/roadmap" element={<RoadmapSection />} />
              <Route path="/docs" element={<DocsLayout />}>
                <Route index element={<Navigate to="introduction" replace />} />
                <Route path="introduction" element={<MDXContent component={Introduction} />} />
                <Route path="installation" element={<MDXContent component={Installation} />} />
                <Route path="theming" element={<MDXContent component={Theming} />} />
                <Route path="avatar" element={<MDXContent component={Avatar} />} />
                <Route path="button" element={<MDXContent component={Button} />} />
                <Route path="input" element={<MDXContent component={Input} />} />
                <Route path="dialog" element={<MDXContent component={Dialog} />} />
                <Route path="label" element={<MDXContent component={Label} />} />
                <Route path="radio-group" element={<MDXContent component={RadioGroup} />} />
                <Route path="separator" element={<MDXContent component={Separator} />} />
                <Route path="switch" element={<MDXContent component={Switch} />} />
                <Route path="tooltip" element={<MDXContent component={Tooltip} />} />
                <Route path="textarea" element={<MDXContent component={Textarea} />} />
              </Route>
            </Routes>
          </main>
          {!isDocs && <Footer />}
        </div>
      </ThemeProvider>
    </ReactLenis>
  );
}

export default App;

function HomePage() {
  return (
    <div className="max-w-7xl mx-auto border-x border-border/40">
      <Hero />
      <TrustedBySection />
      <FeatureSection />
      <VisualComponentPreview />
      <FAQSection />
    </div>
  );
}

