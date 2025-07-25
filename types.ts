import z from "zod";

export const ProductSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string().nullable(),
  price: z.number(),
  original_price: z.number().nullable(),
  discount_percentage: z.number().nullable(),
  image_url: z.string().nullable(),
  category: z.string().nullable(),
  specifications: z.string().nullable(),
  is_featured: z.boolean(),
  is_active: z.boolean(),
  stock_quantity: z.number(),
  created_at: z.string(),
  updated_at: z.string(),
});

export type Product = z.infer<typeof ProductSchema>;

export const OrderSchema = z.object({
  id: z.number(),
  customer_name: z.string(),
  mobile_number: z.string(),
  whatsapp_number: z.string().nullable(),
  email: z.string().nullable(),
  delivery_address: z.string(),
  city: z.string(),
  province: z.string(),
  product_id: z.number(),
  product_name: z.string(),
  quantity: z.number(),
  unit_price: z.number(),
  total_amount: z.number(),
  order_status: z.string(),
  whatsapp_sent: z.boolean(),
  created_at: z.string(),
  updated_at: z.string(),
});

export type Order = z.infer<typeof OrderSchema>;

export const CreateOrderSchema = z.object({
  customer_name: z.string().min(1, "Name is required"),
  mobile_number: z.string().min(1, "Mobile number is required"),
  whatsapp_number: z.string().optional(),
  email: z.string().email().optional(),
  delivery_address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  province: z.string().min(1, "Province is required"),
  product_id: z.number(),
  quantity: z.number().min(1, "Quantity must be at least 1"),
});

export type CreateOrder = z.infer<typeof CreateOrderSchema>;

export const CartItem = z.object({
  product: ProductSchema,
  quantity: z.number().min(1),
  selectedOptions: z.record(z.string()).optional(),
});

export type CartItemType = z.infer<typeof CartItem>;

export const AdminLoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export type AdminLogin = z.infer<typeof AdminLoginSchema>;
