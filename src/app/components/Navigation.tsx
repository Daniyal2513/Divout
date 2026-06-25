import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl tracking-wider" style={{ fontFamily: 'var(--font-primary)', fontWeight: 700, color: '#FFFFFF' }}>
            DIVOUT
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="text-white hover:text-[#65A3F8] transition-colors" style={{ fontFamily: 'var(--font-primary)', fontWeight: 600 }}>
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-white hover:text-[#65A3F8] transition-colors" style={{ fontFamily: 'var(--font-primary)', fontWeight: 600 }}>
              About Us
            </button>
            <button onClick={() => scrollToSection('services')} className="text-white hover:text-[#65A3F8] transition-colors" style={{ fontFamily: 'var(--font-primary)', fontWeight: 600 }}>
              Services
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-white hover:text-[#65A3F8] transition-colors" style={{ fontFamily: 'var(--font-primary)', fontWeight: 600 }}>
              Portfolio
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-white hover:text-[#65A3F8] transition-colors" style={{ fontFamily: 'var(--font-primary)', fontWeight: 600 }}>
              Testimonials
            </button>
            <button onClick={() => scrollToSection('contact')} className="bg-[#65A3F8] text-black px-6 py-2 rounded-full hover:bg-[#5593e8] transition-colors" style={{ fontFamily: 'var(--font-primary)', fontWeight: 600 }}>
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection('home')} className="text-white hover:text-[#65A3F8] transition-colors text-left" style={{ fontFamily: 'var(--font-primary)', fontWeight: 600 }}>
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-white hover:text-[#65A3F8] transition-colors text-left" style={{ fontFamily: 'var(--font-primary)', fontWeight: 600 }}>
              About Us
            </button>
            <button onClick={() => scrollToSection('services')} className="text-white hover:text-[#65A3F8] transition-colors text-left" style={{ fontFamily: 'var(--font-primary)', fontWeight: 600 }}>
              Services
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-white hover:text-[#65A3F8] transition-colors text-left" style={{ fontFamily: 'var(--font-primary)', fontWeight: 600 }}>
              Portfolio
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-white hover:text-[#65A3F8] transition-colors text-left" style={{ fontFamily: 'var(--font-primary)', fontWeight: 600 }}>
              Testimonials
            </button>
            <button onClick={() => scrollToSection('contact')} className="bg-[#65A3F8] text-black px-6 py-2 rounded-full hover:bg-[#5593e8] transition-colors w-fit" style={{ fontFamily: 'var(--font-primary)', fontWeight: 600 }}>
              Contact Us
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
