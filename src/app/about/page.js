'use client';
import React from 'react';
import { FaHeart, FaBoxOpen, FaUser } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <div className="bg-pink-50 min-h-screen py-12 px-6 sm:px-20">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-6">
        <span className="text-black">About </span>
        <span className="text-pink-600">ScentAura</span>
      </h1>

      {/* Intro Paragraph */}
      <p className="text-gray-700 text-lg max-w-4xl mx-auto text-center mb-10">
        At <span className="font-semibold text-pink-600">ScentAura</span>, we believe fragrance is more than just a scent. It is a story, a feeling, and a part of your identity. We are dedicated to delivering unique, high-quality perfumes and fragrance products that help you express yourself confidently every day.
      </p>

      {/* Mission & Why Choose Us */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Our Mission */}
        <div>
          <h2 className="text-3xl font-semibold text-pink-400 mb-4 text-center">Our Mission</h2>
          <p className="text-gray-700 text-center text-xl">
            Our mission is to craft and curate scents that inspire emotion and elevate your daily lifestyle. We ensure every product is authentic, affordable, and accessible island-wide with trusted delivery.
          </p>
        </div>

        {/* Why Choose Us */}
        <div>
          <h2 className="text-3xl font-semibold text-pink-400 mb-4 text-center">Why Choose Us?</h2>
          <ul className="list-inside text-gray-700 space-y-2 text-center text-xl">
            <li>✅ 100% genuine fragrance products</li>
            <li>🚚 Island-wide fast delivery</li>
            <li>🔐 Secure online payment methods</li>
            <li>📞 24/7 friendly customer support</li>
            <li>🌟 Exceptional customer satisfaction</li>
          </ul>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-16 bg-black py-10 px-6 rounded-xl shadow-md max-w-6xl mx-auto text-center text-white">
        <h3 className="text-2xl font-bold text-pink-400 mb-8">Explore Our Promise</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-yellow-500">
          {/* Card 1 */}
          <div className="flex flex-col items-center justify-center h-48 bg-white border border-gray-800 rounded-md">
            <FaHeart className="text-4xl mb-3" />
            <p className="text-2xl font-bold">19,000+</p>
            <p className="text-sm mt-1 text-yellow-600">Social Media Followers</p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center justify-center h-48 bg-white border border-gray-800 rounded-md">
            <FaBoxOpen className="text-4xl mb-3" />
            <p className="text-2xl font-bold">100+</p>
            <p className="text-sm mt-1 text-yellow-600">Brands</p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center justify-center h-48 bg-white border border-gray-800 rounded-md">
            <FaUser className="text-4xl mb-3" />
            <p className="text-2xl font-bold">150,000+</p>
            <p className="text-sm mt-1 text-yellow-600">Website Visitors</p>
          </div>
        </div>
      </div>
    </div>
  );
}
