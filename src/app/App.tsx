import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import CursorGlow from "./components/Cursorglow";
import {Helmet} from "react-helmet-async"

export default function App() {
  return (
    <>
     <Helmet>
        <title>Divout - Next-Gen Digital Agency | AI Voice & Web Solutions</title>
        <meta name="description" content="Where cutting-edge creative design meets revolutionary AI voice technology. We transform businesses through exceptional digital experiences and intelligent automation." />
        <meta property="og:title" content="Divout - Next-Gen Digital Agency" />
        <meta property="og:description" content="AI voice technology and exceptional digital experiences for your business." />
        <meta property="og:image" content="https://divout.site/og-image.jpg" />
        <meta property="og:url" content="https://divout.site" />
        <link rel="canonical" href="https://divout.site" />
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