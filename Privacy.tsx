import { motion } from 'framer-motion';
import { Shield, Eye, Lock, UserCheck, FileText, AlertCircle } from 'lucide-react';

export default function Privacy() {
  const sections = [
    {
      icon: Eye,
      title: 'Information We Collect',
      content: [
        'Personal information you provide when creating an account or making a purchase (name, email, phone number, address)',
        'Payment information processed securely through our payment partners',
        'Device and browser information when you visit our website',
        'Usage data to improve your shopping experience',
        'Communication preferences and customer service interactions'
      ]
    },
    {
      icon: Lock,
      title: 'How We Use Your Information',
      content: [
        'Process and fulfill your luxury watch orders',
        'Provide customer support and respond to your inquiries',
        'Send order confirmations, shipping updates, and important account information',
        'Improve our website, products, and services based on your feedback',
        'Comply with legal obligations and prevent fraudulent activities'
      ]
    },
    {
      icon: UserCheck,
      title: 'Information Sharing',
      content: [
        'We never sell your personal information to third parties',
        'Trusted shipping partners receive only necessary delivery information',
        'Payment processors handle transaction data with industry-standard security',
        'Legal authorities may receive information when required by law',
        'Service providers who help us operate our business under strict confidentiality agreements'
      ]
    },
    {
      icon: Shield,
      title: 'Data Security',
      content: [
        'SSL encryption protects all data transmitted to our servers',
        'Regular security audits and vulnerability assessments',
        'Restricted access to personal information on a need-to-know basis',
        'Secure data centers with 24/7 monitoring and backup systems',
        'Industry-standard security protocols for payment processing'
      ]
    }
  ];

  const rights = [
    {
      title: 'Access Your Data',
      description: 'Request a copy of all personal information we have about you'
    },
    {
      title: 'Update Information',
      description: 'Correct or update any inaccurate personal information'
    },
    {
      title: 'Delete Your Data',
      description: 'Request deletion of your personal information (subject to legal requirements)'
    },
    {
      title: 'Data Portability',
      description: 'Receive your data in a structured, commonly used format'
    },
    {
      title: 'Withdraw Consent',
      description: 'Opt out of marketing communications at any time'
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
            <Shield className="w-10 h-10 text-black" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 luxury-serif">
            Privacy <span className="text-amber-400">Policy</span>
          </h1>
          <p className="text-xl text-gray-400 mb-6">
            Your privacy and data security are fundamental to our luxury service
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
          <h2 className="text-2xl font-bold text-white mb-4 luxury-serif">Our Commitment to Privacy</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            At LUXERA, we understand that luxury extends beyond our timepieces to include the protection 
            of your personal information. This Privacy Policy outlines how we collect, use, protect, and 
            respect your data when you interact with our luxury watch services.
          </p>
          <p className="text-gray-300 leading-relaxed">
            By using our website and services, you agree to the collection and use of information in 
            accordance with this policy. We are committed to transparency and will always inform you 
            about how your data is being used.
          </p>
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

        {/* Your Rights */}
        <motion.div
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-amber-500/10 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-black" />
            </div>
            <h3 className="text-2xl font-bold text-white luxury-serif">Your Rights</h3>
          </div>
          
          <p className="text-gray-300 mb-6 leading-relaxed">
            As a valued LUXERA customer, you have the following rights regarding your personal information:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {rights.map((right, index) => (
              <motion.div
                key={right.title}
                className="bg-gray-800/50 rounded-lg p-4 border border-amber-500/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
              >
                <h4 className="text-white font-semibold mb-2">{right.title}</h4>
                <p className="text-gray-400 text-sm">{right.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Cookies and Tracking */}
        <motion.div
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-amber-500/10 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4 luxury-serif">Cookies and Tracking</h3>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              Our website uses cookies and similar technologies to enhance your browsing experience, 
              remember your preferences, and provide personalized content. These technologies help us:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start space-x-2">
                <span className="text-amber-400">•</span>
                <span>Remember your shopping cart items and preferences</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-amber-400">•</span>
                <span>Analyze website traffic and user behavior to improve our services</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-amber-400">•</span>
                <span>Provide secure authentication and prevent fraud</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-amber-400">•</span>
                <span>Deliver relevant marketing content and recommendations</span>
              </li>
            </ul>
            <p>
              You can control cookie settings through your browser preferences, though some features 
              may not function properly without certain cookies.
            </p>
          </div>
        </motion.div>

        {/* Data Retention */}
        <motion.div
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-amber-500/10 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4 luxury-serif">Data Retention</h3>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              We retain your personal information only as long as necessary to provide our services 
              and comply with legal obligations:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="text-amber-400 font-semibold mb-2">Account Information</h4>
                <p className="text-sm">Retained while your account is active and for 3 years after closure</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="text-amber-400 font-semibold mb-2">Transaction Records</h4>
                <p className="text-sm">Retained for 7 years for tax and legal compliance</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="text-amber-400 font-semibold mb-2">Marketing Data</h4>
                <p className="text-sm">Retained until you opt out or request deletion</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="text-amber-400 font-semibold mb-2">Support Communications</h4>
                <p className="text-sm">Retained for 2 years for service improvement</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          className="bg-gradient-to-br from-amber-500/10 to-amber-600/10 border border-amber-500/20 rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-black" />
            </div>
            <h3 className="text-2xl font-bold text-white luxury-serif">Questions About Privacy?</h3>
          </div>
          
          <p className="text-gray-300 mb-6 leading-relaxed">
            If you have any questions about this Privacy Policy, need to exercise your data rights, 
            or have concerns about how we handle your information, please contact us:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-white font-semibold mb-2">Privacy Officer</h4>
              <p className="text-gray-300 text-sm mb-4">
                Our dedicated privacy team is here to help with any data-related questions.
              </p>
              <div className="space-y-2">
                <p className="text-amber-400 font-medium">luxerawatches@gmail.com</p>
                <p className="text-amber-400 font-medium">+92 370 791 0557</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-2">Response Time</h4>
              <p className="text-gray-300 text-sm mb-4">
                We respond to all privacy inquiries within 48 hours during business days.
              </p>
              <div className="bg-gray-800/50 rounded-lg p-3">
                <p className="text-amber-400 text-sm font-medium">
                  For urgent privacy matters, call our WhatsApp support line for immediate assistance.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Last Updated */}
        <motion.div
          className="text-center mt-12 pt-8 border-t border-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <p className="text-gray-500 text-sm">
            This Privacy Policy was last updated on January 24, 2025. We may update this policy 
            periodically to reflect changes in our practices or applicable laws. We will notify 
            you of any significant changes via email or through our website.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
