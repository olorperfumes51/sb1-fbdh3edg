import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { FaPhoneAlt } from 'react-icons/fa';
import { useCategories } from '../data/CategoryContext'; // Import the context hook
import Header from '../components/Header'; // Import Header
import { useEffect } from 'react';

export default function CategoryPage() {
  const { categoryId } = useParams<{ categoryId: string }>(); // Extract categoryId from URL
  const navigate = useNavigate();

  // Access categories from the context
  const { categories } = useCategories();

  // Find the category based on the categoryId from URL
  const category = categories.find((cat) => cat.id === categoryId);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0); // This ensures the page scrolls to the top on load
  }, []);

  // If category not found, show an error or redirect
  if (!category) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-3xl text-red-500">Category not found</h2>
        <button
          onClick={() => navigate('/')} // Navigate back to homepage
          className="mt-4 px-6 py-2 bg-emerald-600 text-white rounded-md"
        >
          Go to Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-sans bg-gradient-to-b from-emerald-50 via-emerald-100/40 to-amber-50">
      {/* ================= HEADER ================= */}
      <Header />

      {/* ================= HERO ================= */}
      <section
        className="relative h-[55vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${category.image_url})`, // Using image_url from the category
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        <div className="relative z-10 text-center px-6 max-w-4xl animate-fadeUp">
          <h1 className="text-5xl md:text-6xl font-serif tracking-wide mb-4 text-emerald-50 drop-shadow-xl">
            {category.name}
          </h1>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <button
          onClick={() => navigate('/')} // Navigate back to home page
          className="inline-flex items-center gap-2 mb-14 text-emerald-800 hover:text-emerald-600 font-medium transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          Back to Collections
        </button>

        <div className="text-center max-w-3xl mx-auto mb-20 animate-fadeUp">
          <h2 className="text-3xl font-serif text-emerald-900 mb-4">
            Essence of {category.name}
          </h2>
          <p className="text-emerald-900/60 leading-relaxed text-lg">
            {category.description}
          </p>
        </div>

        <div className="text-center animate-fadeUp">
          <h3 className="text-3xl font-serif text-emerald-900 mb-10">
            Categories
          </h3>

          <div className="flex flex-wrap justify-center gap-5 max-w-4xl mx-auto">
            {category.examples.split(', ').map((note, i) => (
              <span
                key={i}
                style={{ animationDelay: `${i * 0.08}s` }}
                className="animate-fadeUp px-8 py-3 rounded-full bg-gradient-to-r from-emerald-200/70 to-amber-200/70 text-emerald-900 font-medium shadow-sm backdrop-blur hover:scale-105 transition-transform"
              >
                {note}
              </span>
            ))}
          </div>
        </div>
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
