import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Clock, Shield, Award, Truck } from 'lucide-react';
import { Link } from 'react-router';
import ProductCard from '../components/ProductCard';
import { Product } from '../../shared/types';

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeaturedProducts();
  }, []);

  const fetchFeaturedProducts = async () => {
    try {
      const response = await fetch('/api/products/featured');
      const data = await response.json();
      if (data.success) {
        setFeaturedProducts(data.data);
      }
    } catch (error) {
      console.error('Error fetching featured products:', error);
    } finally {
      setLoading(false);
    }
  };

  const features = [
    {
      icon: Clock,
      title: 'Swiss Precision',
      description: 'Masterfully crafted movements ensuring perfect timekeeping',
    },
    {
      icon: Shield,
      title: 'Authenticity Certified',
      description: 'Every timepiece comes with certificate of authenticity',
    },
    {
      icon: Award,
      title: 'Handcrafted Excellence',
      description: 'Meticulously assembled by master horologists',
    },
    {
      icon: Truck,
      title: 'Nationwide Delivery',
      description: 'Secure shipping across Pakistan within 24-48 hours',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(251,191,36,0.1),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(251,191,36,0.05),transparent_70%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-6 luxury-serif"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="luxury-brand">
                  LUXERA
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-2xl md:text-3xl text-gray-300 mb-4 font-light"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Timeless Luxury, Perfected
              </motion.p>
              
              {/* 3D Text Box */}
              <motion.div
                className="relative bg-gradient-to-br from-amber-500/10 via-amber-600/5 to-amber-700/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-amber-500/20 overflow-hidden max-w-lg"
                initial={{ opacity: 0, y: 30, rotateX: 20 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  rotateX: 5,
                  transition: { duration: 0.3 }
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Animated Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-amber-600/5 opacity-50" />
                <div className="absolute top-2 left-2 w-20 h-20 bg-gradient-to-br from-amber-400/10 to-transparent rounded-full blur-xl" />
                <div className="absolute bottom-2 right-2 w-24 h-24 bg-gradient-to-br from-amber-600/10 to-transparent rounded-full blur-xl" />
                
                <div className="relative z-10">
                  <p className="text-lg text-gray-300 leading-relaxed luxury-body">
                    Discover the epitome of luxury timekeeping. Each LUXERA timepiece embodies 
                    craftsmanship, elegance, and precision that transcends generations.
                  </p>
                </div>

                {/* 3D Border Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-amber-400/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ transform: 'translateZ(1px)' }} />
              </motion.div>
              
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Link to="/products">
                  <motion.button
                    className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-xl shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-300 flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Shop Now</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
                
                <Link to="/about">
                  <motion.button
                    className="px-8 py-4 border-2 border-amber-500/30 text-amber-400 font-semibold rounded-xl hover:bg-amber-500/10 hover:border-amber-500/50 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Our Story
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Content - Hero Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative">
                <motion.div
                  className="w-full max-w-lg mx-auto p-8 bg-gradient-to-br from-amber-500/10 to-amber-600/5 rounded-2xl shadow-2xl shadow-black/50 border border-amber-500/20"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg
                    viewBox="0 0 400 400"
                    className="w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Watch Face */}
                    <circle cx="200" cy="200" r="180" fill="url(#watchGradient)" stroke="url(#goldGradient)" strokeWidth="8" />
                    <circle cx="200" cy="200" r="160" fill="url(#dialGradient)" stroke="url(#goldGradient)" strokeWidth="2" />
                    
                    {/* Hour Markers */}
                    {[...Array(12)].map((_, i) => {
                      const angle = (i * 30) - 90;
                      const radian = (angle * Math.PI) / 180;
                      const x1 = 200 + Math.cos(radian) * 140;
                      const y1 = 200 + Math.sin(radian) * 140;
                      const x2 = 200 + Math.cos(radian) * 120;
                      const y2 = 200 + Math.sin(radian) * 120;
                      
                      return (
                        <line
                          key={i}
                          x1={x1}
                          y1={y1}
                          x2={x2}
                          y2={y2}
                          stroke="url(#goldGradient)"
                          strokeWidth="4"
                          strokeLinecap="round"
                        />
                      );
                    })}
                    
                    {/* Watch Hands */}
                    <line x1="200" y1="200" x2="200" y2="100" stroke="url(#goldGradient)" strokeWidth="6" strokeLinecap="round" />
                    <line x1="200" y1="200" x2="260" y2="200" stroke="url(#goldGradient)" strokeWidth="4" strokeLinecap="round" />
                    <line x1="200" y1="200" x2="180" y2="80" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
                    
                    {/* Center */}
                    <circle cx="200" cy="200" r="8" fill="url(#goldGradient)" />
                    
                    {/* Crown */}
                    <rect x="380" y="190" width="15" height="20" rx="3" fill="url(#goldGradient)" />
                    <rect x="390" y="195" width="8" height="10" rx="2" fill="url(#goldGradient)" />
                    
                    {/* Brand Text */}
                    <text x="200" y="130" textAnchor="middle" fill="url(#goldGradient)" fontSize="24" fontFamily="Playfair Display" fontWeight="700">LUXERA</text>
                    <text x="200" y="280" textAnchor="middle" fill="url(#goldGradient)" fontSize="12" fontFamily="Inter" fontWeight="300">SWISS MADE</text>
                    
                    {/* Gradients */}
                    <defs>
                      <linearGradient id="watchGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1f2937" />
                        <stop offset="50%" stopColor="#374151" />
                        <stop offset="100%" stopColor="#111827" />
                      </linearGradient>
                      <linearGradient id="dialGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#000000" />
                        <stop offset="100%" stopColor="#1f2937" />
                      </linearGradient>
                      <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#fbbf24" />
                        <stop offset="50%" stopColor="#f59e0b" />
                        <stop offset="100%" stopColor="#d97706" />
                      </linearGradient>
                    </defs>
                  </svg>
                </motion.div>
                
                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/25"
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Clock className="w-8 h-8 text-black" />
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-amber-500/20 to-amber-600/20 border border-amber-500/30 rounded-full flex items-center justify-center backdrop-blur-sm"
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                >
                  <Award className="w-6 h-6 text-amber-400" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 luxury-serif">
              Why Choose <span className="luxury-brand">LUXERA</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto luxury-body">
              Experience unparalleled luxury with every detail meticulously crafted to perfection
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-amber-500/10 hover:border-amber-500/30 transition-all duration-500"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-amber-500/25 group-hover:shadow-amber-500/40 transition-all duration-300">
                    <Icon className="w-8 h-8 text-black" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors luxury-serif">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed luxury-body">
                    {feature.description}
                  </p>

                  {/* 3D Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-500/5 to-amber-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 luxury-serif">
              Featured <span className="text-amber-400">Timepieces</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto luxury-body">
              Discover our most coveted luxury watches, each a masterpiece of horological excellence
            </p>
          </motion.div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="w-12 h-12 border-4 border-amber-500/30 border-t-amber-500 rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          )}

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link to="/products">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-xl shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-300 flex items-center space-x-2 mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View All Products</span>
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
