'use client';
import React from 'react';

const reviews = [
  {
    id: 1,
    name: 'Alice',
    rating: 5,
    comment: 'Absolutely love ScentAura perfumes! Long lasting and elegant.',
  },
  {
    id: 2,
    name: 'Ben',
    rating: 4,
    comment: 'Great fragrance collection. Will buy again!',
  },
  {
    id: 3,
    name: 'Clara',
    rating: 5,
    comment: 'Perfect scents for every occasion. Highly recommend.',
  },
  {
    id: 4,
    name: 'David',
    rating: 3,
    comment: 'Nice scents, but a bit too strong for my taste.',
  },
  {
    id: 5,
    name: 'Eva',
    rating: 4,
    comment: 'Good quality and lovely packaging. Would purchase again.',
  },
];

function Star({ filled }) {
  return (
    <svg
      className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-gray-300'}`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.962a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.287 3.962c.3.922-.755 1.688-1.54 1.118L10 13.347l-3.388 2.46c-.784.57-1.838-.196-1.539-1.118l1.286-3.962a1 1 0 00-.364-1.118L3.606 9.39c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.285-3.962z" />
    </svg>
  );
}

export default function Reviews() {
  return (
    <div className="bg-pink-100 py-12 px-6 sm:px-12">
      <h1 className="text-4xl font-bold text-center text-pink-600 mb-8">Customer Reviews</h1>

      <div className="max-w-4xl mx-auto space-y-6">
        {reviews.map(({ id, name, rating, comment }) => (
          <div
            key={id}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center mb-3">
              <h3 className="font-semibold text-lg text-pink-600">{name}</h3>
              <div className="flex ml-5">
                {[1, 2, 3, 4, 5].map((num) => (
                  <Star key={num} filled={num <= rating} />
                ))}
              </div>
            </div>
            <p className="text-gray-700">{comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
