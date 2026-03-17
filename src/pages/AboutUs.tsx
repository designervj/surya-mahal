import React from 'react';
import { LeafDivider } from '../components/LeafDivider';
import { CheckCircle2 } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';

export const AboutUs = () => {
  return (
    <>
      {/* Hero Section */}
      <header className="relative h-[50vh] min-h-[400px] flex flex-col pt-[89px]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80" 
            alt="About Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4">
          <FadeIn>
            <h1 className="font-serif text-5xl md:text-7xl text-white mb-4 tracking-wider">
              OUR STORY
            </h1>
            <p className="text-gray-200 tracking-widest uppercase text-sm">Creating unforgettable memories</p>
          </FadeIn>
        </div>
      </header>

      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
        <FadeIn>
          <LeafDivider />
        </FadeIn>
        
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <FadeIn direction="left" className="relative h-[600px]">
            <img 
              src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&q=80" 
              alt="Venue History" 
              className="absolute top-0 left-0 w-4/5 h-4/5 object-cover shadow-xl"
            />
            <img 
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80" 
              alt="Venue Detail" 
              className="absolute bottom-0 right-0 w-3/5 h-3/5 object-cover shadow-xl border-8 border-[#F9F8F6]"
            />
          </FadeIn>
          <FadeIn direction="right">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">A legacy of<br/>elegance & charm</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded in 1998, Grand Pearl has been the premier destination for luxury weddings and corporate events. Sed lectus ultricies id id massa tellus. Gravida ullamcorper lectus vitae tristique cursus tempor rutrum.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Aenean posuere urna feugiat nunc in nulla. Non ac iaculis lobortis amet lectus ac donec. Tristique in porttitor nunc massa a sit neque lectus feugiat.
            </p>
            
            <div className="space-y-4">
              {[
                "Over 20 years of experience",
                "Award-winning catering team",
                "Dedicated event coordinators",
                "Stunning indoor & outdoor spaces"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gray-800" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Team Section */}
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl font-serif mb-4">Meet Our Team</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">The passionate individuals dedicated to making your special day absolutely perfect.</p>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Eleanor Vance", role: "Event Director", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80" },
            { name: "Marcus Chen", role: "Executive Chef", img: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80" },
            { name: "Sarah Jenkins", role: "Floral Designer", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80" }
          ].map((member, i) => (
            <FadeIn key={i} delay={i * 0.2} className="text-center group">
              <div className="relative overflow-hidden mb-6 aspect-[3/4]">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <h3 className="text-2xl font-serif mb-1">{member.name}</h3>
              <p className="text-sm text-gray-500 tracking-widest uppercase">{member.role}</p>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
};
