import { motion } from 'motion/react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

export function PortfolioSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: 'E-Commerce',
      category: 'Web Development',
      description: 'A fully integrated e-commerce platform with AI-powered recommendations',
      color: 'from-[#0068fa]/80 to-transparent',
      // backgroundColor:'rgba(101, 163, 248, 0.08)',
      // borderColor:'#ffffff40'
    },
    {
      title: 'Visual Identity',
      category: 'Creative Design',
      description: 'Complete brand transformation for a tech startup',
      color: 'from-[#0068fa]/100 to-transparent'
    },
    {
      title: 'AI Voice Assistant',
      category: 'AI Solutions',
      description: 'Intelligent voice ordering system for restaurant chains',
      color: 'from-[#0068fa]/100 to-transparent'
    },
    {
      title: 'Statics',
      category: 'Photography',
      description: 'Premium product showcase for luxury brand',
      color: 'from-[#0068fa]/100 to-transparent'
    },
    {
      title: 'SEO Campaign',
      category: 'Marketing',
      description: '300% traffic increase in 6 months',
      color: 'from-[#0068fa]/100 to-transparent'
    },
    {
      title: 'CRM Development',
      category: 'Software',
      description: 'Custom CRM development for businesses in Pakistan — customer management, sales tracking, and automated reporting built to streamline operations and improve customer relationships.',
      color: 'from-[#0068fa]/100 to-transparent'
    },
    {
      title: 'Mobile App Design',
      category: 'UI/UX',
      description: 'Award-winning fintech mobile experience',
      color: 'from-[#0068fa]/100 to-[#00000]'
    },
    {
      title: 'Videos',
      category: 'Production',
      description: 'Award-winning fintech mobile experience',
      color: 'from-[#0068fa]/100 to-transparent'
    },
    {
      title: 'POS System',
      category: 'Software',
      description: 'Fast and reliable point-of-sale solution for restaurants and retail stores',
      color: 'from-[#0068fa]/100 to-transparent'
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-[#65A3F8]/10 rounded-full mb-4 border border-[#65A3F8]/20">
            <span className="text-[#65A3F8]" style={{ fontFamily: 'var(--font-primary)', fontWeight: 600 }}>Our Work</span>
          </div>
          <h2 className="mb-6" style={{
            fontFamily: 'var(--font-primary)',
            fontWeight: 900,
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            color: '#FFFFFF'
          }}>
            Featured Projects
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-white/80 leading-relaxed" style={{ fontFamily: 'var(--font-secondary)' }}>
            Explore our portfolio of innovative digital solutions that have transformed businesses
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative rounded-2xl p-8 aspect-[4/3] cursor-pointer [clip-path:inset(0_round_1rem)]"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] border border-[#ffffff]/12 transition-transform duration-500 ${hoveredIndex === index ? 'scale-110' : 'scale-100'
                  }`}
                style={{
                  // background: '#0a0a0a',
                  // borderColor: '#ffffff33',
                  // backdropFilter: 'blur(15px)',
                  // WebkitBackdropFilter: 'blur(1px)',
                  // boxShadow: 'inset 0 0 80px rgba(101, 163, 248, 0.08), 0 4px 30px rgba(0, 0, 0, 0.3)',
                }}
              />

              {/* Overlay */}
              <div
                className="absolute inset-0 transition-all duration-300"
                style={{
                  // background: 'rgba(0, 0, 0, 0.15)',
                  // backdropFilter: 'blur(2px)',
                  // WebkitBackdropFilter: 'blur(2px)',
                }}
              />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs text-white" style={{ fontFamily: 'var(--font-secondary)', fontWeight: 500 }}>
                    {project.category}
                  </div>
                  <motion.div
                    animate={{ rotate: hoveredIndex === index ? 40 : 0 }}
                    transition={{ duration: 0.1 }}
                    className="w-10 h-10 bg-white/20  rounded-full flex items-center justify-center group-hover:bg-[#65A3F8] transition-colors"
                  >
                    <ArrowUpRight className="text-white" size={20} />
                  </motion.div>
                </div>


                <div>
                  <h3 className="text-white mb-2" style={{ fontFamily: 'var(--font-primary)', fontWeight: 700, fontSize: '1.5rem' }}>
                    {project.title}
                  </h3>
                  <p className="text-white/90 text-sm" style={{ fontFamily: 'var(--font-secondary)' }}>
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 border-2 border-[#65A3F8]/50  rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                animate={hoveredIndex === index}
              // transition={{ repeat: Infinity, duration: 1.5 }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-12"
        >
          <button className="inline-flex items-center gap-2 bg-transparent text-white px-8 py-4 rounded-full border-2 border-white hover:bg-white hover:text-black transition-all" style={{ fontFamily: 'var(--font-primary)', fontWeight: 600 }}>
            View Full Portfolio
            <ExternalLink size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
