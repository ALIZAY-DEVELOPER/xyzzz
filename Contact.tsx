import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Send, Clock, Award } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setLoading(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Support',
      details: '+92 370 791 0557',
      link: 'tel:+923707910557',
      description: 'Available 24/7 for immediate assistance',
      color: 'from-amber-500 to-amber-600',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      details: '+92 370 791 0557',
      link: 'https://wa.me/923707910557',
      description: 'Quick responses via WhatsApp',
      color: 'from-amber-500 to-amber-600',
    },
    {
      icon: Mail,
      title: 'Email Support',
      details: 'luxerawatches@gmail.com',
      link: 'mailto:luxerawatches@gmail.com',
      description: 'Professional support via email',
      color: 'from-amber-500 to-amber-600',
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Punjab, Pakistan',
      link: '#',
      description: 'Premium showroom & headquarters',
      color: 'from-amber-500 to-amber-600',
    },
  ];

  const businessHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 8:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 6:00 PM' },
    { day: 'Sunday', hours: '12:00 PM - 5:00 PM' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Get In <span className="text-amber-400">Touch</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto luxury-body">
            Experience premium customer service that matches our luxury timepieces. 
            We're here to help you find the perfect watch.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Information */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const isClickable = info.link !== '#';
              
              const cardContent = (
                <>
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-amber-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-black" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {info.title}
                  </h3>
                  
                  <div className="text-xl font-semibold text-amber-400 hover:text-amber-300 transition-colors block mb-2 luxury-numbers cursor-pointer">
                    {info.details}
                  </div>
                  
                  <p className="text-gray-400 luxury-body">
                    {info.description}
                  </p>
                </>
              );

              return isClickable ? (
                <motion.a
                  key={info.title}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-amber-500/10 hover:border-amber-500/30 transition-all duration-500 overflow-hidden block cursor-pointer"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  {cardContent}
                </motion.a>
              ) : (
                <motion.div
                  key={info.title}
                  className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-amber-500/10 hover:border-amber-500/30 transition-all duration-500 overflow-hidden"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  {cardContent}
                </motion.div>
              );
            })}
          </div>

          {/* Business Hours */}
          <div className="space-y-6">
            <motion.div
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-amber-500/10"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white">Business Hours</h3>
              </div>

              <div className="space-y-4">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-700 last:border-b-0">
                    <span className="text-gray-300 font-medium luxury-body">{schedule.day}</span>
                    <span className="text-amber-400 font-semibold luxury-numbers">{schedule.hours}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <p className="text-green-400 font-medium mb-2">🟢 We're Currently Open</p>
                <p className="text-gray-300 text-sm luxury-body">Ready to assist you with your luxury watch needs</p>
              </div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-amber-500/10"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white">Why Choose Us</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-white font-medium">Premium Quality</p>
                    <p className="text-gray-400 text-sm luxury-body">Authentic luxury timepieces</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-white font-medium">Expert Service</p>
                    <p className="text-gray-400 text-sm luxury-body">Professional consultation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-white font-medium">Fast Delivery</p>
                    <p className="text-gray-400 text-sm luxury-body"><span className="luxury-numbers">24-48</span> hour shipping</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-white font-medium">Lifetime Support</p>
                    <p className="text-gray-400 text-sm luxury-body">Ongoing customer care</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Contact Form */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-amber-500/10">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Send Us a <span className="text-amber-400">Message</span>
              </h2>
              <p className="text-gray-400 luxury-body">
                Have a question about our luxury watches? We'd love to hear from you.
              </p>
            </div>

            {submitted ? (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400 luxury-body">
                  Thank you for contacting <span className="luxury-brand text-base">LUXERA</span>. We'll get back to you within <span className="luxury-numbers">24</span> hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 font-medium mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 font-medium mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300 resize-none"
                    placeholder="Tell us about your inquiry, preferred watch models, or any questions you have..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: loading ? 1 : 1.02 }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
                >
                  {loading ? (
                    <div className="w-6 h-6 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </div>
        </motion.div>

        {/* Map Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-amber-500/10">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Visit Our <span className="text-amber-400">Showroom</span>
              </h2>
              <p className="text-gray-400 luxury-body">
                Experience our luxury timepieces in person at our premium location in Punjab, Pakistan.
              </p>
            </div>

            <div className="aspect-video bg-gray-800 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-amber-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2"><span className="luxury-brand text-xl">LUXERA</span> Showroom</h3>
                <p className="text-gray-400 luxury-body">Punjab, Pakistan</p>
                <p className="text-amber-400 font-medium mt-2 luxury-body">Premium Luxury Watch Destination</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
