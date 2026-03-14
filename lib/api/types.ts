// Database model types — mirrors MongoDB collections

export interface AdminUser {
  id: string;
  fullName: string;
  email: string;
  password: string; // hashed
  role: "admin";
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  author: string;
  categoryId: string;
  tags: string[];
  status: "draft" | "published";
  seoTitle: string;
  seoDescription: string;
  ogImage: string;
  canonicalUrl: string;
  readTime: string;
  featured: boolean;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface ContactLead {
  id: string;
  fullName: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
  createdAt: string;
}

export interface DashboardStats {
  totalPosts: number;
  publishedPosts: number;
  draftPosts: number;
  totalCategories: number;
  totalLeads: number;
  recentPosts: BlogPost[];
  categoryStats: { name: string; count: number }[];
}
