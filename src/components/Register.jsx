import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading to true when submitting the form

    const { username, email, password, confirmPassword } = formData;

    // Validasi input
    if (!username || !email || !password || !confirmPassword) {
      setError('All fields are required.');
      setIsLoading(false);
      return;
    }

    if (!isValidEmail(email)) {
      setError('Invalid email address.');
      setIsLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      setIsLoading(false);
      return;
    }

    // Simpan data pengguna di localStorage (sebagai contoh sederhana)
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ username, email, password });
    localStorage.setItem('users', JSON.stringify(users));

    // Redirect ke halaman login setelah registrasi berhasil
    setTimeout(() => {
      setIsLoading(false);
      navigate('/login');
    }, 500); // Simulate a delay for better user experience
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-red-600 mb-6 text-center">Register</h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username */}
          <div>
            <label htmlFor="username" className="block text-gray-700 font-medium mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-red-500"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-red-500"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-red-500"
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-red-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`bg-red-600 text-white py-3 px-6 rounded hover:bg-red-700 transition duration-300 w-full ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isLoading ? 'Processing...' : 'Register'}
          </button>
        </form>

        {/* Link to Login Page */}
        <p className="text-center text-gray-600 mt-4">
          Already have an account?{' '}
          <Link to="/login" className="text-red-600 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;