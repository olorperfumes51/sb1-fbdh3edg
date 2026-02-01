import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="aspect-square relative overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-serif text-amber-900">{product.name}</h3>
          <span className="text-lg font-semibold text-amber-700">
            ${product.price}
          </span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="space-y-2 text-xs">
          {/* Checking if notes exist */}
          {product.notes?.top && (
            <div>
              <span className="font-semibold text-amber-900">Top Notes:</span>
              <span className="text-gray-600 ml-2">
                {product.notes.top.join(', ')}
              </span>
            </div>
          )}
          {product.notes?.middle && (
            <div>
              <span className="font-semibold text-amber-900">Heart Notes:</span>
              <span className="text-gray-600 ml-2">
                {product.notes.middle.join(', ')}
              </span>
            </div>
          )}
          {product.notes?.base && (
            <div>
              <span className="font-semibold text-amber-900">Base Notes:</span>
              <span className="text-gray-600 ml-2">
                {product.notes.base.join(', ')}
              </span>
            </div>
          )}
        </div>

        <button className="w-full mt-6 bg-amber-700 text-white py-3 rounded-md hover:bg-amber-800 transition-colors font-medium">
          Learn More
        </button>
      </div>
    </div>
  );
}
