import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { FaPhoneAlt } from 'react-icons/fa';
import Header from '../components/Header';
import { motion } from 'framer-motion'; // Import animation library

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    query: '',
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const apiUrl =
    'https://script.google.com/macros/s/AKfycbyWRnMNLQF8CZiinuDQJO2EOvjn2iEeSdYcPJKxTqEsJN7jk3h730j4KREmyybEKRp4Yw/exec';

  // Handle form field change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage('Your query has been submitted successfully!');
        setFormData({
          name: '',
          company: '',
          phone: '',
          email: '',
          query: '',
        });
        setTimeout(() => {
          navigate('/'); // Redirect to Home after 2 seconds
        }, 2000);
      } else {
        throw new Error('Something went wrong. Please try again.');
      }
    } catch (error) {
      setErrorMessage(error.message || 'Failed to submit the form');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen font-sans bg-gradient-to-b from-emerald-50 via-emerald-100/40 to-emerald-200">
      {/* ================= HEADER ================= */}
      <Header onHomeClick={() => navigate('/')} />

      {/* ================= CONTENT ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <button
          onClick={() => navigate('/')} // Navigate back to home page
          className="inline-flex items-center gap-2 mb-14 text-emerald-800 hover:text-emerald-600 font-medium transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          Back to Home
        </button>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-serif text-emerald-900 mb-6">
            You Can Raise a Query
          </h2>
          <p className="text-emerald-900/60 mb-8 text-lg">
            Please fill out the form on the right to submit your query or
            request.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          {/* Left Section - Contact Information */}
          <div className="text-center lg:text-left">
            <div className="space-y-4">
              <div>
                <p className="text-xl font-semibold text-emerald-800">Address:</p>
                <p className="text-lg text-emerald-900">
                  Olor Perfumery H-12, Kailash Park Indl. Area
                  <br />
                  New Delhi - 110015, India
                </p>
              </div>

              <div>
                <p className="text-xl font-semibold text-emerald-800">Phone:</p>
                <p className="text-lg text-emerald-900">
                  <FaPhoneAlt className="inline-block" /> +91 9560939994
                </p>
              </div>

              <div>
                <p className="text-xl font-semibold text-emerald-800">Email:</p>
                <p className="text-lg text-emerald-900">
                  support@olorperfumery.com
                </p>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-serif text-emerald-900 mb-6">
              Contact Form
            </h3>

            {successMessage && (
              <div className="text-green-600 mb-4 p-2 border border-green-200 rounded-lg">
                {successMessage}
              </div>
            )}

            {errorMessage && (
              <div className="text-red-600 mb-4 p-2 border border-red-200 rounded-lg">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-4">
                {/* Name */}
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="p-3 rounded-lg border-2 border-emerald-200 focus:outline-none focus:border-emerald-500"
                />

                {/* Company Name */}
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company Name"
                  required
                  className="p-3 rounded-lg border-2 border-emerald-200 focus:outline-none focus:border-emerald-500"
                />

                {/* Phone */}
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  className="p-3 rounded-lg border-2 border-emerald-200 focus:outline-none focus:border-emerald-500"
                />

                {/* Email */}
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="p-3 rounded-lg border-2 border-emerald-200 focus:outline-none focus:border-emerald-500"
                />

                {/* Query */}
                <textarea
                  name="query"
                  value={formData.query}
                  onChange={handleChange}
                  placeholder="Your Query"
                  required
                  rows={4}
                  className="p-3 rounded-lg border-2 border-emerald-200 focus:outline-none focus:border-emerald-500"
                />

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-4 p-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-500 disabled:bg-emerald-300 transition-all"
                >
                  {loading ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-emerald-950 text-emerald-100">
        <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">
          <div>
            <h3 className="text-2xl font-serif text-amber-400 mb-4">
              Olor PerFumery
            </h3>
            <p className="text-sm text-emerald-200 leading-relaxed">
              Luxury fragrances crafted from nature’s finest elements.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Address</h4>
            <p className="text-sm text-emerald-200">
              Olor Perfumery H-12, Kailash Park Indl. Area
              <br />
              New Delhi - 110015, India
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <p className="flex items-center gap-2 text-sm text-emerald-200">
              <FaPhoneAlt className="h-4 w-4" /> +91 9560939994
            </p>
          </div>
        </div>

        <div className="border-t border-emerald-900 py-4 text-center text-xs text-emerald-300">
          © {new Date().getFullYear()} Olor PerFumery. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
