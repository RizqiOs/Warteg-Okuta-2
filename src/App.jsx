import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Login from './Login';
import Register from './components/Register';
import './app.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem('isLoggedIn') === 'true');

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const checkLoginStatus = () => {
      setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
    };
    checkLoginStatus();
  }, []);

  const PrivateRoute = ({ children }) => {
    return isLoggedIn ? children : <Navigate to="/login" />;
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        {/* Routing untuk halaman-halaman */}
        <main className="flex-grow">
          <Routes>
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route
              path="/about"
              element={
                <PrivateRoute>
                  <About />
                </PrivateRoute>
              }
            />
            <Route
              path="/menu"
              element={
                <PrivateRoute>
                  <Menu />
                </PrivateRoute>
              }
            />
            <Route
              path="/cart"
              element={
                <PrivateRoute>
                  <Cart />
                </PrivateRoute>
              }
            />
            <Route
              path="/checkout"
              element={
                <PrivateRoute>
                  <Checkout />
                </PrivateRoute>
              }
            />
            <Route
              path="/contact"
              element={
                <PrivateRoute>
                  <Contact />
                </PrivateRoute>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;