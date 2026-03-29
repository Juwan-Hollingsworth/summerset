import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, FileText, Scale, Landmark, Key, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    question: "Can international buyers purchase land in Jamaica?",
    answer: "Yes, Jamaica has an open real estate market. International buyers have the same rights as local citizens when purchasing property. Our legal team can assist with the necessary paperwork for non-residents."
  },
  {
    question: "What are the closing costs associated with the purchase?",
    answer: "Typically, closing costs range from 3% to 5% of the purchase price. This includes government transfer taxes, stamp duties, and legal fees. We provide a detailed breakdown for every transaction."
  },
  {
    question: "Are there building deadlines for the lots?",
    answer: "To ensure the community develops cohesively, we request that construction begins within 36 months of purchase. However, extensions can be granted based on specific architectural requirements."
  },
  {
    question: "What utilities are provided at the lot boundary?",
    answer: "Every lot is pre-serviced with potable water, JPS electricity connections, and high-speed fiber optic internet infrastructure. All utilities are underground to preserve views."
  }
];

const STEPS = [
  {
    title: "Reservation",
    description: "Select your preferred lot and submit a $5,000 USD refundable deposit to hold the property for 14 days.",
    icon: <FileText size={24} />
  },
  {
    title: "Due Diligence",
    description: "Review the Sales Agreement, restrictive covenants, and architectural guidelines with your legal counsel.",
    icon: <Scale size={24} />
  },
  {
    title: "Contract Execution",
    description: "Sign the formal Agreement for Sale and pay the remaining balance of the 10% deposit.",
    icon: <Landmark size={24} />
  },
  {
    title: "Completion",
    description: "Final payment is made upon the issuance of the individual Registered Title for your lot.",
    icon: <Key size={24} />
  }
];

export const BuyersGuidePage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pt-32 pb-24 px-6 bg-brand-paper min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-20">
          <span className="text-[10px] uppercase tracking-[0.4em] text-brand-olive font-bold mb-4 block">Investor Resources</span>
          <h1 className="text-4xl md:text-7xl font-serif text-brand-ink mb-8">The Path to <br /> <span className="italic">Ownership</span></h1>
          <p className="text-lg text-brand-ink/60 leading-relaxed">
            Navigating international real estate should be transparent and straightforward. We've outlined the essential steps and answered common questions to help you make an informed decision.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="mb-32">
          <h2 className="text-3xl font-serif text-brand-ink mb-12">Purchase Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {STEPS.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-white p-8 rounded-3xl border border-brand-ink/5 shadow-sm h-full transition-all hover:shadow-xl hover:-translate-y-1">
                  <div className="w-12 h-12 bg-brand-paper rounded-xl flex items-center justify-center text-brand-olive mb-6">
                    {step.icon}
                  </div>
                  <span className="text-[10px] font-bold text-brand-olive uppercase tracking-widest mb-2 block">Step 0{index + 1}</span>
                  <h3 className="text-xl font-serif text-brand-ink mb-4">{step.title}</h3>
                  <p className="text-sm text-brand-ink/60 leading-relaxed">{step.description}</p>
                </div>
                {index < STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-brand-ink/10 z-0" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <HelpCircle className="text-brand-olive" size={32} />
              <h2 className="text-3xl font-serif text-brand-ink">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              {FAQS.map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl border border-brand-ink/5 overflow-hidden">
                  <button 
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-brand-paper/30 transition-colors"
                  >
                    <span className="font-medium text-brand-ink">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                    >
                      <ChevronDown size={20} className="text-brand-ink/40" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-8 text-brand-ink/60 text-sm leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-brand-ink p-12 rounded-[3rem] text-white">
            <h3 className="text-3xl font-serif mb-6">Download the Full Guide</h3>
            <p className="text-white/60 mb-10 leading-relaxed">
              Our comprehensive Buyer's Guide includes detailed legal information, tax implications, and architectural guidelines for Somerset at Greenpark.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-olive" />
                Legal Framework for Non-Residents
              </li>
              <li className="flex items-center gap-3 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-olive" />
                Financing Options & Local Banks
              </li>
              <li className="flex items-center gap-3 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-olive" />
                Construction & Project Management
              </li>
            </ul>
            <button className="w-full py-5 bg-brand-olive text-white rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-brand-olive/90 transition-all shadow-xl shadow-black/20">
              Download PDF Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
