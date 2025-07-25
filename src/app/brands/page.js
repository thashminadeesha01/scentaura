'use client';
import React from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Link from 'next/link';

// Move brands data outside component to prevent recreation
const brands = [
  {
    name: 'Calvin Klein',
    image: 'logo1.webp',
  },
  {
    name: 'Chanel',
    image: 'logo2.png',
  },
  {
    name: 'bdk Parfums',
    image: 'logo3.webp',
  },
  {
    name: 'Chloe',
    image: 'logo4.png',
  },
  {
    name: 'AMOUAGE',
    image: 'logo5.png',
  },
  {
    name: 'CALLISTO',
    image: 'logo6.jpg',
  },
  {
    name: 'COACH',
    image: 'logo7.webp',
  },
  {
    name: 'ARMAF',
    image: 'logo8.png',
  },
  {
    name: 'Dior',
    image: 'logo9.png',
  },
  {
    name: 'BENTLEY',
    image: 'logo10.jpg',
  }
];

export default function BrandPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-pink-50 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        

        {/* Page Header */}
        <div className="max-w-7xl mx-auto text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-pink-600 mb-4">
            Our Featured Brands
          </h1>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            Discover premium fragrances from the world's most prestigious perfume houses
          </p>
        </div>

        {/* Brands Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-5"
              >
                <div className="relative aspect-square p-4 sm:p-6 bg-white flex items-center justify-center">
                  <Image
                    src={`/${brand.image}`}
                    alt={brand.name || `Brand ${index + 1}`}
                    width={200}
                    height={200}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 480px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                    priority={index < 4} // Prioritize first 4 images for better LCP
                  />
                </div>
                
                {/* Brand Name */}
                <div className="p-3 sm:p-4 bg-gradient-to-t from-pink-50 to-white">
                  <h3 className="text-center font-semibold text-gray-800 text-sm sm:text-base group-hover:text-pink-600 transition-colors duration-300">
                    {brand.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="max-w-4xl mx-auto text-center mt-12 sm:mt-16 bg-white rounded-2xl shadow-lg p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Can't Find Your Favorite Brand?
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mb-6">
            We're constantly expanding our collection. Contact us for special requests or check our shop for the latest additions.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="/shop"
              className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition duration-200 font-medium text-sm sm:text-base"
            >
              Browse All Products
            </Link>
            <Link
              href="/contact"
              className="border-2 border-pink-600 text-pink-600 px-6 py-3 rounded-lg hover:bg-pink-600 hover:text-white transition duration-200 font-medium text-sm sm:text-base"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}