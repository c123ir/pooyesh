export interface AIAssistant {
  id: string;
  name: string;
  avatar: string;
  expertise: string[];
  available_languages: string[];
  capabilities: {
    category: string;
    features: string[];
  }[];
  conversation_history: {
    id: string;
    user_id: string;
    messages: {
      role: 'user' | 'assistant';
      content: string;
      timestamp: string;
    }[];
    feedback?: {
      rating: number;
      comment?: string;
    };
  }[];
  knowledge_base: {
    category: string;
    topics: {
      id: string;
      title: string;
      content: string;
      last_updated: string;
    }[];
  }[];
}