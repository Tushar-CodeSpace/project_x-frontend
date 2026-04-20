import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, Eye, ArrowRight } from 'lucide-react';
import { Badge } from '../ui/badge';
import type { Post } from '../../types';
import { format } from 'date-fns';
import { cn } from '../../lib/utils';

interface PostCardProps {
  post: Post;
  index?: number;
}

export function PostCard({ post, index = 0 }: PostCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <Link to={`/post/${post.slug}`} className="block group">
        <article className="glass-card rounded-2xl overflow-hidden h-full">
          <div className="relative aspect-video overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-20" />
            <Badge 
              className={cn(
                "absolute top-4 left-4 z-30 border border-white/20 backdrop-blur-md",
                "bg-black/30 text-white text-xs font-medium px-3 py-1"
              )}
            >
              {post.category}
            </Badge>
            {post.featured && (
              <div className="absolute top-4 right-4 z-30">
                <span className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full border border-white/20">
                  Featured
                </span>
              </div>
            )}
          </div>
          
          <div className="p-6">
            <h3 className="font-bold text-lg mb-3 line-clamp-2 group-hover:text-indigo-400 transition-colors duration-300 font-[var(--font-display)]">
              {post.title}
            </h3>
            <p className="text-slate-400 text-sm mb-5 line-clamp-2 leading-relaxed">
              {post.excerpt}
            </p>
            
            <div className="flex items-center justify-between text-xs text-slate-500">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-indigo-400" />
                  {format(new Date(post.publishedAt), 'MMM d, yyyy')}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-purple-400" />
                  {post.readingTime} min
                </span>
              </div>
              <span className="flex items-center gap-1.5">
                <Eye className="h-3.5 w-3.5 text-cyan-400" />
                {post.views.toLocaleString()}
              </span>
            </div>
            
            <div className="flex items-center gap-2 mt-5 text-indigo-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
              Read article <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
