import { useEffect, useState } from 'react';
import type { ReactElement } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, Eye, ArrowLeft, Tag, Share2, Mail, Globe, GitBranch } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card } from '../components/ui/card';
import { postsApi } from '../services/api';
import type { Post } from '../types';
import { format } from 'date-fns';

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
      if (slug) {
        const data = await postsApi.getBySlug(slug);
        setPost(data);
        setLoading(false);
      }
    };
    loadPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-slate-200 dark:bg-slate-800 rounded w-1/4" />
          <div className="h-12 bg-slate-200 dark:bg-slate-800 rounded w-3/4" />
          <div className="h-96 bg-slate-200 dark:bg-slate-800 rounded-xl" />
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Post not found</h1>
        <Button onClick={() => navigate('/')}>Back to Home</Button>
      </div>
    );
  }

  const renderContent = (content: string) => {
    const lines = content.split('\n');
    const elements: ReactElement[] = [];
    let inCodeBlock = false;
    let codeContent = '';
    let codeLanguage = '';
    let codeKey = 0;

    lines.forEach((line, index) => {
      if (line.startsWith('```')) {
        if (!inCodeBlock) {
          inCodeBlock = true;
          codeLanguage = line.slice(3).trim() || 'text';
          codeContent = '';
        } else {
          inCodeBlock = false;
          elements.push(
            <pre key={`code-${codeKey++}`} className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto my-4">
              <code className={`language-${codeLanguage}`}>{codeContent}</code>
            </pre>
          );
        }
      } else if (inCodeBlock) {
        codeContent += line + '\n';
      } else if (line.startsWith('# ')) {
        elements.push(<h1 key={index} className="text-3xl font-bold mt-8 mb-4">{line.slice(2)}</h1>);
      } else if (line.startsWith('## ')) {
        elements.push(<h2 key={index} className="text-2xl font-bold mt-6 mb-3">{line.slice(3)}</h2>);
      } else if (line.startsWith('### ')) {
        elements.push(<h3 key={index} className="text-xl font-semibold mt-4 mb-2">{line.slice(4)}</h3>);
      } else if (line.startsWith('- ')) {
        elements.push(<li key={index} className="ml-4 list-disc">{line.slice(2)}</li>);
      } else if (line.trim()) {
        elements.push(<p key={index} className="my-3 text-slate-700 dark:text-slate-300 leading-relaxed">{line}</p>);
      }
    });

    return elements;
  };

  return (
    <article className="min-h-screen">
      <div className="relative h-[50vh] min-h-[400px]">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="inline-flex items-center gap-2 text-slate-300 hover:text-white mb-4 transition-colors">
              <ArrowLeft className="h-4 w-4" /> Back to posts
            </Link>
            
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-blue-600/90">{post.category}</Badge>
              {post.tags.map(tag => (
                <Badge key={tag} variant="outline" className="text-white border-slate-500">
                  <Tag className="h-3 w-3 mr-1" /> {tag}
                </Badge>
              ))}
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 max-w-4xl">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-slate-300">
              <div className="flex items-center gap-2">
                <img src={post.author.avatar} alt={post.author.name} className="w-8 h-8 rounded-full" />
                <span>{post.author.name}</span>
              </div>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" /> {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" /> {post.readingTime} min read
              </span>
              <span className="flex items-center gap-1">
                <Eye className="h-4 w-4" /> {post.views.toLocaleString()} views
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <Card className="p-8">
              <div className="prose prose-slate dark:prose-invert max-w-none">
                {renderContent(post.content)}
              </div>
              
              <div className="flex items-center justify-between mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4 mr-2" /> Share
                  </Button>
                  <Button variant="outline" size="sm">
                    <Mail className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Globe className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <GitBranch className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-24">
              <h3 className="font-semibold mb-4">Table of Contents</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-blue-600 hover:underline">Introduction</a></li>
                <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-600">Getting Started</a></li>
                <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-600">Configuration</a></li>
                <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-600">Best Practices</a></li>
                <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-600">Conclusion</a></li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </article>
  );
}