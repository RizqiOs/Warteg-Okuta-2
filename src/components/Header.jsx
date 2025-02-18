// Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ isLoggedIn, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-red-600 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-bold">Warteg Okuta</h1>
        {/* Menu Hamburger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden focus:outline-none"
        >
          {/* Icon hamburger */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {/* Navigasi */}
        {isLoggedIn && (
          <nav className={`md:flex space-x-6 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
              <li>
                <Link
                  to="/"
                  className="hover:text-yellow-300 transition duration-300 ease-in-out"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-yellow-300 transition duration-300 ease-in-out"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/menu"
                  className="hover:text-yellow-300 transition duration-300 ease-in-out"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-yellow-300 transition duration-300 ease-in-out"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/checkout"
                  className="hover:text-yellow-300 transition duration-300 ease-in-out"
                >
                  Checkout
                </Link>
              </li>
            </ul>
          </nav>
        )}
        {/* Tombol Login/Logout */}
        {isLoggedIn ? (
          <button
            onClick={onLogout}
            className="bg-yellow-400 text-red-700 px-4 py-2 rounded hover:bg-yellow-500 transition duration-300 shadow"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="bg-yellow-400 text-red-700 px-4 py-2 rounded hover:bg-yellow-500 transition duration-300 shadow"
          >
            Login
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;