import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play, Map as MapIcon, ShieldCheck, TrendingUp, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LeadForm } from '../components/LeadForm';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Video Background Placeholder */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/home-hero.png" 
            alt="Hillside Jamaica" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-ink/40 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-[10px] uppercase tracking-[0.3em] font-bold mb-8">
              Now Launching Phase 1
            </span>
            <h1 className="text-5xl md:text-8xl font-serif text-white leading-[0.9] mb-8 text-balance">
              Elevated Living in the <br /> 
              <span className="italic">Heart of Paradise</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
              Discover Hillside Estates—an exclusive collection of luxury residential lots overlooking the Caribbean Sea. Secure your piece of Jamaica today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                to="/map" 
                className="w-full sm:w-auto px-10 py-5 bg-white text-brand-ink rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-olive hover:text-white transition-all shadow-2xl shadow-black/20 flex items-center justify-center gap-3"
              >
                Explore Site Plan
                <ArrowRight size={16} />
              </Link>
              <button className="w-full sm:w-auto px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white/20 transition-all flex items-center justify-center gap-3">
                <Play size={16} fill="currentColor" />
                Watch Film
              </button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/40"
        >
          <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent mx-auto" />
        </motion.div>
      </section>

      {/* Value Propositions */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="space-y-6">
              <div className="w-14 h-14 bg-brand-paper rounded-2xl flex items-center justify-center text-brand-olive">
                <TrendingUp size={28} />
              </div>
              <h3 className="text-2xl font-serif text-brand-ink">High Appreciation</h3>
              <p className="text-brand-ink/60 leading-relaxed">Located in a high-growth corridor, Hillside Estates offers significant capital gains potential for early investors.</p>
            </div>
            <div className="space-y-6">
              <div className="w-14 h-14 bg-brand-paper rounded-2xl flex items-center justify-center text-brand-olive">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-2xl font-serif text-brand-ink">Secure Gated Access</h3>
              <p className="text-brand-ink/60 leading-relaxed">24/7 security and controlled access ensure peace of mind for you and your family in this private sanctuary.</p>
            </div>
            <div className="space-y-6">
              <div className="w-14 h-14 bg-brand-paper rounded-2xl flex items-center justify-center text-brand-olive">
                <Sun size={28} />
              </div>
              <h3 className="text-2xl font-serif text-brand-ink">Sustainable Design</h3>
              <p className="text-brand-ink/60 leading-relaxed">Eco-conscious infrastructure and preserved green spaces maintain the natural beauty of the Jamaican landscape.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured CTA Section */}
      <section className="py-24 md:py-32 px-6 bg-brand-paper overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10 rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src="/home-sec-02.png" 
                alt="The View" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-olive/10 rounded-full blur-3xl -z-0" />
          </div>
          
          <div className="space-y-8">
            <span className="text-[10px] uppercase tracking-[0.4em] text-brand-olive font-bold">The Opportunity</span>
            <h2 className="text-4xl md:text-6xl font-serif text-brand-ink leading-tight">
              Build Your Legacy on the <br /> <span className="italic">North Coast</span>
            </h2>
            <p className="text-lg text-brand-ink/70 leading-relaxed">
              With lots starting from $110,000 USD, Hillside Estates provides an accessible entry point into the luxury Jamaican real estate market. Each lot is pre-serviced with water, electricity, and high-speed fiber optics.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-brand-ink/5 shadow-sm">
                <div className="w-10 h-10 bg-brand-paper rounded-full flex items-center justify-center text-brand-olive">
                  <MapIcon size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-brand-ink">Phase 1: 85% Sold Out</p>
                  <p className="text-xs text-brand-ink/50">Only 6 premium lots remaining</p>
                </div>
              </div>
            </div>
            <Link 
              to="/map" 
              className="inline-flex items-center gap-3 text-brand-ink font-bold uppercase tracking-widest text-xs group"
            >
              View Available Lots
              <div className="w-8 h-8 rounded-full bg-brand-ink text-white flex items-center justify-center group-hover:translate-x-2 transition-transform">
                <ArrowRight size={14} />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <LeadForm />
        </div>
      </section>
    </div>
  );
};
