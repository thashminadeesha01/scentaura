'use client';
import React from 'react';

const latestProducts = [
  { name: '212 MEN NYC', image: 'product1.jpg', discription: 'A fresh and vibrant fragrance that embodies the spirit of New York City.', price: 'Rs.9500.00' },
  { name: 'BOSS', image: 'product2.jpg', discription: 'A classic scent that exudes confidence and sophistication.', price: 'Rs.6500.00' },
  { name: 'MA VIE', image: 'product3.jpg', discription: 'A floral and fruity fragrance that captures the essence of modern femininity.', price: 'Rs.12500.00' },
  { name: 'VERY SEXY', image: 'product4.jpg', discription: 'A seductive and alluring scent that leaves a lasting impression.', price: 'Rs.3450.00' },
  { name: 'VERSACE', image: 'product5.jpeg', discription: 'A bold and luxurious fragrance that embodies the glamour of Italian fashion.', price: 'Rs.8750.00' },
  { name: 'TOM FORD', image: 'product6.png', discription: 'An opulent and sophisticated scent that defines modern elegance.', price: 'Rs.15000.00' },
  { name: 'CHANEL', image: 'product7.jpeg', discription: 'A timeless and iconic fragrance that represents classic luxury.', price: 'Rs.2550.00' },
  { name: 'PRADA', image: 'product8.jpg', discription: 'A modern and chic scent that captures the essence of contemporary style.', price: 'Rs.4000.00' }
];

export default function LatestProducts() {
  return (
    <div className=" bg-gray-50 py-10 px-4 sm:px-8">
      <h2 className="text-5xl font-bold text-center text-pink-600 mb-3">ScentAura</h2>
      <h1 className="text-4xl font-bold text-center text-black-600 mb-2">Latest Products</h1>
      <p className="text-center text-gray-600 mb-10">
        Don't miss out on the latest and greatest new product arrived to the ScentAura.
        Discover our <br /> latest collection of exquisite perfumes that captivate the senses and elevate your aura.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {latestProducts.map((product, index) => (
          <div
            key={index}
            className="group relative  hover:*:bg-pink-100 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-8"
          >
            <img
              src={`/${product.image}`}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-black text-center">{product.name}</h2>
              <p className="text-gray-700 mt-2 text-center">{product.discription}</p>
            </div>

            <div className="absolute bottom-4 left-0 w-full px-4 opacity-0 group-hover:opacity-500 transition-opacity duration-100">
              <div className="bg-white p-2 rounded-lg shadow flex justify-between items-center">
                <span className="text-pink-600 font-semibold">{product.price}</span>
                <button className="bg-pink-400 hover:bg-pink-600 text-white text-sm px-3 py-1 rounded">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
