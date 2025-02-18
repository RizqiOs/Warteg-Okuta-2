import React from 'react';

const Contact = () => {
  // Fungsi untuk menangani pengiriman formulir
  const handleSubmit = (e) => {
    e.preventDefault(); // Mencegah reload halaman

    // Ambil nilai dari input
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    // Format pesan untuk WhatsApp
    const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

    // Nomor WhatsApp Anda (gunakan format internasional tanpa tanda + atau spasi)
    const phoneNumber = "6285695494895"; // Ganti dengan nomor WhatsApp Anda

    // Buat URL WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    // Redirect ke WhatsApp
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <h2 className="text-4xl font-bold text-red-600 text-center mb-8">Contact Us</h2>
        <p className="text-gray-700 text-center mb-12">
          We'd love to hear from you! Feel free to reach out for any inquiries or feedback.
        </p>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-100 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-red-600 mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-red-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-red-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-red-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-red-600 text-white py-3 px-6 rounded hover:bg-red-700 transition duration-300 w-full"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-red-600 mb-4">Contact Information</h3>
            <div className="flex items-start space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
              </svg>
              <div>
                <p className="font-medium text-gray-700">Address:</p>
                <p className="text-gray-600">Jl. Contoh No. 123, Jakarta, Indonesia</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <div>
                <p className="font-medium text-gray-700">Email:</p>
                <p className="text-gray-600">info@foodwebsite.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-1.264 1.011a1 1 0 00-.753 1.35l1.481 4.442a1 1 0 01-.255 1.128c-.475.661-1.095 1.322-1.857 1.982a13.486 13.486 0 01-3.33 2.475A1 1 0 013 18v-4.28a1 1 0 00-.753-.97l-1.264-1.011a1 1 0 01-.255-1.128l1.481-4.442A1 1 0 003 5z"
                />
              </svg>
              <div>
                <p className="font-medium text-gray-700">Phone:</p>
                <p className="text-gray-600">+62 123 456 789</p>
              </div>
            </div>
            {/* Map Section */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-red-600 mb-4">Our Location</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.654558690927!2d106.822744!3d-6.17511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sMonumen%20Nasional!5e0!3m2!1sen!2sid!4v1696767399525!5m2!1sen!2sid"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
                className="rounded-lg shadow-md"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;