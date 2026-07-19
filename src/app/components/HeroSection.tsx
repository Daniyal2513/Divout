import { motion, useInView, animate } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { Sparkles, Zap, Brain } from 'lucide-react';

// Animated counter that counts up when scrolled into view
interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
}

function AnimatedCounter({ value, prefix = '', suffix = '', decimals = 0, duration = 3 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, value, {
      duration,
      ease: 'easeOut',
      onUpdate: (latest) => setDisplay(latest),
    });

    return () => controls.stop();
  }, [isInView, value, duration]);

  const formatted =
    decimals > 0
      ? display.toFixed(decimals)
      : Math.round(display).toLocaleString();

  return (
    <span ref={ref}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

export function HeroSection() {
  return (
    <>

      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-[#0a0a14] to-black relative overflow-hidden pt-20">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#65A3F8] rounded-full filter blur-[100px]"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#65A3F8] rounded-full filter blur-[120px]"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: 'linear-gradient(#FFFFFF 1px, transparent 1px), linear-gradient(90deg, #FFFFFF 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#65A3F8]/10 rounded-full mb-6 border border-[#65A3F8]/20">
                <Sparkles className="text-[#65A3F8]" size={20} />
                <span className="text-white" style={{ fontFamily: 'var(--font-secondary)', fontWeight: 500 }}>
                  Next-Gen Digital Agency
                </span>
              </div>

              <h1 className="mb-6" style={{
                fontFamily: 'var(--font-primary)',
                fontWeight: 900,
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                lineHeight: 1.1,
                color: '#FFFFFF',
                letterSpacing: '0.01em'
              }}>
                Designing the Digital Frontier
              </h1>

              <p className="mb-8 text-lg leading-relaxed text-white/80" style={{ fontFamily: 'var(--font-secondary)', fontWeight: 400 }}>
                Where cutting-edge creative design meets revolutionary AI voice technology. We transform businesses through exceptional digital experiences and intelligent automation.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-block bg-[#65A3F8] text-black px-8 py-4 rounded-full hover:bg-[#5593e8] transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#65A3F8]/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#65A3F8]"
                  style={{ fontFamily: 'var(--font-primary)', fontWeight: 600 }}
                >
                  Start Your Journey
                </a>
                <a
                  href="#portfolio"
                  className="inline-block bg-transparent text-white px-8 py-4 rounded-full border-2 border-white hover:bg-white hover:text-black transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#65A3F8]"
                  style={{ fontFamily: 'var(--font-primary)', fontWeight: 600 }}
                >
                  View Our Work
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mt-12">
                <div>
                  <div className="text-3xl mb-1" style={{ fontFamily: 'var(--font-primary)', fontWeight: 700, color: '#65A3F8' }}>
                    <AnimatedCounter value={200} suffix="+" />
                  </div>
                  <div className="text-sm text-white/70" style={{ fontFamily: 'var(--font-secondary)' }}>Projects Delivered</div>
                </div>
                <div>
                  <div className="text-3xl mb-1" style={{ fontFamily: 'var(--font-primary)', fontWeight: 700, color: '#65A3F8' }}>
                    <AnimatedCounter value={98} suffix="%" />
                  </div>
                  <div className="text-sm text-white/70" style={{ fontFamily: 'var(--font-secondary)' }}>Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl mb-1" style={{ fontFamily: 'var(--font-primary)', fontWeight: 700, color: '#65A3F8' }}>
                    <AnimatedCounter value={50} suffix="+" />
                  </div>
                  <div className="text-sm text-white/70" style={{ fontFamily: 'var(--font-secondary)' }}>Team Members</div>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Abstract 3D Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] rounded-3xl p-8 border border-white/10 shadow-2xl backdrop-blur-sm">
                {/* Mock AI Dashboard */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#65A3F8] to-[#4589e0] rounded-xl flex items-center justify-center">
                        <Brain className="text-white" size={20} />
                      </div>
                      <div>
                        <div className="text-sm" style={{ fontFamily: 'var(--font-primary)', fontWeight: 600, color: '#FFFFFF' }}>AI Voice Bot</div>
                        <div className="text-xs text-white/60">Active & Learning</div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-2 h-2 bg-[#65A3F8] rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-[#65A3F8] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                      <div className="w-2 h-2 bg-[#65A3F8] rounded-full animate-pulse" style={{ animationDelay: '0.8s' }}></div>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: 'Orders Processed', value: 1284, decimals: 0, prefix: '', suffix: '', icon: Zap },
                      { label: 'Response Time', value: 0.8, decimals: 1, prefix: '', suffix: 's', icon: Sparkles },
                      { label: 'Accuracy Rate', value: 99.7, decimals: 1, prefix: '', suffix: '%', icon: Brain },
                      { label: 'Active Users', value: 847, decimals: 0, prefix: '', suffix: '', icon: Sparkles }
                    ].map((metric, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        className="bg-black/40 rounded-xl p-4 border border-white/10"
                      >
                        <metric.icon className="text-[#65A3F8] mb-2" size={20} />
                        <div className="text-2xl mb-1" style={{ fontFamily: 'var(--font-primary)', fontWeight: 700, color: '#FFFFFF' }}>
                          <AnimatedCounter
                            value={metric.value}
                            decimals={metric.decimals}
                            prefix={metric.prefix}
                            suffix={metric.suffix}
                            duration={1.5}
                          />
                        </div>
                        <div className="text-xs text-white/60" style={{ fontFamily: 'var(--font-secondary)' }}>{metric.label}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Waveform Visualization */}
                  <div className="bg-gradient-to-r from-[#65A3F8]/10 to-[#65A3F8]/5 rounded-xl p-4">
                    <div className="flex items-end justify-between gap-1 h-16">
                      {[...Array(20)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="bg-[#65A3F8] rounded-full flex-1"
                          animate={{ height: ['20%', '100%', '30%'] }}
                          transition={{ repeat: Infinity, duration: 2, delay: i * 0.06 }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 bg-[#0a0a0a] rounded-2xl p-4 shadow-xl border border-white/10"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                <Zap className="text-[#65A3F8]" size={24} />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-[#0a0a0a] rounded-2xl p-4 shadow-xl border border-white/10"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
              >
                <Sparkles className="text-[#65A3F8]" size={24} />
              </motion.div>
            </motion.div>
          </div>
        </div >
      </section >
    </>
  );
}