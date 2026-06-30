import { motion } from 'motion/react';
import { Palette, Code, Camera, Search, Bot, Sparkles } from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      icon: Palette,
      title: 'Visual Identity',
      description: 'Stunning visual identities, UI/UX design, and brand experiences that captivate and convert.',
      features: ['Brand Identity', 'UI/UX Design', 'Graphic Design', 'Motion Graphics']
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'High-performance, scalable web applications built with modern technologies and best practices.',
      features: ['Custom Websites', 'Web Apps', 'E-commerce', 'CMS Solutions']
    },
    {
      icon: Camera,
      title: 'Photography',
      description: 'Professional product and commercial photography that showcases your brand in the best light.',
      features: ['Product Photography', 'Commercial Shoots', 'Brand Photography', 'Post-Production']
    },
    {
      icon: Search,
      title: 'SEO & Marketing',
      description: 'Data-driven strategies to boost your online visibility and drive qualified traffic to your business.',
      features: ['SEO Optimization', 'Content Strategy', 'Analytics', 'PPC Campaigns']
    },
    {
      icon: Bot,
      title: 'AI Voice Order Bot',
      description: 'Revolutionary AI-powered voice ordering system that transforms customer interactions with natural, intelligent conversations.',
      features: ['Natural Language Processing', '24/7 Automation', 'Multi-language Support', 'Real-time Analytics'],
      highlight: true
    },
    {
      icon: Code,
      title: 'App Development',
      description: 'Custom mobile and web applications built with cutting-edge technology to scale your business and engage users.',
      features: ['iOS & Android Apps', 'Full-Stack Web Dev', 'UI/UX Design', 'Cloud Integration']
    },
    {
      icon: Sparkles,
      title: 'Video Production',
      description: 'High-quality, end-to-end video creation services tailored to tell your story and captivate your audience.',
      features: ['Scriptwriting & Storyboarding', '4K Cinematic Filming', 'Professional Editing & VFX', 'Motion Graphics']
    },
    {
      icon: Code,
      title: 'POS System',
      description: 'Fast and reliable point-of-sale solution for restaurants and retail stores',
      features: ['Billing & Invoicing', 'Inventory Management', 'Sales Reporting', 'Multi-Device Support']
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-black to-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-[#65A3F8]/10 rounded-full mb-4 border border-[#65A3F8]/20">
            <span className="text-[#65A3F8]" style={{ fontFamily: 'var(--font-primary)', fontWeight: 600 }}>What We Do</span>
          </div>
          <h2 className="mb-6" style={{
            fontFamily: 'var(--font-primary)',
            fontWeight: 900,
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            color: '#FFFFFF'
          }}>
            Our Services
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-white/80 leading-relaxed" style={{ fontFamily: 'var(--font-secondary)' }}>
            Comprehensive digital solutions combining creative excellence with cutting-edge technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-[#0a0a0a] rounded-2xl p-8 border ${service.highlight
                ? 'border-[#65A3F8] shadow-xl shadow-[#65A3F8]/20 ring-2 ring-[#65A3F8]/30'
                : 'border-white/10 hover:border-[#65A3F8]/60'
                } transition-all hover:shadow-xl group`}
            >
              {service.highlight && (
                <div className="absolute -top-3 -right-3 bg-[#65A3F8] text-black px-4 py-1 rounded-full text-sm" style={{ fontFamily: 'var(--font-primary)', fontWeight: 600 }}>
                  Flagship
                </div>
              )}

              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${service.highlight
                ? 'bg-gradient-to-br from-[#65A3F8] to-[#4589e0]'
                : 'bg-[#65A3F8]/10 group-hover:bg-[#65A3F8]'
                }`}>
                <service.icon className={service.highlight ? 'text-white' : 'text-[#65A3F8] group-hover:text-white transition-colors'} size={28} />
              </div>

              <h3 className="mb-3" style={{ fontFamily: 'var(--font-primary)', fontWeight: 700, fontSize: '1.5rem', color: '#FFFFFF' }}>
                {service.title}
              </h3>

              <p className="text-white/80 mb-6 leading-relaxed" style={{ fontFamily: 'var(--font-secondary)' }}>
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-white/70" style={{ fontFamily: 'var(--font-secondary)' }}>
                    <div className={`w-1.5 h-1.5 rounded-full ${service.highlight ? 'bg-[#65A3F8]' : 'bg-white/30'}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              {service.highlight && (
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#65A3F8]/20 to-transparent pointer-events-none"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                />
              )}
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
          {/* <button className="bg-[#65A3F8] text-black px-8 py-4 rounded-full hover:bg-[#5593e8] transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#65A3F8]/30" style={{ fontFamily: 'var(--font-primary)', fontWeight: 600 }}>
            Explore All Services
          </button> */}
        </motion.div>
      </div>
    </section>
  );
}
