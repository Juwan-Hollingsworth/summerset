import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MapPin, Maximize2, DollarSign, Info, ChevronRight } from 'lucide-react';
import { LOTS_DATA } from '../data/lots';
import { Lot } from '../types';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Mock Exchange Rate - In a real app, fetch from https://v6.exchangerate-api.com/v6/YOUR-API-KEY/latest/USD
const JMD_EXCHANGE_RATE = 155.5; 

export const InteractiveMap: React.FC = () => {
  const [selectedLot, setSelectedLot] = useState<Lot | null>(null);
  const [showInquiry, setShowInquiry] = useState(false);

  const formatCurrency = (amount: number, currency: 'USD' | 'JMD') => {
    if (currency === 'JMD') {
      return new Intl.NumberFormat('en-JM', {
        style: 'currency',
        currency: 'JMD',
        maximumFractionDigits: 0,
      }).format(amount * JMD_EXCHANGE_RATE);
    }
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const statusColors = {
    available: 'fill-emerald-500/20 stroke-emerald-500 hover:fill-emerald-500/40',
    reserved: 'fill-amber-500/20 stroke-amber-500 hover:fill-amber-500/40',
    sold: 'fill-rose-500/20 stroke-rose-500 cursor-not-allowed',
  };

  return (
    <div className="relative w-full min-h-[600px] bg-brand-paper rounded-2xl overflow-hidden border border-brand-ink/5 shadow-inner">
      {/* Map Header */}
      <div className="absolute top-6 left-6 z-10">
        <h2 className="text-3xl font-serif text-brand-ink">Interactive Site Plan</h2>
        <p className="text-sm text-brand-ink/60 mt-1">Select a lot to view details and availability</p>
      </div>

      {/* Legend */}
      <div className="absolute bottom-6 left-6 z-10 flex flex-col gap-2 bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-brand-ink/5 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-emerald-500" />
          <span className="text-xs font-medium uppercase tracking-wider text-brand-ink/70">Available</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-amber-500" />
          <span className="text-xs font-medium uppercase tracking-wider text-brand-ink/70">Reserved</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-rose-500" />
          <span className="text-xs font-medium uppercase tracking-wider text-brand-ink/70">Sold</span>
        </div>
      </div>

      {/* SVG Map Container */}
      <div className="w-full h-full flex items-center justify-center p-12 overflow-auto touch-pan-x touch-pan-y">
        <svg 
          viewBox="0 0 420 320" 
          className="w-full max-w-4xl h-auto drop-shadow-2xl"
          style={{ minWidth: '600px' }}
        >
          {/* Background/Terrain Mock */}
          <rect x="0" y="0" width="420" height="320" fill="#e2e8f0" rx="20" />
          <path d="M 0 100 Q 210 50 420 100 L 420 320 L 0 320 Z" fill="#cbd5e1" />
          
          {/* Lots */}
          {LOTS_DATA.map((lot) => (
            <motion.path
              key={lot.id}
              d={lot.path}
              className={cn(
                "transition-all duration-300 stroke-2 cursor-pointer",
                statusColors[lot.status]
              )}
              whileHover={lot.status !== 'sold' ? { scale: 1.02, zIndex: 10 } : {}}
              onClick={() => setSelectedLot(lot)}
            />
          ))}

          {/* Lot Numbers */}
          {LOTS_DATA.map((lot) => {
            // Simple center calculation for the mock paths
            const coords = lot.path.match(/\d+/g);
            if (!coords) return null;
            const x = (parseInt(coords[0]) + parseInt(coords[2])) / 2;
            const y = (parseInt(coords[1]) + parseInt(coords[5])) / 2;
            
            return (
              <text
                key={`text-${lot.id}`}
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="middle"
                className="pointer-events-none fill-brand-ink/40 font-mono text-[10px] font-bold"
              >
                {lot.number}
              </text>
            );
          })}
        </svg>
      </div>

      {/* Lot Detail Modal */}
      <AnimatePresence>
        {selectedLot && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 flex items-center justify-center p-6 bg-brand-ink/20 backdrop-blur-sm"
            onClick={() => setSelectedLot(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-48 bg-brand-olive overflow-hidden">
                <img 
                  src={`https://picsum.photos/seed/${selectedLot.id}/800/600`} 
                  alt={`Lot ${selectedLot.number}`}
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
                <button 
                  onClick={() => setSelectedLot(null)}
                  className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white transition-colors"
                >
                  <X size={20} />
                </button>
                <div className="absolute bottom-4 left-6">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-semibold uppercase tracking-widest">
                    Lot {selectedLot.number}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-serif text-brand-ink mb-1">Lot {selectedLot.number}</h3>
                    <div className="flex items-center gap-2 text-brand-ink/60 text-sm">
                      <MapPin size={14} />
                      <span>Somerset at Greenpark, Phase 1</span>
                    </div>
                  </div>
                  <div className={cn(
                    "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter",
                    selectedLot.status === 'available' ? "bg-emerald-100 text-emerald-700" :
                    selectedLot.status === 'reserved' ? "bg-amber-100 text-amber-700" :
                    "bg-rose-100 text-rose-700"
                  )}>
                    {selectedLot.status}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase tracking-widest text-brand-ink/40 font-semibold">Price</p>
                    <p className="text-lg font-medium text-brand-ink">{formatCurrency(selectedLot.price, 'USD')}</p>
                    <p className="text-xs text-brand-ink/50 italic">{formatCurrency(selectedLot.price, 'JMD')}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase tracking-widest text-brand-ink/40 font-semibold">Size</p>
                    <p className="text-lg font-medium text-brand-ink">{selectedLot.sqft.toLocaleString()} sq ft</p>
                    <p className="text-xs text-brand-ink/50">{(selectedLot.sqft * 0.092903).toFixed(2)} sq m</p>
                  </div>
                </div>

                <p className="text-brand-ink/70 text-sm leading-relaxed mb-8 italic">
                  "{selectedLot.description}"
                </p>

                <div className="flex gap-3">
                  <button 
                    disabled={selectedLot.status === 'sold'}
                    className={cn(
                      "flex-1 py-4 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2",
                      selectedLot.status === 'sold' 
                        ? "bg-brand-ink/5 text-brand-ink/30 cursor-not-allowed"
                        : "bg-brand-olive text-white hover:bg-brand-olive/90 shadow-lg shadow-brand-olive/20"
                    )}
                  >
                    Inquire Now
                    <ChevronRight size={16} />
                  </button>
                  <button className="p-4 bg-brand-ink/5 hover:bg-brand-ink/10 rounded-xl text-brand-ink transition-colors">
                    <Info size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* [INTEGRATION NOTE]: 
          To link real-time availability, replace LOTS_DATA with a state variable 
          populated by a fetch call to your CMS (Sanity, Strapi, or a custom API).
          Example: 
          useEffect(() => {
            fetch('/api/lots').then(res => res.json()).then(data => setLots(data));
          }, []);
      */}
    </div>
  );
};
