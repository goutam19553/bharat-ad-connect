import { useState } from 'react';

export default function WallUpload() {
  const [preview, setPreview] = useState(null);
  const [form, setForm] = useState({
    location: '',
    dimensions: '',
    price: '',
    description: '',
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Wall submitted! We will review and contact you.');
    // Later: send to Firebase or API
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">Monetize Your Wall Space 🧱</h2>
        <p className="text-center text-gray-600 mb-6">
          Upload your wall, set your price, and earn passive income through brand ads!
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium text-gray-700">Wall Image</label>
            <input type="file" accept="image/*" onChange={handleImageChange} className="mt-1" required />
            {preview && <img src={preview} alt="Preview" className="mt-4 h-48 rounded-lg object-cover" />}
          </div>

          <div>
            <label className="block font-medium text-gray-700">Location</label>
            <input type="text" name="location" value={form.location} onChange={handleChange}
              placeholder="e.g., Koramangala, Bangalore"
              className="mt-1 w-full border px-3 py-2 rounded-lg shadow-sm focus:outline-none" required />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-gray-700">Wall Dimensions (in ft)</label>
              <input type="text" name="dimensions" value={form.dimensions} onChange={handleChange}
                placeholder="e.g., 10x15"
                className="mt-1 w-full border px-3 py-2 rounded-lg shadow-sm focus:outline-none" required />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Suggested Price (₹/month)</label>
              <input type="number" name="price" value={form.price} onChange={handleChange}
                placeholder="e.g., 3000"
                className="mt-1 w-full border px-3 py-2 rounded-lg shadow-sm focus:outline-none" required />
            </div>
          </div>

          <div>
            <label className="block font-medium text-gray-700">Description</label>
            <textarea name="description" value={form.description} onChange={handleChange}
              placeholder="Tell us about wall visibility, footfall, nearby landmarks..."
              className="mt-1 w-full border px-3 py-2 rounded-lg shadow-sm focus:outline-none" rows={3} required />
          </div>

          <button type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
            Submit Wall for Listing
          </button>
        </form>
      </div>
    </div>
  );
}
