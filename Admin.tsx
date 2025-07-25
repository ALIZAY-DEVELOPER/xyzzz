import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Lock, Plus, Edit, Trash2, Package, ShoppingCart, Users, TrendingUp, Save, X } from 'lucide-react';
import { Product, AdminLogin } from '../../shared/types';

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState<AdminLogin>({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [orders, setOrders] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [productForm, setProductForm] = useState({
    name: '',
    description: '',
    price: '',
    original_price: '',
    discount_percentage: '',
    image_url: '',
    category: '',
    specifications: '',
    is_featured: false,
    stock_quantity: ''
  });

  useEffect(() => {
    // Check if already logged in
    const token = localStorage.getItem('admin-token');
    if (token === 'admin-authenticated') {
      setIsLoggedIn(true);
      fetchAdminData();
    }
  }, []);

  const fetchAdminData = async () => {
    try {
      const [productsRes, ordersRes] = await Promise.all([
        fetch('/api/products'),
        fetch('/api/admin/orders')
      ]);
      
      const productsData = await productsRes.json();
      const ordersData = await ordersRes.json();
      
      if (productsData.success) setProducts(productsData.data);
      if (ordersData.success) setOrders(ordersData.data);
    } catch (error) {
      console.error('Error fetching admin data:', error);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem('admin-token', data.data.token);
        setIsLoggedIn(true);
        fetchAdminData();
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      alert('Login failed');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin-token');
    setIsLoggedIn(false);
    setLoginData({ email: '', password: '' });
  };

  const resetProductForm = () => {
    setProductForm({
      name: '',
      description: '',
      price: '',
      original_price: '',
      discount_percentage: '',
      image_url: '',
      category: '',
      specifications: '',
      is_featured: false,
      stock_quantity: ''
    });
    setEditingProduct(null);
    setShowAddProduct(false);
  };

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
    setProductForm({
      name: product.name,
      description: product.description || '',
      price: product.price.toString(),
      original_price: product.original_price?.toString() || '',
      discount_percentage: product.discount_percentage?.toString() || '',
      image_url: product.image_url || '',
      category: product.category || '',
      specifications: product.specifications || '',
      is_featured: product.is_featured,
      stock_quantity: product.stock_quantity.toString()
    });
    setShowAddProduct(true);
  };

  const handleSaveProduct = async () => {
    try {
      const productData = {
        ...productForm,
        price: parseInt(productForm.price),
        original_price: productForm.original_price ? parseInt(productForm.original_price) : null,
        discount_percentage: productForm.discount_percentage ? parseInt(productForm.discount_percentage) : null,
        stock_quantity: parseInt(productForm.stock_quantity) || 0,
        specifications: productForm.specifications || null
      };

      const url = editingProduct 
        ? `/api/admin/products/${editingProduct.id}` 
        : '/api/admin/products';
      
      const method = editingProduct ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productData),
      });

      const result = await response.json();

      if (result.success) {
        await fetchAdminData();
        resetProductForm();
        alert(editingProduct ? 'Product updated successfully!' : 'Product added successfully!');
      } else {
        alert('Failed to save product');
      }
    } catch (error) {
      alert('Error saving product');
    }
  };

  const handleDeleteProduct = async (productId: number) => {
    if (confirm('Are you sure you want to delete this product?')) {
      try {
        const response = await fetch(`/api/admin/products/${productId}`, {
          method: 'DELETE',
        });

        const result = await response.json();

        if (result.success) {
          await fetchAdminData();
          alert('Product deleted successfully!');
        } else {
          alert('Failed to delete product');
        }
      } catch (error) {
        alert('Error deleting product');
      }
    }
  };

  const stats = [
    { title: 'Total Products', value: products.length, icon: Package, color: 'from-blue-500 to-blue-600' },
    { title: 'Total Orders', value: orders.length, icon: ShoppingCart, color: 'from-green-500 to-green-600' },
    { title: 'Active Products', value: products.filter(p => p.is_active).length, icon: TrendingUp, color: 'from-amber-500 to-amber-600' },
    { title: 'Featured Products', value: products.filter(p => p.is_featured).length, icon: Users, color: 'from-purple-500 to-purple-600' },
  ];

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex items-center justify-center py-20">
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-amber-500/10">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-black" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-2 luxury-serif">Admin Login</h1>
              <p className="text-gray-400">Access LUXERA admin dashboard</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-gray-300 font-medium mb-2">Email</label>
                <input
                  type="email"
                  value={loginData.email}
                  onChange={(e) => setLoginData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 font-medium mb-2">Password</label>
                <input
                  type="password"
                  value={loginData.password}
                  onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold py-3 rounded-lg hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300 disabled:opacity-50"
              >
                {loading ? 'Logging in...' : 'Login'}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="flex items-center justify-between mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h1 className="text-4xl font-bold text-white mb-2 luxury-serif">
              Admin <span className="text-amber-400">Dashboard</span>
            </h1>
            <p className="text-gray-400">Manage your luxury watch business</p>
          </div>
          
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
          >
            Logout
          </button>
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div
          className="flex space-x-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {[
            { id: 'dashboard', name: 'Dashboard' },
            { id: 'products', name: 'Products' },
            { id: 'orders', name: 'Orders' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-amber-500 text-black'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </motion.div>

        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.title}
                    className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-amber-500/10"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
                    <p className="text-gray-400">{stat.title}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Products Tab */}
        {activeTab === 'products' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white luxury-serif">Products Management</h2>
              <button
                onClick={() => setShowAddProduct(true)}
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
              >
                <Plus className="w-4 h-4" />
                <span>Add Product</span>
              </button>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-amber-500/10 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-800/50">
                    <tr>
                      <th className="px-6 py-4 text-left text-gray-300 font-semibold">Product</th>
                      <th className="px-6 py-4 text-left text-gray-300 font-semibold">Price</th>
                      <th className="px-6 py-4 text-left text-gray-300 font-semibold">Status</th>
                      <th className="px-6 py-4 text-left text-gray-300 font-semibold">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <tr key={product.id} className="border-t border-gray-700">
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-3">
                            <img
                              src={product.image_url || 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=50'}
                              alt={product.name}
                              className="w-12 h-12 object-cover rounded-lg"
                            />
                            <div>
                              <p className="text-white font-medium">{product.name}</p>
                              <p className="text-gray-400 text-sm">{product.category}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-amber-400 font-bold">
                          PKR {product.price.toLocaleString()}
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            product.is_active 
                              ? 'bg-green-500/20 text-green-400' 
                              : 'bg-red-500/20 text-red-400'
                          }`}>
                            {product.is_active ? 'Active' : 'Inactive'}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-2">
                            <button 
                              onClick={() => handleEditProduct(product)}
                              className="p-2 text-gray-400 hover:text-amber-400 transition-colors"
                              title="Edit Product"
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                            <button 
                              onClick={() => handleDeleteProduct(product.id)}
                              className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                              title="Delete Product"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}

        {/* Orders Tab */}
        {activeTab === 'orders' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6 luxury-serif">Orders Management</h2>
            
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-amber-500/10 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-800/50">
                    <tr>
                      <th className="px-6 py-4 text-left text-gray-300 font-semibold">Order ID</th>
                      <th className="px-6 py-4 text-left text-gray-300 font-semibold">Customer</th>
                      <th className="px-6 py-4 text-left text-gray-300 font-semibold">Product</th>
                      <th className="px-6 py-4 text-left text-gray-300 font-semibold">Total</th>
                      <th className="px-6 py-4 text-left text-gray-300 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr key={order.id} className="border-t border-gray-700">
                        <td className="px-6 py-4 text-white font-mono">#{order.id}</td>
                        <td className="px-6 py-4">
                          <div>
                            <p className="text-white font-medium">{order.customer_name}</p>
                            <p className="text-gray-400 text-sm">{order.mobile_number}</p>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <p className="text-white">{order.product_name}</p>
                          <p className="text-gray-400 text-sm">Qty: {order.quantity}</p>
                        </td>
                        <td className="px-6 py-4 text-amber-400 font-bold">
                          PKR {order.total_amount.toLocaleString()}
                        </td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-medium">
                            {order.order_status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}

        {/* Add/Edit Product Modal */}
        {showAddProduct && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <motion.div
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-amber-500/20 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white luxury-serif">
                  {editingProduct ? 'Edit Product' : 'Add New Product'}
                </h3>
                <button
                  onClick={resetProductForm}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 font-medium mb-2">Product Name</label>
                    <input
                      type="text"
                      value={productForm.name}
                      onChange={(e) => setProductForm(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300"
                      placeholder="Enter product name"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 font-medium mb-2">Category</label>
                    <input
                      type="text"
                      value={productForm.category}
                      onChange={(e) => setProductForm(prev => ({ ...prev, category: e.target.value }))}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300"
                      placeholder="e.g., Men's Watches"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 font-medium mb-2">Description</label>
                  <textarea
                    value={productForm.description}
                    onChange={(e) => setProductForm(prev => ({ ...prev, description: e.target.value }))}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300"
                    rows={4}
                    placeholder="Enter product description"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-gray-300 font-medium mb-2">Price (PKR)</label>
                    <input
                      type="number"
                      value={productForm.price}
                      onChange={(e) => setProductForm(prev => ({ ...prev, price: e.target.value }))}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300"
                      placeholder="0"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 font-medium mb-2">Original Price (PKR)</label>
                    <input
                      type="number"
                      value={productForm.original_price}
                      onChange={(e) => setProductForm(prev => ({ ...prev, original_price: e.target.value }))}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300"
                      placeholder="Optional"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 font-medium mb-2">Discount %</label>
                    <input
                      type="number"
                      value={productForm.discount_percentage}
                      onChange={(e) => setProductForm(prev => ({ ...prev, discount_percentage: e.target.value }))}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300"
                      placeholder="0"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 font-medium mb-2">Image URL</label>
                  <input
                    type="url"
                    value={productForm.image_url}
                    onChange={(e) => setProductForm(prev => ({ ...prev, image_url: e.target.value }))}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300"
                    placeholder="https://example.com/image.jpg"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-medium mb-2">Specifications (JSON format)</label>
                  <textarea
                    value={productForm.specifications}
                    onChange={(e) => setProductForm(prev => ({ ...prev, specifications: e.target.value }))}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300"
                    rows={3}
                    placeholder='{"movement": "Swiss Automatic", "case_material": "Stainless Steel"}'
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 font-medium mb-2">Stock Quantity</label>
                    <input
                      type="number"
                      value={productForm.stock_quantity}
                      onChange={(e) => setProductForm(prev => ({ ...prev, stock_quantity: e.target.value }))}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300"
                      placeholder="0"
                    />
                  </div>

                  <div className="flex items-center space-x-3 pt-8">
                    <input
                      type="checkbox"
                      id="is_featured"
                      checked={productForm.is_featured}
                      onChange={(e) => setProductForm(prev => ({ ...prev, is_featured: e.target.checked }))}
                      className="w-5 h-5 text-amber-500 bg-gray-800 border border-gray-700 rounded focus:ring-amber-500 focus:ring-2"
                    />
                    <label htmlFor="is_featured" className="text-gray-300 font-medium">
                      Featured Product
                    </label>
                  </div>
                </div>

                <div className="flex space-x-4 pt-6">
                  <button
                    onClick={handleSaveProduct}
                    className="flex-1 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold py-3 rounded-lg hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Save className="w-5 h-5" />
                    <span>{editingProduct ? 'Update Product' : 'Save Product'}</span>
                  </button>
                  
                  <button
                    onClick={resetProductForm}
                    className="px-6 py-3 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
