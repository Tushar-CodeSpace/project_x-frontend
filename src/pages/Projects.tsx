import { useState } from 'react';
import { motion } from 'framer-motion';
// Terminal-inspired project showcase
import type { Project, ProjectCategory } from '../types';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';

const projectCategories: { value: ProjectCategory | 'all'; label: string }[] = [
  { value: 'all', label: '--all' },
  { value: 'web-app', label: '--web' },
  { value: 'automation', label: '--automation' },
  { value: 'tool', label: '--tools' },
  { value: 'open-source', label: '--opensource' },
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
        <div className="terminal-window mb-8">
          <div className="terminal-header">
            <div className="terminal-dot red" />
            <div className="terminal-dot yellow" />
            <div className="terminal-dot green" />
            <span className="ml-2 text-xs text-[#525252] font-mono">projects.sh</span>
          </div>
          <div className="p-4 border-b border-[#262626]">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#525252] font-mono text-sm">$</span>
                <Input
                  placeholder="grep projects..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-8 font-mono text-sm bg-[#0a0a0a] border-[#262626]"
                />
              </div>
              <div className="flex gap-1 flex-wrap">
                {projectCategories.map((cat) => (
                  <Button
                    key={cat.value}
                    variant={filter === cat.value ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setFilter(cat.value)}
                    className={filter === cat.value 
                      ? 'bg-[#22c55e] text-[#0a0a0a] font-mono text-xs' 
                      : 'text-[#737373] hover:text-[#e5e5e5] font-mono text-xs'
                    }
                  >
                    {cat.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="terminal-window hover:border-[#22c55e] transition-colors"
            >
              <div className="p-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-full md:w-32 h-20 bg-[#171717] flex-shrink-0">
                    <img 
                      src={project.thumbnail} 
                      alt={project.title}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[#525252] font-mono text-xs">[{i + 1}]</span>
                      <h3 className="font-mono text-sm text-[#e5e5e5]">{project.title}</h3>
                      {project.featured && (
                        <span className="text-xs px-2 py-0.5 bg-[#22c55e]/20 text-[#22c55e]">featured</span>
                      )}
                    </div>
                    <p className="text-xs text-[#737373] mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span key={tech} className="text-xs px-2 py-0.5 bg-[#171717] text-[#737373] font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-[#22c55e] hover:underline">
                          live demo
                        </a>
                      )}
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-[#22c55e] hover:underline">
                          source
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="terminal-window p-8 text-center">
            <p className="text-[#737373] font-mono text-sm">No projects found.</p>
          </div>
        )}

        <div className="mt-4 text-[#525252] font-mono text-xs">
          {filteredProjects.length} project(s) listed
        </div>
      </motion.div>
    </div>
  );
}