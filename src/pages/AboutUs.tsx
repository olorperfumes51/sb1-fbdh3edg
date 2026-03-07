import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen font-sans bg-gradient-to-b from-emerald-50 via-emerald-100/40 to-amber-50">

      {/* HEADER */}

      <Header onHomeClick={() => navigate("/")} />

      {/* HERO */}

      <section className="relative h-[40vh] flex items-center justify-center">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg)",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <motion.h1
          className="relative z-10 text-5xl md:text-6xl font-serif text-white tracking-wide"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About OLOR Perfumery
        </motion.h1>

      </section>

      {/* CONTENT */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        {/* GRID */}

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}

          <motion.img
            src="https://images.pexels.com/photos/3059609/pexels-photo-3059609.jpeg"
            alt="Perfume"
            className="rounded-xl shadow-xl"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          />

          {/* TEXT */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <h2 className="text-4xl font-serif text-emerald-900 mb-6">
              Crafting Fragrance with Passion
            </h2>

            <p className="text-emerald-900/80 mb-6 leading-relaxed text-lg">
              OLOR Perfumery crafts exquisite aromatic compositions that blend
              artistry with nature’s finest essences. Our fragrances are designed
              for versatile applications across perfumery, personal care,
              aromatherapy and lifestyle products.
            </p>

            <p className="text-emerald-900/80 mb-6 leading-relaxed text-lg">
              We believe fragrance is more than aroma — it is emotion, identity
              and memory. Our carefully curated ingredients help create sensory
              balance and a refined atmosphere in both personal and shared spaces.
            </p>

            <p className="text-emerald-900/80 leading-relaxed text-lg">
              At OLOR Perfumery, every fragrance is crafted with attention to
              quality, creativity and timeless elegance.
            </p>

          </motion.div>

        </div>

      </section>

      {/* VALUES */}

      <section className="bg-white py-20">

        <div className="max-w-6xl mx-auto px-6">

          <motion.h2
            className="text-4xl font-serif text-center text-emerald-900 mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            Our Values
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-12">

            <ValueCard
              title="Authenticity"
              text="We source premium ingredients and maintain authenticity in every fragrance."
            />

            <ValueCard
              title="Craftsmanship"
              text="Each blend is carefully crafted to deliver a refined and lasting scent."
            />

            <ValueCard
              title="Elegance"
              text="Our fragrances elevate everyday moments with elegance and sophistication."
            />

          </div>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="bg-emerald-950 text-emerald-100">

        <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">

          <div>
            <h3 className="text-2xl font-serif text-amber-400 mb-4">
              Olor PerFumery
            </h3>
            <p className="text-sm text-emerald-200">
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
              <FaPhoneAlt /> +91 9560939994
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

/* VALUE CARD */

function ValueCard({ title, text }: { title: string; text: string }) {
  return (
    <motion.div
      className="bg-emerald-50 rounded-xl p-8 shadow-md text-center hover:shadow-xl transition"
      whileHover={{ y: -8 }}
    >

      <h3 className="text-2xl font-serif text-emerald-900 mb-4">
        {title}
      </h3>

      <p className="text-emerald-900/70">
        {text}
      </p>

    </motion.div>
  );
}