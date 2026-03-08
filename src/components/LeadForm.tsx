import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';

interface LeadFormProps {
  source?: string;
  title?: string;
  subtitle?: string;
}

export const LeadForm: React.FC<LeadFormProps> = ({ 
  source = 'General Inquiry',
  title = 'Request a Private Consultation',
  subtitle = 'Leave your details and our investment specialists will reach out within 24 hours.'
}) => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    interest: 'Investment'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // [WEBHOOK INTEGRATION]: Replace with your actual webhook URL (Make.com, Zapier, etc.)
    const WEBHOOK_URL = 'https://hook.us1.make.com/your-unique-hook-id';

    try {
      // Mocking the API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      /* Real implementation:
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, source, timestamp: new Date().toISOString() })
      });
      if (!response.ok) throw new Error('Failed to send');
      */

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '', interest: 'Investment' });
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-12 rounded-3xl shadow-xl border border-emerald-100 text-center"
      >
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="text-emerald-600" size={40} />
        </div>
        <h3 className="text-2xl font-serif text-brand-ink mb-2">Inquiry Received</h3>
        <p className="text-brand-ink/60 mb-8">Thank you for your interest in Hillside Estates. One of our advisors will contact you shortly.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="text-brand-olive font-semibold hover:underline"
        >
          Send another inquiry
        </button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-brand-ink/5">
      <div className="mb-10">
        <h3 className="text-3xl font-serif text-brand-ink mb-3">{title}</h3>
        <p className="text-brand-ink/60 leading-relaxed">{subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/40 ml-1">Full Name</label>
            <input
              required
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-5 py-4 bg-brand-paper/50 border border-brand-ink/10 rounded-xl focus:ring-2 focus:ring-brand-olive/20 focus:border-brand-olive outline-none transition-all"
              placeholder="John Doe"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/40 ml-1">Email Address</label>
            <input
              required
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-5 py-4 bg-brand-paper/50 border border-brand-ink/10 rounded-xl focus:ring-2 focus:ring-brand-olive/20 focus:border-brand-olive outline-none transition-all"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/40 ml-1">Phone Number</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-5 py-4 bg-brand-paper/50 border border-brand-ink/10 rounded-xl focus:ring-2 focus:ring-brand-olive/20 focus:border-brand-olive outline-none transition-all"
              placeholder="+1 (555) 000-0000"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/40 ml-1">Primary Interest</label>
            <select
              value={formData.interest}
              onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
              className="w-full px-5 py-4 bg-brand-paper/50 border border-brand-ink/10 rounded-xl focus:ring-2 focus:ring-brand-olive/20 focus:border-brand-olive outline-none transition-all appearance-none"
            >
              <option value="Investment">Investment Property</option>
              <option value="Residential">Primary Residence</option>
              <option value="Vacation">Vacation Home</option>
              <option value="Commercial">Commercial Development</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/40 ml-1">Message (Optional)</label>
          <textarea
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-5 py-4 bg-brand-paper/50 border border-brand-ink/10 rounded-xl focus:ring-2 focus:ring-brand-olive/20 focus:border-brand-olive outline-none transition-all resize-none"
            placeholder="Tell us more about your requirements..."
          />
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full py-5 bg-brand-ink text-white rounded-xl font-semibold flex items-center justify-center gap-3 hover:bg-brand-ink/90 transition-all shadow-xl shadow-brand-ink/10 disabled:opacity-70"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="animate-spin" size={20} />
              Processing...
            </>
          ) : (
            <>
              <Send size={18} />
              Submit Inquiry
            </>
          )}
        </button>

        {status === 'error' && (
          <p className="text-rose-500 text-xs text-center mt-4">
            Something went wrong. Please try again or contact us directly.
          </p>
        )}
      </form>
    </div>
  );
};
