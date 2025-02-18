import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const Cart = () => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const total = cart.reduce((sum, item) => sum + parseFloat(item.price.replace('$', '')), 0);

  return (
    <section className="py-16 bg-white w-screen m-0 overflow-hidden">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-red-600 mb-8">Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-700">Your cart is empty.</p>
        ) : (
          <div>
            <ul className="space-y-4">
              {cart.map((item) => (
                <li key={item.id} className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
                  <div>
                    <h3 className="text-lg font-semibold text-red-600">{item.name}</h3>
                    <p className="text-gray-700">{item.price}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition duration-300"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <p className="text-2xl font-bold text-red-600 mt-8">Total: ${total.toFixed(2)}</p>
            <Link
              to="/checkout"
              className="bg-yellow-400 text-red-700 px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition duration-300 inline-block mt-8"
            >
              Proceed to Checkout
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;