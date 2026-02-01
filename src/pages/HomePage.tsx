import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryCard from '../components/CategoryCard';
import axios from 'axios';
import { Sparkles, Leaf, Heart, Phone } from 'lucide-react';
import Header from '../components/Header';
import { useCategories } from '../data/CategoryContext';
import { motion } from 'framer-motion'; // Add Framer Motion for smoother animations

interface Category {
  id: string;
  name: string;
  description: string;
  image_url: string;
  sort_order: string;
  is_active: boolean;
}

export default function HomePage() {
  const { categories, setCategories } = useCategories();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();
  const apiUrl = 'https://script.google.com/macros/s/AKfycbzot9kAlEffXJTPdkV14FXOZ02KAAObuYbOhaiWnI1zoMQN2_loldD8xCPh4cNJmUxj/exec';

  useEffect(() => {
    const fetchCategories = async () => {
      if (categories.length > 0) return; // Skip fetching if data is already in context

      try {
        setLoading(true);
        const response = await axios.get(apiUrl);
        console.log('API Response:', response);

        if (response.status === 200 && Array.isArray(response.data)) {
          const fetchedCategories = response.data.filter(
            (category: Category) => category.is_active
          );

          // Sort categories in ascending order by 'sort_order'
          fetchedCategories.sort(
            (a: Category, b: Category) =>
              parseInt(a.sort_order) - parseInt(b.sort_order)
          );

          setCategories(fetchedCategories); // Update context with fetched data
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
  }, [categories.length, setCategories]);

  const onCategorySelect = (categoryId: string) => {
    navigate(`/category/${categoryId}`);
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-emerald-50 via-emerald-100/40 to-amber-50">
        <Header onHomeClick={handleHomeClick} />
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 w-full h-full relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="animate-spin rounded-full border-t-4 border-emerald-500 h-24 w-24 mb-4"></div>
          <p className="text-lg text-emerald-700">Loading, please wait...</p>
        </motion.div>
        <footer className="bg-emerald-950 text-emerald-100">
          <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">
            <div>
              <h3 className="text-2xl font-serif text-amber-400 mb-4">Olor PerFumery</h3>
              <p className="text-sm text-emerald-200 leading-relaxed">Luxury fragrances crafted from nature’s finest elements.</p>
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

  if (error) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-emerald-50 via-emerald-100/40 to-amber-50">
        <Header onHomeClick={handleHomeClick} />
        <motion.p
          className="text-lg text-red-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {error}
        </motion.p>
        <footer className="bg-emerald-950 text-emerald-100">
          <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">
            <div>
              <h3 className="text-2xl font-serif text-amber-400 mb-4">Olor PerFumery</h3>
              <p className="text-sm text-emerald-200 leading-relaxed">Luxury fragrances crafted from nature’s finest elements.</p>
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
      <Header onHomeClick={handleHomeClick} />

      {/* Hero Section */}
      <motion.section
        className="relative h-[65vh] flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
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
            Handcrafted fragrances inspired by nature — blending purity, elegance, and timeless aroma
          </p>
        </div>
      </motion.section>

      {/* USP Section */}
      <motion.section
        className="max-w-7xl mx-auto px-6 py-24 bg-emerald-50/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
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
      </motion.section>

      {/* Categories Section */}
      <motion.section
        className="max-w-7xl mx-auto px-6 pb-28"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="text-center mb-16 animate-fadeUp">
          <h2 className="text-4xl font-serif text-emerald-900 mb-4">Our Collections</h2>
          <p className="text-emerald-900/60 max-w-2xl mx-auto">
            Curated fragrances inspired by nature and tradition
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {categories && categories.length > 0 ? (
            categories.map((category, i) => (
              <motion.div
                key={category.id}
                className="animate-fadeUp will-change-transform"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: i * 0.2 }}
              >
                <CategoryCard category={category} onSelect={onCategorySelect} />
              </motion.div>
            ))
          ) : (
            <div>No categories available</div>
          )}
        </div>
      </motion.section>

      <footer className="bg-emerald-950 text-emerald-100">
        <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">
          <div>
            <h3 className="text-2xl font-serif text-amber-400 mb-4">Olor PerFumery</h3>
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
    <motion.div
      style={{ animationDelay: delay }}
      className="text-center px-6 animate-fadeUp"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-200/60 rounded-full mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-serif text-emerald-900 mb-3">{title}</h3>
      <p className="text-emerald-900/60">{desc}</p>
    </motion.div>
  );
}
