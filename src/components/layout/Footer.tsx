import { Terminal, GitBranch, Mail, Globe, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600">
                  <Terminal className="h-5 w-5 text-white" />
                </div>
              </div>
              <span className="text-xl font-bold font-[var(--font-display)] gradient-text">
                TechBlog
              </span>
            </Link>
            <p className="text-slate-400 mb-6 max-w-md leading-relaxed">
              Your go-to blog for tech tutorials, devops guides, and programming insights. 
              Learn Docker, databases, Redis, and more through hands-on tutorials.
            </p>
            <div className="flex gap-4">
              {[
                { icon: GitBranch, href: '#', label: 'GitHub' },
                { icon: Globe, href: '#', label: 'Web' },
                { icon: Mail, href: '#', label: 'Email' },
                { icon: Code2, href: '#', label: 'Code' },
              ].map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label={item.label}
                >
                  <item.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-white font-[var(--font-display)]">Categories</h4>
            <ul className="space-y-3">
              {['Docker', 'Database', 'Redis', 'Programming'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/category/${item.toLowerCase()}`} 
                    className="text-slate-400 hover:text-indigo-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-white font-[var(--font-display)]">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' },
                { label: 'Admin', href: '/admin' },
                { label: 'Privacy', href: '#' },
              ].map((item) => (
                <li key={item.label}>
                  <Link 
                    to={item.href} 
                    className="text-slate-400 hover:text-indigo-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} TechBlog. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <Link to="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-indigo-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}