import React from 'react';
import { motion } from 'motion/react';
import { Clock, Calendar, User, Quote, Share2, Rss, ArrowRight } from 'lucide-react';

export default function Culture() {
  return (
    <div className="animate-in fade-in duration-700">
      <main className="max-w-7xl mx-auto py-12">
        {/* Hero Editorial Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center mb-stack-lg">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-7 space-y-stack-md"
          >
            <span className="text-[10px] font-bold text-surface-tint uppercase tracking-[0.4em] mb-4 block">Volume IV • Travel Journal</span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-primary text-balanced leading-tight">
              The Gilded Echoes of Vienna’s Imperial Coffee Houses
            </h2>
            <div className="flex flex-wrap items-center gap-8 font-sans text-[10px] font-bold text-outline py-6 border-y border-outline-variant/30 mt-8 mb-8">
              <div className="flex items-center gap-2 uppercase tracking-widest"><User size={14} /> By Elias Vogel</div>
              <div className="flex items-center gap-2 uppercase tracking-widest"><Calendar size={14} /> October 14, 1894</div>
              <div className="flex items-center gap-2 uppercase tracking-widest"><Clock size={14} /> 12 Minute Read</div>
            </div>
            <p className="text-xl md:text-2xl font-sans text-on-surface-variant leading-relaxed lg:pr-12 italic">
              Stepping into Café Central is more than a visit; it is a temporal displacement. Beneath the vaulted neo-Renaissance ceilings, the scent of Sachertorte and dark roast lingers like a century-old conversation.
            </p>
            <div className="flex items-center gap-8 pt-8">
              <button className="bg-primary text-white px-12 py-4 font-sans font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-all rounded shadow-lg">
                Read the Journal
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-5 relative mt-12 lg:mt-0 shadow-2xl rounded-sm overflow-hidden"
          >
            <div className="aspect-[4/5] relative">
              <img 
                className="absolute inset-0 w-full h-full object-cover mix-blend-multiply" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuClwbDTflpL7zARMGLfv1pBgYdlE2FwsIF0-4H7v439jnq_0niyLMbGCMnpJpo3xDlrnMsg8HDogteC1q0X2afO92xjSkDSMkkZGuCR3zbx3OZGlpsw8KgCTSGK0L4bOEWidoyMCV6efTA5WGo8ydk7ym8lvUvY_D039-QmlA5gJdatjb2yqDYBys3TT43-M7NPygMyVle6Jw5zF_noK5Vb_QlES8nYLsMthtAe0GZyz_Ts6shpWwdGShQzAGSzrTS610PB8rGsWu0" 
                alt="Viennese Coffee House"
              />
              <div className="absolute inset-0 bg-primary/5"></div>
            </div>
          </motion.div>
        </section>

        {/* Article Body Snippet */}
        <div className="max-w-4xl mx-auto mb-stack-lg">
          <div className="font-serif text-xl md:text-2xl text-on-surface leading-loose space-y-12">
            <p className="first-letter:text-8xl first-letter:font-serif first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:text-primary">
              To step into a Viennese coffee house is not merely to seek caffeine; it is to perform an act of cultural preservation. The smell—a heady blend of roasted beans, damp wool, and old newsprint—acts as a sensory portal to the fin-de-siècle. 
            </p>
            
            <motion.blockquote 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -20 }}
              viewport={{ once: true }}
              className="my-20 py-16 px-12 border-l-8 border-primary bg-surface-container-high relative rounded-r-xl"
            >
              <Quote className="text-primary/10 absolute top-8 left-8" size={80} />
              <p className="text-3xl md:text-4xl italic font-serif text-primary leading-tight mb-8 relative z-10">
                "The cafe is a place for people who want to be alone, but need company for it."
              </p>
              <cite className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-outline not-italic block">— Alfred Polgar</cite>
            </motion.blockquote>

            <figure className="my-16">
              <div className="rounded-xl overflow-hidden shadow-2xl p-2 bg-white">
                <img className="w-full h-[600px] object-cover grayscale-[0.1] sepia-[0.1]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7GvaLbPFNJhX4-e3YnrWSlKVfbyKhyDplacxwcVL_xOFI5J4IkOkMvs33-D2SRp9ijZ9aM3mu0cZDybwo3JrWLB5YsRo4UqQsWhiNGMLtl1X3oEd52ctmCNUEqjw4sL_RIQ3XaPdrsywgcALul5bbDAW87MFcgXnADQV6ptdhaca0dul8DyMAoSU4e3VFI8LEFg1JKZh-vOL75Y1skmjC3m48eE_NySYIyjVkhdXddVhgmDROufJUQXSS8WiScwG9PcSrGzDKWEk" alt="Melange Service" />
              </div>
              <figcaption className="mt-6 text-center font-serif text-sm italic text-outline">
                The traditional 'Melange' service: coffee, water, and time.
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Bento Grid: The Global Ritual */}
        <section className="mb-stack-lg pt-12 border-t border-outline-variant">
          <div className="flex justify-between items-end mb-12">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary">The Global Ritual</h3>
            <button className="text-[10px] font-bold text-surface-tint hover:text-primary transition-all flex items-center gap-2 uppercase tracking-widest border-b border-surface-tint outline-none">
              View All Destinations <ArrowRight size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-gutter h-auto md:h-[800px]">
             {/* Istanbul */}
            <motion.div 
              whileHover={{ scale: 0.99 }}
              className="md:col-span-2 md:row-span-2 relative group overflow-hidden bg-primary rounded-xl shadow-xl"
            >
              <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzCe_e25CgrDpZ9cmQsey29FC_Bmp8ZWHhjPV0IaiU2wEDHuKOqt91FVjdCNBq-s547kuc4WhDpZsCmJ8iJBjv9M1iEPcFWRduIJqq-6xvxO6LiFzJud1PqQyGPObKICqEXYVIMrgA6kHVfBHzvvuJwfNx2SEutJGpsFXxJ-Gbv1tUwEDe6CJ7qepx2H-k3-55AdYjDkkPhKTqAWB36Uw944hfkEP_jp1Diuvry3kbLjBJRIciLfiCWzZe19Dk-DNXFf-JJHT_TbE" alt="Istanbul" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-60"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <span className="text-[10px] font-bold text-stone-300 mb-2 block uppercase tracking-widest">ISTANBUL, TURKEY</span>
                <h4 className="text-3xl font-serif font-bold text-white leading-tight">The Sand-Cooked Legacy of the Sublime Porte</h4>
              </div>
            </motion.div>

            {/* Ethiopia */}
            <motion.div 
              whileHover={{ scale: 0.99 }}
              className="md:col-span-2 md:row-span-1 relative group overflow-hidden bg-surface-container rounded-xl shadow-xl"
            >
              <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCdxSZo5zT8saPGWy036eLDAI_EX5_MtIz8oMQIGcxYGnpjq3yDSrYWt737-69hGu-98SiH6fPtkftxIAhmFQyJczTMgUyRdW4wKF7zwHEOPEB7I8k2Rn0gDBQNaOObgqlNX5y5F7KARvpl0dNtS1TJroQIyywuR9nYfbjKIGkTEwAQVm6wuQP4M1vwLK_Jt2l2oFf8QsA5CdOSHh_9go4Dch2s_rE8PghUb6RJ5Fb1aTyCHZ5mrV_CCZH-sgBJKtTDYtDTPhkc0o" alt="Ethiopia" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-700"></div>
              <div className="absolute inset-0 flex items-center justify-center p-8 text-center bg-primary/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="max-w-xs">
                  <span className="text-[10px] font-bold text-white uppercase tracking-[0.4em] mb-4 block">Origin Series</span>
                  <h4 className="text-2xl md:text-3xl font-serif font-bold text-white mt-1">Kaffa: Where the Legend Began</h4>
                  <button className="mt-6 border border-white text-white px-6 py-2 rounded-full text-[9px] font-bold tracking-widest uppercase hover:bg-white hover:text-primary transition-all">Explore the story</button>
                </div>
              </div>
            </motion.div>

            {/* Colombia */}
            <motion.div 
              whileHover={{ scale: 0.99 }}
              className="md:col-span-1 md:row-span-1 relative group overflow-hidden bg-primary rounded-xl shadow-xl"
            >
              <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-70" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1EoBY17KqxDuHIJyfAiaQQvcB__TgNBs1y3FZT3VpBwl2DmpqRndehFFYtiMNWdoUuyByUMF863_FPTaZjKwUfvygFkTlODZhWakzemdRMfxjBudssA9Bnjal1hJX0he8j_VRFGImPn0OcTqn6oYKezmcVIxlIvivIqJRB-BGfTt-VZw-pMaQlABTR98MW6v_QbqNFAWn484Kydf1UaalbxxusipXbPa_6-lwVg1s_WjGeidmqTBcvdBAxT4beXeJK2Mbdt47Ufo" alt="Colombia" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h4 className="text-xl font-serif font-bold text-white italic">The Cloud Forests</h4>
              </div>
            </motion.div>

            {/* Kyoto */}
            <motion.div 
              whileHover={{ scale: 0.99 }}
              className="md:col-span-1 md:row-span-1 relative group overflow-hidden bg-white rounded-xl shadow-xl border border-stone-100"
            >
              <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABJy50Oj3XTrpE8aQRiHO4lfIRcRMos5XEZwHsRhNbVrBhnOFVJBDUDXa3nBvO1ZgGyOqVfnayIfmh2oB5ba198h_aiLNOgHZehRYHLvNnR91nAMgSTH9wUdrFtvoq14fyIi3_IXatxldmYlHl87FnNniHhQ-bqQM-PYATpu64qb6ei9tJqbRdbZcTEhXQdfsCQ4g3Ds-yKCg61Lpfk8UmfWg0B7PbLxDAftxHFWXCop6bQHfy3xxQXa0me33lEaors-W3VDsWeBQ" alt="Kyoto" />
              <div className="absolute bottom-0 right-0 p-6 text-right">
                <h4 className="text-xl font-serif font-bold text-white drop-shadow-lg italic">Kyoto Rituals</h4>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Essay Block */}
        <motion.article 
          whileInView={{ scale: 1.01 }}
          initial={{ scale: 1 }}
          viewport={{ once: true }}
          className="bg-surface-container-highest p-16 md:p-32 relative overflow-hidden rounded-3xl mt-stack-lg shadow-2xl"
        >
          <div className="max-w-2xl mx-auto relative z-10 text-center">
            <span className="text-[10px] font-bold text-surface-tint uppercase tracking-[0.4em] mb-6 block">Deep Dive</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mt-4 mb-8 text-balanced leading-tight">From Seed to Spirit: The Spiritual Roots of the Coffee Ceremony</h2>
            <div className="w-20 h-px bg-primary mx-auto mb-10 opacity-30"></div>
            <p className="text-lg md:text-2xl font-serif text-on-surface mb-12 italic leading-relaxed">
              In the highlands of Ethiopia, coffee is not a beverage; it is a three-hour ritual of friendship and respect. The roasting of the beans over open coal creates a space where time slows to a trickle.
            </p>
            <button className="border-2 border-primary text-primary px-12 py-4 font-sans font-bold text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-500 rounded">
              Read Full Essay
            </button>
          </div>
          <div className="absolute top-1/2 -right-16 text-[280px] font-serif font-bold text-primary opacity-[0.03] select-none pointer-events-none rotate-90 origin-center translate-y-[-50%]">
            CEREMONY
          </div>
        </motion.article>
      </main>

      {/* Share / Social Buttons */}
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center border-t border-outline-variant gap-8">
        <p className="text-xs font-bold uppercase tracking-widest text-outline">Continue your journey</p>
        <div className="flex gap-4">
          <button className="flex items-center gap-3 bg-white border border-outline-variant px-6 py-3 rounded-full hover:bg-stone-50 transition-all font-sans text-[10px] font-bold tracking-widest shadow-sm">
            <Share2 size={16} /> SHARE STORY
          </button>
          <button className="flex items-center gap-3 bg-white border border-outline-variant px-6 py-3 rounded-full hover:bg-stone-50 transition-all font-sans text-[10px] font-bold tracking-widest shadow-sm">
            <Rss size={16} /> RSS FEED
          </button>
        </div>
      </div>
    </div>
  );
}
