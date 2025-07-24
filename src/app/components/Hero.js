'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const images = ['perfume1.jpg', 'perfume2.jpg', 'perfume3.avif', 'perfume4.jpg'];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

   const handleSignUpClick = () => {
    router.push('/signup');  // Redirect to signup page
  }

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background images */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Pink overlay */}
      <div className="absolute inset-0 bg-pink-100 opacity-35 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-center px-6">
        <h1 className="text-5xl font-bold mb-4 text-black">
          Discover Your Signature Perfume
        </h1>
        <p className="text-gray-700 text-lg mb-6 font-bold">
          Explore our exclusive collection of premium perfumes.
        </p>
        <div className="flex gap-4">
          <button className="px-6 py-3 bg-pink-500 text-white rounded-full font-semibold hover:bg-pink-600 transition">
            Shop Now
          </button>
          <button onClick={handleSignUpClick} className="px-6 py-3 border-2 bg-gray-100 border-pink-500 text-pink-600 rounded-full font-semibold hover:bg-pink-300 transition">
           Sign Up
          </button>
        </div>
      </div>
    </section>
  );
}
