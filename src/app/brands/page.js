'use client';

import React from 'react';

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
    image: 'logo7.webp',},
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
    <div className="min-h-screen bg-pink-50 py-12 px-4 sm:px-8">
      <h1 className="text-4xl font-bold text-center text-pink-600 mb-10">
        Our Featured Brands
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img
              src={brand.image}
              alt={brand.name || `Brand ${index + 1}`}
              className="w-full h-48 object-contain p-4 bg-white"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
