'use client';
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Search, Filter, Star, Heart } from 'lucide-react';
import Link from 'next/link';

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Mock product data
    // Mock product data
  const mockProducts = [
    {
      id: 1,
      name: "Chanel No. 5",
      brand: "Chanel",
      price: 9500.00,
      rating: 4.8,
      reviews: 1250,
      category: "luxury",
      image:'shop1.avif'
    },
    {
      id: 2,
      name: "Tom Ford Black Orchid",
      brand: "Tom Ford",
      price: 4500,
      rating: 4.7,
      reviews: 890,
      category: "luxury",
      image: 'shop2.avif'
    },
    {
      id: 3,
      name: "Marc Jacobs Daisy",
      brand: "Marc Jacobs",
      price: 6750,
      rating: 4.5,
      reviews: 2100,
      category: "floral",
      image:'shop3.avif'
    },
    {
      id: 4,
      name: "Gucci Bloom",
      brand: "Gucci",
      price: 12000,
      rating: 4.6,
      reviews: 1580,
      category: "floral",
      image: 'shop4.avif'
    },
    {
      id: 5,
      name: "Dior Sauvage",
      brand: "Dior",
      price: 8950,
      rating: 4.9,
      reviews: 3200,
      category: "mens",
      image:'shop5.avif'
    },
    {
      id: 6,
      name: "African Leopard",
      brand: "Ajmal",
      price:16500,
      rating: 4.8,
      reviews: 980,
      category: "mens",
      image:'shop6.jpg'
    },
    {
      id: 7,
      name: "Versace Bright Crystal",
      brand: "Versace",
      price: 7200,
      rating: 4.4,
      reviews: 1340,
      category: "womens",
      image: "shop7.avif"
    },
    {
      id: 8,
      name: "YSL Mon Paris",
      brand: "Yves Saint Laurent",
      price: 8100,
      rating: 4.6,
      reviews: 1020,
      category: "womens",
      image: "shop8.jpg"
    }
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'luxury', label: 'Luxury' },
    { value: 'floral', label: 'Floral' },
    { value: 'mens', label: "Men's Fragrances" },
    { value: 'womens', label: "Women's Fragrances" }
  ];

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-5000', label: 'Under Rs.5000' },
    { value: '5000-10000', label: 'Rs.5000 - Rs.10000' },
    { value: '10000-15000', label: 'Rs.10000 - Rs.15000' },
    { value: '15000+', label: 'Rs.15000+' }
  ];

  const handleSearch = () => {
    setIsLoading(true);
    
    setTimeout(() => {
      let filteredProducts = mockProducts;
      
      // Filter by search query
      if (searchQuery) {
        filteredProducts = filteredProducts.filter(product =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.brand.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }
      
      // Filter by category
      if (selectedCategory !== 'all') {
        filteredProducts = filteredProducts.filter(product =>
          product.category === selectedCategory
        );
      }
      
      // Filter by price range
      if (priceRange !== 'all') {
        const [min, max] = priceRange.includes('+') 
          ? [parseInt(priceRange.split('+')[0]), Infinity]
          : priceRange.split('-').map(Number);
        
        filteredProducts = filteredProducts.filter(product =>
          product.price >= min && product.price <= max
        );
      }
      
      setResults(filteredProducts);
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    handleSearch();
  }, [selectedCategory, priceRange]);

  const ProductCard = ({ product }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative group">
        <img
           src={product.image}
           alt={product.name}
          className="w-full h-80 object-cover"
        />

        <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Heart size={20} className="text-gray-600 hover:text-pink-600" />
        </button>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-900 mb-1">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{product.brand}</p>
        
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
          </div>
          <span className="text-gray-400 text-sm ml-2">({product.reviews} reviews)</span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-pink-600">Rs.{product.price}.00</span>
          <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition duration-200">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <><Navbar/>
    <div className="min-h-screen bg-pink-100 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Back to Home */}
        <div className="mb-6">
          <Link href="/" className="text-pink-600 hover:text-pink-700 flex items-center gap-2">
            ← Back to Home
          </Link>
        </div>

        {/* Search Header */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Search Fragrances</h1>
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for perfumes, brands, or scents..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
            </div>
            
            <button
              onClick={handleSearch}
              className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition duration-200 flex items-center gap-2"
            >
              <Search size={20} />
              Search
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters */}
          <div className="lg:w-64">
            <div className="bg-pink-50 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Filter size={20} />
                Filters
              </h3>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
                >
                  {categories.map(category => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price Range
                </label>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
                >
                  {priceRanges.map(range => (
                    <option key={range.value} value={range.value}>
                      {range.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Search Results</h2>
              <p className="text-gray-600">
                {isLoading ? 'Searching...' : `${results.length} products found`}
              </p>
            </div>

            {isLoading && (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-600 mx-auto"></div>
                <p className="mt-4 text-gray-600">Searching for products...</p>
              </div>
            )}

            {!isLoading && results.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No products found matching your criteria.</p>
                <p className="text-gray-500 mt-2">Try adjusting your filters or search terms.</p>
              </div>
            )}

            {!isLoading && results.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {results.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}