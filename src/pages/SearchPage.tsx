import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Search } from 'lucide-react';
import { PostGrid } from '../components/blog/PostGrid';
import { SearchBar } from '../components/blog/SearchBar';
import { postsApi } from '../services/api';
import type { Post } from '../types';

export function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const search = async () => {
      if (query) {
        setLoading(true);
        const results = await postsApi.search(query);
        setPosts(results);
        setLoading(false);
      }
    };
    search();
  }, [query]);

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/">
          <button className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </button>
        </Link>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">
            Search Results
          </h1>
          <div className="max-w-xl">
            <SearchBar />
          </div>
        </div>

        {query && (
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            {loading ? 'Searching...' : `Found ${posts.length} results for "${query}"`}
          </p>
        )}

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-slate-200 dark:bg-slate-800 rounded-xl aspect-video" />
                <div className="p-5 space-y-3">
                  <div className="h-6 bg-slate-200 dark:bg-slate-800 rounded w-3/4" />
                  <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-full" />
                </div>
              </div>
            ))}
          </div>
        ) : posts.length > 0 ? (
          <PostGrid posts={posts} />
        ) : query ? (
          <div className="text-center py-16">
            <Search className="h-16 w-16 mx-auto text-slate-300 dark:text-slate-600 mb-4" />
            <p className="text-slate-500 dark:text-slate-400 text-lg">
              No results found for "{query}"
            </p>
            <p className="text-slate-400 dark:text-slate-500 mt-2">
              Try different keywords or browse categories
            </p>
          </div>
        ) : (
          <div className="text-center py-16">
            <Search className="h-16 w-16 mx-auto text-slate-300 dark:text-slate-600 mb-4" />
            <p className="text-slate-500 dark:text-slate-400 text-lg">
              Enter a search term to find tutorials
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
}