import { motion } from 'framer-motion';
import { ShoppingCart, Star, Eye } from 'lucide-react';
import { Link } from 'react-router';
import { Product } from '../../shared/types';
import { useCart } from '../hooks/useCart';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <motion.div
      className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-amber-500/10 hover:border-amber-500/30 transition-all duration-500"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {/* Discount Badge */}
      {product.discount_percentage && product.discount_percentage > 0 && (
        <motion.div
          className="absolute top-4 left-4 z-10 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
        >
          {product.discount_percentage}% OFF
        </motion.div>
      )}

      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
        <img
          src={product.image_url || 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500'}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay with Actions */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
          <motion.button
            onClick={handleAddToCart}
            className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center text-black shadow-lg hover:shadow-amber-500/25 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ShoppingCart className="w-5 h-5" />
          </motion.button>
          
          <Link to={`/products/${product.id}`}>
            <motion.button
              className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Eye className="w-5 h-5" />
            </motion.button>
          </Link>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-6">
        <Link to={`/products/${product.id}`} className="block">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors duration-300 luxury-serif">
            {product.name}
          </h3>
          
          <p className="text-gray-400 text-sm mb-4 line-clamp-2 luxury-body">
            {product.description}
          </p>

          {/* Rating */}
          <div className="flex items-center space-x-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-amber-400 text-amber-400"
              />
            ))}
            <span className="text-gray-400 text-sm ml-2 luxury-numbers">(4.8)</span>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-amber-400 luxury-numbers">
                PKR {product.price.toLocaleString()}
              </span>
              {product.original_price && product.original_price > product.price && (
                <span className="text-gray-500 line-through text-sm luxury-numbers">
                  PKR {product.original_price.toLocaleString()}
                </span>
              )}
            </div>
          </div>
        </Link>

        {/* Add to Cart Button */}
        <motion.button
          onClick={handleAddToCart}
          className="w-full mt-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold py-3 rounded-xl hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300 flex items-center justify-center space-x-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <ShoppingCart className="w-4 h-4" />
          <span className="luxury-sans font-semibold">Add to Cart</span>
        </motion.button>
      </div>

      {/* 3D Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-500/5 to-amber-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
}
