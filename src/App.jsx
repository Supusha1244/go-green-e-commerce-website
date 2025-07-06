import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import About from "./pages/About";
import Navbar from "./components/Navbar"; // ✅ Import Navbar

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.title === product.title);
      if (existing) {
        return prevItems.map((item) =>
          item.title === product.title
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (title) =>
    setCartItems((prev) => prev.filter((item) => item.title !== title));

  const changeQuantity = (title, qty) =>
    setCartItems((prev) =>
      prev.map((item) =>
        item.title === title ? { ...item, quantity: qty } : item
      )
    );

  const clearCart = () => setCartItems([]);

  return (
    <Router>
      <div className="bg-black text-white min-h-screen font-sans">
        {/* ✅ Show Navbar globally */}
        <Navbar />

        {/* 🛒 Show Cart globally */}
        <Cart
          isOpen={isCartOpen}
          toggleCart={toggleCart}
          items={cartItems}
          removeFromCart={removeFromCart}
          changeQuantity={changeQuantity}
          clearCart={clearCart}
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={
              <ProductList addToCart={addToCart} toggleCart={toggleCart} 
              cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)} />
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

