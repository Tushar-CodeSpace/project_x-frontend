export type BlogCategory = 'tech' | 'automation' | 'it' | 'tutorial';

export type ProjectCategory = 'web-app' | 'automation' | 'tool' | 'open-source';

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: BlogCategory;
  tags: string[];
  author: Author;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
  readingTime: number;
  status: 'draft' | 'published';
  featured: boolean;
  views: number;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  thumbnail: string;
  techStack: string[];
  category: ProjectCategory;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  createdAt: string;
}

export interface Author {
  id: string;
  name: string;
  avatar: string;
  bio: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  postCount: number;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
}

export interface Comment {
  id: string;
  postId: string;
  author: string;
  email: string;
  content: string;
  createdAt: string;
  status: 'pending' | 'approved' | 'spam';
}

export interface AnalyticsData {
  pageViews: { date: string; views: number }[];
  uniqueVisitors: { date: string; visitors: number }[];
  popularPosts: { title: string; views: number }[];
  trafficSources: { source: string; count: number }[];
  categoryDistribution: { category: string; count: number }[];
}
