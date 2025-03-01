export type TicketPriority = 'low' | 'medium' | 'high' | 'urgent';
export type TicketStatus = 'open' | 'in_progress' | 'waiting' | 'resolved' | 'closed';
export type TicketCategory = 'technical' | 'financial' | 'complaint' | 'suggestion' | 'other';

export interface Ticket {
  id: string;
  user_id: string;
  title: string;
  description: string;
  category: TicketCategory;
  priority: TicketPriority;
  status: TicketStatus;
  attachments?: {
    id: string;
    url: string;
    name: string;
    type: string;
  }[];
  messages: {
    id: string;
    user_id: string;
    text: string;
    attachments?: {
      id: string;
      url: string;
      name: string;
      type: string;
    }[];
    created_at: string;
  }[];
  assigned_to?: string;
  created_at: string;
  updated_at: string;
  resolved_at?: string;
}