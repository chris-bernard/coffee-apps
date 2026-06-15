import React from 'react';
import { motion } from 'motion/react';
import { Star, Mail, ArrowRight, Award, Zap, Settings } from 'lucide-react';

export default function Reviews() {
  const trending = [
    { id: '01', title: 'WDT Tool: Why you need one', cat: 'Coffee Tech' },
    { id: '02', title: 'Acaia Pearl vs. Lunar: The Scale Debate', cat: 'Accessories' },
    { id: '03', title: 'Refractometers for Home Brewing', cat: 'Advanced Gear' }
  ];

  return (
    <div className="space-y-stack-lg animate-in fade-in duration-700">
      <section className="mt-8 mb-stack-lg text-center md:text-left">
        <span className="text-[10px] font-bold text-on-tertiary-container uppercase tracking-[0.3em] mb-4 block">Field Tested & Refined</span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-6">Equipment & Gear Reviews</h1>
        <p className="text-lg md:text-xl font-sans text-on-surface-variant max-w-2xl leading-relaxed italic">
          A definitive archive of the tools that shape the modern coffee ritual. From industrial espresso machines to hand-forged kettles, we test for durability and precision.
        </p>
      </section>

      <section className="mb-stack-lg">
        <div className="flex items-center justify-between mb-10">
          <h3 className="text-3xl font-serif font-bold text-primary">Top Picks of 2024</h3>
          <div className="h-px bg-outline-variant flex-grow ml-8 hidden md:block"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="md:col-span-7 bg-surface-container-low rounded-lg overflow-hidden border border-outline-variant group shadow-sm flex flex-col"
          >
            <div className="relative h-[400px] overflow-hidden">
              <img 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9ubC2PqMPwbCMpo9Csal-T_bxV_dBZtkc_tVgEJg5CFnDjpuWY5ebNY9XWDThVsPjGguyINzbzcZ-Y8IoOwp8HdA5Wg9eNDU1NKHFKQ9f8T_7fWcj6OqFWkzrwNvNYRZQR7mdeJz2J9ljv0jySRLaVJST7SAIBGmT3K0OHAMrpsGrpTyTrwK_8IoVwsv4JjuGA4zE277f-v0mf4seY_DvUd-LAJZUYbegJdezFAUERYPDDxm9J1qkkmgrcq_8-v6ePQyITENKHvI"
                alt="La Marzocco Linea Micra"
              />
              <div className="absolute top-6 left-6">
                <span className="bg-primary text-on-primary px-4 py-1 font-sans font-bold text-[10px] tracking-widest rounded-sm flex items-center gap-2">
                  <Award size={12} /> EDITOR'S CHOICE
                </span>
              </div>
            </div>
            <div className="p-10 flex flex-col flex-grow">
              <h4 className="text-3xl md:text-4xl font-serif font-bold mb-4 leading-tight group-hover:text-primary transition-colors">The Marzocco Linea Micra: Perfection Miniaturized</h4>
              <p className="text-base text-on-surface-variant mb-8 leading-relaxed">
                After six months of rigorous daily use, the Micra proves that industrial-grade thermal stability can exist in a kitchen-friendly footprint.
              </p>
              <div className="mt-auto flex flex-wrap gap-4">
                {['Dual Boiler', 'PID Control', '9.5/10'].map(tag => (
                  <span key={tag} className="px-4 py-1 bg-surface-container-high text-on-surface-variant font-sans font-bold text-[10px] tracking-widest rounded-full border border-outline-variant">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="md:col-span-5 flex flex-col gap-8">
            {[
              {
                label: 'BEST FOR POUR OVER',
                title: 'Stagg EKG Pro',
                desc: 'Variable temperature control meets aesthetic excellence.',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2tyxrHB-T905rpvIa153cdK-GXcsCz0A8TQZS-taCsD4zl6xoRxyyMCZdIyYF61FBbwph3II9Y5Ojmm-xPI2BBhnW0jFWHlvpAaCvvIy2uG7K1nnObjPNa4BvlXniuIeid2p76uJ5hBpQqQfXcG_6hrORshnZEc0KfV8xhZ4R1YmQzXW7oQB78r6s9vAwqjmDdakwwExXVKT9CkDbZa22xNS_wVuPr1JiiPDFTgQhlc7IEcvlgvQdqvQ__ZNIQw865j54Rnq4qBY'
              },
              {
                label: 'BEST MANUAL GRINDER',
                title: 'Comandante C40 MK4',
                desc: 'Unrivaled grind consistency for the traveling enthusiast.',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDek1NIehDTA9-ByBvzO18xEKAQJEYBJqYKbYrIERPu_9zIC0GdOPTcTGOaIZWtIjr1L25ju5gtMGlMOWO-_2HBGMEFy8mN8tNwjkB6T9wbmaez0xxiYbqOi3Bh79hGWGCndKfAnWehnbP1ZkfC3LFPLaCVO-nteD0010YKS7wsAZFUY3N6zoBqaZJpNSgKBA2yxUJCtMLe6D_ZfHVqijFQkVepUXL06To0lT-8nwME6PjiHAeDkv6khnvrH-f2sACZJ72KDUQknOg'
              }
            ].map(pick => (
              <motion.div 
                key={pick.title}
                whileHover={{ x: 5 }}
                className="bg-surface-container-highest p-8 rounded-lg border border-outline-variant flex gap-8 items-center flex-1 group cursor-pointer shadow-sm"
              >
                <div className="w-40 h-40 rounded bg-white flex-shrink-0 border border-outline-variant overflow-hidden p-2">
                  <img className="w-full h-full object-contain" src={pick.image} alt={pick.title} />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-on-tertiary-fixed-variant uppercase tracking-widest">{pick.label}</span>
                  <h5 className="text-2xl font-serif font-bold mt-2 mb-3 leading-tight group-hover:text-primary transition-colors underline-offset-4 group-hover:underline">{pick.title}</h5>
                  <p className="text-sm font-sans text-on-surface-variant line-clamp-2 leading-relaxed italic">{pick.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-stack-lg">
        <div className="lg:col-span-8 space-y-12">
          <h3 className="text-3xl font-serif font-bold text-primary">Recent Field Notes</h3>
          
          {[
            {
              cat: 'Grinder Review • June 2024',
              title: 'The Ode Brew Grinder Gen 2: Solving Static',
              quote: '"A quiet beast that finally tames the mess of everyday brewing."',
              image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVs7ijOYhTjz3sBBjImEa_0QTVlrXxzzm1qmqLNtsfv5AUBOShXfBfJX6-HfASt53nogwX0EYt2vV-PJma4YeAaQaogaTJG-TwlSHM36NXgYmKu01_NDS83va5etptb5Tuss1mnpgCI2oW9B98kP-OgoDTbbTYeAJC8UkSA2wsdg-hCGt9yzpxa7Pwwd5eaKK2aUyuFo8af56mhy1q8_GnnDC-jvRE8bGH8BLyhrYIxw9pCWqOHVzvfzCxJf7TbIVloK0qXtHCmS4',
              pros: ['Exceptionally low retention', 'Ionizer effectively kills static', 'Professional grade 64mm burrs'],
              cons: ['Filter brewing focus only', 'Small hopper capacity']
            }
          ].map(review => (
            <motion.article 
              key={review.title}
              className="bg-white p-10 rounded-lg border border-outline-variant shadow-sm group"
            >
              <div className="flex flex-col md:flex-row gap-10">
                <div className="w-full md:w-72 h-72 bg-stone-100 rounded overflow-hidden border border-outline-variant flex-shrink-0">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src={review.image} alt={review.title} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">{review.cat}</span>
                    <div className="flex gap-1 text-on-tertiary-container">
                      {[1,2,3,4,5].map(s => <Star key={s} size={14} fill={s <= 4 ? "currentColor" : "none"} />)}
                    </div>
                  </div>
                  <h4 className="text-3xl font-serif font-bold mb-6 group-hover:text-amber-800 transition-colors">{review.title}</h4>
                  <p className="text-lg font-sans text-on-surface-variant mb-8 italic border-l-4 border-amber-600/30 pl-6 leading-relaxed">
                    {review.quote}
                  </p>
                  <div className="grid grid-cols-2 gap-8 mb-10">
                    <div>
                      <h5 className="text-[10px] font-bold text-primary uppercase mb-4 flex items-center gap-2 tracking-widest">
                        <Award size={14} className="text-emerald-700" /> PROS
                      </h5>
                      <ul className="text-sm font-sans text-on-surface-variant space-y-2">
                        {review.pros.map(p => <li key={p}>• {p}</li>)}
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-[10px] font-bold text-primary uppercase mb-4 flex items-center gap-2 tracking-widest">
                        <Zap size={14} className="text-error" /> CONS
                      </h5>
                      <ul className="text-sm font-sans text-on-surface-variant space-y-2">
                        {review.cons.map(c => <li key={c}>• {c}</li>)}
                      </ul>
                    </div>
                  </div>
                  <button className="bg-primary text-on-primary px-8 py-3 rounded font-sans font-bold text-[10px] uppercase tracking-widest hover:bg-primary-container transition-all">
                    READ FULL ANALYSIS
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <aside className="lg:col-span-4 space-y-12">
          <div className="sticky top-32 space-y-12">
            <div className="bg-primary text-white p-10 rounded-lg shadow-xl relative overflow-hidden">
              <Settings className="absolute -right-8 -bottom-8 text-white/5" size={200} />
              <h4 className="text-2xl font-serif font-bold mb-8 border-b border-white/10 pb-4 relative">Gear Wisdom</h4>
              <div className="space-y-8 relative">
                {[
                  { name: 'Thermal Stability', val: 92 },
                  { name: 'Build Quality', val: 85 },
                  { name: 'Ease of Maintenance', val: 60 }
                ].map(stat => (
                  <div key={stat.name}>
                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-stone-300 mb-3">
                      <span>{stat.name}</span>
                      <span>{stat.val}%</span>
                    </div>
                    <div className="w-full bg-white/10 h-1.5 rounded-full">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${stat.val}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="bg-secondary-container h-full rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-surface-container border-2 border-primary p-10 rounded-lg text-center">
              <Mail className="mx-auto text-primary mb-6" size={40} />
              <h4 className="text-2xl font-serif font-bold mb-4">The Gear Guide</h4>
              <p className="text-sm text-on-surface-variant mb-8 leading-relaxed">
                Receive detailed breakdown sheets for every piece of gear we test, delivered bi-weekly.
              </p>
              <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                <input 
                  className="w-full border-b border-primary/20 bg-transparent py-2 px-4 focus:ring-0 focus:border-primary outline-none transition-all placeholder:text-primary/30" 
                  placeholder="Email address" 
                  type="email" 
                />
                <button className="w-full py-4 bg-primary text-on-primary font-sans font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-stone-800 transition-colors">
                  SUBSCRIBE TO GUIDE
                </button>
              </form>
            </div>

            <div className="p-8">
              <h4 className="text-2xl font-serif font-bold mb-8">Trending Gear</h4>
              <ul className="space-y-8">
                {trending.map(item => (
                  <li key={item.id} className="flex items-center gap-6 group cursor-pointer">
                    <span className="text-4xl font-serif text-on-tertiary-container opacity-20 group-hover:opacity-100 transition-all italic">{item.id}</span>
                    <div>
                      <h6 className="text-base font-sans font-bold text-primary group-hover:text-amber-800 transition-colors leading-tight mb-1">{item.title}</h6>
                      <p className="text-[9px] text-on-surface-variant font-bold uppercase tracking-widest opacity-60">{item.cat}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}
