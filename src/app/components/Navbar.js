'use client';
import React, { useState } from 'react';
import { User, ShoppingCart, Menu, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Navbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleUserClick = () => {
    router.push('/login');
  };

  const handleCartClick = () => {
    router.push('/cart');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
        {/* Left: Logo */}
        <Link href="/" className="text-2xl font-bold text-pink-600 hover:text-pink-700 transition">
          ScentAura
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="sm:hidden text-pink-600 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Center: Nav Links (desktop) */}
        <ul className="hidden sm:flex space-x-6 text-gray-700 font-medium">
          <li><Link href="/" className="hover:text-pink-500 transition">Home</Link></li>
          <li><Link href="/brands" className="hover:text-pink-500 transition">Brands</Link></li>
          <li><Link href="/shop" className="hover:text-pink-500 transition">Shop</Link></li>
          <li><Link href="/about" className="hover:text-pink-500 transition">About</Link></li>
          <li><Link href="/contact" className="hover:text-pink-500 transition">Contact</Link></li>
        </ul>

        {/* Right: Icons */}
        <div className="flex items-center space-x-6 text-pink-700 text-xl">
          <button onClick={handleUserClick} className="hover:text-pink-400 transition" aria-label="Login">
            <User size={20} />
          </button>
          <button onClick={handleCartClick} className="hover:text-pink-400 transition" aria-label="Cart">
            <ShoppingCart size={20} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden bg-white px-6 pb-4">
          <ul className="flex flex-col space-y-4 text-gray-700 font-medium">
            <li><Link href="/" onClick={toggleMenu} className="hover:text-pink-500 transition">Home</Link></li>
            <li><Link href="/brands" onClick={toggleMenu} className="hover:text-pink-500 transition">Brands</Link></li>
            <li><Link href="/shop" onClick={toggleMenu} className="hover:text-pink-500 transition">Shop</Link></li>
            <li><Link href="/about" onClick={toggleMenu} className="hover:text-pink-500 transition">About</Link></li>
            <li><Link href="/contact" onClick={toggleMenu} className="hover:text-pink-500 transition">Contact</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
}
