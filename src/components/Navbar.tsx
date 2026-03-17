import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Diamond } from 'lucide-react';

export const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 text-white border-b border-white/20">
      <Link to="/" className="flex items-center gap-2">
        <Diamond className="w-6 h-6 text-blue-400" fill="currentColor" />
      </Link>
      <div className="hidden md:flex items-center gap-8 text-sm tracking-widest uppercase">
        <Link to="/" className={`transition-colors ${isActive('/') ? 'text-white font-bold' : 'text-gray-300 hover:text-white'}`}>Home</Link>
        <Link to="/gallery" className={`transition-colors ${isActive('/gallery') ? 'text-white font-bold' : 'text-gray-300 hover:text-white'}`}>Gallery</Link>
        <Link to="/contact" className={`transition-colors ${isActive('/contact') ? 'text-white font-bold' : 'text-gray-300 hover:text-white'}`}>Contact Us</Link>
        <Link to="/about" className={`transition-colors ${isActive('/about') ? 'text-white font-bold' : 'text-gray-300 hover:text-white'}`}>About Us</Link>
      </div>
    </nav>
  );
};
