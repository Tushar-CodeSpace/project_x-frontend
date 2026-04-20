import { motion } from 'framer-motion';
import { GitBranch, Mail, Globe } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-6">About TechBlog</h1>
        
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
            Welcome to TechBlog, your go-to resource for practical tech tutorials and guides.
            We specialize in helping developers master modern technologies through hands-on learning.
          </p>

          <h2 className="text-2xl font-bold mb-4">What We Cover</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-slate-600 dark:text-slate-300">
            <li><strong>Docker</strong> - Containerization from basics to advanced orchestration</li>
            <li><strong>Databases</strong> - MongoDB, PostgreSQL, and database design patterns</li>
            <li><strong>Redis</strong> - Caching strategies and real-time applications</li>
            <li><strong>Programming</strong> - TypeScript, JavaScript, and modern frameworks</li>
            <li><strong>DevOps</strong> - CI/CD, infrastructure, and deployment</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-6">
            We believe in learning by doing. Our tutorials are practical, hands-on, and designed 
            to help you build real-world skills. Whether you're just starting out or looking to 
            level up, we've got you covered.
          </p>

          <h2 className="text-2xl font-bold mb-4">Connect With Us</h2>
          <div className="flex gap-4">
            <a href="#" className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <GitBranch className="h-5 w-5" /> GitHub
            </a>
            <a href="#" className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Globe className="h-5 w-5" /> Web
            </a>
            <a href="mailto:hello@techblog.dev" className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Mail className="h-5 w-5" /> Email
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}