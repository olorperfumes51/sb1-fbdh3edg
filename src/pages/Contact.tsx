import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { FaPhoneAlt } from "react-icons/fa";
import Header from "../components/Header";
import { motion } from "framer-motion";

export default function ContactPage() {

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    query: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const apiUrl =
    "https://script.google.com/macros/s/AKfycbyWRnMNLQF8CZiinuDQJO2EOvjn2iEeSdYcPJKxTqEsJN7jk3h730j4KREmyybEKRp4Yw/exec";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {

    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();

    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {

      const response = await fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify(formData),
      });

      if (response.ok) {

        setSuccessMessage("Your query has been submitted successfully!");

        setFormData({
          name: "",
          company: "",
          phone: "",
          email: "",
          query: "",
        });

        setTimeout(() => {
          navigate("/");
        }, 2000);

      } else {

        throw new Error("Something went wrong. Please try again.");

      }

    } catch (error: any) {

      setErrorMessage(error.message || "Failed to submit form");

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="relative min-h-screen font-sans bg-gradient-to-b from-emerald-50 via-emerald-100/40 to-amber-50 overflow-hidden">

      {/* ANIMATED PERFUME BACKGROUND */}

      <motion.div
        className="absolute w-40 h-40 bg-amber-200/30 rounded-full blur-3xl"
        animate={{ y: [0, -80, 0], x: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <motion.div
        className="absolute right-20 top-40 w-32 h-32 bg-emerald-200/30 rounded-full blur-3xl"
        animate={{ y: [0, 60, 0], x: [0, -40, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <motion.div
        className="absolute left-40 bottom-40 w-28 h-28 bg-amber-100/40 rounded-full blur-3xl"
        animate={{ y: [0, -60, 0], x: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
      />

      {/* HEADER */}

      <Header onHomeClick={() => navigate("/")} />

      {/* HERO */}

      <section
        className="relative h-[40vh] flex items-center justify-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1585386959984-a4155224a1ad)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        <div className="absolute inset-0 bg-black/50"></div>

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-5xl md:text-6xl font-serif text-white"
        >
          Contact Us
        </motion.h1>

      </section>

      {/* CONTENT */}

      <section className="max-w-7xl mx-auto px-6 py-20 relative z-10">

        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 mb-14 text-emerald-800 hover:text-emerald-600"
        >
          <ArrowLeft className="h-5 w-5" />
          Back to Home
        </button>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif text-emerald-900 mb-4">
            Raise Your Query
          </h2>

          <p className="text-emerald-900/70 text-lg">
            We'd love to hear from you. Fill the form and our team will respond soon.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* FLOATING CONTACT CARDS */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid gap-6"
          >

            <motion.div
              whileHover={{ y: -6 }}
              className="bg-white/10 backdrop-blur-xl p-6 rounded-xl shadow-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <h3 className="font-semibold text-emerald-800 mb-2">Address</h3>
              <p className="text-emerald-900/70">
                Olor Perfumery H-12, Kailash Park Indl. Area
                <br />
                New Delhi - 110015
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              className="bg-white/10 backdrop-blur-xl p-6 rounded-xl shadow-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <h3 className="font-semibold text-emerald-800 mb-2">Phone</h3>
              <p className="flex items-center gap-2 text-emerald-900/70">
                <FaPhoneAlt /> +91 9560939994
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              className="bg-white/10 backdrop-blur-xl p-6 rounded-xl shadow-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <h3 className="font-semibold text-emerald-800 mb-2">Email</h3>
              <p className="text-emerald-900/70">
                support@olorperfumery.com
              </p>
            </motion.div>

          </motion.div>

          {/* FORM */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/80 backdrop-blur-xl p-10 rounded-2xl shadow-2xl border border-white/40"
          >

            <h3 className="text-2xl font-serif text-emerald-900 mb-6">
              Send Message
            </h3>

            {successMessage && (
              <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg">
                {successMessage}
              </div>
            )}

            {errorMessage && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full p-3 rounded-lg border border-emerald-200 focus:border-emerald-500 focus:outline-none"
              />

              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company Name"
                required
                className="w-full p-3 rounded-lg border border-emerald-200 focus:border-emerald-500 focus:outline-none"
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="w-full p-3 rounded-lg border border-emerald-200 focus:border-emerald-500 focus:outline-none"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full p-3 rounded-lg border border-emerald-200 focus:border-emerald-500 focus:outline-none"
              />

              <textarea
                name="query"
                value={formData.query}
                onChange={handleChange}
                placeholder="Your Query"
                required
                rows={4}
                className="w-full p-3 rounded-lg border border-emerald-200 focus:border-emerald-500 focus:outline-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full p-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-500 transition-all"
              >
                {loading ? "Submitting..." : "Submit Query"}
              </button>

            </form>

          </motion.div>

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