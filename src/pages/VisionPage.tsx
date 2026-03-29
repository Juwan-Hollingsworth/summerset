import React from 'react';
import { motion } from 'motion/react';
import { Eye, Sparkles, Building2, Trees } from 'lucide-react';

const GALLERY_ITEMS = [
  {
    id: 1,
    title: "The Ocean View",
    current: "/first_sec.jpg",
    concept: "/first_sec2.jpg",
    description: "Experience the raw beauty of the Caribbean coastline from your future balcony."
  },
  {
    id: 2,
    title: "Somerset Estates at Greenpark",
    current: "/second_sec.jpg",
    concept: "/second_sec2.jpg",
    description: "Modern architectural concepts designed to blend seamlessly with the natural topography."
  },
  {
    id: 3,
    title: "Tropical Gardens",
    current: "/thirs_sec.jpg",
    concept: "/third_sec2.jpg",
    description: "Lush landscaping plans that prioritize native flora and sustainable water management."
  }
];

export const VisionPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[10px] uppercase tracking-[0.4em] text-brand-olive font-bold mb-4 block">The Vision</span>
          <h1 className="text-4xl md:text-7xl font-serif text-brand-ink mb-8">From Raw Beauty to <br /> <span className="italic">Architectural Excellence</span></h1>
          <p className="text-lg text-brand-ink/60 leading-relaxed">
            We believe in preserving the natural essence of the land while introducing world-class design. Explore our vision for Somerset at Greenpark through these conceptual comparisons.
          </p>
        </div>

        <div className="space-y-32">
          {GALLERY_ITEMS.map((item, index) => (
            <div key={item.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="relative group">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <div className="relative rounded-2xl overflow-hidden shadow-lg">
                        <img src={item.current} alt="Current View" className="w-full h-64 object-cover" referrerPolicy="no-referrer" />
                        <div className="absolute top-4 left-4 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-[10px] text-white font-bold uppercase tracking-widest flex items-center gap-2">
                          <Eye size={12} />
                          Current
                        </div>
                      </div>
                    </div>
                    <div className="pt-12">
                      <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                        <img src={item.concept} alt="AI Concept" className="w-full h-80 object-cover" referrerPolicy="no-referrer" />
                        <div className="absolute top-4 left-4 px-3 py-1 bg-brand-olive/80 backdrop-blur-md rounded-full text-[10px] text-white font-bold uppercase tracking-widest flex items-center gap-2">
                          <Sparkles size={12} />
                          Concept
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-paper rounded-xl flex items-center justify-center text-brand-olive">
                    {index === 0 ? <Trees size={24} /> : <Building2 size={24} />}
                  </div>
                  <h2 className="text-3xl font-serif text-brand-ink">{item.title}</h2>
                </div>
                <p className="text-lg text-brand-ink/60 leading-relaxed italic">
                  "{item.description}"
                </p>
                <div className="space-y-4 pt-4">
                  <div className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-olive" />
                    <p className="text-sm text-brand-ink font-medium">Preservation of 40% natural canopy</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-olive" />
                    <p className="text-sm text-brand-ink font-medium">Modern-Tropical architectural guidelines</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-olive" />
                    <p className="text-sm text-brand-ink font-medium">Optimized for natural cross-ventilation</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="mt-32 py-24 bg-brand-paper rounded-[3rem] text-center px-8">
          <h2 className="text-3xl md:text-5xl font-serif text-brand-ink mb-8">Ready to see it for yourself?</h2>
          <p className="text-brand-ink/60 max-w-xl mx-auto mb-12">
            We offer private guided tours of the development site. Experience the views and the atmosphere of Somerset at Greenpark in person.
          </p>
          <button className="px-10 py-5 bg-brand-ink text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-olive transition-all shadow-xl shadow-brand-ink/10">
            Book a Site Visit
          </button>
        </section>
      </div>
    </div>
  );
};
