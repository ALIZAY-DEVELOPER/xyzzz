import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { CreateOrderSchema, AdminLoginSchema } from "../shared/types";
import { cors } from "hono/cors";

const app = new Hono<{ Bindings: Env }>();

app.use("*", cors());

// Get all products
app.get("/api/products", async (c) => {
  try {
    const products = await c.env.DB.prepare(`
      SELECT * FROM products WHERE is_active = 1 ORDER BY created_at DESC
    `).all();
    
    return c.json({ success: true, data: products.results });
  } catch (error) {
    return c.json({ success: false, error: "Failed to fetch products" }, 500);
  }
});

// Get featured products
app.get("/api/products/featured", async (c) => {
  try {
    const products = await c.env.DB.prepare(`
      SELECT * FROM products WHERE is_featured = 1 AND is_active = 1 ORDER BY created_at DESC
    `).all();
    
    return c.json({ success: true, data: products.results });
  } catch (error) {
    return c.json({ success: false, error: "Failed to fetch featured products" }, 500);
  }
});

// Get single product
app.get("/api/products/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const product = await c.env.DB.prepare(`
      SELECT * FROM products WHERE id = ? AND is_active = 1
    `).bind(id).first();
    
    if (!product) {
      return c.json({ success: false, error: "Product not found" }, 404);
    }
    
    return c.json({ success: true, data: product });
  } catch (error) {
    return c.json({ success: false, error: "Failed to fetch product" }, 500);
  }
});

// Create order
app.post("/api/orders", zValidator("json", CreateOrderSchema), async (c) => {
  try {
    const orderData = c.req.valid("json");
    
    // Get product details
    const product = await c.env.DB.prepare(`
      SELECT * FROM products WHERE id = ? AND is_active = 1
    `).bind(orderData.product_id).first();
    
    if (!product) {
      return c.json({ success: false, error: "Product not found" }, 404);
    }
    
    const totalAmount = (product as any).price * orderData.quantity;
    
    // Insert order
    const result = await c.env.DB.prepare(`
      INSERT INTO orders (
        customer_name, mobile_number, whatsapp_number, email,
        delivery_address, city, province, product_id, product_name,
        quantity, unit_price, total_amount
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(
      orderData.customer_name,
      orderData.mobile_number,
      orderData.whatsapp_number || null,
      orderData.email || null,
      orderData.delivery_address,
      orderData.city,
      orderData.province,
      orderData.product_id,
      product.name,
      orderData.quantity,
      (product as any).price,
      totalAmount
    ).run();
    
    // Generate WhatsApp message using the exact format provided
    const whatsappMessage = encodeURIComponent(`*🎯 New Order from LUXERA Website! 🎯

*Customer Name:* ${orderData.customer_name}
*Mobile Number:* ${orderData.mobile_number}
*WhatsApp Number:* ${orderData.whatsapp_number || orderData.mobile_number}
*Email:* ${orderData.email || 'Not provided'}
*Address:* ${orderData.delivery_address}, ${orderData.city}, ${orderData.province}

*--- Order Summary ---*
*Product:* ${product.name}
*Quantity:* ${orderData.quantity}
*Add-on:* Not applicable

*Total Bill:* PKR ${totalAmount.toLocaleString()}

-----------------------------------
This order has been confirmed by the customer.

*Ordered from:* LUXERA`);
    
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=923707910557&text=${whatsappMessage}&type=phone_number&app_absent=0`;
    
    return c.json({ 
      success: true, 
      data: { 
        orderId: result.meta.last_row_id,
        whatsappUrl 
      } 
    });
  } catch (error) {
    console.error("Order creation error:", error);
    return c.json({ success: false, error: "Failed to create order" }, 500);
  }
});

// Get all orders (admin)
app.get("/api/admin/orders", async (c) => {
  try {
    const orders = await c.env.DB.prepare(`
      SELECT * FROM orders ORDER BY created_at DESC
    `).all();
    
    return c.json({ success: true, data: orders.results });
  } catch (error) {
    return c.json({ success: false, error: "Failed to fetch orders" }, 500);
  }
});

// Admin login
app.post("/api/admin/login", zValidator("json", AdminLoginSchema), async (c) => {
  const { email, password } = c.req.valid("json");
  
  // Simple hardcoded check for now
  if (email === "AFTEREF93CTXLURA@GMAIL.COM" && password === "HE7**2):}*735Ejds90&{]WY") {
    return c.json({ success: true, data: { token: "admin-authenticated" } });
  }
  
  return c.json({ success: false, error: "Invalid credentials" }, 401);
});

// Add product (admin)
app.post("/api/admin/products", async (c) => {
  try {
    const productData = await c.req.json();
    
    const result = await c.env.DB.prepare(`
      INSERT INTO products (
        name, description, price, original_price, discount_percentage,
        image_url, category, specifications, is_featured, stock_quantity
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(
      productData.name,
      productData.description,
      productData.price,
      productData.original_price || null,
      productData.discount_percentage || null,
      productData.image_url,
      productData.category,
      productData.specifications,
      productData.is_featured ? 1 : 0,
      productData.stock_quantity || 0
    ).run();
    
    return c.json({ success: true, data: { id: result.meta.last_row_id } });
  } catch (error) {
    return c.json({ success: false, error: "Failed to add product" }, 500);
  }
});

// Update product (admin)
app.put("/api/admin/products/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const productData = await c.req.json();
    
    await c.env.DB.prepare(`
      UPDATE products SET
        name = ?, description = ?, price = ?, original_price = ?,
        discount_percentage = ?, image_url = ?, category = ?,
        specifications = ?, is_featured = ?, stock_quantity = ?,
        updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `).bind(
      productData.name,
      productData.description,
      productData.price,
      productData.original_price || null,
      productData.discount_percentage || null,
      productData.image_url,
      productData.category,
      productData.specifications,
      productData.is_featured ? 1 : 0,
      productData.stock_quantity || 0,
      id
    ).run();
    
    return c.json({ success: true });
  } catch (error) {
    return c.json({ success: false, error: "Failed to update product" }, 500);
  }
});

// Delete product (admin)
app.delete("/api/admin/products/:id", async (c) => {
  try {
    const id = c.req.param("id");
    
    await c.env.DB.prepare(`
      UPDATE products SET is_active = 0, updated_at = CURRENT_TIMESTAMP WHERE id = ?
    `).bind(id).run();
    
    return c.json({ success: true });
  } catch (error) {
    return c.json({ success: false, error: "Failed to delete product" }, 500);
  }
});

export default {
  fetch: app.fetch,
};
