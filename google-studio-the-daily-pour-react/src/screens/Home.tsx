import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Coffee, History, Edit3 } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-stack-lg animate-in fade-in duration-700">
      {/* Hero Featured Story */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center pt-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-7 relative group overflow-hidden rounded-lg shadow-xl"
        >
          <img 
            className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC07OiQJ7BWUJ0Vv2PlQXiCifWG1xaCK6UiM0lWAJdIO5L0OB3ECitiSJSe_0OHqDOYPanF0jN-NqJdSOIki5PTed6hQPFxQZwlVLZ9IohbjvSFB58VwhbEh963OjR24rSG2m0Tck96i5j0ZbEa_Cei_6IR3pUPOzx-PWOA3I06ABg1rBqpi_wJqpPhrBVZP78FTquYgkMmD0IYywPO64jvk_l6wg88X-NSrCimoI5JjK7tfsOUvibUs2ch-cC8uvu576tBey-QA_E" 
            alt="Vintage espresso machine"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8 text-white">
            <span className="font-sans text-[10px] font-bold uppercase bg-on-tertiary-container px-3 py-1 rounded-full mb-4 inline-block tracking-widest text-primary">
              The Bean
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 leading-tight">
              The Lost Heirloom: Rediscovering Yemen's Ancient Mocha Variety
            </h2>
            <p className="text-lg md:text-xl font-sans text-stone-200 max-w-xl mb-6">
              A journey into the high-altitude terraces where the world's most storied coffee beans are making a miraculous return to the global stage.
            </p>
            <button className="bg-surface text-primary px-8 py-3 font-sans font-bold text-xs uppercase tracking-widest rounded shadow-lg hover:bg-stone-100 transition-colors">
              Read the Journal
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-5 space-y-stack-md"
        >
          <div className="border-b border-outline-variant pb-stack-sm">
            <h3 className="text-2xl font-serif italic mb-4">Brew Metrics</h3>
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: 'Roast', val: 'Medium-Dark' },
                { label: 'Origin', val: 'Yemen' },
                { label: 'Method', val: 'Syphon' }
              ].map((m) => (
                <div key={m.label} className="bg-surface-container p-4 rounded text-center">
                  <span className="text-[10px] font-bold text-on-surface-variant block uppercase tracking-widest mb-1">{m.label}</span>
                  <span className="text-sm font-sans text-primary font-bold">{m.val}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-bold text-outline tracking-[0.2em] uppercase">Trending Conversations</h4>
            <ul className="space-y-8">
              {[
                { id: '01', title: 'The Physics of the Perfect Pour Over', meta: 'Culture • 4 min read' },
                { id: '02', title: 'Viennese Pastry & Dark Roasts', meta: 'Recipes • 8 min read' },
                { id: '03', title: 'The 1890 Coffee House Revival', meta: 'History • 12 min read' }
              ].map((item) => (
                <li key={item.id} className="flex gap-4 group cursor-pointer">
                  <span className="text-on-tertiary-container font-serif text-3xl italic opacity-50 transition-opacity group-hover:opacity-100">{item.id}</span>
                  <div>
                    <h5 className="text-xl font-serif font-bold leading-tight group-hover:text-amber-800 transition-colors underline-offset-4 group-hover:underline">
                      {item.title}
                    </h5>
                    <p className="text-on-surface-variant text-sm mt-1">{item.meta}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </section>

      {/* Latest Dispatches Bento Grid */}
      <section className="space-y-stack-md">
        <div className="flex justify-between items-end border-b border-primary/10 pb-4">
          <h2 className="text-3xl font-serif font-bold">Latest Dispatches</h2>
          <button className="text-[10px] font-bold text-primary uppercase border-b-2 border-primary pb-1 tracking-widest hover:text-amber-800 hover:border-amber-800 transition-colors">
            Browse All Stories
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
          {/* Main Large Item */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 bg-surface-container-low p-6 rounded-lg border border-outline-variant/30 flex flex-col justify-between group cursor-pointer"
          >
            <div>
              <div className="overflow-hidden rounded mb-6">
                <img 
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1mofFk4Hhx3nQOjSTYr6zoQgMnCJExF5L1Lq6qOn_xDRJTU7OiCSSnnZTRATA54jTldN3y_dTn67rWxc27buoeayQ82WoII1RZHq0KzottRos1xdSIACBWGK-ZskpWjg-xm4PTljyKcsc2uKF3KfWBSmQRZEgljEWy88k8GgYy_hB6wKru6Xl-c452Ff3raeCOd7XL5LLMVyj5x2esXPnuqQEQBnkmstxXOVTExwkXU7unrPEt-ALDP7Eh6fQXFe2DeEKsXD8mFM"
                  alt="V60 Pour over ritual"
                />
              </div>
              <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] block mb-2">Brewing</span>
              <h3 className="text-3xl font-serif font-bold mb-4">Precision & Patience: The Hario V60 Masterclass</h3>
              <p className="text-on-surface-variant text-base leading-relaxed">
                Mastering the spiral pour requires more than just a steady hand; it demands an understanding of fluid dynamics and thermal mass.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-outline-variant/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Edit3 size={18} className="text-primary" />
                <span className="text-xs font-serif italic text-primary">By Julian Vane</span>
              </div>
              <ArrowRight size={18} className="text-primary group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>

          <div className="flex flex-col gap-gutter">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-surface-container-highest p-6 rounded-lg flex-1 flex flex-col justify-center text-center group cursor-pointer"
            >
              <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee size={24} className="text-primary" />
              </div>
              <h4 className="text-xl font-serif font-bold mb-2">The Sustainable Bean</h4>
              <p className="text-sm text-on-surface-variant mb-4">How regenerative farming is saving the Arabica belt.</p>
              <span className="text-[10px] font-bold text-primary uppercase border-b border-primary mx-auto tracking-widest">Explore Origins</span>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-lg border border-outline-variant/30 flex-1 group cursor-pointer"
            >
              <img 
                className="w-full h-32 object-cover rounded mb-4" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuJi6X1XCGgk7ik-vBiUIwHxt8YxAWZM23lCgjehb9O8kIONKOLgv1rtv24KbG87rgNmi7Y5zJNoRm27hFsIYyn2XI-yQf2qktQh4X3WOeE3A2ENZs693qOiEQ8WNUI51LDIq247_w9jU6KdhtWWCw-hPkL28XRBZdPHetelc_nidk7SMFENXBDEp-pE8K9pXi20vmS88cKZNXfTAQHn2hEZe9ZOguIDwgZJL2I7IH0f_2_PQBIVJUtxpu8CIAaOaBwCLTvdkeYk5I"
                alt="Manual grinder"
              />
              <h4 className="text-lg font-serif font-bold">The 2024 Grinder Guide</h4>
              <p className="text-xs text-on-surface-variant">Manual vs. Electric for the modern kitchen.</p>
            </motion.div>
          </div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-primary text-white p-8 rounded-lg flex flex-col justify-between"
          >
            <div>
              <div className="mb-8">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6">
                  <History size={24} className="text-secondary-container" />
                </div>
                <h3 className="text-3xl font-serif font-bold mb-4 leading-tight">The Ritual of the Chemex</h3>
                <p className="text-sm text-stone-300 leading-relaxed">
                  Clean, bright, and complex. Why this glass vessel remains the architect's favorite way to wake up.
                </p>
              </div>
            </div>
            <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-secondary-container hover:text-white transition-colors">
              Learn the technique <ArrowRight size={14} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-surface-container-high py-20 px-8 rounded-xl text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
          <Coffee size={400} />
        </div>
        <div className="max-w-2xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 italic">The Sunday Roast</h2>
          <p className="text-lg md:text-xl text-on-surface-variant mb-10 leading-relaxed">
            Join 45,000 coffee enthusiasts for our weekly long-form essay on culture, bean origins, and brewing science. No spam, just pure craft.
          </p>
          <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              className="flex-grow bg-white border-none py-4 px-6 font-sans text-sm rounded shadow-sm focus:ring-2 focus:ring-primary outline-none" 
              placeholder="Your email address" 
              type="email"
            />
            <button className="bg-primary text-on-primary px-10 py-4 font-sans font-bold text-xs uppercase tracking-widest rounded shadow-md hover:bg-primary/95 transition-all">
              Subscribe
            </button>
          </form>
          <p className="text-[10px] text-on-surface-variant mt-8 uppercase tracking-[0.2em] font-bold opacity-60">
            Established in Vienna, 1890. Curated for the modern palate.
          </p>
        </div>
      </section>
    </div>
  );
}
