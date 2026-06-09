import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUp, Github, Linkedin, Mail, Phone, Calendar } from 'lucide-react';
import { PERSONAL_INFO } from './data';
import Hero from './components/Hero';
import PortfolioTimeline from './components/PortfolioTimeline';
import SkillsGrid from './components/SkillsGrid';
import ProjectsSection from './components/ProjectsSection';
import ContactCard from './components/ContactCard';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', href: '#' },
    { label: 'Journey', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E5E5E5] font-sans selection:bg-emerald-500/20 selection:text-emerald-400">
      
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only fixed top-4 left-4 z-100 px-4 py-2 bg-emerald-600 text-white font-bold rounded-xl shadow-lg border border-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
      >
        Skip to main content
      </a>

      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-[#0A0A0A]/90 backdrop-blur-md border-b border-zinc-800/80 shadow-md py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
          
          <a href="#" className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-xl px-1 py-0.5">
            <div className="w-9 h-9 bg-linear-to-tr from-[#10B981] to-[#059669] rounded-xl flex items-center justify-center text-black font-extrabold text-base shadow-sm group-hover:scale-105 transition-transform">
              P
            </div>
            <span className="font-display font-bold text-white text-lg tracking-tight group-hover:text-emerald-400 transition-colors">
              Praise Hombarume
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded px-1.5 py-0.5"
              >
                {item.label}
              </a>
            ))}
            
            <a
              href="#contact"
              className="inline-flex items-center bg-zinc-100 text-black font-bold text-xs uppercase tracking-widest px-4 py-2.5 rounded-xl transition-all shadow-sm hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              Hire Me
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-nav-trigger"
            className="md:hidden p-2 text-zinc-400 hover:text-white bg-zinc-900 rounded-xl border border-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen ? 'true' : 'false'}
          >
            {mobileMenuOpen ? <X id="menu-close-icon" className="w-5 h-5" /> : <Menu id="menu-open-icon" className="w-5 h-5" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-20 z-40 md:hidden bg-zinc-950/95 backdrop-blur-lg border-b border-zinc-850 shadow-2xl px-6 py-8 flex flex-col gap-5"
            role="navigation"
            aria-label="Mobile Navigation"
          >
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold text-zinc-100 hover:text-emerald-400 transition-all border-b border-zinc-900 pb-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 bg-zinc-100 text-black font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <main id="main-content" className="relative" tabIndex={-1}>
        <Hero />
        <PortfolioTimeline />
        <SkillsGrid />
        <ProjectsSection />
        <ContactCard />
      </main>

      {/* Dedicated Global Footer */}
      <footer className="bg-[#0c0c0c] text-zinc-400 py-16 border-t border-zinc-900 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            
            <div className="col-span-1 md:col-span-5 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-linear-to-tr from-[#10B981] to-[#059669] rounded-lg flex items-center justify-center text-black font-extrabold text-sm">
                  P
                </div>
                <span className="font-display font-bold text-white text-base tracking-tight">
                  Praise Hombarume
                </span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
                Computer Science &amp; Software Engineering student at BIUST, passionate about building reliable software interfaces, analytics pipelines, and dynamic client solutions.
              </p>
            </div>

            <div className="col-span-1 md:col-span-3 space-y-4">
              <h4 className="font-bold text-xs uppercase tracking-widest text-white">Navigation</h4>
              <ul className="space-y-2.5 text-xs">
                {menuItems.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="hover:text-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded px-1 py-0.5">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-1 md:col-span-4 space-y-4">
              <h4 className="font-bold text-xs uppercase tracking-widest text-white">Permanent Contacts</h4>
              <ul className="space-y-2.5 text-xs">
                <li className="flex items-center gap-2">
                  <Mail id="footer-mail" className="w-4 h-4 text-emerald-400" />
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded px-1 py-0.5">
                    {PERSONAL_INFO.email}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone id="footer-phone" className="w-4 h-4 text-emerald-400" />
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded px-1 py-0.5">
                    {PERSONAL_INFO.phone}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Github id="footer-github" className="w-4 h-4 text-[#10B981]" />
                  <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded px-1 py-0.5">
                    github.com/{PERSONAL_INFO.github.split('/').pop()}
                  </a>
                </li>
              </ul>
            </div>

          </div>

          <div className="mt-12 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
            <p>&copy; {new Date().getFullYear()} Praise Hombarume. All rights reserved.</p>
            <p className="font-mono text-[10px]">
              Built with React &amp; Tailwind CSS
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Scroll-to-Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            id="scroll-to-top"
            className="fixed bottom-6 right-6 z-50 p-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg hover:shadow-emerald-900/30 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Scroll back to top"
          >
            <ArrowUp id="arrowup-icon" className="w-5 h-5 animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
