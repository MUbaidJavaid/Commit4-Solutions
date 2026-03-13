/**
 * localStorage-based storage engine.
 * Drop-in replacement for MongoDB API calls.
 * 
 * PRODUCTION NOTE: Replace this file with actual MongoDB API calls.
 * Each function maps 1:1 to a MongoDB operation.
 * Connect via: MONGODB_URI environment variable
 * 
 * Collections to create in MongoDB:
 * - users (AdminUser)
 * - blog_categories (BlogCategory)
 * - blog_posts (BlogPost)
 * - contact_leads (ContactLead)
 */

import type { AdminUser, BlogCategory, BlogPost, ContactLead, DashboardStats } from "./types";

const KEYS = {
  users: "cms_users",
  categories: "cms_categories",
  posts: "cms_posts",
  leads: "cms_leads",
};

function getAll<T>(key: string): T[] {
  try {
    return JSON.parse(localStorage.getItem(key) || "[]");
  } catch {
    return [];
  }
}

function setAll<T>(key: string, data: T[]): void {
  localStorage.setItem(key, JSON.stringify(data));
}

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
}

// Simple hash for demo — in production use bcrypt via your Node.js API
async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password + "nexabuild_salt_2026");
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, "0")).join("");
}

async function comparePassword(password: string, hashed: string): Promise<boolean> {
  const h = await hashPassword(password);
  return h === hashed;
}

// ============ AUTH ============

export async function seedDefaultAdmin(): Promise<void> {
  const users = getAll<AdminUser>(KEYS.users);
  if (users.length > 0) return; // Admin already exists
  
  const now = new Date().toISOString();
  const admin: AdminUser = {
    id: generateId(),
    fullName: "Admin",
    email: "admin@gmail.com",
    password: await hashPassword("admin"),
    role: "admin",
    isActive: true,
    createdAt: now,
    updatedAt: now,
  };
  setAll(KEYS.users, [admin]);
  console.log("✅ Default admin created (admin@gmail.com / admin). Change password in production!");
}

export async function loginAdmin(email: string, password: string): Promise<AdminUser | null> {
  const users = getAll<AdminUser>(KEYS.users);
  const user = users.find(u => u.email === email && u.isActive);
  if (!user) return null;
  const valid = await comparePassword(password, user.password);
  return valid ? user : null;
}

// ============ CATEGORIES ============

export function getCategories(): BlogCategory[] {
  return getAll<BlogCategory>(KEYS.categories);
}

export function getCategoryById(id: string): BlogCategory | undefined {
  return getCategories().find(c => c.id === id);
}

export function createCategory(data: Omit<BlogCategory, "id" | "createdAt" | "updatedAt">): BlogCategory {
  const cats = getCategories();
  const now = new Date().toISOString();
  const cat: BlogCategory = { ...data, id: generateId(), createdAt: now, updatedAt: now };
  cats.push(cat);
  setAll(KEYS.categories, cats);
  return cat;
}

export function updateCategory(id: string, data: Partial<BlogCategory>): BlogCategory | null {
  const cats = getCategories();
  const idx = cats.findIndex(c => c.id === id);
  if (idx === -1) return null;
  cats[idx] = { ...cats[idx], ...data, updatedAt: new Date().toISOString() };
  setAll(KEYS.categories, cats);
  return cats[idx];
}

export function deleteCategory(id: string): boolean {
  const cats = getCategories();
  const filtered = cats.filter(c => c.id !== id);
  if (filtered.length === cats.length) return false;
  setAll(KEYS.categories, filtered);
  return true;
}

// ============ POSTS ============

export function getPosts(): BlogPost[] {
  return getAll<BlogPost>(KEYS.posts).sort((a, b) => 
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function getPublishedPosts(): BlogPost[] {
  return getPosts().filter(p => p.status === "published");
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getPosts().find(p => p.slug === slug);
}

export function getPostById(id: string): BlogPost | undefined {
  return getPosts().find(p => p.id === id);
}

export function createPost(data: Omit<BlogPost, "id" | "createdAt" | "updatedAt">): BlogPost {
  const posts = getPosts();
  const now = new Date().toISOString();
  const post: BlogPost = { ...data, id: generateId(), createdAt: now, updatedAt: now };
  posts.push(post);
  setAll(KEYS.posts, posts);
  return post;
}

export function updatePost(id: string, data: Partial<BlogPost>): BlogPost | null {
  const posts = getPosts();
  const idx = posts.findIndex(p => p.id === id);
  if (idx === -1) return null;
  posts[idx] = { ...posts[idx], ...data, updatedAt: new Date().toISOString() };
  setAll(KEYS.posts, posts);
  return posts[idx];
}

export function deletePost(id: string): boolean {
  const posts = getPosts();
  const filtered = posts.filter(p => p.id !== id);
  if (filtered.length === posts.length) return false;
  setAll(KEYS.posts, filtered);
  return true;
}

// ============ LEADS ============

export function getLeads(): ContactLead[] {
  return getAll<ContactLead>(KEYS.leads).sort((a, b) =>
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function createLead(data: Omit<ContactLead, "id" | "createdAt">): ContactLead {
  const leads = getLeads();
  const lead: ContactLead = { ...data, id: generateId(), createdAt: new Date().toISOString() };
  leads.push(lead);
  setAll(KEYS.leads, leads);
  return lead;
}

// ============ DASHBOARD ============

export function getDashboardStats(): DashboardStats {
  const posts = getPosts();
  const cats = getCategories();
  const leads = getLeads();

  const categoryStats = cats.map(c => ({
    name: c.name,
    count: posts.filter(p => p.categoryId === c.id).length,
  }));

  return {
    totalPosts: posts.length,
    publishedPosts: posts.filter(p => p.status === "published").length,
    draftPosts: posts.filter(p => p.status === "draft").length,
    totalCategories: cats.length,
    totalLeads: leads.length,
    recentPosts: posts.slice(0, 5),
    categoryStats,
  };
}

// ============ SEED SAMPLE DATA ============

export function seedSampleData(): void {
  const cats = getCategories();
  if (cats.length > 0) return;

  const sampleCats: Omit<BlogCategory, "id" | "createdAt" | "updatedAt">[] = [
    { name: "Engineering", slug: "engineering", description: "Technical articles on software architecture and best practices" },
    { name: "Frontend", slug: "frontend", description: "UI frameworks, design systems, and frontend techniques" },
    { name: "AI & ML", slug: "ai-ml", description: "Artificial intelligence, machine learning, and automation" },
    { name: "Design", slug: "design", description: "UI/UX design, design systems, and visual storytelling" },
    { name: "Mobile", slug: "mobile", description: "Mobile app development for iOS and Android" },
    { name: "Business", slug: "business", description: "Business strategy, growth, and digital transformation" },
  ];

  const createdCats = sampleCats.map(c => createCategory(c));

  const samplePosts: Omit<BlogPost, "id" | "createdAt" | "updatedAt">[] = [
    {
      title: "Why Most Startups Fail at Scaling — And How to Avoid It",
      slug: "why-startups-fail-at-scaling",
      excerpt: "The architecture decisions you make at day one determine whether you can handle 10x growth.",
      content: "<h2>The Architecture Problem</h2><p>Scaling isn't just about adding more servers. It's about the fundamental architecture decisions made in the first weeks of development that either enable or prevent growth. We've helped over 50 startups navigate this challenge.</p><h2>Common Mistakes</h2><p>The most common mistake is choosing simplicity over scalability too early. While 'build the simplest thing that works' is good advice for validating ideas, many teams carry that mindset past product-market fit.</p><h2>The Solution</h2><p>The solution isn't to over-engineer from day one. It's to make intentional decisions about boundaries — service boundaries, data boundaries, and team boundaries.</p>",
      featuredImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      author: "Arjun Mehta",
      categoryId: createdCats[0].id,
      tags: ["scaling", "architecture", "startups"],
      status: "published",
      seoTitle: "Why Startups Fail at Scaling - NexaBuild",
      seoDescription: "Learn the architecture decisions that determine startup scalability.",
      ogImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop",
      canonicalUrl: "",
      readTime: "8 min read",
      featured: true,
      publishedAt: "2026-03-08T10:00:00Z",
    },
    {
      title: "React vs Next.js in 2026: The Definitive Guide",
      slug: "react-vs-nextjs-2026",
      excerpt: "A practical comparison of React SPA and Next.js for product development.",
      content: "<h2>The Landscape in 2026</h2><p>The React ecosystem has evolved dramatically. The choice between a React SPA and Next.js is no longer straightforward.</p><h2>When to Use React SPA</h2><p>React SPAs shine when you're building internal tools, dashboards, or applications where SEO isn't a priority.</p><h2>When to Use Next.js</h2><p>Next.js is the clear winner for public-facing products where SEO and initial load performance matter.</p>",
      featuredImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop",
      author: "Sarah Chen",
      categoryId: createdCats[1].id,
      tags: ["react", "nextjs", "frontend"],
      status: "published",
      seoTitle: "React vs Next.js 2026 Guide - NexaBuild",
      seoDescription: "Compare React SPA and Next.js for your next product.",
      ogImage: "",
      canonicalUrl: "",
      readTime: "12 min read",
      featured: false,
      publishedAt: "2026-03-03T10:00:00Z",
    },
    {
      title: "A Practical Guide to Integrating AI Into Your Product",
      slug: "ai-integration-practical-guide",
      excerpt: "Skip the hype. Here's a step-by-step approach to adding AI features that deliver value.",
      content: "<h2>Finding the Right Use Cases</h2><p>Every product team is asking: how do we add AI that actually matters? Start with your support tickets to find patterns.</p><h2>Choosing Your Approach</h2><p>Not everything needs a custom model. Fine-tuning an existing LLM delivers 90% of the value at 10% of the cost.</p><h2>Measuring Impact</h2><p>AI features should improve specific metrics — task completion time, engagement, or conversion rates.</p>",
      featuredImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
      author: "Arjun Mehta",
      categoryId: createdCats[2].id,
      tags: ["ai", "machine-learning", "product"],
      status: "published",
      seoTitle: "AI Integration Guide - NexaBuild",
      seoDescription: "Practical steps to add AI to your existing product.",
      ogImage: "",
      canonicalUrl: "",
      readTime: "10 min read",
      featured: false,
      publishedAt: "2026-02-24T10:00:00Z",
    },
    {
      title: "The ROI of Design Systems: Numbers From Real Projects",
      slug: "design-system-roi",
      excerpt: "Design systems aren't just about consistency — they're a multiplier for engineering velocity.",
      content: "<h2>The Data</h2><p>After building design systems for 30+ client projects, teams see a 34% reduction in UI development time within 6 months.</p><h2>Beyond Speed</h2><p>Teams with mature design systems report 60% fewer visual bugs and 45% less time in design reviews.</p><h2>Getting Started</h2><p>Start small. Build components as you need them. Document usage guidelines alongside code.</p>",
      featuredImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop",
      author: "Maya Patel",
      categoryId: createdCats[3].id,
      tags: ["design-systems", "roi", "engineering"],
      status: "published",
      seoTitle: "Design System ROI - NexaBuild",
      seoDescription: "Real numbers on design system ROI from agency projects.",
      ogImage: "",
      canonicalUrl: "",
      readTime: "7 min read",
      featured: false,
      publishedAt: "2026-02-15T10:00:00Z",
    },
    {
      title: "How to Choose the Right Tech Stack in 2026",
      slug: "choosing-right-tech-stack",
      excerpt: "A framework for making technology choices that balance innovation with reliability.",
      content: "<h2>Technology as Business Decision</h2><p>The stack you choose affects hiring, development speed, operational costs, and iteration ability.</p><h2>Our Framework</h2><p>Evaluate four dimensions: team expertise, ecosystem maturity, scalability ceiling, and hiring market.</p>",
      featuredImage: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=500&fit=crop",
      author: "Vikram Singh",
      categoryId: createdCats[0].id,
      tags: ["tech-stack", "architecture"],
      status: "draft",
      seoTitle: "",
      seoDescription: "",
      ogImage: "",
      canonicalUrl: "",
      readTime: "9 min read",
      featured: false,
      publishedAt: "",
    },
  ];

  samplePosts.forEach(p => createPost(p));
}
