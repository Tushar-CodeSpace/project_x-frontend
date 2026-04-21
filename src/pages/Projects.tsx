import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ExternalLink, GitBranch, Code2 } from 'lucide-react';
import type { Project, ProjectCategory } from '../types';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';

const projectCategories: { value: ProjectCategory | 'all'; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'web-app', label: 'Web Apps' },
  { value: 'automation', label: 'Automation' },
  { value: 'tool', label: 'Tools' },
  { value: 'open-source', label: 'Open Source' },
];

const mockProjects: Project[] = [
  {
    id: '1',
    title: 'DWS Backend Microservices',
    slug: 'dws-backend',
    description: 'High-throughput microservices backend using Bun.js for parcel dimensioning system integrated with PLC hardware via TCP communication.',
    content: '# Profiling DWS Backend\n\nHigh-throughput backend...',
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
    techStack: ['Bun.js', 'Node.js', 'TCP Socket', 'PLC Integration'],
    category: 'automation',
    featured: true,
    createdAt: '2024-09-01T10:00:00Z',
  },
  {
    id: '2',
    title: 'Docker Deployment System',
    slug: 'docker-deployment',
    description: 'Standardized Docker deployment system for Node.js + PHP + MongoDB stacks across multiple client sites.',
    content: '# Docker Deployment System\n\nReusable deployment templates...',
    thumbnail: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800',
    techStack: ['Docker', 'Docker Compose', 'Nginx', 'MongoDB'],
    category: 'automation',
    featured: true,
    createdAt: '2024-06-01T10:00:00Z',
  },
  {
    id: '3',
    title: 'Face Recognition Attendance',
    slug: 'face-attendance',
    description: 'Node.js backend with real-time webcam integration for automated attendance capture with admin dashboard.',
    content: '# Face Recognition Attendance\n\nReal-time webcam capture...',
    thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800',
    techStack: ['Node.js', 'Express.js', 'OpenCV', 'MongoDB'],
    category: 'web-app',
    githubUrl: 'https://github.com/example/face-attendance',
    featured: false,
    createdAt: '2023-03-01T10:00:00Z',
  },
  {
    id: '4',
    title: 'Logistics Platform',
    slug: 'logistics-platform',
    description: 'Docker-based distributed logistics platform for enterprise clients (Amazon, Flipkart, DHL, Delhivery).',
    content: '# Logistics Platform\n\nEnterprise logistics system...',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    techStack: ['Node.js', 'Docker', 'MongoDB', 'Nginx', 'Microservices'],
    category: 'web-app',
    featured: true,
    createdAt: '2024-09-01T10:00:00Z',
  },
];

export function Projects() {
  const [filter, setFilter] = useState<ProjectCategory | 'all'>('all');
  const [search, setSearch] = useState('');

  const filteredProjects = mockProjects.filter((project) => {
    const matchesFilter = filter === 'all' || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.description.toLowerCase().includes(search.toLowerCase()) ||
      project.techStack.some(tech => tech.toLowerCase().includes(search.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-[var(--font-display)]">
            <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A showcase of my work spanning web applications, automation tools, and open source contributions.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
            <Input
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {projectCategories.map((cat) => (
              <Button
                key={cat.value}
                variant={filter === cat.value ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter(cat.value)}
                className={filter === cat.value ? '' : 'border-white/20 text-slate-400 hover:text-white hover:bg-white/10'}
              >
                {cat.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden group"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-5">
                <div className="flex gap-2 mb-3 flex-wrap">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 rounded-full bg-white/10 text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white group-hover:gradient-text transition-all">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      <GitBranch className="h-4 w-4" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <Code2 className="h-16 w-16 text-slate-600 mx-auto mb-4" />
            <p className="text-slate-400 text-lg">No projects found matching your criteria.</p>
          </div>
        )}
      </motion.div>
    </div>
  );
}