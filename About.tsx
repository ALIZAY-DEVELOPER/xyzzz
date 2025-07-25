import { motion } from 'framer-motion';
import { Award, Clock, Shield, Users, Star, CheckCircle, Gem, Crown, Heart, Sparkles } from 'lucide-react';

export default function About() {
  const whyLuxera = [
    {
      icon: Gem,
      title: 'High-Quality Craftsmanship',
      description: 'Meticulously designed with attention to detail, each timepiece represents the pinnacle of horological artistry.',
      color: 'from-amber-500 to-amber-600',
      shadowColor: 'shadow-amber-500/25',
    },
    {
      icon: Crown,
      title: 'Timeless Elegance',
      description: 'Watches that complement your style for any occasion, from boardroom to ballroom.',
      color: 'from-purple-500 to-purple-600',
      shadowColor: 'shadow-purple-500/25',
    },
    {
      icon: Shield,
      title: 'Durable & Reliable',
      description: 'Built to last with precision and durability, engineered for a lifetime of faithful service.',
      color: 'from-blue-500 to-blue-600',
      shadowColor: 'shadow-blue-500/25',
    },
  ];

  const trustFeatures = [
    {
      icon: CheckCircle,
      title: '100% Authentic Watches',
      description: 'Guaranteed genuine with a certificate of authenticity for complete peace of mind.',
      gradient: 'from-emerald-500 to-emerald-600',
    },
    {
      icon: Award,
      title: 'Premium Service',
      description: 'Ensuring long-term reliability and peace of mind with comprehensive aftercare.',
      gradient: 'from-amber-500 to-amber-600',
    },
    {
      icon: Users,
      title: 'Customer Support',
      description: 'Dedicated team for all inquiries and aftercare, available whenever you need us.',
      gradient: 'from-blue-500 to-blue-600',
    },
  ];

  const luxeraPromise = [
    {
      icon: Sparkles,
      title: 'Exclusively Crafted for You',
      description: 'Watches designed to elevate your lifestyle and make every moment extraordinary.',
      bgGradient: 'from-amber-500/10 to-amber-600/10',
      borderColor: 'border-amber-500/20',
    },
    {
      icon: Clock,
      title: 'Seamless Shopping',
      description: 'Secure payment options and fast delivery for an effortless luxury experience.',
      bgGradient: 'from-blue-500/10 to-blue-600/10',
      borderColor: 'border-blue-500/20',
    },
    {
      icon: Star,
      title: 'Perfect for Every Occasion',
      description: 'From business to leisure, LUXERA fits your moments with unmatched sophistication.',
      bgGradient: 'from-purple-500/10 to-purple-600/10',
      borderColor: 'border-purple-500/20',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="inline-block mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mx-auto shadow-2xl shadow-amber-500/30 transform rotate-6 hover:rotate-12 transition-transform duration-500">
              <Crown className="w-12 h-12 text-black" />
            </div>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            About <span className="luxury-brand">LUXERA</span>
          </h1>
          {/* 3D Text Boxes with Animations */}
          <motion.div
            className="relative bg-gradient-to-br from-amber-500/10 via-amber-600/5 to-amber-700/10 backdrop-blur-sm rounded-3xl p-10 mb-8 border border-amber-500/20 overflow-hidden max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30, rotateX: 20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            whileHover={{ 
              y: -15, 
              scale: 1.02,
              rotateX: 5,
              transition: { duration: 0.4 }
            }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-amber-600/5 opacity-50" />
            <div className="absolute top-4 left-4 w-32 h-32 bg-gradient-to-br from-amber-400/15 to-transparent rounded-full blur-2xl" />
            <div className="absolute bottom-4 right-4 w-40 h-40 bg-gradient-to-br from-amber-600/15 to-transparent rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <p className="text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed luxury-body text-center">
                <span className="luxury-brand text-2xl">LUXERA</span> is not just a watch brand—it's an <span className="text-amber-400 font-semibold">experience</span>. 
                We design luxury timepieces that fuse timeless elegance with modern sophistication.
              </p>
            </div>

            {/* 3D Border Effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-amber-400/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ transform: 'translateZ(1px)' }} />
          </motion.div>

          <motion.div
            className="relative bg-gradient-to-br from-purple-500/10 via-purple-600/5 to-amber-500/10 backdrop-blur-sm rounded-3xl p-10 border border-purple-500/20 overflow-hidden max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30, rotateX: -20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            whileHover={{ 
              y: -15, 
              scale: 1.02,
              rotateX: -5,
              transition: { duration: 0.4 }
            }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-amber-600/5 opacity-50" />
            <div className="absolute top-4 right-4 w-28 h-28 bg-gradient-to-br from-purple-400/15 to-transparent rounded-full blur-2xl" />
            <div className="absolute bottom-4 left-4 w-36 h-36 bg-gradient-to-br from-amber-600/15 to-transparent rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed luxury-body text-center">
                With <span className="luxury-brand text-xl">LUXERA</span>, you're not just buying a watch; you're making a statement that lasts for <span className="text-amber-400 font-semibold">generations</span>.
              </p>
            </div>

            {/* 3D Border Effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-purple-400/20 to-amber-400/20 opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ transform: 'translateZ(1px)' }} />
          </motion.div>
        </motion.div>

        {/* Why Luxera Section */}
        <motion.section
          className="mb-24"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Why <span className="luxury-brand">LUXERA</span>?
            </motion.h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover what sets our luxury timepieces apart from the rest
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyLuxera.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border border-amber-500/10 hover:border-amber-500/30 transition-all duration-700 overflow-hidden"
                  initial={{ opacity: 0, y: 50, rotateX: 20 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
                  whileHover={{ 
                    y: -15, 
                    scale: 1.05,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* 3D Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-amber-600/5 opacity-0 group-hover:opacity-100 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
                  
                  {/* Floating Icon */}
                  <motion.div
                    className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-8 ${feature.shadowColor} shadow-2xl mx-auto`}
                    whileHover={{ 
                      scale: 1.2, 
                      rotateY: 180,
                      transition: { duration: 0.6 }
                    }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 text-center group-hover:text-amber-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed text-center group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>

                  {/* 3D Border Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ transform: 'translateZ(1px)' }} />
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Trust with Luxera Section */}
        <motion.section
          className="mb-24"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              Trust with <span className="luxury-brand">LUXERA</span>
            </motion.h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Your confidence is our commitment - backed by guarantees that matter
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {trustFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 border border-amber-500/10 hover:border-amber-500/40 transition-all duration-700 overflow-hidden"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, rotateY: -20 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  transition={{ duration: 0.8, delay: 1.6 + index * 0.2 }}
                  whileHover={{ 
                    y: -20, 
                    scale: 1.08,
                    rotateX: 10,
                    transition: { duration: 0.4 }
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-amber-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Floating Icon with 3D Effect */}
                  <motion.div
                    className={`w-18 h-18 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-8 shadow-2xl shadow-amber-500/20 mx-auto`}
                    whileHover={{ 
                      scale: 1.3, 
                      rotateZ: 360,
                      transition: { duration: 0.8 }
                    }}
                  >
                    <Icon className="w-9 h-9 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-white mb-6 text-center group-hover:text-amber-400 transition-colors duration-400">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed text-center group-hover:text-gray-300 transition-colors duration-400">
                    {feature.description}
                  </p>

                  {/* Glowing Border Effect */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-amber-500/10 via-amber-400/20 to-amber-600/10 blur-xl" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Luxera Promise Section */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 2.1 }}
            >
              The <span className="luxury-brand">LUXERA</span> Promise
            </motion.h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our unwavering commitment to delivering exceptional experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {luxeraPromise.map((promise, index) => {
              const Icon = promise.icon;
              return (
                <motion.div
                  key={promise.title}
                  className={`group relative bg-gradient-to-br ${promise.bgGradient} backdrop-blur-sm rounded-3xl p-8 border ${promise.borderColor} hover:border-amber-500/50 transition-all duration-700 overflow-hidden`}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: 2.2 + index * 0.2 }}
                  whileHover={{ 
                    y: -12, 
                    scale: 1.05,
                    rotateZ: 2,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* 3D Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Icon with enhanced 3D effect */}
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mb-6 shadow-xl shadow-amber-500/30 mx-auto"
                    whileHover={{ 
                      scale: 1.25, 
                      rotateY: 180,
                      transition: { duration: 0.6 }
                    }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <Icon className="w-8 h-8 text-black" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 text-center group-hover:text-amber-400 transition-colors duration-300">
                    {promise.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed text-center group-hover:text-gray-300 transition-colors duration-300">
                    {promise.description}
                  </p>

                  {/* Subtle 3D border highlight */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-amber-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ transform: 'translateZ(1px)' }} />
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.8 }}
        >
          <div className="relative bg-gradient-to-br from-amber-500/10 via-amber-600/5 to-amber-700/10 backdrop-blur-sm rounded-3xl p-12 border border-amber-500/20 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-amber-600/5 opacity-50" />
            <div className="absolute top-4 left-4 w-32 h-32 bg-gradient-to-br from-amber-400/10 to-transparent rounded-full blur-xl" />
            <div className="absolute bottom-4 right-4 w-40 h-40 bg-gradient-to-br from-amber-600/10 to-transparent rounded-full blur-xl" />
            
            <div className="relative z-10">
              <motion.div
                className="flex items-center justify-center space-x-3 mb-6"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 2.9 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-3xl font-bold text-white">Experience Luxury</h3>
              </motion.div>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                Join thousands of satisfied customers who have chosen <span className="luxury-brand text-xl">LUXERA</span> for their luxury timepiece needs. 
                Experience the difference that true craftsmanship makes.
              </p>
              
              <motion.div
                className="inline-flex items-center space-x-2 text-amber-400 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 3.1 }}
              >
                <Sparkles className="w-5 h-5" />
                <span>Where time meets timeless elegance</span>
                <Sparkles className="w-5 h-5" />
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
