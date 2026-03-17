import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { LeafDivider } from '../components/LeafDivider';
import { FadeIn } from '../components/FadeIn';

export const ContactUs = () => {
  return (
    <>
      {/* Hero Section */}
      <header className="relative h-[50vh] min-h-[400px] flex flex-col pt-[89px]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80" 
            alt="Contact Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4">
          <FadeIn>
            <h1 className="font-serif text-5xl md:text-7xl text-white mb-4 tracking-wider">
              GET IN TOUCH
            </h1>
            <p className="text-gray-200 tracking-widest uppercase text-sm">We'd love to hear from you</p>
          </FadeIn>
        </div>
      </header>

      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
        <FadeIn>
          <LeafDivider />
        </FadeIn>
        
        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <FadeIn direction="left">
            <h2 className="text-4xl font-serif mb-6">Let's plan your perfect event</h2>
            <p className="text-gray-600 mb-12 leading-relaxed">
              Sed lectus ultricies id id massa tellus. Gravida ullamcorper lectus vitae tristique cursus tempor rutrum. Aenean posuere urna feugiat nunc in nulla.
            </p>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 mt-1 text-gray-800" />
                <div>
                  <h4 className="font-serif text-xl mb-1">Visit Us</h4>
                  <p className="text-gray-500">Oxford Ave. Cary, NC 27511</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 mt-1 text-gray-800" />
                <div>
                  <h4 className="font-serif text-xl mb-1">Call Us</h4>
                  <p className="text-gray-500">+322 683-5910</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 mt-1 text-gray-800" />
                <div>
                  <h4 className="font-serif text-xl mb-1">Email Us</h4>
                  <p className="text-gray-500">oevans@outlook.com</p>
                </div>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="w-full h-64 bg-gray-200 relative overflow-hidden">
              <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80" alt="Map" className="w-full h-full object-cover opacity-50 grayscale" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white px-6 py-3 shadow-md font-serif flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Grand Pearl
                </div>
              </div>
            </div>
          </FadeIn>
          
          {/* Contact Form */}
          <FadeIn direction="right" className="bg-white p-8 md:p-12 shadow-sm border border-gray-100">
            <h3 className="text-3xl font-serif mb-8">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">First Name</label>
                  <input type="text" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Last Name</label>
                  <input type="text" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
                <input type="email" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Phone Number</label>
                <input type="tel" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Event Type</label>
                <select className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors bg-transparent">
                  <option>Wedding</option>
                  <option>Corporate Event</option>
                  <option>Private Party</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Message</label>
                <textarea rows={4} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors resize-none"></textarea>
              </div>
              <button type="submit" className="bg-black text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-gray-800 transition-colors w-full mt-4">
                Submit Inquiry
              </button>
            </form>
          </FadeIn>
        </div>
      </section>
    </>
  );
};
