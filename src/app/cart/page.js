'use client';
import React, { useState } from 'react';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, Tag, Truck } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Navbar from '../components/Navbar';

export default function CartPage() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Chanel No. 5",
      brand: "Chanel",
      price: 9500,
      quantity: 1,
      size: "50ml",
      image:'cart1.avif'
    },
    {
      id: 2,
      name: "Tom Ford Black Orchid",
      brand: "Tom Ford",
      price: 4500,
      quantity: 2,
      size: "50ml",
      image:'cart2.webp'
    },
    {
      id: 3,
      name: "Marc Jacobs Daisy",
      brand: "Marc Jacobs",
      price: 6750,
      quantity: 1,
      size: "100ml",
      image:'cart3.avif'
    }
  ]);

  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState(null);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity === 0) {
      removeItem(id);
      return;
    }

    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const applyPromoCode = () => {
    const validCodes = {
      'SAVE10': { discount: 10, type: 'percentage' },
      'SAVE20': { discount: 20, type: 'fixed' },
      'FREESHIP': { discount: 0, type: 'shipping' }
    };

    if (validCodes[promoCode.toUpperCase()]) {
      setAppliedPromo({
        code: promoCode.toUpperCase(),
        ...validCodes[promoCode.toUpperCase()]
      });
      setPromoCode('');
    } else {
      alert('Invalid promo code. Try: SAVE10, SAVE20, or FREESHIP');
    }
  };

  const removePromoCode = () => {
    setAppliedPromo(null);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = (appliedPromo?.type === 'shipping' || subtotal > 100) ? 0 : 15;
  const promoDiscount = appliedPromo 
    ? appliedPromo.type === 'percentage' 
      ? subtotal * (appliedPromo.discount / 100)
      : appliedPromo.type === 'fixed' ? appliedPromo.discount : 0
    : 0;
  const total = subtotal + shipping - promoDiscount;

  const CartItem = ({ item }) => (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-pink-50 rounded-xl shadow-sm border border-gray-200">
      {/* Product Image */}
      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
        <Image
          src={`/${item.image}`}
          alt={item.name}
          width={80}
          height={80}
          className="w-full h-full object-cover"
          sizes="(max-width: 640px) 64px, 80px"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-gray-900 text-sm sm:text-base truncate">{item.name}</h3>
        <p className="text-gray-600 text-xs sm:text-sm">{item.brand}</p>
        <p className="text-gray-500 text-xs sm:text-sm">{item.size}</p>
        <p className="text-pink-600 font-semibold mt-1 text-sm sm:text-base">Rs.{item.price}.00</p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-2 sm:gap-3 order-3 sm:order-2">
        <button
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition"
        >
          <Minus size={14} className="sm:w-4 sm:h-4" />
        </button>
        <span className="w-6 sm:w-8 text-center font-medium text-sm sm:text-base">{item.quantity}</span>
        <button
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition"
        >
          <Plus size={14} className="sm:w-4 sm:h-4" />
        </button>
      </div>

      {/* Price and Remove */}
      <div className="flex flex-col items-start sm:items-end w-full sm:w-auto order-2 sm:order-3">
  <p className="font-semibold text-gray-900 text-sm sm:text-base">
    Rs.{(item.price * item.quantity).toFixed(2)}
  </p>
  <button
    onClick={() => removeItem(item.id)}
    className="text-red-500 hover:text-red-700 flex items-center gap-1 text-xs sm:text-sm mt-2"
  >
    <Trash2 size={12} className="sm:w-3.5 sm:h-3.5" />
    <span className="sm:block">Remove</span>
  </button>
</div>

    </div>
  );

  if (cartItems.length === 0) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-50 py-6 sm:py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="mb-4 sm:mb-6">
              <Link href="/" className="text-pink-600 hover:text-pink-700 flex items-center gap-2 text-sm sm:text-base">
                ← Back to Home
              </Link>
            </div>
            <div className="text-center py-12 sm:py-16">
              <ShoppingBag size={60} className="sm:w-20 sm:h-20 mx-auto text-gray-300 mb-4 sm:mb-6" />
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Your Cart is Empty</h2>
              <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">Looks like you haven't added any fragrances to your cart yet.</p>
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 bg-pink-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-pink-700 transition duration-200 text-sm sm:text-base"
              >
                <ShoppingBag size={18} className="sm:w-5 sm:h-5" />
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-6 sm:py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition text-sm sm:text-base"
            >
              <ArrowLeft size={18} className="sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Back</span>
            </button>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Shopping Cart</h1>
            <span className="bg-pink-100 text-pink-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
              {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
            </span>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-3 sm:space-y-4">
              {cartItems.map(item => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:sticky lg:top-8">
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Order Summary</h2>

                {/* Promo Code Section */}
                <div className="mb-4 sm:mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Promo Code
                  </label>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Enter code"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm sm:text-base"
                    />
                    <button
                      onClick={applyPromoCode}
                      className="px-3 sm:px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition flex items-center justify-center gap-1 text-sm sm:text-base"
                    >
                      <Tag size={14} className="sm:w-4 sm:h-4" />
                      Apply
                    </button>
                  </div>

                  {appliedPromo && (
                    <div className="mt-2 flex items-center justify-between bg-green-50 text-green-800 px-3 py-2 rounded-lg text-xs sm:text-sm">
                      <span>Code "{appliedPromo.code}" applied</span>
                      <button onClick={removePromoCode} className="text-red-600 hover:text-red-800 text-lg">
                        ×
                      </button>
                    </div>
                  )}
                </div>

                {/* Price Breakdown */}
                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  <div className="flex justify-between text-gray-600 text-sm sm:text-base">
                    <span>Subtotal</span>
                    <span>Rs.{subtotal.toFixed(2)}</span>
                  </div>

                  {promoDiscount > 0 && (
                    <div className="flex justify-between text-green-600 text-sm sm:text-base">
                      <span>Discount ({appliedPromo.code})</span>
                      <span>-Rs.{promoDiscount.toFixed(2)}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-gray-600 text-sm sm:text-base">
                    <span className="flex items-center gap-1">
                      <Truck size={14} className="sm:w-4 sm:h-4" />
                      Shipping
                    </span>
                    <span>{shipping === 0 ? 'Free' : `Rs.${shipping.toFixed(2)}`}</span>
                  </div>

                  <hr className="border-gray-200" />

                  <div className="flex justify-between text-lg font-bold text-gray-900">
                    <span>Total</span>
                    <span>Rs.{total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <button
                  onClick={() => alert('Proceeding to checkout...')}
                  className="w-full bg-pink-600 text-white py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-pink-700 transition duration-200 mb-3 sm:mb-4 text-sm sm:text-base"
                >
                  Proceed to Checkout
                </button>

                <Link
                  href="/shop"
                  className="block text-center text-pink-600 hover:underline font-semibold text-sm sm:text-base"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}