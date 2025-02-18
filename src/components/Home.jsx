import React from 'react';
import { Link } from 'react-router-dom'; // Impor Link dari react-router-dom

const Home = () => {
  return (
    <section
      id="home"
      className="bg-cover bg-center h-screen w-screen m-0 p-0 overflow-hidden flex items-center justify-center"
      style={{ backgroundImage: "url('https://warungtegalnusantara.co.id/wp-content/uploads/2023/07/PEKAYON-1-1.jpg')" }}
    >
      <div className="text-center text-white px-4 mx-auto">
        {/* Judul */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Welcome to Warteg Okuta
        </h2>
        
        {/* Deskripsi */}
        <p className="text-lg sm:text-xl md:text-2xl mb-8 drop-shadow-lg">
          Discover the best culinary experience with our delicious dishes and warm hospitality.
        </p>
        
        {/* Tombol */}
        <Link
          to="/about" // Mengarahkan ke halaman "/about"
          className="bg-yellow-400 text-red-700 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold hover:bg-yellow-500 transition duration-300 ease-in-out inline-block"
        >
          cek selengkapnya
        </Link>
      </div>
    </section>
  );
};

export default Home;