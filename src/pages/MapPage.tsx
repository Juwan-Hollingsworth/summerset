import React from 'react';
import { InteractiveMap } from '../components/InteractiveMap';
import { LeadForm } from '../components/LeadForm';
import { Download, Share2, Printer } from 'lucide-react';

export const MapPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 bg-brand-paper min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.4em] text-brand-olive font-bold mb-4 block">Site Selection</span>
            <h1 className="text-4xl md:text-6xl font-serif text-brand-ink mb-6">Explore the <span className="italic">Master Plan</span></h1>
            <p className="text-lg text-brand-ink/60 leading-relaxed">
              Our interactive site plan allows you to visualize the layout of Somerset at Greenpark. Click on any lot to view its specific dimensions, pricing, and current status.
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="p-3 bg-white rounded-xl border border-brand-ink/5 text-brand-ink/60 hover:text-brand-ink transition-colors shadow-sm">
              <Share2 size={20} />
            </button>
            <button className="p-3 bg-white rounded-xl border border-brand-ink/5 text-brand-ink/60 hover:text-brand-ink transition-colors shadow-sm">
              <Printer size={20} />
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-brand-ink text-white rounded-xl font-bold uppercase tracking-widest text-[10px] hover:bg-brand-olive transition-all shadow-lg shadow-brand-ink/10">
              <Download size={16} />
              Brochure
            </button>
          </div>
        </div>

        <div className="mb-24">
          <InteractiveMap />
        </div>

     <div className="space-y-12">
  <div className="bg-white p-10 rounded-3xl border border-brand-ink/5 shadow-sm">
    <h3 className="text-2xl font-serif text-brand-ink mb-6">Lot Specifications & Features</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <div className="w-2 h-2 rounded-full bg-brand-olive mt-2 shrink-0" />
          <p className="text-brand-ink/70 text-sm">All lots are fully titled and ready for immediate transfer.</p>
        </div>
        <div className="flex items-start gap-4">
          <div className="w-2 h-2 rounded-full bg-brand-olive mt-2 shrink-0" />
          <p className="text-brand-ink/70 text-sm">Pre-installed underground utilities (Water, Electricity, Fiber).</p>
        </div>
        <div className="flex items-start gap-4">
          <div className="w-2 h-2 rounded-full bg-brand-olive mt-2 shrink-0" />
          <p className="text-brand-ink/70 text-sm">Paved asphalt roads with concrete curbs and drainage.</p>
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <div className="w-2 h-2 rounded-full bg-brand-olive mt-2 shrink-0" />
          <p className="text-brand-ink/70 text-sm">Architectural guidelines to protect your investment value.</p>
        </div>
        <div className="flex items-start gap-4">
          <div className="w-2 h-2 rounded-full bg-brand-olive mt-2 shrink-0" />
          <p className="text-brand-ink/70 text-sm">Professional landscaping of all common areas and verges.</p>
        </div>
        <div className="flex items-start gap-4">
          <div className="w-2 h-2 rounded-full bg-brand-olive mt-2 shrink-0" />
          <p className="text-brand-ink/70 text-sm">Centralized sewage treatment system for Phase 1.</p>
        </div>
      </div>
    </div>
  </div>
  
  <LeadForm 
    source="Map Page" 
    title="Reserve Your Lot" 
    subtitle="Interested in a specific lot? Contact us to place a 48-hour hold."
  />
</div>
      </div>
    </div>
  );
};
