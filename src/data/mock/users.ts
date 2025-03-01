import { Service } from './services';

export type UserRole = 'member' | 'admin' | 'board_member' | 'public';
export type BusinessCategory = 'computer' | 'office_equipment' | 'bookstore' | 'cafenet' | 'typing' | 'stationery' | 'binding' | 'pos';

export interface User {
  id: string;
  phone: string;
  full_name: string;
  role: UserRole;
  business_category?: BusinessCategory;
  business_name?: string;
  created_at: string;
  is_approved: boolean;
  profile?: BusinessProfile;
  notifications_settings?: NotificationSettings;
}

export interface BusinessProfile {
  logo?: string;
  cover_image?: string;
  description: string;
  address: {
    text: string;
    location: {
      lat: number;
      lng: number;
    };
    district: number;
  };
  contact: {
    phone: string[];
    email?: string;
    website?: string;
    social_media?: {
      instagram?: string;
      telegram?: string;
      whatsapp?: string;
    };
  };
  business_hours: {
    [key: string]: {
      open: string;
      close: string;
      is_closed: boolean;
    };
  };
  services: {
    id: string;
    title: string;
    description: string;
    price: string;
    discount?: {
      percentage: number;
      expires_at: string;
    };
  }[];
  gallery: {
    id: string;
    url: string;
    title: string;
    type: 'image' | 'video';
  }[];
  certifications: {
    id: string;
    title: string;
    issuer: string;
    date: string;
    image?: string;
  }[];
  reviews: {
    id: string;
    user_name: string;
    rating: number;
    comment: string;
    date: string;
    reply?: {
      text: string;
      date: string;
    };
  }[];
  stats: {
    total_orders: number;
    total_customers: number;
    average_rating: number;
    response_time: string;
  };
}

export interface NotificationSettings {
  email: boolean;
  sms: boolean;
  push: boolean;
  categories: {
    news: boolean;
    events: boolean;
    tickets: boolean;
    offers: boolean;
  };
}