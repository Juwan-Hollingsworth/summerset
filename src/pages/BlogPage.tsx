import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';

const POSTS = [
  {
    id: '1',
    title: "Why Jamaica's North Coast is the Next Luxury Hub",
    excerpt: "Exploring the infrastructure developments and tourism growth driving real estate value in the region.",
    date: "May 12, 2025",
    author: "James Sterling",
    image: "https://picsum.photos/seed/blog1/800/500",
    category: "Market Trends"
  },
  {
    id: '2',
    title: "Sustainable Building: Designing for the Caribbean Climate",
    excerpt: "How to use passive cooling and local materials to create an eco-friendly island retreat.",
    date: "April 28, 2025",
    author: "Elena Rossi",
    image: "https://picsum.photos/seed/blog2/800/500",
    category: "Architecture"
  },
  {
    id: '3',
    title: "The Legal Essentials of Buying Land in Jamaica",
    excerpt: "A step-by-step guide to the legal process, from title searches to final transfer of ownership.",
    date: "April 15, 2025",
    author: "Robert Hall",
    image: "https://picsum.photos/seed/blog3/800/500",
    category: "Buyer's Guide"
  }
];

export const BlogPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.4em] text-brand-olive font-bold mb-4 block">Insights & Updates</span>
            <h1 className="text-4xl md:text-7xl font-serif text-brand-ink mb-6">The Somerset <span className="italic">Journal</span></h1>
            <p className="text-lg text-brand-ink/60 leading-relaxed">
              Stay informed about construction progress, market insights, and the lifestyle that awaits you at Somerset at Greenpark.
            </p>
          </div>
          
          <div className="relative w-full md:w-80">
            <input 
              type="text" 
              placeholder="Search articles..." 
              className="w-full pl-12 pr-6 py-4 bg-brand-paper rounded-2xl border border-brand-ink/5 focus:ring-2 focus:ring-brand-olive/20 outline-none transition-all"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-ink/30" size={18} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {POSTS.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-8 shadow-lg">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest text-brand-ink">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-6 text-[10px] uppercase tracking-widest font-bold text-brand-ink/40">
                  <div className="flex items-center gap-2">
                    <Calendar size={12} />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <User size={12} />
                    {post.author}
                  </div>
                </div>
                
                <h2 className="text-2xl font-serif text-brand-ink group-hover:text-brand-olive transition-colors leading-tight">
                  {post.title}
                </h2>
                
                <p className="text-brand-ink/60 text-sm leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
                
                <div className="pt-4 flex items-center gap-2 text-brand-olive font-bold uppercase tracking-widest text-[10px] group-hover:gap-4 transition-all">
                  Read Article
                  <ArrowRight size={14} />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <section className="mt-32 p-12 md:p-20 bg-brand-paper rounded-[3rem] text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif text-brand-ink mb-6">Join the Inner Circle</h2>
            <p className="text-brand-ink/60 mb-10">
              Subscribe to our newsletter for exclusive early access to Phase 2 releases and regional investment reports.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-8 py-5 rounded-full bg-white border border-brand-ink/5 focus:ring-2 focus:ring-brand-olive/20 outline-none transition-all"
              />
              <button className="px-10 py-5 bg-brand-ink text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-olive transition-all shadow-xl shadow-brand-ink/10">
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};
