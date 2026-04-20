import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { PostGrid } from '../components/blog/PostGrid';
import { postsApi } from '../services/api';
import { categoriesApi } from '../services/api';
import type { Post, Category } from '../types';
import { Button } from '../components/ui/button';

export function CategoryPage() {
  const { category } = useParams<{ category: string }>();
  const [posts, setPosts] = useState<Post[]>([]);
  const [categoryData, setCategoryData] = useState<Category | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      if (category) {
        const [postsData, catData] = await Promise.all([
          postsApi.getByCategory(category),
          categoriesApi.getBySlug(category)
        ]);
        setPosts(postsData);
        setCategoryData(catData);
      }
      setLoading(false);
    };
    loadData();
  }, [category]);

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Home
          </Button>
        </Link>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 capitalize">
            {categoryData?.name || category}
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            {categoryData?.description || `Browse all ${category} tutorials`}
          </p>
          <p className="text-slate-500 mt-2">
            {posts.length} {posts.length === 1 ? 'post' : 'posts'} found
          </p>
        </div>

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
        ) : (
          <PostGrid posts={posts} />
        )}
      </motion.div>
    </div>
  );
}