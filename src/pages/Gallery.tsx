import React from 'react';
import { LeafDivider } from '../components/LeafDivider';
import { FadeIn } from '../components/FadeIn';

export const Gallery = () => {
  return (
    <>
      {/* Hero Section */}
      <header className="relative h-[50vh] min-h-[400px] flex flex-col pt-[89px]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80" 
            alt="Gallery Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4">
          <FadeIn>
            <h1 className="font-serif text-5xl md:text-7xl text-white mb-4 tracking-wider">
              OUR GALLERY
            </h1>
            <p className="text-gray-200 tracking-widest uppercase text-sm">Moments captured in time</p>
          </FadeIn>
        </div>
      </header>

      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
        <FadeIn>
          <LeafDivider />
        </FadeIn>
        
        {/* Filter (Visual only) */}
        <FadeIn delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['All', 'Weddings', 'Corporate', 'Parties'].map((filter, i) => (
              <button key={i} className={`px-6 py-2 text-sm tracking-widest uppercase transition-colors ${i === 0 ? 'bg-black text-white' : 'border border-gray-300 hover:border-black'}`}>
                {filter}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {[
            "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1505932794465-147d1f1b2c97?auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80"
          ].map((img, i) => (
            <FadeIn key={i} delay={(i % 3) * 0.15}>
              <div className="break-inside-avoid relative group overflow-hidden">
                <img src={img} alt={`Gallery item ${i + 1}`} className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
};
