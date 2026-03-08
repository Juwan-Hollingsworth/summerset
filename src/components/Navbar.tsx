import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Site Plan', path: '/map' },
    { name: 'The Vision', path: '/vision' },
    { name: 'Buyer\'s Guide', path: '/guide' },
    { name: 'Blog', path: '/blog' },
  ];

  const isTransparentMode = !scrolled && location.pathname === '/';

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-6 py-4 md:px-12 md:py-6",
      isTransparentMode ? "bg-transparent" : "bg-brand-paper/80 backdrop-blur-xl shadow-sm py-3 md:py-4"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex flex-col">
          <span className={cn(
            "text-2xl font-serif tracking-tighter leading-none transition-colors",
            isTransparentMode ? "text-white" : "text-brand-ink"
          )}>SUMMERSET</span>
          <span className="text-[10px] uppercase tracking-[0.4em] text-brand-olive font-bold mt-1">at Greenpark</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-[11px] uppercase tracking-widest font-semibold transition-all hover:text-brand-olive",
                location.pathname === link.path 
                  ? "text-brand-olive" 
                  : isTransparentMode
                    ? "text-white/80" 
                    : "text-brand-ink/60"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-6">
          <button className={cn(
            "flex items-center gap-2 text-[11px] uppercase tracking-widest font-bold transition-colors",
            isTransparentMode ? "text-white/60 hover:text-white" : "text-brand-ink/40 hover:text-brand-ink"
          )}>
            <Globe size={14} />
            EN / USD
          </button>
          <button className="bg-brand-ink text-white px-6 py-3 rounded-full text-[11px] uppercase tracking-widest font-bold hover:bg-brand-olive transition-all shadow-lg shadow-brand-ink/10">
            Inquire
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={cn("md:hidden p-2 transition-colors", isTransparentMode ? "text-white" : "text-brand-ink")}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-paper border-t border-brand-ink/5 shadow-2xl p-8 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "text-2xl font-serif transition-all",
                    location.pathname === link.path ? "text-brand-olive" : "text-brand-ink"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-brand-ink/5" />
              <div className="flex flex-col gap-4">
                <button className="flex items-center gap-3 text-brand-ink/60 font-medium">
                  <Phone size={18} />
                  +1 (876) 555-0123
                </button>
                <button className="w-full bg-brand-olive text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs">
                  Request Brochure
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
