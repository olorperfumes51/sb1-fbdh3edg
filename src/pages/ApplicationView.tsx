import { useEffect, useState } from "react";
import Header from "../components/Header";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

type Application = {
  sno: number;
  name: string;
  description: string;
  image_url: string;
  sort_order: number;
  display: boolean;
};

export default function ApplicationView() {

  const navigate = useNavigate();

  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);

  const API_URL =
    "https://script.google.com/macros/s/AKfycbzot9kAlEffXJTPdkV14FXOZ02KAAObuYbOhaiWnI1zoMQN2_loldD8xCPh4cNJmUxj/exec?type=applications";

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  useEffect(() => {

    window.scrollTo(0, 0);

    const cached = localStorage.getItem("applications_cache");
    const cacheTime = localStorage.getItem("applications_cache_time");

    const now = new Date().getTime();

    if (cached && cacheTime && now - Number(cacheTime) < 1000 * 60 * 10) {
      setApplications(JSON.parse(cached));
      setLoading(false);
      return;
    }

    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {

        const filtered = data
          .filter((item: Application) => item.display === true)
          .sort((a: Application, b: Application) => a.sort_order - b.sort_order);

        setApplications(filtered);

        localStorage.setItem("applications_cache", JSON.stringify(filtered));
        localStorage.setItem("applications_cache_time", now.toString());

        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });

  }, []);

  return (

    <div className="min-h-screen font-sans bg-gradient-to-b from-emerald-50 via-emerald-100/40 to-amber-50">

      {/* HEADER */}
      <Header />

      {/* HERO */}
      <section
        className="relative h-[40vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1594035910387-fea47794261f)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        <div className="absolute inset-0 bg-black/50" />

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-5xl md:text-6xl font-serif text-white drop-shadow-lg"
        >
          Applications
        </motion.h1>

      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 mb-14 text-emerald-800 hover:text-emerald-600"
        >
          <ArrowLeft className="h-5 w-5" />
          Back to Home
        </button>

        {/* LOADER */}
        {loading && (
          <div className="flex justify-center mb-12">
            <div className="h-12 w-12 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin"></div>
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-10">

          {/* SKELETON */}
          {loading
            ? [...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl shadow-lg overflow-hidden animate-pulse"
                >
                  <div className="h-56 bg-emerald-100"></div>

                  <div className="p-6 space-y-3">
                    <div className="h-6 bg-emerald-100 rounded w-3/4"></div>
                    <div className="h-4 bg-emerald-100 rounded"></div>
                    <div className="h-4 bg-emerald-100 rounded w-5/6"></div>
                  </div>
                </div>
              ))

            : applications.map((app) => (
                <motion.div
                  key={app.sno}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden transition duration-300"
                >

                  <div className="overflow-hidden">
                    <img
                      loading="lazy"
                      src={app.image_url}
                      alt={app.name}
                      className="w-full h-56 object-cover transition duration-500 hover:scale-110"
                    />
                  </div>

                  <div className="p-6">

                    <h3 className="text-xl font-serif text-emerald-900 mb-3">
                      {app.name}
                    </h3>

                    <p className="text-emerald-900/70 text-sm leading-relaxed">
                      {app.description}
                    </p>

                  </div>

                </motion.div>
              ))}

        </div>

      </section>

      {/* FOOTER */}
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
              +91 9560939994
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