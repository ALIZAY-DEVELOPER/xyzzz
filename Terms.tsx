import { motion } from 'framer-motion';
import { FileText, ShoppingCart, Shield, AlertTriangle, Scale, CreditCard } from 'lucide-react';

export default function Terms() {
  const sections = [
    {
      icon: ShoppingCart,
      title: 'Orders and Purchases',
      content: [
        'All orders are subject to acceptance and availability of luxury timepieces',
        'Prices are displayed in Pakistani Rupees (PKR) and include all applicable taxes',
        'We reserve the right to refuse or cancel orders at our discretion',
        'Order confirmation does not guarantee product availability until payment is processed',
        'Special orders and custom engravings may require additional processing time'
      ]
    },
    {
      icon: CreditCard,
      title: 'Payment Terms',
      content: [
        'Payment is required in full before shipment of luxury watches',
        'We accept major credit cards, bank transfers, and WhatsApp-confirmed orders',
        'All transactions are processed securely through certified payment gateways',
        'Currency conversion rates (if applicable) are determined at the time of transaction',
        'Failed payments may result in order cancellation and inventory release'
      ]
    },
    {
      icon: Shield,
      title: 'Quality and Authenticity',
      content: [
        'All LUXERA timepieces come with comprehensive quality assurance',
        'Quality coverage periods vary by product and are clearly stated at time of purchase',
        'We guarantee the authenticity of all luxury watches sold through our platform',
        'Quality claims must be accompanied by original purchase documentation',
        'Damage from misuse, accidents, or unauthorized repairs voids quality coverage'
      ]
    },
    {
      icon: Scale,
      title: 'Exchange Policy',
      content: [
        '7-day exchange policy for unused watches in original packaging with all accessories',
        'Custom engraved or specially ordered items are final sale and non-exchangeable',
        'Exchange shipping costs are the responsibility of the customer unless item is defective',
        'Exchanges are processed within 5-7 business days of receiving merchandise',
        'Exchanges are subject to availability and price differences must be paid separately'
      ]
    }
  ];

  const prohibitedUses = [
    'Reselling LUXERA products without explicit written authorization',
    'Using our website or services for any unlawful or fraudulent purposes',
    'Attempting to gain unauthorized access to our systems or customer data',
    'Reproducing, distributing, or modifying our copyrighted content without permission',
    'Creating false accounts or providing misleading information during registration',
    'Using automated systems to scrape data or make bulk purchases'
  ];

  const limitations = [
    {
      title: 'Product Availability',
      description: 'Luxury timepieces are subject to availability and may become sold out without notice.'
    },
    {
      title: 'Pricing Changes',
      description: 'Prices may change without notice due to market conditions, currency fluctuations, or supplier adjustments.'
    },
    {
      title: 'Service Interruptions',
      description: 'We may temporarily suspend services for maintenance, security updates, or technical improvements.'
    },
    {
      title: 'Geographic Restrictions',
      description: 'Some products or services may not be available in all regions due to legal or logistical constraints.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-20 font-inter">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-amber-500/25">
            <FileText className="w-10 h-10 text-black" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 luxury-serif">
            Terms & <span className="text-amber-400">Conditions</span>
          </h1>
          <p className="text-xl text-gray-400 mb-6">
            Your agreement for luxury watch purchases and services with LUXERA
          </p>
          <p className="text-gray-500 text-sm">
            Last updated: January 2025
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-amber-500/10 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-white mb-4 luxury-serif">Welcome to LUXERA</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            These Terms and Conditions ("Terms") govern your use of the LUXERA website and the purchase 
            of our luxury timepieces. By accessing our website or making a purchase, you agree to be 
            bound by these Terms and our Privacy Policy.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            LUXERA is committed to providing an exceptional luxury shopping experience while maintaining 
            clear, fair, and transparent business practices. Please read these Terms carefully before 
            using our services.
          </p>
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4">
            <p className="text-amber-400 text-sm font-medium">
              ⚠️ Important: By proceeding with any purchase or creating an account, you acknowledge that 
              you have read, understood, and agree to these Terms and Conditions.
            </p>
          </div>
        </motion.div>

        {/* Main Sections */}
        <div className="space-y-8 mb-12">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.title}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-amber-500/10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-white luxury-serif">{section.title}</h3>
                </div>
                
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Prohibited Uses */}
        <motion.div
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-amber-500/10 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white luxury-serif">Prohibited Uses</h3>
          </div>
          
          <p className="text-gray-300 mb-6 leading-relaxed">
            To maintain the integrity of our luxury brand and protect all customers, the following activities are strictly prohibited:
          </p>
          
          <ul className="space-y-3">
            {prohibitedUses.map((use, index) => (
              <li key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300 leading-relaxed">{use}</p>
              </li>
            ))}
          </ul>
          
          <div className="mt-6 bg-red-500/10 border border-red-500/20 rounded-lg p-4">
            <p className="text-red-400 text-sm font-medium">
              Violation of these terms may result in immediate account suspension, order cancellation, 
              and potential legal action.
            </p>
          </div>
        </motion.div>

        {/* Limitations and Disclaimers */}
        <motion.div
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-amber-500/10 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6 luxury-serif">Service Limitations</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {limitations.map((limitation, index) => (
              <motion.div
                key={limitation.title}
                className="bg-gray-800/50 rounded-lg p-4 border border-amber-500/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
              >
                <h4 className="text-amber-400 font-semibold mb-2">{limitation.title}</h4>
                <p className="text-gray-300 text-sm">{limitation.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Liability and Indemnification */}
        <motion.div
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-amber-500/10 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4 luxury-serif">Limitation of Liability</h3>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              LUXERA's liability is limited to the purchase price of the specific timepiece in question. 
              We are not liable for any indirect, incidental, or consequential damages arising from 
              the use of our products or services.
            </p>
            <p>
              While we take every precaution to ensure the accuracy of product descriptions and specifications, 
              minor variations in color, finish, or features may occur due to manufacturing processes or 
              display limitations.
            </p>
            <p>
              Customers agree to indemnify and hold LUXERA harmless from any claims, damages, or expenses 
              arising from misuse of our products, violation of these Terms, or any unlawful activities.
            </p>
          </div>
        </motion.div>

        {/* Governing Law */}
        <motion.div
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-amber-500/10 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4 luxury-serif">Governing Law and Disputes</h3>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              These Terms and Conditions are governed by the laws of Pakistan. Any disputes arising 
              from these Terms or your use of LUXERA services will be resolved through arbitration 
              in Punjab, Pakistan.
            </p>
            <p>
              We encourage customers to contact us directly to resolve any issues before pursuing 
              formal legal action. Our customer service team is committed to finding fair and 
              satisfactory solutions for all parties.
            </p>
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4">
              <h4 className="text-amber-400 font-semibold mb-2">Dispute Resolution Process</h4>
              <ol className="space-y-1 text-sm">
                <li>1. Contact our customer service team via email or WhatsApp</li>
                <li>2. Allow 48-72 hours for initial response and investigation</li>
                <li>3. Participate in good faith negotiations to reach resolution</li>
                <li>4. If unresolved, formal arbitration may be initiated</li>
              </ol>
            </div>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          className="bg-gradient-to-br from-amber-500/10 to-amber-600/10 border border-amber-500/20 rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4 luxury-serif">Questions About These Terms?</h3>
          
          <p className="text-gray-300 mb-6 leading-relaxed">
            If you have any questions about these Terms and Conditions or need clarification on any policies, 
            our legal and customer service teams are available to assist you.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-white font-semibold mb-2">Legal Inquiries</h4>
              <div className="space-y-2">
                <p className="text-amber-400 font-medium">luxerawatches@gmail.com</p>
                <p className="text-gray-300 text-sm">For terms clarification and legal matters</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-2">Customer Support</h4>
              <div className="space-y-2">
                <p className="text-amber-400 font-medium">+92 370 791 0557</p>
                <p className="text-gray-300 text-sm">WhatsApp support for immediate assistance</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Last Updated */}
        <motion.div
          className="text-center mt-12 pt-8 border-t border-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <p className="text-gray-500 text-sm">
            These Terms and Conditions were last updated on January 24, 2025. We reserve the right 
            to modify these terms at any time. Material changes will be communicated to registered 
            customers via email or website notification at least 30 days before taking effect.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
