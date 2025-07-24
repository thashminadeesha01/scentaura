'use client';
import React from 'react';
import { User, ShoppingCart } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Navbar() {
  const router = useRouter();

  const handleUserClick = () => {
    router.push('/login');  // Redirect to /login page
  };

  const handleCartClick = () => {
    router.push('/cart');  // Redirect to cart page
  };

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
        {/* Left: Logo */}
        <Link href="/" className="text-2xl font-bold text-pink-600 hover:text-pink-700 transition">
          ScentAura
        </Link>

        {/* Center: Nav Links */}
        <ul className="absolute left-1/2 transform -translate-x-1/2 flex space-x-6 text-gray-700 font-medium">
          <li>
            <Link href="/" className="hover:text-pink-500 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/brands" className="hover:text-pink-500 transition">
              Brands
            </Link>
          </li>
          <li>
            <Link href="/shop" className="hover:text-pink-500 transition">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-pink-500 transition">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-pink-500 transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* Right: Icons */}
        <div className="flex items-center space-x-10 text-pink-700 text-xl">
          <button
            onClick={handleUserClick}
            className="hover:text-pink-400 transition"
            aria-label="Login"
          >
            <User size={20} />
          </button>
          <button 
            onClick={handleCartClick}
            className="hover:text-pink-400 transition"
            aria-label="Shopping Cart"
          >
            <ShoppingCart size={20} />
          </button>
        </div>
      </nav>
    </header>
  );
}