import { motion } from 'framer-motion';
import { GitBranch, Mail, MapPin, Calendar } from 'lucide-react';

const skills = [
  'React', 'TypeScript', 'Node.js', 'Python', 'Docker', 'PostgreSQL', 
  'MongoDB', 'AWS', 'Git', 'CI/CD', 'REST APIs', 'GraphQL'
];

const experience = [
  {
    role: 'Full Stack Developer',
    company: 'Tech Company',
    period: '2022 - Present',
    description: 'Building modern web applications and microservices.'
  },
  {
    role: 'Junior Developer',
    company: 'Startup Inc',
    period: '2020 - 2022',
    description: 'Frontend development and API integrations.'
  },
];

export function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 mx-auto mb-6 flex items-center justify-center">
              <span className="text-5xl font-bold text-white">JD</span>
            </div>
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-2">John Doe</h1>
              <p className="text-indigo-400 mb-4">Full Stack Developer</p>
              <div className="flex items-center justify-center gap-2 text-slate-400 text-sm mb-1">
                <MapPin className="h-4 w-4" /> Location
              </div>
              <div className="flex items-center justify-center gap-2 text-slate-400 text-sm">
                <Calendar className="h-4 w-4" /> Available
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-6 font-[var(--font-display)]">About Me</h2>
            <p className="text-slate-300 text-lg mb-6">
              I'm a full-stack developer with a passion for building modern web applications and automation solutions.
              With experience spanning frontend and backend development, I specialize in creating efficient,
              scalable applications.
            </p>
            <p className="text-slate-400 mb-6">
              When I'm not coding, you can find me exploring new technologies, writing blog posts about tech,
              or contributing to open source projects. I believe in continuous learning and staying up-to-date
              with the latest in web development.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                <GitBranch className="h-5 w-5" /> GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                <GitBranch className="h-5 w-5" /> LinkedIn
              </a>
              <a href="mailto:hello@example.com" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" /> Email
              </a>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 font-[var(--font-display)]">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="px-4 py-2 rounded-full bg-white/10 text-slate-300 text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6 font-[var(--font-display)]">Experience</h2>
          <div className="space-y-6">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-xl p-6"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <span className="text-slate-500 text-sm">{exp.period}</span>
                </div>
                <p className="text-indigo-400 mb-2">{exp.company}</p>
                <p className="text-slate-400">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}