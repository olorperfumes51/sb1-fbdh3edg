import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header'; // Assuming you already have a Header component
import { FaPhoneAlt } from 'react-icons/fa';
import { motion } from 'framer-motion'; // For animations

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen font-sans bg-gradient-to-b from-emerald-50 via-emerald-100/40 to-amber-50">
      {/* ================= HEADER ================= */}
      <Header onHomeClick={() => navigate('/')} />

      {/* ================= CONTENT ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <button
          onClick={() => navigate('/')} // Navigate back to home page
          className="inline-flex items-center gap-2 mb-14 text-emerald-800 hover:text-emerald-600 font-medium transition-colors"
        >
          Back to Home
        </button>

        <div className="text-center mb-16">
          {/* Title with animation */}
          <motion.h2
            className="text-4xl font-serif text-emerald-900 mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            About OLOR Perfumery
          </motion.h2>

          {/* Image with animation */}
          <motion.img
            src="https://example.com/your-image.jpg" // Add your image here
            alt="Fragrance"
            className="w-full max-w-3xl mx-auto rounded-lg shadow-lg mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          />

          {/* Paragraphs with fade-in animation */}
          <motion.p
            className="text-amber-400 mb-8 text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            OLOR Perfumery crafts exquisite aromatic compositions that blend
            artistry with nature’s finest essences. Our fragrances are designed
            for versatile application across fine perfumery, personal care, home
            ambiance, aromatherapy, and lifestyle products—elevating everyday
            experiences through scent.
          </motion.p>
          <motion.p
            className="text-amber-400 mb-8 text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            We believe fragrance is more than aroma; it is emotion, identity,
            and well-being. Our carefully curated ingredients contribute to
            sensory balance, personal expression, and a refined atmosphere in
            both personal and shared spaces.
          </motion.p>
          <motion.p
            className="text-emerald-900/70 mb-8 text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            At OLOR Perfumery, we create high-quality, thoughtfully developed
            perfume oils and aromatic blends that seamlessly integrate into your
            products, enhancing their character, longevity, and appeal. Explore
            our growing collection of signature scents, where craftsmanship,
            creativity, and olfactory excellence come together.
          </motion.p>
        </div>

        {/* Add some animations to the footer */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-emerald-200 via-emerald-100 to-amber-50 p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
        >
          <h3 className="text-3xl font-serif text-emerald-900 mb-4 text-center">Our Values</h3>
          <p className="text-lg text-emerald-800 text-center">
            We value authenticity, quality, and artistry. Our fragrances aim to
            evoke emotions, enhance well-being, and provide a personal touch to
            every product they are part of.
          </p>
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
