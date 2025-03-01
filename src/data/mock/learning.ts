export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  instructor: {
    id: string;
    name: string;
    avatar: string;
    bio: string;
    expertise: string[];
  };
  thumbnail: string;
  duration: string;
  lessons: {
    id: string;
    title: string;
    description: string;
    video_url?: string;
    duration: string;
    attachments?: {
      id: string;
      title: string;
      url: string;
      type: string;
    }[];
    is_free: boolean;
  }[];
  price: number;
  discount_price?: number;
  requirements: string[];
  what_you_learn: string[];
  reviews: {
    user_id: string;
    rating: number;
    comment: string;
    date: string;
  }[];
  students_count: number;
  average_rating: number;
  created_at: string;
  updated_at: string;
}