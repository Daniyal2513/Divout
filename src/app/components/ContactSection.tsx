import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';
import { useState } from 'react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('divout-78g6.vercel.app/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Submission failed');

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-[#0a0a0a] to-black border-t border-white/10 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-[#65A3F8]/20 rounded-full mb-4 border border-[#65A3F8]/30">
            <span className="text-[#65A3F8]" style={{ fontFamily: 'var(--font-primary)', fontWeight: 600 }}>Get In Touch</span>
          </div>
          <h2 className="mb-6" style={{
            fontFamily: 'var(--font-primary)',
            fontWeight: 900,
            fontSize: 'clamp(2rem, 4vw, 3.5rem)'
          }}>
            Let's Build Something Amazing
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-white/80 leading-relaxed" style={{ fontFamily: 'var(--font-secondary)' }}>
            Ready to transform your digital presence? Get in touch with us today and let's discuss your project.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block mb-2 text-white/90" style={{ fontFamily: 'var(--font-secondary)', fontWeight: 500 }}>
                  Your Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-[#65A3F8] transition-colors backdrop-blur-sm"
                  placeholder="Divout"
                  style={{ fontFamily: 'var(--font-secondary)' }}
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-white/90" style={{ fontFamily: 'var(--font-secondary)', fontWeight: 500 }}>
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-[#65A3F8] transition-colors backdrop-blur-sm"
                  placeholder="divout@example.com"
                  style={{ fontFamily: 'var(--font-secondary)' }}
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-white/90" style={{ fontFamily: 'var(--font-secondary)', fontWeight: 500 }}>
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-[#65A3F8] transition-colors backdrop-blur-sm"
                  placeholder="Project Inquiry"
                  style={{ fontFamily: 'var(--font-secondary)' }}
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-white/90" style={{ fontFamily: 'var(--font-secondary)', fontWeight: 500 }}>
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-[#65A3F8] transition-colors backdrop-blur-sm resize-none"
                  placeholder="Tell us about your project..."
                  rows={5}
                  style={{ fontFamily: 'var(--font-secondary)' }}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-[#65A3F8] text-black px-8 py-4 rounded-full hover:bg-[#5593e8] transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#65A3F8]/30 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ fontFamily: 'var(--font-primary)', fontWeight: 600 }}
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
                <Send size={18} />
              </button>

              {status === 'success' && (
                <p className="text-green-400 text-center" style={{ fontFamily: 'var(--font-secondary)' }}>
                  Message sent successfully! We'll get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-center" style={{ fontFamily: 'var(--font-secondary)' }}>
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="mb-6" style={{ fontFamily: 'var(--font-primary)', fontWeight: 700, fontSize: '1.75rem' }}>
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#65A3F8]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[#65A3F8]" size={20} />
                  </div>
                  <div>
                    <div className="mb-1" style={{ fontFamily: 'var(--font-primary)', fontWeight: 600 }}>Email</div>
                    <div className="text-white/80" style={{ fontFamily: 'var(--font-secondary)' }}>divoutproduction@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#65A3F8]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[#65A3F8]" size={20} />
                  </div>
                  <div>
                    <div className="mb-1" style={{ fontFamily: 'var(--font-primary)', fontWeight: 600 }}>Phone</div>
                    <div className="text-white/80" style={{ fontFamily: 'var(--font-secondary)' }}>PK  +92 (330) 9042354</div>
                    <div className="text-white/80" style={{ fontFamily: 'var(--font-secondary)' }}>PA  +1 (346) 657-1348</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#65A3F8]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[#65A3F8]" size={20} />
                  </div>
                  <div>
                    <div className="mb-1" style={{ fontFamily: 'var(--font-primary)', fontWeight: 600 }}>Office</div>
                    <div className="text-white/80" style={{ fontFamily: 'var(--font-secondary)' }}>PK  Block A Shehzad Raza Street, Karachi, Pakistan</div>
                    <div className="text-white/80" style={{ fontFamily: 'var(--font-secondary)' }}>PA  Philadelphia, PA, USA</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-8 border-t border-white/20">
              <h4 className="mb-4" style={{ fontFamily: 'var(--font-primary)', fontWeight: 600 }}>Follow Us</h4>
              <div className="flex gap-4">
                {[
                  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/company/YOUR-PAGE' },
                  { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61590566043442' },
                  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/divoutproduction/' }
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-[#65A3F8] transition-all group border border-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#65A3F8]"
                  >
                    <social.icon
                      className="text-white/80 group-hover:text-white transition-colors"
                      size={20}
                      aria-hidden="true"
                    />
                  </a>
                ))}
            </div>
        </div>

        <div className="bg-gradient-to-br from-[#65A3F8]/20 to-transparent border border-[#65A3F8]/30 rounded-2xl p-6 backdrop-blur-sm">
          <h4 className="mb-3" style={{ fontFamily: 'var(--font-primary)', fontWeight: 700, fontSize: '1.25rem' }}>
            Ready to Start?
          </h4>
          <p className="text-white/80 mb-4" style={{ fontFamily: 'var(--font-secondary)' }}>
            Schedule a free consultation call with our team to discuss your project requirements and goals.
          </p>
          <button className="bg-white text-black px-6 py-3 rounded-full hover:bg-white/90 transition-all" style={{ fontFamily: 'var(--font-primary)', fontWeight: 600 }}>
            Book a Call
          </button>
        </div>
      </motion.div>
    </div>

        {/* Footer */ }
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="pt-12 border-t border-white/20 text-center"
  >
    <div className="text-3xl mb-4" style={{ fontFamily: 'var(--font-primary)', fontWeight: 900 }}>
      DIVOUT
    </div>
    <p className="text-white/60 mb-4" style={{ fontFamily: 'var(--font-secondary)' }}>
      Pioneering the future of digital innovation
    </p>
    <p className="text-white/40 text-sm" style={{ fontFamily: 'var(--font-secondary)' }}>
      © 2026 DIVOUT. All rights reserved.
    </p>
  </motion.div>
      </div >
    </section >
  );
}
