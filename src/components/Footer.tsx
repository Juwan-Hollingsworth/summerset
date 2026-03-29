import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-ink text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <Link to="/" className="flex flex-col">
              <span className="text-3xl font-serif tracking-tighter text-white leading-none">Somerset Estate</span>
              <span className="text-[10px] uppercase tracking-[0.4em] text-brand-olive font-bold mt-1">at Greenpark</span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed">
              A premier land development project dedicated to sustainable luxury and architectural excellence on Jamaica's North Coast.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-olive transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-olive transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-olive transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-brand-olive">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/map" className="text-white/60 hover:text-white transition-colors text-sm">Interactive Site Plan</Link></li>
              <li><Link to="/vision" className="text-white/60 hover:text-white transition-colors text-sm">The Vision & Gallery</Link></li>
              <li><Link to="/guide" className="text-white/60 hover:text-white transition-colors text-sm">Buyer's Guide</Link></li>
              <li><Link to="/blog" className="text-white/60 hover:text-white transition-colors text-sm">Somerset Journal</Link></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-brand-olive">Contact</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <Phone size={18} className="text-brand-olive shrink-0" />
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Call Us</p>
                  <p className="text-sm">+1 (876) 555-0123</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Mail size={18} className="text-brand-olive shrink-0" />
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Email</p>
                  <p className="text-sm">invest@Somerset.com</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MapPin size={18} className="text-brand-olive shrink-0" />
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Location</p>
                  <p className="text-sm">North Coast Highway, St. Ann, Jamaica</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-brand-olive">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Cookie Policy</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Disclaimer</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest text-white/20">
            © 2026 Somerset at Greenpark. All Rights Reserved. | Powered by CybrWerks.io
          </p>
          <p className="text-[10px] uppercase tracking-widest text-white/20">
            Intelligent Engineering.
          </p>
        </div>
      </div>
    </footer>
  );
};
