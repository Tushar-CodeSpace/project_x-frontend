import type { Post, Category, AnalyticsData } from '../types';

export const mockCategories: Category[] = [
  { id: '1', name: 'Tech', slug: 'tech', description: 'Programming and development', postCount: 12 },
  { id: '2', name: 'Automation', slug: 'automation', description: 'Automation and scripting', postCount: 8 },
  { id: '3', name: 'IT', slug: 'it', description: 'IT and infrastructure', postCount: 6 },
  { id: '4', name: 'Tutorial', slug: 'tutorial', description: 'Step-by-step guides', postCount: 4 },
];

export const mockPosts: Post[] = [
  {
    id: '1',
    title: 'Getting Started with Docker: A Complete Guide for Beginners',
    slug: 'getting-started-docker-complete-guide',
    excerpt: 'Learn Docker from scratch. This comprehensive guide covers containers, images, volumes, and networking.',
    content: `# Getting Started with Docker

Docker has revolutionized software development by enabling developers to package applications with all their dependencies.

## What is Docker?

Docker is a platform for developing, shipping, and running applications in containers. Containers are lightweight and contain everything needed to run the software.

## Installing Docker

\`\`\`bash
# On Ubuntu
sudo apt-get update
sudo apt-get install docker.io

# Start Docker
sudo systemctl start docker
sudo systemctl enable docker
\`\`\`

## Your First Container

Let's run our first container:

\`\`\`bash
docker run hello-world
\`\`\`

## Working with Images

\`\`\`bash
# Pull an image
docker pull nginx

# List images
docker images

# Run a container
docker run -d -p 8080:80 nginx
\`\`\`

## Conclusion

Docker makes deployment consistent across environments.`,
    coverImage: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800',
    category: 'automation',
    tags: ['docker', 'containers', 'devops', 'beginners'],
    author: {
      id: '1',
      name: 'Alex Chen',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
      bio: 'Full-stack developer and DevOps enthusiast',
    },
    publishedAt: '2024-01-15T10:00:00Z',
    createdAt: '2024-01-10T08:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
    readingTime: 8,
    status: 'published',
    featured: true,
    views: 15420,
  },
  {
    id: '2',
    title: 'MongoDB Setup and Configuration for Production',
    slug: 'mongodb-setup-configuration-production',
    excerpt: 'Set up MongoDB for production environments with proper security, indexing, and performance optimization.',
    content: `# MongoDB Setup for Production

Learn how to properly configure MongoDB for production environments.

## Installation

\`\`\`bash
# Install on Ubuntu
wget -qO - https://www.mongodb.org/static/pgp/server-7.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org
\`\`\`

## Security Configuration

Enable authentication and secure your instance.`,
    coverImage: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800',
    category: 'tech',
    tags: ['mongodb', 'database', 'nosql', 'production'],
    author: {
      id: '1',
      name: 'Alex Chen',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
      bio: 'Full-stack developer and DevOps enthusiast',
    },
    publishedAt: '2024-01-20T14:00:00Z',
    createdAt: '2024-01-18T09:00:00Z',
    updatedAt: '2024-01-20T14:00:00Z',
    readingTime: 12,
    status: 'published',
    featured: true,
    views: 8930,
  },
  {
    id: '3',
    title: 'Redis Cache Strategy: Speed Up Your Application',
    slug: 'redis-cache-strategy-speed-up-application',
    excerpt: 'Implement effective caching strategies with Redis to dramatically improve application performance.',
    content: `# Redis Cache Strategy

Redis is an in-memory data store that can dramatically speed up your application.

## Why Redis?

- Blazing fast read/write speeds
- Support for various data structures
- Pub/Sub capabilities
- Clustering support`,
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
category: 'tech',
    tags: ['redis', 'caching', 'performance', 'database'],
    author: {
      id: '2',
      name: 'Sarah Kim',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
      bio: 'Backend developer specializing in distributed systems',
    },
    publishedAt: '2024-02-01T11:00:00Z',
    createdAt: '2024-01-28T15:00:00Z',
    updatedAt: '2024-02-01T11:00:00Z',
    readingTime: 10,
    status: 'published',
    featured: false,
    views: 6720,
  },
  {
    id: '4',
    title: 'TypeScript Advanced Types: Master Generics and Utility Types',
    slug: 'typescript-advanced-types-generics-utility',
    excerpt: 'Deep dive into TypeScript advanced types including generics, conditional types, and utility types.',
    content: `# TypeScript Advanced Types

Master advanced TypeScript concepts to write more type-safe code.`,
    coverImage: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800',
category: 'tech',
    tags: ['typescript', 'javascript', 'programming', 'types'],
    author: {
      id: '1',
      name: 'Alex Chen',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
      bio: 'Full-stack developer and DevOps enthusiast',
    },
    publishedAt: '2024-02-10T09:00:00Z',
    createdAt: '2024-02-08T12:00:00Z',
    updatedAt: '2024-02-10T09:00:00Z',
    readingTime: 15,
    status: 'published',
    featured: true,
    views: 12340,
  },
  {
    id: '5',
    title: 'Docker Compose Multi-Container Applications',
    slug: 'docker-compose-multi-container-applications',
    excerpt: 'Learn to orchestrate multi-container applications with Docker Compose for local development.',
    content: `# Docker Compose

Define and run multi-container applications with ease.`,
    coverImage: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800',
    category: 'automation',
    tags: ['docker', 'docker-compose', 'containers', 'devops'],
    author: {
      id: '2',
      name: 'Sarah Kim',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
      bio: 'Backend developer specializing in distributed systems',
    },
    publishedAt: '2024-02-15T16:00:00Z',
    createdAt: '2024-02-12T10:00:00Z',
    updatedAt: '2024-02-15T16:00:00Z',
    readingTime: 9,
    status: 'published',
    featured: false,
    views: 5890,
  },
  {
    id: '6',
    title: 'PostgreSQL vs MongoDB: Choosing the Right Database',
    slug: 'postgresql-vs-mongodb-choosing-database',
    excerpt: 'Compare PostgreSQL and MongoDB to make the right database choice for your project.',
    content: `# PostgreSQL vs MongoDB

Choosing the right database is crucial for your application success.`,
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    category: 'tech',
    tags: ['postgresql', 'mongodb', 'database', 'comparison'],
    author: {
      id: '1',
      name: 'Alex Chen',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
      bio: 'Full-stack developer and DevOps enthusiast',
    },
    publishedAt: '2024-02-20T13:00:00Z',
    createdAt: '2024-02-17T08:00:00Z',
    updatedAt: '2024-02-20T13:00:00Z',
    readingTime: 11,
    status: 'published',
    featured: false,
    views: 9870,
  },
];

export const mockAnalytics: AnalyticsData = {
  pageViews: [
    { date: '2024-02-14', views: 1200 },
    { date: '2024-02-15', views: 1450 },
    { date: '2024-02-16', views: 1320 },
    { date: '2024-02-17', views: 1680 },
    { date: '2024-02-18', views: 1890 },
    { date: '2024-02-19', views: 2100 },
    { date: '2024-02-20', views: 2340 },
  ],
  uniqueVisitors: [
    { date: '2024-02-14', visitors: 450 },
    { date: '2024-02-15', visitors: 520 },
    { date: '2024-02-16', visitors: 480 },
    { date: '2024-02-17', visitors: 610 },
    { date: '2024-02-18', visitors: 720 },
    { date: '2024-02-19', visitors: 850 },
    { date: '2024-02-20', visitors: 920 },
  ],
  popularPosts: [
    { title: 'Getting Started with Docker', views: 15420 },
    { title: 'TypeScript Advanced Types', views: 12340 },
    { title: 'MongoDB Setup for Production', views: 8930 },
    { title: 'PostgreSQL vs MongoDB', views: 9870 },
    { title: 'Redis Cache Strategy', views: 6720 },
  ],
  trafficSources: [
    { source: 'Google', count: 4500 },
    { source: 'Direct', count: 2300 },
    { source: 'GitHub', count: 1800 },
    { source: 'Twitter', count: 1200 },
    { source: 'Reddit', count: 800 },
  ],
  categoryDistribution: [
    { category: 'automation', count: 25 },
    { category: 'tech', count: 30 },
    { category: 'Redis', count: 15 },
    { category: 'Programming', count: 40 },
    { category: 'DevOps', count: 20 },
  ],
};
