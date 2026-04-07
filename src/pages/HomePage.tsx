import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";
import axios from "axios";
import { Sparkles, Leaf, Heart, Phone } from "lucide-react";
import Header from "../components/Header";
import { useCategories } from "../data/CategoryContext";
import TrustedPartners from "../components/TrustedPartners";

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
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const apiUrl =
    "https://script.google.com/macros/s/AKfycbzot9kAlEffXJTPdkV14FXOZ02KAAObuYbOhaiWnI1zoMQN2_loldD8xCPh4cNJmUxj/exec";

  useEffect(() => {

    const fetchCategories = async () => {

      try {

        setLoading(true);

        if (categories.length === 0) {

          const res = await axios.get(`${apiUrl}?type=categories`);

          const fetched = res.data
            .filter((c: Category) => c.is_active)
            .sort(
              (a: Category, b: Category) =>
                parseInt(a.sort_order) - parseInt(b.sort_order)
            );

          setCategories(fetched);

        }

      } catch (err) {
        console.error(err);
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
    navigate("/");
  };

  return (
    <div className="min-h-screen font-sans bg-gradient-to-b from-emerald-50 via-emerald-100/40 to-amber-50">

      {/* HEADER */}

      <Header onHomeClick={handleHomeClick} />

      {/* HERO */}

      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/bj6TpzPp/Gemini-Generated-Image-9cd1m99cd1m99cd1.png)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-3xl">

          <h1 className="text-6xl md:text-7xl font-serif tracking-widest mb-6 text-emerald-50">
            Olor PerFumery
          </h1>

          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-amber-300 text-xl md:text-2xl font-semibold mb-6">
            From Nature • For Soul
          </span>

          <p className="text-white/90 text-base md:text-lg">
            Handcrafted fragrances inspired by nature — blending purity,
            elegance and timeless aroma
          </p>

        </div>

      </section>

      {/* USP */}

      <section className="max-w-7xl mx-auto px-6 py-24 bg-emerald-50/60">

        <div className="grid md:grid-cols-3 gap-16">

          <USP
            icon={<Leaf className="h-8 w-8 text-emerald-700" />}
            title="100% Natural"
            desc="Pure essential oils sourced responsibly from nature"
          />

          <USP
            icon={<Heart className="h-8 w-8 text-emerald-700" />}
            title="Handcrafted"
            desc="Small batch perfumes made with patience and passion"
          />

          <USP
            icon={<Sparkles className="h-8 w-8 text-emerald-700" />}
            title="Signature Blends"
            desc="Distinct aromas that define your presence"
          />

        </div>

      </section>

      {/* COLLECTIONS */}

      <section className="max-w-7xl mx-auto px-6 pb-12">

        <div className="text-center mb-16">

          <h2 className="text-4xl font-serif text-emerald-900 mb-4">
            Our Collections
          </h2>

          <p className="text-emerald-900/60 max-w-2xl mx-auto">
            Curated fragrances inspired by nature and tradition
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

          {loading
            ? Array.from({ length: 6 }).map((_, index) => (
                <SkeletonCard key={index} />
              ))
            : categories.map((category) => (
                <CategoryCard
                  key={category.id}
                  category={category}
                  onSelect={onCategorySelect}
                />
              ))}

        </div>

      </section>

      {/* TRUSTED PARTNERS */}

      {/* <TrustedPartners /> */}

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

/* USP */

function USP({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="text-center px-6">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-200/60 rounded-full mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-serif text-emerald-900 mb-3">{title}</h3>
      <p className="text-emerald-900/60">{desc}</p>
    </div>
  );
}

/* SKELETON CARD */

function SkeletonCard() {
  return (
    <div className="animate-pulse rounded-lg overflow-hidden shadow-lg">

      <div className="aspect-[4/5] bg-emerald-200/40"></div>

      <div className="p-4 space-y-3 bg-white">

        <div className="h-4 bg-emerald-200 rounded w-3/4"></div>

        <div className="h-3 bg-emerald-200 rounded w-full"></div>

        <div className="h-3 bg-emerald-200 rounded w-5/6"></div>

      </div>

    </div>
  );
}