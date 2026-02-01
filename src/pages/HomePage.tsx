import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import CategoryCard from '../components/CategoryCard';
import axios from 'axios';
import { Sparkles, Leaf, Heart, Phone } from 'lucide-react';
import Header from '../components/Header'; // Import Header
import { useCategories } from '../data/CategoryContext'; // Import the context hook

interface Category {
  id: string;
  name: string;
  description: string;
  image_url: string;
  sort_order: string;
  is_active: boolean;
}

export default function HomePage() {
  const { categories, setCategories } = useCategories(); // Access the context to get and set categories
  const [loading, setLoading] = useState<boolean>(false); // Track loading state
  const [error, setError] = useState<string>('');
  const navigate = useNavigate(); // Initialize useNavigate hook for navigation

  // API URL for your deployed Google Apps Script
  const apiUrl =
    'https://script.google.com/macros/s/AKfycbzot9kAlEffXJTPdkV14FXOZ02KAAObuYbOhaiWnI1zoMQN2_loldD8xCPh4cNJmUxj/exec';

  useEffect(() => {
    // Only make the API call if categories are empty
    const fetchCategories = async () => {
      if (categories.length > 0) return; // Skip fetching if data is already in context

      try {
        setLoading(true);
        const response = await axios.get(apiUrl);

        // Log the raw response to verify the data
        console.log('API Response:', response);

        if (response.status === 200 && Array.isArray(response.data)) {
          // Filter active categories only
          const fetchedCategories = response.data.filter(
            (category: Category) => category.is_active
          );

          // Sort categories by 'sort_order' (string comparison)
          fetchedCategories.sort(
            (a: Category, b: Category) =>
              parseInt(b.sort_order) - parseInt(a.sort_order)
          );

          setCategories(fetchedCategories); // Update context with the fetched data
        } else {
          throw new Error('Invalid data format from API');
        }
      } catch (err) {
        console.error('Error fetching categories:', err);
        setError('Failed to fetch categories');
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, [categories.length, setCategories]); // Only call API if categories length is 0

  const onCategorySelect = (categoryId: string) => {
    // Navigate to the category page using the categoryId
    navigate(`/category/${categoryId}`);
  };

  const handleHomeClick = () => {
    navigate('/'); // Redirect to HomePage
  };

  // Return loading state with animation if data is still fetching
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-emerald-50 via-emerald-100/40 to-amber-50">
        <Header onHomeClick={handleHomeClick} /> {/* Keep Header visible */}
        <div className="flex flex-col items-center justify-center space-y-4 w-full h-full relative z-10">
          <div className="animate-spin rounded-full border-t-4 border-emerald-500 h-24 w-24 mb-4"></div>
          <p className="text-lg text-emerald-700">Loading, please wait...</p>
        </div>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>{' '}
        {/* Blur background */}
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
                <Phone className="h-4 w-4" /> +91 9560939994
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

  // Show error message if an error occurs
  if (error) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-emerald-50 via-emerald-100/40 to-amber-50">
        <Header onHomeClick={handleHomeClick} /> {/* Keep Header visible */}
        <p className="text-lg text-red-500">{error}</p>
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
                <Phone className="h-4 w-4" /> +91 9560939994
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

  return (
    <div className="min-h-screen font-sans bg-gradient-to-b from-emerald-50 via-emerald-100/40 to-amber-50">
      {/* ================= HEADER ================= */}
      <Header onHomeClick={handleHomeClick} />

      {/* ================= HERO ================= */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105 animate-fadeIn"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-3xl animate-fadeUp">
          <h1 className="text-6xl md:text-7xl font-serif tracking-widest mb-6 text-emerald-50 drop-shadow-xl">
            Olor PerFumery
          </h1>

          <span
            className="
            block text-transparent bg-clip-text
            bg-gradient-to-r from-emerald-300 to-amber-300
            text-xl md:text-2xl font-semibold mb-6
          "
          >
            From Nature • For Soul
          </span>

          <p className="text-white/90 text-base md:text-lg leading-relaxed">
            Handcrafted fragrances inspired by nature — blending purity,
            elegance and timeless aroma
          </p>
        </div>
      </section>

      {/* ================= USP ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24 bg-emerald-50/60">
        <div className="grid md:grid-cols-3 gap-16">
          <USP
            delay="0s"
            icon={<Leaf className="h-8 w-8 text-emerald-700" />}
            title="100% Natural"
            desc="Pure essential oils sourced responsibly from nature"
          />
          <USP
            delay="0.1s"
            icon={<Heart className="h-8 w-8 text-emerald-700" />}
            title="Handcrafted"
            desc="Small batch perfumes made with patience and passion"
          />
          <USP
            delay="0.2s"
            icon={<Sparkles className="h-8 w-8 text-emerald-700" />}
            title="Signature Blends"
            desc="Distinct aromas that define your presence"
          />
        </div>
      </section>

      {/* ================= COLLECTIONS ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-28">
        <div className="text-center mb-16 animate-fadeUp">
          <h2 className="text-4xl font-serif text-emerald-900 mb-4">
            Our Collections
          </h2>
          <p className="text-emerald-900/60 max-w-2xl mx-auto">
            Curated fragrances inspired by nature and tradition
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Ensure categories are available before attempting to map */}
          {categories && categories.length > 0 ? (
            categories.map((category, i) => (
              <div
                key={category.id}
                style={{ animationDelay: `${i * 0.12}s` }}
                className="animate-fadeUp will-change-transform"
              >
                <CategoryCard category={category} onSelect={onCategorySelect} />
              </div>
            ))
          ) : (
            <div>No categories available</div> // Fallback message
          )}
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
              <Phone className="h-4 w-4" /> +91 9560939994
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

/* ================= USP ================= */
function USP({
  icon,
  title,
  desc,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  delay: string;
}) {
  return (
    <div
      style={{ animationDelay: delay }}
      className="text-center px-6 animate-fadeUp"
    >
      <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-200/60 rounded-full mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-serif text-emerald-900 mb-3">{title}</h3>
      <p className="text-emerald-900/60">{desc}</p>
    </div>
  );
}