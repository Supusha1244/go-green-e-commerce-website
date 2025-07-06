import React from "react";
import { FaShoppingCart } from "react-icons/fa";

export default function ProductList({ addToCart, toggleCart , cartCount }) {
  const products = [
    {
      title: "Bamboo Travel Cups",
      price: "$24.99",
      img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/32a340ac-37f0-4769-bcd6-ffcf0c5b6c95.png",
      desc: "Set of 2 • 12oz • 100% biodegradable",
    },
    {
      title: "Organic Bags",
      price: "$9.99",
      img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/39ea3469-28a5-4c07-aec8-ece6b5aaea8d.png",
      desc: "Reusable shopping bags made from organic cotton",
    },
    {
      title: "Wooden Utensils",
      price: "$14.49",
      img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/db14309f-91f4-49cb-ba4e-6dc6e256ff46.png",
      desc: "Complete set of biodegradable kitchen utensils",
    },
    {
      title: "Solar Chargers",
      price: "$29.99",
      img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/891c6a7a-fade-4e10-ae38-5dba05023363.png",
      desc: "Portable solar power bank for phones and gadgets",
    },
    {
      title: "Bamboo Brush",
      price: "$4.99",
      img: "https://example.com/bamboo-brush.jpg",
      desc: "Soft bristle toothbrush with a biodegradable bamboo handle",
    },
    {
      title: "Reusable Food Wraps",
      price: "$16.99",
      img: "https://example.com/eco-wraps.jpg",
      desc: "Set of 3 beeswax wraps for keeping food fresh without plastic",
    },
    {
      title: "Compost Bin",
      price: "$29.99",
      img: "https://example.com/compost-bin.jpg",
      desc: "Countertop compost bin with charcoal filter lid",
    },
  ];

  return (
    <section
      className="min-h-screen text-white px-4 py-12"
      style={{
        background:
          "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/bd5cc0fd-0e7e-4295-8fe1-337b8c951c85.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Cart Icon with Badge */}
<div className="flex justify-end mb-6 relative">
  <FaShoppingCart
    onClick={toggleCart}
    className="text-white text-2xl cursor-pointer hover:text-green-400 transition"
  />
  {cartCount > 0 && (
    <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
      {cartCount}
    </span>
  )}
</div>


      {/* Search Bar */}
      <div className="relative mb-10 max-w-2xl mx-auto">
        <input
          type="text"
          placeholder="Search sustainable products..."
          className="w-full bg-white/10 border border-white/20 text-white rounded-full py-3 px-6 pl-12 focus:outline-none focus:ring-1 focus:ring-green-400"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {/* Title & CTA */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          Our <span className="text-green-400">Eco-Friendly</span> Products
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Sustainable solutions for every aspect of your life — all ethically sourced.
        </p>
        <button className="mt-6 bg-green-500 hover:bg-green-600 shadow-lg text-white py-3 px-8 rounded-full text-lg transition">
          Browse All Categories
        </button>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap gap-3 justify-center mb-12">
        {["All Products", "Kitchen", "Bath", "Office", "Outdoor"].map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full text-sm ${
              cat === "All Products"
                ? "bg-green-600 text-white"
                : "bg-white/10 hover:bg-white/20 text-gray-300"
            } transition`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {products.map((product) => (
          <div
            key={product.title}
            className="product-card bg-white/10 backdrop-blur-sm p-6 rounded-xl transition-all hover:-translate-y-2 hover:shadow-lg"
          >
            <img
              src={product.img}
              alt={product.title}
              className="rounded mb-4 h-32 w-full object-contain transition-transform duration-300 hover:scale-105"
            />
            <h3 className="text-green-400 font-semibold text-lg text-center">{product.title}</h3>
            <p className="text-gray-300 text-sm text-center mt-1">
              {product.desc || "Eco-friendly product for a better planet."}
            </p>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-white font-bold">{product.price}</span>
              <button
                onClick={() => addToCart(product)}
                className="bg-green-600 hover:bg-green-700 text-white text-xs px-4 py-2 rounded transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}  