import { ArrowRight } from "lucide-react";
import { Category } from "../types";

interface CategoryCardProps {
  category: Category;
  onSelect: (categoryId: string) => void;
}

export default function CategoryCard({
  category,
  onSelect,
}: CategoryCardProps) {

  const fragranceNotes = Array.isArray(category.fraganceNotes)
    ? category.fraganceNotes
    : [];

  return (
    <button
      onClick={() => onSelect(category.id)}
      className="group transition-all duration-300 transform hover:-translate-y-2"
    >
      {/* Outer Glass Card */}

      <div className="bg-amber-400/80 backdrop-blur-md border border-emerald-100 rounded-xl shadow-lg p-1 hover:shadow-2xl transition">

        {/* Image Wrapper */}

        <div className="relative overflow-hidden rounded-lg">

          <div className="aspect-[4/5] relative">

            {/* Image */}

            <img
              src={category.image_url}
              alt={category.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Gradient */}

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

            {/* Info */}

            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">

              <h3 className="text-2xl font-serif mb-2">
                {category.name}
              </h3>

              <p className="text-sm text-gray-200 mb-3 line-clamp-2">
                {category.description}
              </p>

              {/* Notes */}

              <div className="flex flex-wrap gap-2 mb-4">

                {fragranceNotes.slice(0, 3).map((note, index) => (

                  <span
                    key={index}
                    className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs"
                  >
                    {note}
                  </span>

                ))}

              </div>

              {/* Explore */}

              <div className="flex items-center text-sm font-medium group-hover:translate-x-2 transition-transform">

                Explore Collection

                <ArrowRight className="ml-2 h-4 w-4" />

              </div>

            </div>

          </div>

        </div>

      </div>

    </button>
  );
}