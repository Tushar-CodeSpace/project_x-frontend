import type { Post, Category, AnalyticsData } from '../types';
import { mockPosts, mockCategories, mockAnalytics } from '../data/mockPosts';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const USE_MOCK = true;

class ApiService {
  private async fetchWithErrorHandling<T>(url: string, options?: RequestInit): Promise<T> {
    try {
      const response = await fetch(`${API_BASE}${url}`, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options?.headers,
        },
      });

      if (!response.ok) {
        const error = await response.json().catch(() => ({ error: 'Request failed' }));
        throw new Error(error.error || `HTTP error! status: ${response.status}`);
      }

      return response.json();
    } catch (error) {
      console.error(`API Error [${url}]:`, error);
      throw error;
    }
  }

  async getAll(): Promise<Post[]> {
    if (USE_MOCK) {
      return mockPosts.filter(p => p.status === 'published').sort((a, b) => 
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
    }
    return this.fetchWithErrorHandling<Post[]>('/posts');
  }

  async getFeatured(): Promise<Post[]> {
    if (USE_MOCK) {
      return mockPosts.filter(p => p.featured && p.status === 'published').slice(0, 3);
    }
    return this.fetchWithErrorHandling<Post[]>('/posts/featured');
  }

  async getBySlug(slug: string): Promise<Post | null> {
    if (USE_MOCK) {
      const post = mockPosts.find(p => p.slug === slug);
      if (post) {
        post.views += 1;
      }
      return post || null;
    }
    return this.fetchWithErrorHandling<Post | null>(`/posts/slug/${slug}`);
  }

  async getByCategory(category: string): Promise<Post[]> {
    if (USE_MOCK) {
      return mockPosts.filter(p => p.category.toLowerCase() === category.toLowerCase() && p.status === 'published');
    }
    return this.fetchWithErrorHandling<Post[]>(`/posts/category/${category}`);
  }

  async search(query: string): Promise<Post[]> {
    if (USE_MOCK) {
      const q = query.toLowerCase();
      return mockPosts.filter(p => 
        p.status === 'published' && (
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.tags.some(t => t.toLowerCase().includes(q))
        )
      );
    }
    return this.fetchWithErrorHandling<Post[]>(`/posts/search?q=${encodeURIComponent(query)}`);
  }

  async getAllAdmin(): Promise<Post[]> {
    if (USE_MOCK) {
      return [...mockPosts].sort((a, b) => 
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    }
    return this.fetchWithErrorHandling<Post[]>('/posts/admin/all');
  }

  async getById(id: string): Promise<Post | null> {
    if (USE_MOCK) {
      return mockPosts.find(p => p.id === id) || null;
    }
    return this.fetchWithErrorHandling<Post | null>(`/posts/${id}`);
  }

  async create(data: Partial<Post>): Promise<Post> {
    if (USE_MOCK) {
      const newPost: Post = {
        id: String(Date.now()),
        title: data.title || '',
        slug: data.slug || data.title?.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') || '',
        excerpt: data.excerpt || '',
        content: data.content || '',
        coverImage: data.coverImage || '',
        category: data.category || 'tech',
        tags: data.tags || [],
        author: data.author || { id: '1', name: 'Admin', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Admin', bio: '' },
        publishedAt: data.status === 'published' ? new Date().toISOString() : '',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        readingTime: data.readingTime || 5,
        status: data.status || 'draft',
        featured: data.featured || false,
        views: 0,
      };
      mockPosts.unshift(newPost);
      return newPost;
    }
    return this.fetchWithErrorHandling<Post>('/posts', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async update(id: string, data: Partial<Post>): Promise<Post> {
    if (USE_MOCK) {
      const index = mockPosts.findIndex(p => p.id === id);
      if (index === -1) throw new Error('Post not found');
      mockPosts[index] = { ...mockPosts[index], ...data, updatedAt: new Date().toISOString() };
      return mockPosts[index];
    }
    return this.fetchWithErrorHandling<Post>(`/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async delete(id: string): Promise<void> {
    if (USE_MOCK) {
      const index = mockPosts.findIndex(p => p.id === id);
      if (index !== -1) mockPosts.splice(index, 1);
      return;
    }
    await this.fetchWithErrorHandling<void>(`/posts/${id}`, {
      method: 'DELETE',
    });
  }

  async toggleFeatured(id: string): Promise<Post> {
    if (USE_MOCK) {
      const index = mockPosts.findIndex(p => p.id === id);
      if (index === -1) throw new Error('Post not found');
      mockPosts[index].featured = !mockPosts[index].featured;
      return mockPosts[index];
    }
    return this.fetchWithErrorHandling<Post>(`/posts/${id}/featured`, {
      method: 'PATCH',
    });
  }

  async getAllCategories(): Promise<Category[]> {
    if (USE_MOCK) {
      return mockCategories;
    }
    return this.fetchWithErrorHandling<Category[]>('/categories');
  }

  async getCategoryBySlug(slug: string): Promise<Category | null> {
    if (USE_MOCK) {
      return mockCategories.find(c => c.slug === slug) || null;
    }
    return this.fetchWithErrorHandling<Category | null>(`/categories/${slug}`);
  }

  async createCategory(data: Partial<Category>): Promise<Category> {
    if (USE_MOCK) {
      const newCategory: Category = {
        id: String(Date.now()),
        name: data.name || '',
        slug: data.slug || data.name?.toLowerCase().replace(/\s+/g, '-') || '',
        description: data.description || '',
        postCount: 0,
      };
      mockCategories.push(newCategory);
      return newCategory;
    }
    return this.fetchWithErrorHandling<Category>('/categories', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateCategory(id: string, data: Partial<Category>): Promise<Category> {
    if (USE_MOCK) {
      const index = mockCategories.findIndex(c => c.id === id);
      if (index === -1) throw new Error('Category not found');
      mockCategories[index] = { ...mockCategories[index], ...data };
      return mockCategories[index];
    }
    return this.fetchWithErrorHandling<Category>(`/categories/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deleteCategory(id: string): Promise<void> {
    if (USE_MOCK) {
      const index = mockCategories.findIndex(c => c.id === id);
      if (index !== -1) mockCategories.splice(index, 1);
      return;
    }
    await this.fetchWithErrorHandling<void>(`/categories/${id}`, {
      method: 'DELETE',
    });
  }
}

export const postsApi = new ApiService();

export const categoriesApi = {
  getAll: () => postsApi.getAllCategories(),
  getBySlug: (slug: string) => postsApi.getCategoryBySlug(slug),
  create: (data: Partial<Category>) => postsApi.createCategory(data),
  update: (id: string, data: Partial<Category>) => postsApi.updateCategory(id, data),
  delete: (id: string) => postsApi.deleteCategory(id),
};

export const analyticsApi = {
  async getOverview(): Promise<AnalyticsData> {
    return mockAnalytics;
  },
  async getPageViews(days: number = 7) {
    return mockAnalytics.pageViews.slice(-days);
  },
  async getPopularPosts(limit: number = 5) {
    return mockAnalytics.popularPosts.slice(0, limit);
  },
};