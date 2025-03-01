export interface Event {
  id: string;
  title: string;
  description: string;
  type: 'meeting' | 'workshop' | 'seminar' | 'exhibition' | 'other';
  start_date: string;
  end_date: string;
  location: {
    title: string;
    address: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  capacity?: number;
  registered_count: number;
  is_online: boolean;
  online_link?: string;
  price?: number;
  images?: string[];
  organizer: {
    id: string;
    name: string;
    role: string;
    contact: string;
  };
  agenda?: {
    time: string;
    title: string;
    description: string;
    speaker?: string;
  }[];
  requirements?: string[];
  attachments?: {
    id: string;
    title: string;
    url: string;
    type: string;
  }[];
  registrations: {
    user_id: string;
    status: 'pending' | 'confirmed' | 'cancelled';
    registration_date: string;
    payment_status?: 'pending' | 'paid' | 'refunded';
  }[];
}