export interface ForumCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  topics_count: number;
  posts_count: number;
  last_post?: {
    id: string;
    title: string;
    author: string;
    date: string;
  };
}

export interface ForumTopic {
  id: string;
  category_id: string;
  title: string;
  content: string;
  author_id: string;
  is_pinned: boolean;
  is_locked: boolean;
  views: number;
  likes: number;
  posts: ForumPost[];
  tags: string[];
  created_at: string;
  updated_at: string;
}

export interface ForumPost {
  id: string;
  topic_id: string;
  author_id: string;
  content: string;
  likes: number;
  is_solution: boolean;
  attachments?: {
    id: string;
    url: string;
    type: string;
  }[];
  created_at: string;
  updated_at: string;
}