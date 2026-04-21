import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { HeroScene } from '../components/3d/HeroScene';
import { PostGrid } from '../components/blog/PostGrid';
import { postsApi } from '../services/api';
import type { Post } from '../types';
import { Link } from 'react-router-dom';
import { Server, Code2, Bot } from 'lucide-react';

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
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16">
        <div className="absolute inset-0 z-0 opacity-30">
          <HeroScene className="w-full h-full" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="terminal-window max-w-3xl mx-auto"
          >
            <div className="terminal-header">
              <div className="terminal-dot red" />
              <div className="terminal-dot yellow" />
              <div className="terminal-dot green" />
              <span className="ml-2 text-xs text-[#525252] font-mono">bash</span>
            </div>
            <div className="p-6 font-mono text-sm">
              <div className="mb-4">
                <span className="text-[#525252]"># </span>
                <span className="text-[#a1a1aa]">whoami</span>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-[#22c55e] mb-6"
              >
                Tushar Kanti Acharyya
              </motion.div>

              <div className="mb-4">
                <span className="text-[#525252]"># </span>
                <span className="text-[#a1a1aa]">cat &gt; /proc/experience</span>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-[#22c55e] mb-6"
              >
                4+ years in Docker, Node.js, Nginx, VPS & Industrial Automation
              </motion.div>

              <div className="mb-4">
                <span className="text-[#525252]"># </span>
                <span className="text-[#a1a1aa]">ls /skills</span>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-[#22c55e] mb-6 flex flex-wrap gap-2"
              >
                {['Node.js', 'Docker', 'Nginx', 'MongoDB', 'Python', 'Linux', 'CI/CD'].map((skill) => (
                  <span key={skill} className="px-2 py-1 bg-[#171717] border border-[#262626] text-xs">
                    {skill}
                  </span>
                ))}
              </motion.div>

              <div className="mb-4">
                <span className="text-[#525252]"># </span>
                <span className="text-[#a1a1aa]">echo $AVAILABLE</span>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="text-[#22c55e] mb-6"
              >
                true
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="flex gap-3 flex-wrap"
              >
                <Link
                  to="/projects"
                  className="px-4 py-2 bg-[#22c55e] text-[#0a0a0a] font-mono text-sm hover:bg-[#16a34a] transition-colors"
                >
                  ./view_projects.sh
                </Link>
                <Link
                  to="/contact"
                  className="px-4 py-2 border border-[#262626] text-[#e5e5e5] font-mono text-sm hover:border-[#22c55e] hover:text-[#22c55e] transition-colors"
                >
                  ./contact.sh
                </Link>
              </motion.div>

              <div className="mt-6 flex items-center gap-2">
                <span className="text-[#22c55e]">tushar@octyn</span>
                <span className="text-[#525252]">:</span>
                <span className="text-[#60a5fa]">~</span>
                <span className="text-[#525252]">$</span>
                <span className="terminal-cursor" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dot red" />
              <div className="terminal-dot yellow" />
              <div className="terminal-dot green" />
              <span className="ml-2 text-xs text-[#525252] font-mono">services.sh</span>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-mono mb-6 text-[#e5e5e5]">
                <span className="text-[#525252]">## </span>
                What I Build
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { icon: Server, title: 'DevOps', desc: 'Docker, Nginx, CI/CD, Cloud Infrastructure' },
                  { icon: Code2, title: 'Backend', desc: 'Node.js, Express, REST APIs, Microservices' },
                  { icon: Bot, title: 'Automation', desc: 'Python scripts, PLC, TCP Systems' },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-4 border border-[#262626] hover:border-[#22c55e] transition-colors"
                  >
                    <item.icon className="h-6 w-6 text-[#22c55e] mb-3" />
                    <h3 className="font-mono text-sm text-[#e5e5e5] mb-2">{item.title}</h3>
                    <p className="text-xs text-[#737373]">{item.desc}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6">
                <Link to="/projects" className="text-xs text-[#22c55e] hover:underline font-mono">
                  $ ./list_projects.sh --all
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dot red" />
              <div className="terminal-dot yellow" />
              <div className="terminal-dot green" />
              <span className="ml-2 text-xs text-[#525252] font-mono">blog.sh</span>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-mono text-[#e5e5e5]">
                  <span className="text-[#525252]">## </span>
                  Latest Posts
                </h2>
                <Link to="/blog" className="text-xs text-[#22c55e] hover:underline font-mono">
                  --view-all
                </Link>
              </div>
              
              {loading ? (
                <div className="space-y-3">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="h-16 bg-[#171717] animate-pulse" />
                  ))}
                </div>
              ) : (
                <PostGrid posts={posts.slice(0, 3)} />
              )}
            </div>
          </div>
        </motion.div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="terminal-window max-w-2xl mx-auto text-center">
            <div className="terminal-header">
              <div className="terminal-dot red" />
              <div className="terminal-dot yellow" />
              <div className="terminal-dot green" />
              <span className="ml-2 text-xs text-[#525252] font-mono">contact.sh</span>
            </div>
            <div className="p-6">
              <h2 className="text-lg font-mono text-[#e5e5e5] mb-2">
                Let&apos;s work together
              </h2>
              <p className="text-sm text-[#737373] mb-4">
                Have a project in mind?
              </p>
              <Link
                to="/contact"
                className="inline-block px-4 py-2 bg-[#22c55e] text-[#0a0a0a] font-mono text-sm hover:bg-[#16a34a] transition-colors"
              >
                ./run_contact.sh
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
