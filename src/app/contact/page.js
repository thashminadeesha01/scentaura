'use client';
import React, { useState } from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPinterest,
  FaWhatsapp,
  FaTiktok,
} from 'react-icons/fa';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-pink-50 min-h-screen py-12 px-6 sm:px-20">
      <h1 className="text-4xl font-bold text-pink-600 mb-6 text-center">Contact Us</h1>

      <p className="text-center text-gray-700 mb-10 max-w-3xl mx-auto">
        Have a question or suggestion? We'd love to hear from you! Fill out the form below and our team will get back to you shortly.
      </p>

      {/* Social Icons */}
      <div className="flex justify-center space-x-6 text-4xl mb-10">
        <a href="#" className="hover:text-blue-500"><FaFacebookF /></a>
        <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
        <a href="#" className="hover:text-red-600"><FaYoutube /></a>
        <a href="#" className="hover:text-red-400"><FaPinterest /></a>
        <a href="#" className="hover:text-green-500"><FaWhatsapp /></a>
        <a href="#" className="hover:text-black"><FaTiktok /></a>
      </div>

      {/* Form */}
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
        {submitted && (
          <div className="mb-6 text-green-600 text-center font-semibold">
            Thank you! Your message has been sent.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
              placeholder="Write your message here..."
            />
          </div>

          <button
            type="submit"
            className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
