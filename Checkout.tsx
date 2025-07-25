import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router';
import { ShoppingBag, MapPin, Phone, User, ArrowRight, MessageCircle } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { CreateOrder } from '../../shared/types';

export default function Checkout() {
  const { items, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    customer_name: '',
    mobile_number: '',
    whatsapp_number: '',
    email: '',
    delivery_address: '',
    city: '',
    province: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (items.length === 0) {
      navigate('/products');
    }
  }, [items, navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.customer_name.trim()) newErrors.customer_name = 'Name is required';
    if (!formData.mobile_number.trim()) newErrors.mobile_number = 'Mobile number is required';
    if (!formData.delivery_address.trim()) newErrors.delivery_address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.province.trim()) newErrors.province = 'Province is required';
    
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBackAndEdit = () => {
    // Clear form or reset to edit mode
    setFormData({
      customer_name: '',
      mobile_number: '',
      whatsapp_number: '',
      email: '',
      delivery_address: '',
      city: '',
      province: '',
    });
    setErrors({});
  };

  const handleConfirmAndWhatsApp = () => {
    if (!validateForm()) return;
    if (items.length === 0) return;

    const firstItem = items[0];
    const totalAmount = firstItem.product.price * firstItem.quantity;

    // Generate WhatsApp message using the exact format provided
    const whatsappMessage = encodeURIComponent(`*🎯 New Order from LUXERA Website! 🎯

*Customer Name:* ${formData.customer_name}
*Mobile Number:* ${formData.mobile_number}
*WhatsApp Number:* ${formData.whatsapp_number || formData.mobile_number}
*Email:* ${formData.email || 'Not provided'}
*Address:* ${formData.delivery_address}, ${formData.city}, ${formData.province}

*--- Order Summary ---*
*Product:* ${firstItem.product.name}
*Quantity:* ${firstItem.quantity}
*Add-on:* Not applicable

*Total Bill:* PKR ${totalAmount.toLocaleString()}

-----------------------------------
This order has been confirmed by the customer.

*Ordered from:* LUXERA`);
    
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=923707910557&text=${whatsappMessage}&type=phone_number&app_absent=0`;
    
    // Open WhatsApp and clear cart
    window.open(whatsappUrl, '_blank');
    clearCart();
    navigate('/products');
  };

  const provinces = [
    'Punjab',
    'Sindh',
    'Khyber Pakhtunkhwa',
    'Balochistan',
    'Islamabad Capital Territory',
    'Gilgit-Baltistan',
    'Azad Kashmir',
  ];

  if (items.length === 0) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-amber-400">Review</span> Your Order
          </h1>
          <p className="text-xl text-gray-400 luxury-body">
            Enter your details and confirm your luxury timepiece order
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <motion.div
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-amber-500/10"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Personal Information */}
              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
                    <User className="w-5 h-5 text-black" />
                  </div>
                  <h2 className="text-2xl font-bold text-white luxury-serif">Personal Information</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 font-medium mb-2 luxury-sans">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="customer_name"
                      value={formData.customer_name}
                      onChange={handleInputChange}
                      className={`w-full bg-gray-800 border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300 luxury-body ${
                        errors.customer_name ? 'border-red-500' : 'border-gray-700 focus:border-amber-500'
                      }`}
                      placeholder="Enter your full name"
                    />
                    {errors.customer_name && (
                      <p className="text-red-400 text-sm mt-1">{errors.customer_name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-300 font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full bg-gray-800 border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300 ${
                        errors.email ? 'border-red-500' : 'border-gray-700 focus:border-amber-500'
                      }`}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-black" />
                  </div>
                  <h2 className="text-2xl font-bold text-white luxury-serif">Contact Details</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 font-medium mb-2">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      name="mobile_number"
                      value={formData.mobile_number}
                      onChange={handleInputChange}
                      className={`w-full bg-gray-800 border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300 ${
                        errors.mobile_number ? 'border-red-500' : 'border-gray-700 focus:border-amber-500'
                      }`}
                      placeholder="+92 300 1234567"
                    />
                    {errors.mobile_number && (
                      <p className="text-red-400 text-sm mt-1">{errors.mobile_number}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-300 font-medium mb-2">
                      WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      name="whatsapp_number"
                      value={formData.whatsapp_number}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300"
                      placeholder="+92 300 1234567"
                    />
                    <p className="text-gray-400 text-xs mt-1">
                      We'll send order updates via WhatsApp
                    </p>
                  </div>
                </div>
              </div>

              {/* Delivery Address */}
              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-black" />
                  </div>
                  <h2 className="text-2xl font-bold text-white luxury-serif">Delivery Address</h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-300 font-medium mb-2">
                      Complete Address *
                    </label>
                    <textarea
                      name="delivery_address"
                      value={formData.delivery_address}
                      onChange={handleInputChange}
                      rows={3}
                      className={`w-full bg-gray-800 border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300 resize-none ${
                        errors.delivery_address ? 'border-red-500' : 'border-gray-700 focus:border-amber-500'
                      }`}
                      placeholder="House/Flat No, Street, Area"
                    />
                    {errors.delivery_address && (
                      <p className="text-red-400 text-sm mt-1">{errors.delivery_address}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 font-medium mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className={`w-full bg-gray-800 border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300 ${
                          errors.city ? 'border-red-500' : 'border-gray-700 focus:border-amber-500'
                        }`}
                        placeholder="Karachi, Lahore, Islamabad..."
                      />
                      {errors.city && (
                        <p className="text-red-400 text-sm mt-1">{errors.city}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-gray-300 font-medium mb-2">
                        Province *
                      </label>
                      <select
                        name="province"
                        value={formData.province}
                        onChange={handleInputChange}
                        className={`w-full bg-gray-800 border rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-amber-500/20 transition-all duration-300 ${
                          errors.province ? 'border-red-500' : 'border-gray-700 focus:border-amber-500'
                        }`}
                      >
                        <option value="">Select Province</option>
                        {provinces.map((province) => (
                          <option key={province} value={province}>
                            {province}
                          </option>
                        ))}
                      </select>
                      {errors.province && (
                        <p className="text-red-400 text-sm mt-1">{errors.province}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Summary Section */}
              <div className="mb-8 border-t border-gray-700 pt-8">
                <h2 className="text-2xl font-bold text-white mb-6 luxury-serif">Order Summary</h2>
                
                {items.map((item) => (
                  <div key={item.product.id} className="bg-gray-800/50 rounded-lg p-6 mb-4">
                    <div className="flex items-center space-x-4 mb-4">
                      <img
                        src={item.product.image_url || 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=80'}
                        alt={item.product.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2 luxury-serif">{item.product.name}</h3>
                        <p className="text-gray-400 luxury-body">Quantity: <span className="text-white font-medium">{item.quantity}</span></p>
                        <p className="text-amber-400 font-bold luxury-price">PKR {(item.product.price * item.quantity).toLocaleString()}</p>
                      </div>
                    </div>

                    {/* Customer & Order Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                      <div>
                        <h4 className="text-amber-400 font-semibold mb-2">Customer Details:</h4>
                        <p className="text-gray-300">Name: <span className="text-white">{formData.customer_name || 'Not entered'}</span></p>
                        <p className="text-gray-300">Mobile: <span className="text-white">{formData.mobile_number || 'Not entered'}</span></p>
                        {formData.email && <p className="text-gray-300">Email: <span className="text-white">{formData.email}</span></p>}
                      </div>
                      <div>
                        <h4 className="text-amber-400 font-semibold mb-2">Shipping Address:</h4>
                        <p className="text-gray-300">{formData.delivery_address || 'Not entered'}</p>
                        <p className="text-gray-300">{formData.city && formData.province ? `${formData.city}, ${formData.province}` : 'City, Province not entered'}</p>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="flex justify-between items-center text-xl font-bold">
                    <span className="text-white luxury-serif">Total Bill:</span>
                    <span className="text-amber-400 luxury-price">PKR {getTotalPrice().toLocaleString()}</span>
                  </div>
                  <p className="text-green-400 text-sm mt-1">✓ Free shipping included</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  type="button"
                  onClick={handleBackAndEdit}
                  className="flex-1 bg-gray-800 hover:bg-gray-700 text-white font-bold py-4 rounded-xl border border-gray-600 hover:border-amber-500 transition-all duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ArrowRight className="w-5 h-5 rotate-180" />
                  <span>Back & Edit</span>
                </motion.button>

                <motion.button
                  type="button"
                  onClick={handleConfirmAndWhatsApp}
                  disabled={loading}
                  className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: loading ? 1 : 1.02 }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
                >
                  {loading ? (
                    <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <MessageCircle className="w-5 h-5" />
                      <span>Confirm & Send to WhatsApp</span>
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-amber-500/10 sticky top-24"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
                  <ShoppingBag className="w-5 h-5 text-black" />
                </div>
                <h2 className="text-2xl font-bold text-white luxury-serif">Order Summary</h2>
              </div>

              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.product.id} className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg">
                    <img
                      src={item.product.image_url || 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=80'}
                      alt={item.product.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-white text-sm luxury-serif">{item.product.name}</h3>
                      <p className="text-gray-400 text-sm luxury-body">Qty: {item.quantity}</p>
                      <p className="text-amber-400 font-bold luxury-price">PKR {(item.product.price * item.quantity).toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-700 mt-6 pt-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400 luxury-body">Subtotal:</span>
                  <span className="text-white font-medium luxury-price">PKR {getTotalPrice().toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400 luxury-body">Shipping:</span>
                  <span className="text-green-400 font-medium luxury-sans">Free</span>
                </div>
                <div className="flex justify-between items-center text-xl font-bold border-t border-gray-700 pt-4">
                  <span className="text-white luxury-serif">Total:</span>
                  <span className="text-amber-400 luxury-price">PKR {getTotalPrice().toLocaleString()}</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
                <p className="text-amber-400 text-sm font-medium mb-1">
                  💎 Premium Luxury Service
                </p>
                <p className="text-gray-300 text-xs">
                  Free shipping, premium packaging, and 24/7 customer support included.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
