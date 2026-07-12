import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import CursorGlow from "./components/Cursorglow";
import { Helmet } from "react-helmet-async"

export default function App() {
  return (
    <>
      <Helmet>
        <title>Divout - Custom Web Development & Software Solutions Agency</title>
        <meta name="description" content="Divout builds custom websites, POS systems, and SaaS solutions for restaurants and retail businesses. Web development agency specializing in React, Next.js, and scalable software." />
        <meta property="og:title" content="Divout - Custom Web Development & Software Solutions Agency" />
        <meta property="og:description" content="Divout builds custom websites, POS systems, and SaaS solutions for restaurants and retail businesses. Web development agency specializing in React, Next.js, and scalable software." />
        <meta property="og:image" content="https://www.divout.site/og-image.jpg" />
        <meta property="og:url" content="https://www.divout.site" />
        <link rel="canonical" href="https://www.divout.site" />
      </Helmet>
      <div className="min-h-screen bg-black">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <TestimonialsSection />
        <ContactSection />
        <CursorGlow />

      </div>
    </>
  );
}