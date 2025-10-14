export interface User {
  id: string;
  email: string;
  password_hash?: string;
  name?: string;
  phone?: string;
  role: string;
  email_verified: boolean;
  verification_token?: string;
  reset_token?: string;
  low_stock_alerts: boolean;
  new_stock_alerts: boolean;
  restock_alerts: boolean;
  created_at: string;
  updated_at: string;
}

export interface Product {
  id: string;
  sku: string;
  upc?: string;
  name: string;
  brand?: string;
  category?: string;
  department?: string;
  size?: string;
  volume?: string;
  pack?: string;
  type?: string;
  description?: string;
  cost?: number;
  price: number;
  quantity: number;
  low_stock_threshold: number;
  image_url?: string;
  rating: number;
  review_count: number;
  is_active: boolean;
  search_vector?: string; // TSVECTOR, but as string for simplicity
  created_at: string;
  updated_at: string;
}

export interface Order {
  id: string;
  user_id?: string;
  order_status: string;
  subtotal: number;
  tax: number;
  discount: number;
  order_total: number;
  coupon_code?: string;
  payment_reference?: string;
  pickup_time?: string;
  pickup_instructions?: string;
  customer_name?: string;
  customer_email?: string;
  customer_phone?: string;
  readable_created_at?: string;
  created_at: string;
  updated_at: string;
  verification_token?: string;
}

export interface OrderItem {
  id: string;
  order_id: string;
  product_id?: string;
  product_name: string;
  product_sku?: string;
  price: number;
  quantity: number;
  subtotal: number; // Generated
  created_at: string;
}

export interface Review {
  id: string;
  product_id: string;
  user_id: string;
  rating: number;
  comment?: string;
  is_approved: boolean;
  created_at: string;
}

export interface Favorite {
  user_id: string;
  product_id: string;
  created_at: string;
}

export interface Notification {
  id: string;
  type: string;
  message: string;
  product_id?: string;
  user_id?: string;
  order_id?: string;
  read: boolean;
  created_at: string;
}

export interface Coupon {
  id: string;
  code: string;
  description?: string;
  discount_type: string;
  discount_value: number;
  is_active: boolean;
  start_date: string;
  end_date?: string;
  usage_limit?: number;
  used_count: number;
  min_order_amount?: number;
  applicable_categories?: string[];
  applicable_departments?: string[];
  created_at: string;
  updated_at: string;
}

export interface CouponUsage {
  id: string;
  coupon_id: string;
  user_id?: string;
  order_id: string;
  discount_amount: number;
  created_at: string;
}

export interface StoreSettings {
  id: number;
  store_name: string;
  contact_email?: string;
  contact_phone?: string;
  open_time: string;
  close_time: string;
  default_tax: number;
  auto_confirm_orders: boolean;
  stock_alerts_enabled: boolean;
  order_alerts_enabled: boolean;
  low_stock_threshold: number;
  updated_at: string;
}

export interface NotificationSubscription {
  id: string;
  user_id: string;
  product_id: string;
  notify_on_restock: boolean;
  created_at: string;
}

export interface ProductRecommendation {
  id: string;
  product_id: string;
  recommended_product_id: string;
  score?: number;
  reason?: string;
  created_at: string;
  updated_at: string;
}

export interface InventoryLog {
  id: string;
  product_id: string;
  change_amount: number;
  quantity_before: number;
  quantity_after: number;
  reason?: string;
  notes?: string;
  changed_by?: string;
  created_at: string;
}