import React from 'react';
import { motion } from 'motion/react';
import { Droplet, Layers, Scale, Timer, ChevronRight } from 'lucide-react';

export default function Brewing() {
  const methods = [
    {
      name: 'Hario V60',
      difficulty: 'Expert',
      time: '3:00',
      description: 'Produces a clean, bright cup that highlights complex floral and citrus notes in light roasts.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_eGap-9xJAoSM15MY6Yjn6qMjM8gruceANqmIH_k9LLitxixxiN3myNzdBiKx0Tzyw7TooOOFvwCGKwEDWdmmx5s11ivOat1fH2RyvpJWS0vUeu57Rcn6dD5Od35F2et0LtPuA2Ol8vFHWhAutRk0QSpKY3mvzwSWiNHe0LPFlXAMEU2vlkfS_CpXu9RCFfvNauk2y_hxCYQ1M6zVgZX6IfkbcVH-OXRcK2yIi2NaaJCKWFoAfi1I0sOKbmdbk8ytM91_3ZNXwCY'
    },
    {
      name: 'Chemex',
      difficulty: 'Intermediate',
      time: '4:30',
      description: 'Elegant glass design combined with thick filters for an exceptionally clean and crisp sediment-free cup.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCc9Al1TeQW1nevNuunDsOz7Gr-_o1ILvDdFa8LflMhwD9GigOZjkpr1ExB9QjjYuQTTb60ZahZP2RTYS0DwSH8bEo9_MRfU9J8wPx6g93d4mrjF_eZMB8gb7C1K0HG6365xN8v-4jHCFJ8xdKdbHeZSlMNfe-0TQpigtATY9avcmHjFvqST-wqaTHXqL9axKdfH88Pm_weKCD0it5nsvEhwmBsCACrDws7cw_Ae-VAM9ufNK0T5heAarMKAFDyB-CrO2SjVUZ9uC0'
    },
    {
      name: 'French Press',
      difficulty: 'Easy',
      time: '4:00',
      description: 'Classic immersion brewing that delivers a heavy body and robust oils for a rich, textured experience.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjv8IBWeQv9UjjaOwaSvpTJvanvEM9mkyldH-11cFizst_MBaCLcIs79LQ2rEiffBX0hvt9SQbvcmr9JlvFqsLBEShIs8sIiNfPOSd5X19FwirPWrnz5ihAGCj65szqcv_ojrhBkheXzbgCZ7ZJqC1W-gQyNElTXRU1NKCEigv8eWPjj2V144zgqFGVWXJMXXFwriJ6d25L8zV2NvJazdGNP9035pH0v_7dzRoeASudc-za51pB5o_Uxx6L9S10egRecoE2-Ykvms'
    },
    {
      name: 'AeroPress',
      difficulty: 'Intermediate',
      time: '2:00',
      description: 'The ultimate travel companion. Versatile enough for espresso-like shots or delicate filter-style brew.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXx2NYMu3G8nwh7tK0kvRwit65WtCauXRUC8gURfxxV9Wv0JHHpji4MzqZ5Q6fG0qjDh1kpwNNL2-qPRCZd2mB7ZM8Jmp35kdP3iF7C50IgyRaDzFjbGAKDRVwGBjqzM7iuqD3iORX-eNoXLdDFIIUGI3eGFVX23VI4pgzUuUZF-Mm0utqLRlFqMCo_1sXevLuPBg9yHdWLEzn-imc7bsBO2ZoMShayuJlWdpL_hPaUoHrCvsGJQIjSvKo6lIs1DLQK3rl8TqRnfU'
    }
  ];

  return (
    <div className="space-y-stack-lg animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="mb-stack-lg text-center md:text-left max-w-3xl">
        <span className="text-[10px] font-bold text-surface-tint uppercase tracking-[0.3em] mb-4 block">The Art of Extraction</span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-6">Brewing & Techniques</h1>
        <p className="text-lg md:text-xl font-sans text-on-surface-variant italic leading-relaxed">
          From the gentle curve of a V60 to the rugged pressure of the AeroPress, discover the rituals that transform beans into liquid gold.
        </p>
      </header>

      <section className="mb-stack-lg">
        <div className="flex items-center gap-4 mb-stack-md">
          <h2 className="text-3xl font-serif font-bold text-primary">Brewing Basics</h2>
          <div className="flex-grow h-[1px] bg-outline-variant"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="md:col-span-8 bg-surface-container-low p-stack-md border border-outline-variant relative overflow-hidden flex flex-col justify-end min-h-[450px] rounded-lg group"
          >
            <img 
              alt="Measuring beans" 
              className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale transition-transform duration-1000 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAx7diAqoVXXIg64FgbtHDcHGCN_L6X0zftpE8ZWUd9_uD3StOIcTYeQcjLr7oxHwoztdZ9JciTTWJRAi9O3f4p7Vc07AXNDjz7VPTFn8Vpv3Rl2w-d_BKkAVJAuv_1nSD918L_XJTFf2UZ4O_WxnSqYxzm-eGWPEq2UPz3BVvyI_MhAQbaeQMis6res91oJ8waEQYN8IcXw3J-yyt856Oo2wFX3Zca48ZiX2AMNee3XwuPglcUmiURV69Hv6g8Tkam4pMSX-bVy60"
            />
            <div className="relative z-10">
              <span className="text-[10px] font-bold bg-primary text-on-primary px-3 py-1 rounded-full mb-4 inline-block tracking-widest">Essential</span>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">The Golden Ratio</h3>
              <p className="text-base md:text-lg text-on-surface-variant max-w-lg mb-8 leading-relaxed">
                The foundation of every great cup starts with 60 grams of coffee per 1 liter of water. Precision in measurement is the bridge between a mediocre morning and a transcendent ritual.
              </p>
              <div className="flex gap-6">
                <div className="bg-white/50 backdrop-blur-sm border border-outline-variant px-5 py-3 rounded">
                  <span className="text-[10px] font-bold text-surface-tint block uppercase tracking-widest mb-1">Ratio</span>
                  <span className="text-lg font-sans font-bold">1:16</span>
                </div>
                <div className="bg-white/50 backdrop-blur-sm border border-outline-variant px-5 py-3 rounded">
                  <span className="text-[10px] font-bold text-surface-tint block uppercase tracking-widest mb-1">Temp</span>
                  <span className="text-lg font-sans font-bold">92-96°C</span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="md:col-span-4 grid grid-rows-2 gap-gutter">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-primary-container p-gutter flex flex-col justify-center rounded-lg"
            >
              <Droplet className="text-on-tertiary-container mb-4" size={32} />
              <h4 className="text-xl font-serif font-bold text-surface-container-low mb-2">Water Quality</h4>
              <p className="text-sm text-surface-variant leading-relaxed">
                98% of your coffee is water. Use filtered, soft water to let the delicate bean profiles shine.
              </p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-secondary-container p-gutter flex flex-col justify-center rounded-lg"
            >
              <Layers className="text-secondary mb-4" size={32} />
              <h4 className="text-xl font-serif font-bold text-primary mb-2">The Grind</h4>
              <p className="text-sm text-on-secondary-container leading-relaxed">
                Uniformity is key. A burr grinder ensures each particle extracts at the same rate for perfect balance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mb-stack-lg">
        <div className="flex items-center gap-4 mb-stack-md">
          <h2 className="text-3xl font-serif font-bold text-primary">Methods & Gear</h2>
          <div className="flex-grow h-[1px] bg-outline-variant"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {methods.map((method, idx) => (
            <motion.div 
              key={method.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-surface-container-lowest border border-outline-variant hover:border-surface-tint transition-all duration-300 shadow-sm hover:shadow-md rounded-lg overflow-hidden flex flex-col h-full"
            >
              <div className="h-52 overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src={method.image} alt={method.name} />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-serif font-bold text-primary">{method.name}</h3>
                  <button className="text-surface-tint hover:text-primary transition-colors">
                    <Scale size={18} />
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  <div className="bg-surface-container-low px-3 py-2 rounded">
                    <p className="text-[9px] font-bold text-surface-tint uppercase tracking-tighter">Difficulty</p>
                    <p className="text-xs font-sans font-bold">{method.difficulty}</p>
                  </div>
                  <div className="bg-surface-container-low px-3 py-2 rounded">
                    <p className="text-[9px] font-bold text-surface-tint uppercase tracking-tighter">Time</p>
                    <div className="flex items-center gap-1">
                      <Timer size={10} className="text-surface-tint" />
                      <p className="text-xs font-sans font-bold">{method.time}</p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-on-surface-variant mb-8 flex-grow leading-normal line-clamp-3">
                  {method.description}
                </p>
                <button className="w-full bg-primary text-on-primary py-3 font-serif font-bold text-xs uppercase tracking-[0.2em] hover:bg-primary-container transition-all group-hover:shadow-lg">
                  Explore Technique
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="mt-stack-lg bg-surface-container p-12 border border-outline-variant text-center max-w-4xl mx-auto rounded-xl">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4 italic">Refine Your Ritual</h2>
        <p className="text-base text-on-surface-variant mb-10 max-w-lg mx-auto">
          Join 12,000 coffee enthusiasts for weekly brewing guides and curated bean reviews delivered to your inbox.
        </p>
        <form className="flex flex-col md:flex-row gap-4 justify-center" onSubmit={e => e.preventDefault()}>
          <input 
            className="bg-transparent border-b-2 border-outline focus:border-surface-tint focus:ring-0 px-4 py-3 font-serif text-lg md:min-w-[320px] outline-none" 
            placeholder="Your email address" 
            type="email" 
          />
          <button className="bg-primary text-on-primary px-10 py-3 font-serif font-bold uppercase tracking-[0.2em] text-xs hover:bg-primary-container transition-all">
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
}
