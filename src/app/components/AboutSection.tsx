import { motion } from 'motion/react';
import { Target, Lightbulb, Users } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-[#65A3F8]/10 rounded-full mb-4 border border-[#65A3F8]/20">
            <span className="text-[#65A3F8]" style={{ fontFamily: 'var(--font-primary)', fontWeight: 600 }}>About DIVOUT</span>
          </div>
          <h2 className="mb-6" style={{
            fontFamily: 'var(--font-primary)',
            fontWeight: 900,
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            color: '#FFFFFF'
          }}>
            Pioneering Digital Excellence
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-white/80 leading-relaxed" style={{ fontFamily: 'var(--font-secondary)' }}>
            DIVOUT is a multidisciplinary digital agency that combines creative brilliance with cutting-edge AI technology. We're not just building websites—we're crafting intelligent digital ecosystems that transform how businesses connect with their audiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Target,
              title: 'Our Mission',
              description: 'To empower businesses with innovative digital solutions that drive growth, enhance user experiences, and leverage the power of AI to stay ahead in the digital age.'
            },
            {
              icon: Lightbulb,
              title: 'Our Vision',
              description: 'To become the global leader in integrated creative and AI-powered digital solutions, setting new standards for innovation and excellence in the industry.'
            },
            {
              icon: Users,
              title: 'Our Team',
              description: 'A diverse collective of designers, developers, AI specialists, and strategists united by a passion for creating exceptional digital experiences.'
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] rounded-2xl p-8 border border-white/10 hover:border-[#65A3F8]/30 transition-all hover:shadow-xl group"
            >
              <div className="w-14 h-14 bg-[#65A3F8]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#65A3F8] transition-colors">
                <item.icon className="text-[#65A3F8] group-hover:text-white transition-colors" size={28} />
              </div>
              <h3 className="mb-4" style={{ fontFamily: 'var(--font-primary)', fontWeight: 700, fontSize: '1.5rem', color: '#FFFFFF' }}>
                {item.title}
              </h3>
              <p className="text-white/80 leading-relaxed" style={{ fontFamily: 'var(--font-secondary)' }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Tech Lines Decoration */}
        <div className="relative h-32 my-12 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-full h-px bg-gradient-to-r from-transparent via-[#65A3F8] to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
            />
          </div>
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#65A3F8] rounded-full"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-white/10 rounded-3xl p-12 text-white"
        >
          <h3 className="text-center mb-12" style={{ fontFamily: 'var(--font-primary)', fontWeight: 900, fontSize: '2.5rem' }}>
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: 'Innovation', desc: 'Pushing boundaries with cutting-edge solutions' },
              { label: 'Excellence', desc: 'Delivering nothing but the highest quality' },
              { label: 'Integrity', desc: 'Building trust through transparency' },
              { label: 'Collaboration', desc: 'Growing together with our clients' }
            ].map((value, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl mb-4" style={{ fontFamily: 'var(--font-primary)', fontWeight: 900, color: '#65A3F8' }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="mb-2" style={{ fontFamily: 'var(--font-primary)', fontWeight: 700, fontSize: '1.25rem' }}>
                  {value.label}
                </div>
                <div className="text-white/70 text-sm" style={{ fontFamily: 'var(--font-secondary)' }}>
                  {value.desc}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
