import { BrowserRouter as Router, Routes, Route } from "react-router";
import { CartProvider } from "@/react-app/hooks/useCart";
import Header from "@/react-app/components/Header";
import Footer from "@/react-app/components/Footer";
import HomePage from "@/react-app/pages/Home";
import ProductsPage from "@/react-app/pages/Products";
import ProductDetailPage from "@/react-app/pages/ProductDetail";
import CheckoutPage from "@/react-app/pages/Checkout";
import OrderReviewPage from "@/react-app/pages/OrderReview";
import ContactPage from "@/react-app/pages/Contact";
import AboutPage from "@/react-app/pages/About";
import PrivacyPage from "@/react-app/pages/Privacy";
import TermsPage from "@/react-app/pages/Terms";

import AdminPage from "@/react-app/pages/Admin";

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-black text-white">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:id" element={<ProductDetailPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/order-review" element={<OrderReviewPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              
              <Route path="/admin" element={<AdminPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}
