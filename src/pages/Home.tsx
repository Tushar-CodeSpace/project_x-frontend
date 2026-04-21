import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { HeroScene } from '../components/3d/HeroScene';
import { PostGrid } from '../components/blog/PostGrid';
import { postsApi } from '../services/api';
import type { Post } from '../types';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Database, Bot } from 'lucide-react';

export function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      const data = await postsApi.getAll();
      setPosts(data);
      setLoading(false);
    };
    loadPosts();
  }, []);

return (
    <div className="relative">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <HeroScene className="w-full h-full" />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-background)] z-5" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-sm text-slate-300 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for projects
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 font-[var(--font-display)]">
              <span className="block text-white">DevOps &</span>
              <span className="block gradient-text">Backend Engineer</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Building production-grade distributed systems with Docker, Node.js, and cloud infrastructure.
              Delivering high-availability solutions for enterprise logistics clients.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex gap-4 justify-center flex-wrap"
            >
              <Link
                to="/projects"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium hover:opacity-90 transition-opacity"
              >
                View Projects
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 rounded-xl glass border border-white/20 text-white font-medium hover:bg-white/10 transition-colors"
              >
                Get In Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-display)] text-white mb-4">
              What I Build
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Modern applications across web, automation, and IT domains.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Code2, title: 'Web Applications', desc: 'Modern, responsive web apps with React, TypeScript, and cloud backends.' },
              { icon: Bot, title: 'Automation Solutions', desc: 'CI/CD pipelines, scripts, and workflows to automate repetitive tasks.' },
              { icon: Database, title: 'IT & Infrastructure', desc: 'Docker setup, server management, and cloud deployment.' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/projects" className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300">
              View all projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </section>

      <section className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-display)] text-white mb-2">
                Latest Posts
              </h2>
              <p className="text-slate-400">From the blog</p>
            </div>
            <Link to="/blog" className="hidden md:flex items-center gap-2 text-indigo-400 hover:text-indigo-300">
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="glass-card rounded-2xl overflow-hidden">
                    <div className="aspect-video bg-gradient-to-br from-indigo-500/20 to-purple-600/20 animate-pulse" />
                    <div className="p-6 space-y-4">
                      <div className="h-6 bg-white/10 rounded w-3/4 animate-pulse" />
                      <div className="h-4 bg-white/5 rounded w-full animate-pulse" />
                      <div className="h-4 bg-white/5 rounded w-2/3 animate-pulse" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <PostGrid posts={posts.slice(0, 3)} />
          )}

          <div className="text-center mt-8 md:hidden">
            <Link to="/blog" className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300">
              View all posts <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </section>

      <section className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-600/10" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-display)] mb-4 text-white">
              Let's Work Together
            </h2>
            <p className="text-slate-400 mb-8 max-w-md mx-auto">
              Have a project in mind? Let's discuss how I can help bring your ideas to life.
            </p>
            <Link
              to="/contact"
              className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium hover:opacity-90 transition-opacity"
            >
              Get In Touch
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
