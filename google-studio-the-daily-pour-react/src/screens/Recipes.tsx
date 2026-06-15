import React from 'react';
import { motion } from 'motion/react';
import { Search, Clock, Utensils, Zap, ShoppingBag, ArrowRight } from 'lucide-react';

export default function Recipes() {
  const categories = [
    'All Receipts', 'Espresso Based', 'Cold Brews', 'Seasonal Signatures', 'Milk Alternatives'
  ];

  return (
    <div className="space-y-stack-lg animate-in fade-in duration-700">
      <header className="pt-8 mb-stack-lg text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-end gap-stack-md border-b border-outline-variant pb-12">
          <div className="max-w-2xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-on-tertiary-container mb-4 block">Archives: Vol. IV</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-6">The Brewmaster's Recipe Book</h1>
            <p className="text-lg md:text-xl font-sans text-on-surface-variant leading-relaxed">
              A curated collection of artisanal extractions, from the velvety textures of a classic flat white to our signature botanical-infused cold brews.
            </p>
          </div>
          <div className="w-full md:w-96">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors" size={20} />
              <input 
                className="w-full pl-14 pr-6 py-4 bg-surface-container-low border-b-2 border-outline/20 focus:border-primary focus:ring-0 font-sans text-sm transition-all outline-none rounded-t-lg" 
                placeholder="Search techniques & ingredients..." 
                type="text" 
              />
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-wrap gap-4 mb-stack-md justify-center md:justify-start">
        {categories.map((cat, i) => (
          <button 
            key={cat} 
            className={`px-8 py-2 rounded-full font-sans font-bold text-[10px] uppercase tracking-widest transition-all ${i === 0 ? 'bg-primary text-white shadow-md' : 'border border-outline-variant text-on-surface-variant hover:bg-surface-container-high'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <motion.article 
          whileHover={{ y: -4 }}
          className="lg:col-span-8 group cursor-pointer"
        >
          <div className="relative overflow-hidden aspect-[16/9] mb-8 rounded-xl shadow-lg border border-outline-variant/30">
            <img 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC142BinxugTjNTotx2SzohWyTX9qczT66bsV_TlI5JMQrIosPwDPpmE6QS18yrEn-GCj08OMQQcIPRJE4qvZ_7SRmVOGPMbzLH9gAMDaIR4uZPS0oxSHGklxv5-bnqvhcVyxFBXt8czqX029HiVI7yTr7A8w8waK05xtcnnBuZeMNp6XskKvCJnFo3VeQTPak09CF18pQNpjWA0odh3CnY427K1KysMfzW_Y3zhxgStYJO2z6ixzOfBMxxKJ9Fp7F0FmoFXSKka5I" 
              alt="Lavender Mist Latte"
            />
            <div className="absolute top-6 left-6 bg-primary text-white px-5 py-1 rounded-sm shadow-xl">
              <span className="font-sans font-bold text-[10px] tracking-widest uppercase">SIGNATURE</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-4xl font-serif font-bold text-primary mb-3 leading-tight group-hover:text-amber-800 transition-colors">The Lavender Mist Latte</h2>
              <p className="text-base text-on-surface-variant leading-relaxed italic">
                A delicate infusion of dried organic lavender and local wildflower honey, balanced with a double shot of our medium-roast Ethiopia blend.
              </p>
            </div>
            <div className="bg-surface-container-low border border-outline-variant p-6 rounded-lg shadow-sm space-y-4">
              <div className="flex items-center gap-4 text-primary">
                <Clock size={16} />
                <span className="text-[10px] font-bold tracking-widest">8 MINS PREP</span>
              </div>
              <div className="flex items-center gap-4 text-primary">
                <Utensils size={16} />
                <span className="text-[10px] font-bold tracking-widest">4 INGREDIENTS</span>
              </div>
              <div className="flex items-center gap-4 text-primary">
                <Zap size={16} />
                <span className="text-[10px] font-bold tracking-widest">INTERMEDIATE</span>
              </div>
            </div>
          </div>
        </motion.article>

        <div className="lg:col-span-4 space-y-12">
          {[
            {
              title: 'Velvet Flat White',
              meta: '5 MINS • 2 INGREDIENTS',
              image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdCvbDu_3yEI_8aiVhnoXmFBg4qQvZfiZz1quf6FZUHOrmxyhJTr3P6RfubfpQSdadffN7yB0uzz1LWebfpHDWZFC4IGDqkx0vbNXVE8GjFdnsQTGkdPked5vSzEAi2mrgzY5zWy_qhctkSq6RQj4Mm88FxVgZrQ_jCfgrI58bpQH7-oNwdv57GAt7oRO5Ts3zYReBsClr2yUPeqEMqzuHjv2rGPkgwXgz0RnC3Oy2QqSRJWh5jZz4O7k-dhVEZI63BxcIkvO7Arc'
            },
            {
              title: 'Kyoto Cold Brew',
              meta: '12 HRS • 1 INGREDIENT',
              image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB22FHbTdec_kF7xQy53JTWS5foxrvskXbgxJVhcRSeIUD4GTqb-h2VTTCdG1Gzn7LPZTo2UuXFjIUGguLCgWe7Sxvs1lfu_LyQdHNbyx0CMKrV7r7hwd6wiEsPDJxovlS2b7ToPcrz6ClaLnigjq8NjCC4Hl29ZagJX7oDJtONj0lDso1mH_Of85tNN1E6IXIF33LsFEFD9ADi8RXmYkNmaVRWODdajQpOn51SOHgdigFMCY4fhlySZ3oTr44pHsNtadUaFHYIplU'
            }
          ].map(item => (
            <motion.article 
              key={item.title}
              whileHover={{ x: 5 }}
              className="group cursor-pointer border-b border-outline-variant pb-8"
            >
              <div className="relative overflow-hidden aspect-square mb-6 rounded-lg shadow-md">
                <img className="w-full h-full object-cover grayscale-[15%] transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0" src={item.image} alt={item.title} />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-primary group-hover:text-amber-800 transition-colors uppercase tracking-tight">{item.title}</h3>
                <p className="flex items-center gap-2 mt-2 text-[10px] font-bold tracking-widest text-on-tertiary-container">
                  <Clock size={10} /> {item.meta}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <section className="mt-stack-lg grid grid-cols-1 md:grid-cols-3 gap-12">
        {[
          { 
            title: 'Traditional Cortado', 
            desc: 'Equal parts espresso and steamed milk, served at the perfect temperature.', 
            roast: 'DARK',
            time: '4 MINS',
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCU2Mt10mLA7kzpD5nah42PxC--DOHuPx5zBUSgzMjmmhMZhfeqNfgkv6mBXpA7b0VdaHm4uPRho9KM9yA4HCs82jTgCP9q8zJBJVkvLiYQyRmS7UewEpeQRS0S0hA9SdkosgYpqxARPyx-jwesdGdcsNsKY8VF_kqPwxAXi492obt_PhFHlVcW9OlwVZUUxx0yj3KMeYOlWTS8NDwkvDQp54lmNeTu7unzOJdr_tEkM42w74TTY2g2eKQzzwyOWGLAgLH2WewJMsw"
          },
          { 
            title: 'Smoked Mocha', 
            desc: 'Artisanal chocolate ganache with a hint of smoked sea salt and espresso.', 
            roast: 'MEDIUM',
            time: '10 MINS',
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8TyFHpwx7DJFsNur1JSzklGsOziqhdp0GBA1JPEqD5XGFMzFDpZzMhT6MUuIr4MCP7DLMdV9EEbOIeNcbI_SdpaDN9ssom0zIXVNiJlDbmqX1NYWhQ-fqzbtNAJMYTUSsv2EB9QtMrqAQXBx0fZci7l9_3KBNjXCRu_NfWyZO-NXRZbR4vAl32SlCfztl0_JGYjF6VIDaRW_1fxB18BxgN1fh2uYI_vwGyzUCcoYFp-aT0O9Jes4u0aFYxrSs15vLUTrWIczbAaM"
          },
          { 
            title: 'Golden Oat Latte', 
            desc: 'Turmeric-infused oat milk layered with a bright, acidic blonde roast.', 
            roast: 'LIGHT',
            time: '6 MINS',
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvGjzIQ3IQRP-vpcnaaA_J5L3U-GPpKpsprt-WpeU_TrjaYKHPkcvA_yUZjZw9cm8hdTE28IAuFIT7gpZ5lDOChyO9XxUyDI2E7roUEV0nZsSMQWa-fYivdQtMlxxxfex0jRwS9qVtWIbPpSMmZW9OsVeWZFUMxjDUXX2Wm-i4gbdHmB_KFuHdLHteXokeJYFe48MU3FRG3iB5zNz2l8V5TlNskMVdPDmLg84zNuzZT9lJzd4JQPQhHRNB3xObvV16drEt9r_5LG0"
          }
        ].map(article => (
          <motion.article 
            whileHover={{ y: -8 }}
            key={article.title} 
            className="group"
          >
            <div className="aspect-[4/3] overflow-hidden mb-6 rounded-lg shadow-sm border border-outline-variant p-2 group-hover:shadow-xl transition-all">
              <img className="w-full h-full object-cover grayscale-[10%]" src={article.image} alt={article.title} />
            </div>
            <h4 className="text-2xl font-serif font-bold text-primary mb-3 leading-tight transition-colors group-hover:text-amber-800">{article.title}</h4>
            <p className="text-sm text-on-surface-variant mb-6 leading-relaxed italic">{article.desc}</p>
            <div className="flex justify-between items-center bg-surface-container-low p-4 rounded-lg border border-outline-variant/30">
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary">Roast: {article.roast}</span>
              <span className="text-[9px] font-bold text-surface-tint tracking-widest">{article.time}</span>
            </div>
          </motion.article>
        ))}
      </section>

      {/* Secret Menu CTA */}
      <section className="mt-24 p-12 md:p-20 bg-primary-container text-white rounded-3xl relative overflow-hidden text-center shadow-2xl">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none scale-[3]">
          <ShoppingBag size={200} />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-primary-fixed-dim italic">Join the Secret Menu</h2>
          <p className="text-lg md:text-xl font-sans mb-12 opacity-80 leading-relaxed italic">
            Every Sunday, we release a hidden recipe from our archive directly to your inbox. No fluff, just the art of the pour.
          </p>
          <form className="flex flex-col md:flex-row gap-4 w-full" onSubmit={e => e.preventDefault()}>
            <input 
              className="flex-grow bg-white/10 border border-white/20 text-white placeholder-white/40 focus:ring-2 focus:ring-amber-600 focus:border-amber-600 px-8 py-4 rounded-full outline-none backdrop-blur-sm" 
              placeholder="Your email address" 
              type="email" 
            />
            <button className="bg-amber-600 text-white font-sans font-bold tracking-widest text-[10px] uppercase px-12 py-4 rounded-full hover:bg-amber-700 transition-all flex items-center justify-center gap-2">
              Subscribe <ArrowRight size={14} />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
