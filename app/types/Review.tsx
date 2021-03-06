export default interface Review {
  id: number;
  content: "My sample response 1";
  blocked: boolean;
  blockedThread?: boolean;
  blockReason?: string;
  points?: number;
  authorUser?: any;
  authorType?: string;
  authorId?: string;
  authorName: string;
  authorEmail: string;
  authorAvatar?: string;
  relatedSlug: string;
  created_by?: any;
  updated_by?: any;
  created_at: string;
  updated_at: string;
  reports: any[];
  children: any[];
}
