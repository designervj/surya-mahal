import React from 'react';
import { Diamond, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        <div>
          <h4 className="font-serif text-xl mb-6">Address</h4>
          <p className="text-gray-400 text-sm mb-4">Oxford Ave. Cary, NC 27511</p>
          <h4 className="font-serif text-xl mb-6 mt-8">Opening hours</h4>
          <p className="text-gray-400 text-sm">Sun-Mon: 10am - 10pm</p>
        </div>
        
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-6">
            <Diamond className="w-5 h-5" />
            <span className="font-serif text-2xl tracking-widest">Wedding</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
            Sed lectus ultricies id id massa tellus. Gravida ullamcorper lectus vitae tristique cursus tempor r...
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="md:text-right">
          <h4 className="font-serif text-xl mb-6">Phone</h4>
          <p className="text-gray-400 text-sm mb-4">+322 683-5910</p>
          <h4 className="font-serif text-xl mb-6 mt-8">Email</h4>
          <p className="text-gray-400 text-sm">oevans@outlook.com</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
        © Copyright Wedding 2024. Design by Figma. guru
      </div>
    </footer>
  );
};
