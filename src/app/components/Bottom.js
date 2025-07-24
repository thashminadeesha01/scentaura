'use client';
import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPinterest,
  FaWhatsapp,
  FaTiktok,
} from 'react-icons/fa';

const cards = ['card1.webp', 'card2.webp', 'card3.webp'];

export default function ContactFooter() {
  return (
    <footer className="bg-black text-white pt-12 pb-6 px-6 sm:px-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-800 pb-10">
        {/* Column 1 - Brand Info */}
        <div>
          <h3 className="text-lg font-bold text-yellow-400 mb-2">FREE SHIPPING</h3>
          <p className="mb-4">Island wide delivery</p>

          <h3 className="text-lg font-bold text-yellow-400 mb-2">ONLINE PAYMENT</h3>
          <p className="mb-4">Secure transaction</p>

          <h3 className="text-lg font-bold text-yellow-400 mb-2">24/7 SUPPORT</h3>
          <p className="mb-4">Friendly service</p>

          <h3 className="text-lg font-bold text-yellow-400 mb-2">100% SAFE</h3>
          <p className="mb-4">Genuine products</p>
        </div>

        {/* Column 2 - About + Social Media */}
        <div>
          <p className="mb-4 text-gray-300">
            <span className="font-semibold text-pink-400 text-3xl">ScentAura</span> is an online store
            established with the aim of providing customers with a unique fragrance shopping
            experience.
          </p>
          <div className="flex space-x-2 text-2xl mt-4">
            <a href="#" className="hover:text-blue-500"><FaFacebookF /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="#" className="hover:text-red-600"><FaYoutube /></a>
            <a href="#" className="hover:text-red-400"><FaPinterest /></a>
            <a href="#" className="hover:text-green-500"><FaWhatsapp /></a>
            <a href="#" className="hover:text-white"><FaTiktok /></a>
          </div>
        </div>

        {/* Column 3 - Contact Info */}
        <div>
          <h3 className="text-lg font-bold text-white mb-2">SHOW ROOM</h3>
          <p>No 220, Lake Road, Boralesgamuwa</p>
          <p className="text-yellow-400 mt-1">+94 714 665 444</p>
          <p className="mt-1">sales@scentaura.lk</p>
          <p className="mt-1">Open 7 Days a Week</p>
          <p>10AM – 7PM</p>

          <h3 className="text-lg font-bold text-white mt-6 mb-2">COLOMBO OFFICE</h3>
          <p>R113, Ransiri Uyana, Korathota, Kaduwela, Sri Lanka.</p>
          <p className="text-yellow-400 mt-1">+94 718 115 444</p>
          <p className="mt-1">sales@scentaura.lk</p>
        </div>

        {/* Column 4 - Map */}
        <div className="w-full h-64 rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31709.393384358953!2d79.8437075!3d6.9218394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2592df8f94d8f%3A0x9f09c517a7fd537b!2sColombo!5e0!3m2!1sen!2slk!4v1629619394187!5m2!1sen!2slk"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            style={{ border: 0 }}
          ></iframe>
        </div>
      </div>

      {/* Payment Icons */}
      <div className="flex flex-wrap items-center justify-center gap-4 py-6">
        {cards.map((image, index) => (
          <img
            key={index}
            src={`/${image}`}
            alt={`Payment method ${index + 1}`}
            className="w-20 h-auto object-contain"
          />
        ))}
      </div>

      {/* Bottom Text */}
      <div className="text-center text-sm text-gray-400">
        © {new Date().getFullYear()} ScentAura.lk. All rights reserved.
      </div>
    </footer>
  );
}
