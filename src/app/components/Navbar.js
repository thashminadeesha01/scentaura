'use client';
import React, { useState } from 'react';
import { User, ShoppingCart, Menu, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Navbar() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleUserClick = () => {
    router.push('/login');
    setIsMobileMenuOpen(false); // Close mobile menu
  };

  const handleCartClick = () => {
    router.push('/cart');
    setIsMobileMenuOpen(false); // Close mobile menu
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/brands', label: 'Brands' },
    { href: '/shop', label: 'Shop' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        {/* Left: Logo */}
        <Link 
          href="/" 
          className="text-xl sm:text-2xl font-bold text-pink-600 hover:text-pink-700 transition"
          onClick={closeMobileMenu}
        >
          ScentAura
        </Link>

        {/* Center: Desktop Nav Links - Hidden on mobile */}
        <ul className="hidden lg:flex space-x-6 xl:space-x-8 text-gray-700 font-medium absolute left-1/2 transform -translate-x-1/2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link 
                href={link.href} 
                className="hover:text-pink-500 transition duration-200 text-sm xl:text-base"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: Icons and Mobile Menu Button */}
        <div className="flex items-center space-x-4 sm:space-x-6 lg:space-x-8">
          {/* Desktop Icons - Hidden on small screens */}
          <div className="hidden sm:flex items-center space-x-4 lg:space-x-6 text-pink-700">
            <button
              onClick={handleUserClick}
              className="hover:text-pink-400 transition duration-200 p-1"
              aria-label="Login"
            >
              <User size={20} className="lg:w-5 lg:h-5" />
            </button>
            <button 
              onClick={handleCartClick}
              className="hover:text-pink-400 transition duration-200 p-1 relative"
              aria-label="Shopping Cart"
            >
              <ShoppingCart size={20} className="lg:w-5 lg:h-5" />
              {/* Optional: Cart badge */}
              {/* <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span> */}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-pink-700 hover:text-pink-400 transition duration-200"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`lg:hidden bg-white border-t border-gray-200 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-4 py-4 space-y-4">
          {/* Mobile Navigation Links */}
          <div className="space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 px-3 text-gray-700 hover:text-pink-500 hover:bg-pink-50 rounded-md transition duration-200 font-medium"
                onClick={closeMobileMenu}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Icons */}
          <div className="border-t border-gray-200 pt-4 flex items-center justify-center space-x-8">
            <button
              onClick={handleUserClick}
              className="flex flex-col items-center space-y-1 text-pink-700 hover:text-pink-400 transition duration-200 p-2"
              aria-label="Login"
            >
              <User size={24} />
              <span className="text-xs font-medium">Login</span>
            </button>
            <button 
              onClick={handleCartClick}
              className="flex flex-col items-center space-y-1 text-pink-700 hover:text-pink-400 transition duration-200 p-2 relative"
              aria-label="Shopping Cart"
            >
              <ShoppingCart size={24} />
              <span className="text-xs font-medium">Cart</span>
              {/* Optional: Cart badge for mobile */}
              {/* <span className="absolute top-1 right-1 bg-pink-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span> */}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-25 z-40"
          onClick={closeMobileMenu}
        />
      )}
    </header>
  );
}