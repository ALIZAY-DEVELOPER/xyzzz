import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router';

export default function Footer() {
  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/luxera.officials', color: 'hover:text-pink-400' },
    { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61578633514813', color: 'hover:text-blue-400' },
    { name: 'TikTok', icon: MessageCircle, href: 'https://www.tiktok.com/@luxera.officals', color: 'hover:text-gray-400' },
    { name: 'LinkedIn', icon: Linkedin, href: 'www.linkeldn.com', color: 'hover:text-blue-300' },
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms & Conditions', href: '/terms' },
    { name: 'Contact', href: '/contact' },
    { name: 'Admin', href: '/admin' },
  ];

  return (
    <footer className="bg-gray-900 border-t border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <h2 className="text-3xl font-bold luxury-brand tracking-wider">
                  LUXERA
                </h2>
              </motion.div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Discover the epitome of luxury timekeeping with <span className="luxury-brand text-base">LUXERA</span>. Each watch is meticulously crafted 
              to embody elegance, precision, and timeless sophistication. Experience luxury that transcends time.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-gradient-to-br from-amber-500/10 to-amber-600/10 border border-amber-500/20 rounded-xl flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color} hover:border-amber-500/40`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-amber-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <div className="space-y-4">
              <motion.a
                href="https://wa.me/923707910557"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-400 hover:text-amber-400 transition-colors duration-300 group"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500/10 to-amber-600/10 border border-amber-500/20 rounded-lg flex items-center justify-center group-hover:border-amber-500/40 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-medium luxury-numbers">+<span className="luxury-numbers">92 370 791 0557</span></p>
                  <p className="text-xs text-gray-500">WhatsApp</p>
                </div>
              </motion.a>

              <motion.a
                href="mailto:luxerawatches@gmail.com"
                className="flex items-center space-x-3 text-gray-400 hover:text-amber-400 transition-colors duration-300 group"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500/10 to-amber-600/10 border border-amber-500/20 rounded-lg flex items-center justify-center group-hover:border-amber-500/40 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-medium luxury-body">luxerawatches@gmail.com</p>
                  <p className="text-xs text-gray-500">Email</p>
                </div>
              </motion.a>

              <div className="flex items-center space-x-3 text-gray-400">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500/10 to-amber-600/10 border border-amber-500/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-medium">Punjab, Pakistan</p>
                  <p className="text-xs text-gray-500">Location</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-amber-500/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <p className="text-gray-400 text-sm luxury-body text-center">
              © <span className="luxury-numbers">2025</span> <span className="luxury-brand text-sm">LUXERA</span>. All rights reserved. | Developed by Md. Talha
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
