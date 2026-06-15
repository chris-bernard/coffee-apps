import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Globe, Leaf, CheckCircle } from 'lucide-react';

export default function Bean() {
  const regions = [
    {
      name: 'East Africa',
      desc: 'Bright, acidic, and floral notes. Often processed using the washed method.',
      acidity: 'High',
      body: 'Tea-like'
    },
    {
      name: 'Latin America',
      desc: 'Clean, balanced, with notes of cocoa, nutty sweetness, and mild spice.',
      acidity: 'Medium',
      body: 'Smooth'
    },
    {
      name: 'Asia Pacific',
      desc: 'Heavy body, earthy, and herbal. Frequently semi-washed or natural.',
      acidity: 'Low',
      body: 'Full/Syrupy'
    }
  ];

  return (
    <div className="space-y-stack-lg animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-5 flex flex-col gap-stack-sm text-center lg:text-left">
            <span className="text-[10px] font-bold text-on-tertiary-container uppercase tracking-[0.3em]">Botanical Series</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary leading-tight">The Anatomy of the Bean</h1>
            <p className="text-lg md:text-xl font-sans text-on-surface-variant leading-relaxed italic">
              "From the high plateaus of Ethiopia to the volcanic slopes of Sumatra, the coffee bean is a chronicle of soil, shade, and time."
            </p>
          </div>
          <div className="lg:col-span-7 mt-8 lg:mt-0">
            <motion.div 
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="aspect-video relative overflow-hidden rounded-lg shadow-xl"
            >
              <img 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdclsn5Y_UBGXPitqQAetxUqChJNKas-PXc1VzAsef5AK95nh4BcGdhKdXWO3Kg7C4OJ8j5jUbEodyCg0dyyD5MK6MO6kv0Dzu2bnNlFOXESmIdT1-lHzAd_omi2PaamOVgglkieMqp2i9S154rh7gvTiQKuNSa_TPweFpxippgeZ_utZNM67gcyVRB13vSptE_IV5AeFt8fdZUh91aqie-4s8kZqPCXJIws11vsXmU9taGC3A03qmpbHJIC44D6yUEO3DVyk5O8Q" 
                alt="Coffee Beans"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Bean Belt Section */}
      <section className="max-w-6xl mx-auto">
        <div className="bg-surface-container-high rounded-xl p-6 md:p-12 border border-outline-variant shadow-sm text-center lg:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-gutter mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-3">The Bean Belt</h2>
              <p className="text-base text-on-surface-variant leading-relaxed">
                Exploring the equatorial band between the Tropics of Cancer and Capricorn where the world's most sophisticated Arabica flourishes.
              </p>
            </div>
            <button className="bg-primary text-white mt-6 md:mt-0 px-8 py-3 font-sans font-bold text-xs uppercase tracking-widest rounded hover:opacity-90 transition-all flex items-center gap-2">
              <Globe size={16} /> Explore Map
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {regions.map((region) => (
              <motion.div 
                key={region.name}
                whileHover={{ y: -5 }}
                className="bg-surface-container p-8 border-b-4 border-on-tertiary-container rounded-lg shadow-sm"
              >
                <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
                  <MapPin size={18} className="text-on-tertiary-container" />
                  <h3 className="text-2xl font-serif font-bold text-primary">{region.name}</h3>
                </div>
                <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
                  {region.desc}
                </p>
                <div className="bg-surface-container-low p-4 grid grid-cols-2 gap-4 rounded border border-outline-variant/30">
                  <div>
                    <span className="text-[10px] font-bold uppercase block opacity-60 tracking-tighter mb-1">Acidity</span>
                    <span className="text-sm font-bold">{region.acidity}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase block opacity-60 tracking-tighter mb-1">Body</span>
                    <span className="text-sm font-bold">{region.body}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Degrees of Combustion */}
      <section className="max-w-6xl mx-auto py-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-primary mb-4">Degrees of Combustion</h2>
          <div className="w-24 h-1 bg-on-tertiary-container mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {[
            {
              temp: '190°C – 205°C',
              title: 'Light Roast',
              desc: 'Preserves the origin characteristics. Expect high acidity and distinct floral or fruit notes.',
              image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3c6VHt4cpDLPSbP0zEi5ueaiXswOcQyKUj6Qbo2rfrXK3zBwA_9d5dTclRieQLjCU5Bqt1YXvXKQyL4d_IsiHTwLQFdjv8yl_UxRoeo6WyqhOsz_iYOGIzJvfqfXTCWd146xKVpsP-Hj0dR3Ge6PdrXp3Xg5LTv-kTyxhSGySdnWOePQc6o-ICK1N1NH4g_DOteb7-M81uxCwWlmsHNWz5dk_pFraSNRXNHnXFXCHuMYdYxT9lhaUY9lBv5qCNrAter8GRCG5br8'
            },
            {
              temp: '210°C – 220°C',
              title: 'Medium Roast',
              desc: 'The "American Roast." Balanced acidity and body with developed caramel sweetness.',
              image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCy4GB8AbjeWrFPtUaUbb7IWWzbAXmahBXvUxfWjAg53vRUxPP8f_OoTuDoKHa84LmQSGkne539NLFK5yk8oh0HPJiNp8M-ke4YWZELKiHJEsfKEtawVxlkYNBaoRqFlGdsuoU5Gq-1a8zVuv4M1tnCX_C5lfBr6rm7UYQoADuCicnlVngY2i1JtozV-9m7xmDf1lSsbXwth_hFUIpfdVZzy1Wha3fuzz_jbqYIBc-BOrbpsik4qYISmlWfhogjItPUPhcd6Kbh118'
            },
            {
              temp: '225°C – 245°C',
              title: 'Dark Roast',
              desc: 'Low acidity, heavy body. Roasting flavors of smoke and dark chocolate dominate.',
              image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUSZluwLViAUibidLhDBqiHaSCM5j5awHu51Ri0-D0bFRBnHzErVd7ofZ0CNVqDTOgXTw-hGHu_0dkVFtzCKjaOb6_7n7SUTgtEyDRdx5g9gZpZVrZGEZHth6xIwS4pThofb5SYH4sZzH6ZI0nM-OHcjbtWv0WBXsuDGL5Y0uVnmfyTbSlHwCD301aTF1_z01ea1jLCCaeCw2oyVhafixTdQ2MJoyaZ1J5sBpZcsNgTFKbRm-A63EuNGKy7_eNltkqVfmNKRz6CLk'
            }
          ].map((roast, i) => (
            <motion.div 
              key={roast.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-56 h-56 rounded-full mb-8 relative overflow-hidden border-4 border-surface-container-highest shadow-2xl p-1 bg-white">
                <img className="w-full h-full object-cover rounded-full" src={roast.image} alt={roast.title} />
              </div>
              <span className="text-xs font-bold text-on-tertiary-container mb-2 tracking-widest uppercase">{roast.temp}</span>
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">{roast.title}</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed max-w-xs">{roast.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="max-w-6xl mx-auto mt-12 mb-24 rounded-2xl overflow-hidden bg-surface-container-low shadow-lg border border-outline-variant">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-12 flex flex-col justify-center text-center md:text-left">
            <div className="flex justify-center md:justify-start mb-6">
              <Leaf size={44} className="text-on-tertiary-container" />
            </div>
            <h2 className="text-4xl font-serif font-bold text-primary mb-4 leading-tight">Sustainability in Every Sip</h2>
            <p className="text-base text-on-surface-variant mb-10 leading-relaxed italic">
              Our commitment to ethical sourcing goes beyond a label. We support direct-trade relationships that ensure farmers receive more than the fair trade minimum.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {[
                'Direct Trade Transparency',
                'Shade-Grown Certification',
                'Carbon-Neutral Roasting'
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-bold text-primary justify-center md:justify-start">
                  <CheckCircle size={18} className="text-surface-tint" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/2 relative min-h-[400px]">
            <img 
              className="absolute inset-0 w-full h-full object-cover filter contrast-110" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-BJ_ZOsAu1fW-Kub9udZj0zt5f65KXJivW0WLi_vKA0Zu8ZpKYYEhb-vKafgSUhCk2ICtKbkzaVLbX7cEg53WaMF4v8hWro00ROQuIjFWUcekEUsvU-woJgH-R4Pak52odwAZSNUZvxDM9sqAbwXvvW6K2VgNKCiZpxmXsrMWylXc1-foOs9ZXVr8WuDSCng3yrhTVyVqbogOSuTVv5LCWFTFwTMDvMJ7pg9avi4UTA8n5Iin6t3cM1_hiy6ubEMLHfy46bgKaNg" 
              alt="Sustainable Plantation"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
