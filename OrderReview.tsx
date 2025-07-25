import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router';
import { CheckCircle, MessageCircle, ArrowRight, Copy, ExternalLink, Package, User, MapPin, Phone } from 'lucide-react';

interface OrderReviewData {
  customer_name: string;
  mobile_number: string;
  whatsapp_number?: string;
  email?: string;
  delivery_address: string;
  city: string;
  province: string;
  product_id: number;
  quantity: number;
  product: {
    id: number;
    name: string;
    price: number;
    image_url?: string;
  };
  total_amount: number;
  whatsappUrl: string;
}

export default function OrderReview() {
  const navigate = useNavigate();
  const [orderData, setOrderData] = useState<OrderReviewData | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const storedData = sessionStorage.getItem('orderReview');
    if (storedData) {
      try {
        setOrderData(JSON.parse(storedData));
      } catch (error) {
        console.error('Error parsing order data:', error);
        navigate('/');
      }
    } else {
      navigate('/');
    }
  }, [navigate]);

  const handleWhatsAppOrder = () => {
    if (orderData?.whatsappUrl) {
      window.open(orderData.whatsappUrl, '_blank');
      // Clear the session storage after order is sent
      sessionStorage.removeItem('orderReview');
    }
  };

  const copyOrderDetails = () => {
    if (!orderData) return;

    const orderText = `LUXERA Order Details:

Customer: ${orderData.customer_name}
Phone: ${orderData.mobile_number}
${orderData.whatsapp_number ? `WhatsApp: ${orderData.whatsapp_number}` : ''}
${orderData.email ? `Email: ${orderData.email}` : ''}

Delivery Address:
${orderData.delivery_address}
${orderData.city}, ${orderData.province}

Product: ${orderData.product.name}
Quantity: ${orderData.quantity}
Unit Price: PKR ${orderData.product.price.toLocaleString()}
Total: PKR ${orderData.total_amount.toLocaleString()}`;

    navigator.clipboard.writeText(orderText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!orderData) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-amber-500/30 border-t-amber-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/25"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          >
            <CheckCircle className="w-10 h-10 text-white" />
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Order <span className="text-amber-400">Confirmed!</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto luxury-body">
            Please review your order details below and click the WhatsApp button to complete your purchase
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Customer Information */}
            <motion.div
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-amber-500/10"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
                  <User className="w-5 h-5 text-black" />
                </div>
                <h2 className="text-2xl font-bold text-white luxury-serif">Customer Details</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-gray-400 text-sm font-medium luxury-sans">Name</label>
                    <p className="text-white font-semibold luxury-body">{orderData.customer_name}</p>
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm font-medium">Mobile Number</label>
                    <p className="text-white font-semibold">{orderData.mobile_number}</p>
                  </div>
                  {orderData.whatsapp_number && (
                    <div>
                      <label className="text-gray-400 text-sm font-medium">WhatsApp</label>
                      <p className="text-white font-semibold">{orderData.whatsapp_number}</p>
                    </div>
                  )}
                </div>
                <div className="space-y-4">
                  {orderData.email && (
                    <div>
                      <label className="text-gray-400 text-sm font-medium">Email</label>
                      <p className="text-white font-semibold">{orderData.email}</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Delivery Address */}
            <motion.div
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-amber-500/10"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-black" />
                </div>
                <h2 className="text-2xl font-bold text-white luxury-serif">Delivery Address</h2>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-4">
                <p className="text-white font-semibold mb-2">{orderData.customer_name}</p>
                <p className="text-gray-300">{orderData.delivery_address}</p>
                <p className="text-gray-300">{orderData.city}, {orderData.province}</p>
                <p className="text-amber-400 font-medium mt-2">📞 {orderData.mobile_number}</p>
              </div>
            </motion.div>

            {/* Order Summary */}
            <motion.div
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-amber-500/10"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
                  <Package className="w-5 h-5 text-black" />
                </div>
                <h2 className="text-2xl font-bold text-white luxury-serif">Order Summary</h2>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-gray-800/50 rounded-lg">
                <img
                  src={orderData.product.image_url || 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=80'}
                  alt={orderData.product.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 luxury-serif">{orderData.product.name}</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 luxury-body">Quantity: <span className="text-white font-medium luxury-body">{orderData.quantity}</span></p>
                      <p className="text-gray-400 luxury-body">Unit Price: <span className="text-amber-400 font-bold luxury-price">PKR {orderData.product.price.toLocaleString()}</span></p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-700 mt-6 pt-6">
                <div className="flex justify-between items-center text-2xl font-bold">
                  <span className="text-white luxury-serif">Total Amount:</span>
                  <span className="text-amber-400 luxury-price">PKR {orderData.total_amount.toLocaleString()}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Action Panel */}
          <div className="lg:col-span-1">
            <motion.div
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-amber-500/10 sticky top-24"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 luxury-serif">Complete Your Order</h3>

              <div className="space-y-4">
                {/* Back and Edit Details Button */}
                <Link to="/checkout">
                  <motion.button
                    className="w-full bg-gray-800 hover:bg-gray-700 text-white font-bold py-4 rounded-xl border border-gray-600 hover:border-amber-500 transition-all duration-300 flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ArrowRight className="w-5 h-5 rotate-180" />
                    <span>Back & Edit Details</span>
                  </motion.button>
                </Link>

                {/* Confirm Order & Proceed to WhatsApp Button */}
                <motion.button
                  onClick={handleWhatsAppOrder}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Confirm Order & Proceed to WhatsApp</span>
                  <ExternalLink className="w-4 h-4" />
                </motion.button>

                {/* Copy Details Button */}
                <button
                  onClick={copyOrderDetails}
                  className="w-full bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 rounded-xl border border-gray-600 hover:border-gray-500 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Copy className="w-4 h-4" />
                  <span>{copied ? 'Copied!' : 'Copy Details'}</span>
                </button>

                {/* Instructions */}
                <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 mt-6">
                  <h4 className="text-amber-400 font-semibold mb-2">Next Steps:</h4>
                  <ol className="text-gray-300 text-sm space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-amber-400 font-bold">1.</span>
                      <span>Click "Send to WhatsApp" button above</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-amber-400 font-bold">2.</span>
                      <span>Review and send the message to our team</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-amber-400 font-bold">3.</span>
                      <span>We'll confirm your order and arrange delivery</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-amber-400 font-bold">4.</span>
                      <span>Expect delivery within 24-48 hours</span>
                    </li>
                  </ol>
                </div>

                {/* Contact Info */}
                <div className="bg-gray-800/50 rounded-lg p-4 mt-6">
                  <h4 className="text-white font-semibold mb-3">Need Help?</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-amber-400" />
                      <span className="text-gray-300 text-sm">+92 370 791 0557</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MessageCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300 text-sm">WhatsApp Support</span>
                    </div>
                  </div>
                </div>

                {/* Continue Shopping */}
                <Link to="/products">
                  <button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold py-3 rounded-xl hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300 flex items-center justify-center space-x-2 mt-4">
                    <span>Continue Shopping</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
