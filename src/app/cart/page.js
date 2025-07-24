'use client';
import React, { useState } from 'react';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, Tag, Truck } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

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
    <div className="flex items-center gap-4 p-6 bg-pink-100 rounded-xl shadow-sm border border-gray-300">
      <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1">
        <h3 className="font-semibold text-gray-900">{item.name}</h3>
        <p className="text-gray-600 text-sm">{item.brand}</p>
        <p className="text-gray-500 text-sm">{item.size}</p>
        <p className="text-pink-600 font-semibold mt-1">Rs.{item.price}.00</p>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition"
        >
          <Minus size={16} />
        </button>
        <span className="w-8 text-center font-medium">{item.quantity}</span>
        <button
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition"
        >
          <Plus size={16} />
        </button>
      </div>

      <div className="text-right">
        <p className="font-semibold text-gray-900">Rs.{(item.price * item.quantity).toFixed(2)}</p>
        <button
          onClick={() => removeItem(item.id)}
          className="text-red-500 hover:text-red-700 mt-2 flex items-center gap-1 text-sm"
        >
          <Trash2 size={14} />
          Remove
        </button>
      </div>
    </div>
  );

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-6">
            <Link href="/" className="text-pink-600 hover:text-pink-700 flex items-center gap-2">
              ← Back to Home
            </Link>
          </div>
          <div className="text-center py-16">
            <ShoppingBag size={80} className="mx-auto text-gray-300 mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Cart is Empty</h2>
            <p className="text-gray-600 mb-8">Looks like you haven't added any fragrances to your cart yet.</p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 bg-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-700 transition duration-200"
            >
              <ShoppingBag size={20} />
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition"
          >
            <ArrowLeft size={20} />
            Back
          </button>
          <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
          <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium">
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
          </span>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Promo Code
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Enter code"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                  <button
                    onClick={applyPromoCode}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition flex items-center gap-1"
                  >
                    <Tag size={16} />
                    Apply
                  </button>
                </div>

                {appliedPromo && (
                  <div className="mt-2 flex items-center justify-between bg-green-50 text-green-800 px-3 py-2 rounded-lg text-sm">
                    <span>Code "{appliedPromo.code}" applied</span>
                    <button onClick={removePromoCode} className="text-red-600 hover:text-red-800">
                      ×
                    </button>
                  </div>
                )}
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>Rs.{subtotal.toFixed(2)}</span>
                </div>

                {promoDiscount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount ({appliedPromo.code})</span>
                    <span>-Rs.{promoDiscount.toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between text-gray-600">
                  <span className="flex items-center gap-1">
                    <Truck size={16} />
                    Shipping
                  </span>
                  <span>{shipping === 0 ? 'Free' : `RsRs.{shipping.toFixed(2)}`}</span>
                </div>

                <hr className="border-gray-200" />

                <div className="flex justify-between text-lg font-bold text-gray-900">
                  <span>Total</span>
                  <span>Rs.{total.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={() => alert('Proceeding to checkout...')}
                className="w-full bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700 transition duration-200 mb-4"
              >
                Proceed to Checkout
              </button>

              <Link
                href="/shop"
                className="block text-center text-pink-600 hover:underline font-semibold"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
