import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const categories = [
  { name: 'All', slug: '/' },
  { name: 'Docker', slug: '/category/docker' },
  { name: 'Database', slug: '/category/database' },
  { name: 'Redis', slug: '/category/redis' },
  { name: 'Programming', slug: '/category/programming' },
  { name: 'DevOps', slug: '/category/devops' },
];

export function CategoryFilter() {
  const location = useLocation();
  
  const getActiveCategory = () => {
    if (location.pathname === '/') return '/';
    return location.pathname;
  };

  const activeCategory = getActiveCategory();

  return (
    <motion.div 
      className="flex flex-wrap justify-center gap-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      {categories.map((cat, i) => {
        const isActive = activeCategory === cat.slug;
        
        return (
          <motion.div
            key={cat.slug}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + i * 0.05 }}
          >
            <Link 
              to={cat.slug === '/' ? '/' : cat.slug}
              className="relative"
            >
              <span
                className={
                  "relative block px-5 py-2 text-sm font-medium rounded-full transition-all duration-300" +
                  (isActive ? " text-white" : " text-slate-400 hover:text-white")
                }
              >
                {isActive && (
                  <motion.div
                    layoutId="category-pill"
                    className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{cat.name}</span>
              </span>
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
}