import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Search, ShoppingBag } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Brewing', path: '/brewing' },
    { name: 'The Bean', path: '/bean' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Recipes', path: '/recipes' },
    { name: 'Culture', path: '/culture' },
  ];

  return (
    <header className="fixed top-0 z-50 w-full bg-stone-50/90 backdrop-blur-md border-b border-stone-200">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto w-full transition-all duration-300 ease-in-out">
        <div className="flex items-center gap-4">
          <button className="text-primary hover:text-amber-700 transition-colors">
            <Menu size={24} />
          </button>
        </div>
        
        <Link to="/" className="text-2xl font-serif font-bold text-primary italic tracking-tight">
          The Daily Pour
        </Link>
        
        <div className="flex items-center gap-4">
          <button className="text-primary hover:text-amber-700 transition-colors">
            <Search size={22} />
          </button>
          <button className="text-primary hover:text-amber-700 transition-colors">
            <ShoppingBag size={22} />
          </button>
        </div>
      </div>
      
      <nav className="hidden md:flex justify-center border-t border-stone-100 py-3 gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={cn(
              "font-serif text-sm transition-all duration-200",
              location.pathname === link.path
                ? "text-primary font-bold border-b-2 border-amber-600"
                : "text-stone-600 hover:text-amber-700"
            )}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-200 w-full py-16 mt-24 border-t border-stone-800">
      <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-12 px-8 max-w-7xl mx-auto text-center md:text-left">
        <div className="space-y-4">
          <h2 className="text-lg font-serif font-black text-stone-100 italic tracking-tight">The Daily Pour</h2>
          <p className="font-serif text-sm tracking-wide text-stone-400 leading-relaxed max-w-xs mx-auto md:mx-0">
            A digital journal dedicated to the ritual of the slow pour, the history of the bean, and the architecture of the coffee house.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-[10px] font-bold uppercase text-stone-500 tracking-widest">The Journal</h3>
            <ul className="space-y-2 font-serif text-sm">
              <li><a href="#" className="text-stone-400 hover:text-white transition-colors">Archive</a></li>
              <li><a href="#" className="text-stone-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-stone-400 hover:text-white transition-colors">Subscribe</a></li>
              <li><a href="#" className="text-stone-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-[10px] font-bold uppercase text-stone-500 tracking-widest">Categories</h3>
            <ul className="space-y-2 font-serif text-sm">
              <li><a href="#" className="text-stone-400 hover:text-white transition-colors">Brewing</a></li>
              <li><a href="#" className="text-stone-400 hover:text-white transition-colors">The Bean</a></li>
              <li><a href="#" className="text-stone-400 hover:text-white transition-colors">Recipes</a></li>
              <li><a href="#" className="text-stone-400 hover:text-white transition-colors">Culture</a></li>
            </ul>
          </div>
        </div>

        <div className="space-y-4 md:text-right">
          <p className="font-serif text-sm tracking-wide text-stone-400">
            © 1890-2024 The Daily Pour. Est. in Vienna.
          </p>
          <p className="font-serif text-xs text-stone-600">
            All rights reserved. Printed digitally on natural paper texture.
          </p>
        </div>
      </div>
    </footer>
  );
}
