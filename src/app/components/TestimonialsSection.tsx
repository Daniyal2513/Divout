import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Muhammad Alam',
      role: 'CEO, TechVision Inc.',
      content: 'DIVOUT transformed our digital presence completely. Their AI voice bot has revolutionized our customer service, and the design work is simply exceptional. A true partner in innovation.',
      rating: 5,
      company: 'TechVision'
    },
    {
      name: 'Alamgir Paracha',
      role: 'Founder, FreshBites',
      content: 'The AI Voice Order Bot they developed for our restaurant chain exceeded all expectations. It handles thousands of orders daily with incredible accuracy. ROI was achieved within 3 months.',
      rating: 5,
      company: 'FreshBites'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director, LuxeStyle',
      content: 'Their photography and branding work elevated our entire brand. The team is professional, creative, and truly understands modern digital aesthetics. Highly recommended!',
      rating: 5,
      company: 'LuxeStyle'
    },
    {
      name: 'David Park',
      role: 'CTO, FinanceHub',
      content: 'Outstanding web development and SEO services. Our traffic increased by 250% in 6 months, and the site performance is flawless. DIVOUT delivers on every promise.',
      rating: 5,
      company: 'FinanceHub'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-[#0a0a0a] to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-[#65A3F8] rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-[#65A3F8] rounded-full filter blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-[#65A3F8]/10 rounded-full mb-4 border border-[#65A3F8]/20">
            <span className="text-[#65A3F8]" style={{ fontFamily: 'var(--font-primary)', fontWeight: 600 }}>Client Success Stories</span>
          </div>
          <h2 className="mb-6" style={{
            fontFamily: 'var(--font-primary)',
            fontWeight: 900,
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            color: '#FFFFFF'
          }}>
            What Our Clients Say
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-white/80 leading-relaxed" style={{ fontFamily: 'var(--font-secondary)' }}>
            Don't just take our word for it—hear from the businesses we've helped transform
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-[#0a0a0a] rounded-3xl p-12 shadow-2xl border border-white/10 relative"
          >
            {/* Quote Icon */}
            <div className="absolute -top-6 left-12 w-12 h-12 bg-[#65A3F8] rounded-full flex items-center justify-center">
              <Quote className="text-black" size={24} />
            </div>

            {/* Rating */}
            <div className="flex gap-1 mb-6 justify-center">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="text-[#65A3F8] fill-[#65A3F8]" size={20} />
              ))}
            </div>

            {/* Content */}
            <p className="text-xl text-center text-white mb-8 leading-relaxed" style={{ fontFamily: 'var(--font-secondary)', fontWeight: 400 }}>
              "{testimonials[currentIndex].content}"
            </p>

            {/* Author */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#65A3F8] to-[#4589e0] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl" style={{ fontFamily: 'var(--font-primary)', fontWeight: 700 }}>
                {testimonials[currentIndex].name.charAt(0)}
              </div>
              <div className="mb-1" style={{ fontFamily: 'var(--font-primary)', fontWeight: 700, fontSize: '1.25rem', color: '#FFFFFF' }}>
                {testimonials[currentIndex].name}
              </div>
              <div className="text-white/70" style={{ fontFamily: 'var(--font-secondary)' }}>
                {testimonials[currentIndex].role}
              </div>
              <div className="text-[#65A3F8] text-sm mt-2" style={{ fontFamily: 'var(--font-secondary)', fontWeight: 600 }}>
                {testimonials[currentIndex].company}
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              type="button"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
              className="w-12 h-12 bg-[#0a0a0a] rounded-full border border-white/20 flex items-center justify-center hover:bg-[#65A3F8] hover:border-[#65A3F8] transition-all group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#65A3F8]"
            >
              <ChevronLeft className="text-white group-hover:text-black transition-colors" size={24} aria-hidden="true" />
            </button>

            {/* Dots */}
            <div className="flex gap-2" role="tablist" aria-label="Testimonials">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  role="tab"
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-selected={index === currentIndex}
                  className={`w-2 h-2 rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#65A3F8] ${index === currentIndex ? 'bg-[#65A3F8] w-8' : 'bg-white/20'
                    }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              className="w-12 h-12 bg-[#0a0a0a] rounded-full border border-white/20 flex items-center justify-center hover:bg-[#65A3F8] hover:border-[#65A3F8] transition-all group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#65A3F8]"
            >
              <ChevronRight className="text-white group-hover:text-black transition-colors" size={24} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
