import React, { useState, useEffect } from 'react';

// Data awal menu (default jika tidak ada data di localStorage)
const initialMenuItems = [
  { id: 1, name: "Spaghetti Carbonara", price: "$12", image: "https://via.placeholder.com/300" },
  { id: 2, name: "Grilled Salmon", price: "$15", image: "https://via.placeholder.com/300" },
  { id: 3, name: "Chicken Caesar Salad", price: "$10", image: "https://via.placeholder.com/300" },
  { id: 4, name: "Beef Steak", price: "$18", image: "https://via.placeholder.com/300" },
];

const Menu = () => {
  // State untuk menyimpan daftar menu
  const [items, setItems] = useState(() => JSON.parse(localStorage.getItem('menuItems')) || initialMenuItems);

  // State untuk formulir tambah/edit menu
  const [newItem, setNewItem] = useState({ name: "", price: "", image: null });

  // State untuk melacak item yang sedang diedit
  const [editingItemId, setEditingItemId] = useState(null);

  // Simpan data menu ke localStorage saat state items berubah
  useEffect(() => {
    localStorage.setItem('menuItems', JSON.stringify(items));
  }, [items]);

  // Fungsi untuk mengonversi file gambar menjadi Base64
  const getBase64 = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });

  // Fungsi untuk menangani perubahan input di formulir
  const handleChange = async (e) => {
    const { name, value, files } = e.target;
    setNewItem({
      ...newItem,
      [name]: name === "image" ? await getBase64(files[0]) : value,
    });
  };

  // Fungsi untuk menangani submit formulir (tambah atau edit menu)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem.name || !newItem.price || !newItem.image) {
      return alert("Please fill in all fields.");
    }
    if (editingItemId !== null) {
      // Edit item yang sudah ada
      setItems(items.map(item => item.id === editingItemId ? { ...item, ...newItem } : item));
    } else {
      // Tambah item baru
      setItems([...items, { id: Date.now(), ...newItem }]);
    }
    // Reset formulir
    setNewItem({ name: "", price: "", image: null });
    setEditingItemId(null);
  };

  // Fungsi untuk mengedit item menu
  const handleEdit = (id) => {
    const itemToEdit = items.find(item => item.id === id);
    setNewItem(itemToEdit);
    setEditingItemId(id);
  };

  // Fungsi untuk menghapus item menu
  const handleDelete = (id) => {
    if (window.confirm("Are you sure?")) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  return (
    <section className="py-16 bg-white w-screen m-0 overflow-hidden">
      <div className="container mx-auto text-center px-4">
        {/* Judul Halaman */}
        <h2 className="text-4xl font-bold text-red-600 mb-8">Our Menu</h2>

        {/* Formulir Tambah/Edit Menu */}
        <form onSubmit={handleSubmit} className="mb-8 max-w-md mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-red-600 mb-4">{editingItemId ? "Edit Menu Item" : "Add New Menu Item"}</h3>
          {["name", "price"].map(field => (
            <div key={field} className="mb-4">
              <label className="block text-gray-700">{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
              <input
                type={field === "price" ? "text" : "text"}
                name={field}
                value={newItem[field]}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
          ))}
          <div className="mb-4">
            <label className="block text-gray-700">Image:</label>
            <div className="relative">
              <input type="file" name="image" id="fileInput" onChange={handleChange} className="hidden" />
              <label htmlFor="fileInput" className="w-full p-2 border border-gray-300 rounded cursor-pointer flex justify-between items-center">
                <span className="text-black">{newItem.image ? "File selected" : "No file selected"}</span>
                <span className="bg-red-600 text-white py-1 px-3 rounded hover:bg-red-700 transition duration-300">Choose File</span>
              </label>
            </div>
          </div>
          <button type="submit" className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300">
            {editingItemId ? "Update Menu Item" : "Add Menu Item"}
          </button>
        </form>

        {/* Daftar Menu */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(item => (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-t-lg" />
              <h3 className="text-xl font-semibold text-red-600 mt-4">{item.name}</h3>
              <p className="text-gray-700">{item.price}</p>
              <div className="flex justify-between mt-4">
                <button onClick={() => handleEdit(item.id)} className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition duration-300">Edit</button>
                <button onClick={() => handleDelete(item.id)} className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition duration-300">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;