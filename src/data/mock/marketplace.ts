export interface Product {
  id: string;
  seller_id: string;
  title: string;
  description: string;
  category: string;
  condition: 'new' | 'used' | 'refurbished';
  price: number;
  discount_price?: number;
  images: string[];
  specifications: {
    [key: string]: string;
  };
  stock: number;
  warranty?: {
    duration: string;
    description: string;
  };
  shipping: {
    methods: ('delivery' | 'pickup')[];
    cost: number;
    free_shipping_threshold?: number;
  };
  created_at: string;
  views: number;
  likes: number;
}

export interface Order {
  id: string;
  buyer_id: string;
  seller_id: string;
  products: {
    product_id: string;
    quantity: number;
    price: number;
  }[];
  total_amount: number;
  shipping_address: {
    recipient: string;
    phone: string;
    address: string;
    postal_code: string;
  };
  payment_status: 'pending' | 'paid' | 'failed';
  shipping_status: 'pending' | 'processing' | 'shipped' | 'delivered';
  created_at: string;
  updated_at: string;
}