import React from "react";
import { FaTimes } from "react-icons/fa";

export default function Cart({ isOpen, toggleCart, items, removeFromCart, changeQuantity, clearCart }) {
  const total = items.reduce(
    (sum, item) => sum + parseFloat(item.price.replace("$", "")) * item.quantity,
    0
  );

  return (
    <div
      className={`fixed top-0 right-0 w-80 bg-white h-full text-black shadow-lg z-50 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl font-bold">Your Cart</h2>
        <FaTimes onClick={toggleCart} className="text-xl cursor-pointer" />
      </div>
      <div className="p-4 flex flex-col gap-4 overflow-y-auto h-[70%]">
        {items.length === 0 ? (
          <p className="text-center">Cart is empty</p>
        ) : (
          items.map((item) => (
            <div key={item.title} className="flex gap-4 items-center border p-2 rounded">
              <img src={item.img} alt={item.title} className="w-16 h-16 object-contain" />
              <div className="flex-1">
                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-green-600">{item.price}</p>
                <input
                  type="number"
                  min={1}
                  value={item.quantity}
                  onChange={(e) => changeQuantity(item.title, parseInt(e.target.value))}
                  className="w-12 border px-1 mt-1"
                />
              </div>
              <button
                onClick={() => removeFromCart(item.title)}
                className="text-red-500 font-bold"
              >
                ✕
              </button>
            </div>
          ))
        )}
      </div>
      {items.length > 0 && (
        <div className="p-4 border-t">
          <div className="flex justify-between mb-4">
            <span className="font-semibold">Total:</span>
            <span className="font-bold">${total.toFixed(2)}</span>
          </div>
          <button
            onClick={clearCart}
            className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
          >
            Buy Now
          </button>
        </div>
      )}
    </div>
  );
}
