import type { User } from "./database.types";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface SignupRequest {
  email: string;
  password: string;
  name?: string;
  phone?: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface ProductSearchParams {
  query?: string;
  category?: string;
  department?: string;
  brand?: string;
  min_price?: number;
  max_price?: number;
  in_stock?: boolean;
  sort_by?: string;
  sort_order?: 'asc' | 'desc';
  page?: number;
  limit?: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  total_pages: number;
}

export interface ReviewSummary {
  average_rating: number;
  total_reviews: number;
  rating_distribution: { [key: number]: number };
}

export interface DashboardStats {
  total_orders: number;
  total_revenue: number;
  total_products: number;
  low_stock_products: number;
  recent_orders_count: number;
}

export interface OrderStatusSummary {
  pending: number;
  confirmed: number;
  preparing: number;
  ready: number;
  completed: number;
  cancelled: number;
}

export interface RevenueTrend {
  date: string;
  revenue: number;
}