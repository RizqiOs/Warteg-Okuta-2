import React from 'react';

const About = () => {
  return (
    <>
      {/* Bagian Utama */}
      <section id="about" className="py-16 bg-gray-100 w-screen m-0 p-0 overflow-hidden">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          {/* Kolom kiri */}
          <div className="flex items-center justify-center relative">
            {/* Gambar Utama */}
            <img
              src="https://cdn.seva.id/blog/media/2023/06/shutterstock_2205393217-1.jpg"
              alt="About Us"
              className="rounded-lg shadow-lg w-full h-auto"
            />
            {/* Overlay Gambar Kecil */}
            <div className="absolute bottom-4 right-4 flex space-x-2">
              <img
                src="/images/chef.jpg"
                className="w-20 h-20 rounded-full shadow-md border-2 border-white"
              />
              <img
                src="/images/ingredients.jpg"
                className="w-20 h-20 rounded-full shadow-md border-2 border-white"
              />
            </div>
          </div>
          {/* Kolom kanan */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold text-red-600 mb-6">About Us</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Warteg Okuta didirikan pada tahun 2020 dengan misi untuk menyajikan hidangan autentik dan penuh rasa. Para koki kami sangat bersemangat dalam menciptakan hidangan yang membawa kebahagiaan di meja Anda. Kami hanya menggunakan bahan-bahan segar untuk memastikan setiap gigitan adalah sebuah kenikmatan.
            </p>
            {/* Statistik Singkat */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-red-600">500+</h3>
                <p className="text-gray-700">Pelanggan Bahagia</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-red-600">100+</h3>
                <p className="text-gray-700">Menu Variasi</p>
              </div>
            </div>
            {/* Testimonial */}
            <blockquote className="italic text-gray-700 text-lg leading-relaxed border-l-4 border-red-600 pl-4 mb-6">
              "Makanan di Warteg Okuta benar-benar luar biasa! Saya belum pernah merasakan cita rasa seautentik ini di tempat lain."
              <footer className="mt-2 text-right text-gray-600">- Maria, Pelanggan Setia</footer>
            </blockquote>
            {/* Call to Action */}
            <div className="flex justify-center md:justify-start">
              <a
                href="#menu"
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
              >
                Lihat Menu Kami
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F4EAD5] py-12 text-gray-700">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Kolom 1: Informasi Kontak */}
            <div>
              <h3 className="text-xl font-bold text-red-600 mb-4">Kontak Kami</h3>
              <p className="text-sm">
                <span className="font-semibold">Alamat:</span> Jl. Makan Enak No. 123, Jakarta
              </p>
              <p className="text-sm">
                <span className="font-semibold">Telepon:</span> +62 123 456 789
              </p>
              <p className="text-sm">
                <span className="font-semibold">Email:</span> info@fooddelight.com
              </p>
            </div>

            {/* Kolom 2: Tautan Cepat */}
            <div>
              <h3 className="text-xl font-bold text-red-600 mb-4">Tautan Cepat</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="hover:text-red-600 transition duration-300">
                    Beranda
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-red-600 transition duration-300">
                    Tentang Kami
                  </a>
                </li>
                <li>
                  <a href="#menu" className="hover:text-red-600 transition duration-300">
                    Menu
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-red-600 transition duration-300">
                    Hubungi Kami
                  </a>
                </li>
              </ul>
            </div>

            {/* Kolom 3: Ikuti Kami */}
            <div>
              <h3 className="text-xl font-bold text-red-600 mb-4">Ikuti Kami</h3>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-600 transition duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                    />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-600 transition duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
                    />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-600 transition duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Hak Cipta */}
          <div className="mt-8 border-t border-gray-300 pt-6 text-center text-sm">
            <p>© 2023 Food Delight. All rights reserved.</p>
            <p>Create By Rizqi Okta Syabani</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default About;