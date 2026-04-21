import { motion } from 'framer-motion';
import { GitBranch, Mail, MapPin } from 'lucide-react';

const skills = [
  'Node.js', 'Express.js', 'Bun.js', 'Django', 'Docker', 'Nginx', 
  'MongoDB', 'SQL', 'Linux', 'Git', 'CI/CD', 'Python', 'REST APIs', 'Microservices', 'PLC Integration', 'TCP Communication'
];

const experience = [
  {
    role: 'Senior DevOps Engineer',
    company: 'Nido Machineries Pvt Ltd',
    period: 'Sep 2024 – Present',
    description: 'Architected and managed Docker-based deployment infrastructure for distributed logistics platform serving enterprise clients (Amazon, Flipkart, DHL, Delhivery). Built Node.js microservices for real-time data processing and parcel tracking pipelines. Designed Nginx reverse-proxy with SSL termination. Integrated backend services with PLC hardware via TCP for industrial DWS systems.'
  },
  {
    role: 'Automation Maintenance Executive',
    company: 'Instakart Services Pvt Ltd (Flipkart)',
    period: 'Sep 2021 – Aug 2024',
    description: 'Maintained high-availability warehouse automation systems achieving 98%+ operational uptime. Developed Python and JavaScript diagnostic scripts for automated health monitoring. Cross-layer hardware-software troubleshooting on conveyor, barcode, and scanning systems.'
  },
  {
    role: 'Operations Executive – Full-Stack Developer',
    company: 'Rudra Tech Innovations',
    period: 'Aug 2017 – Jun 2019',
    description: 'Developed and deployed full-stack web applications using Node.js, Django, and React.js. Managed end-to-end production deployments on DigitalOcean VPS with domain configuration and SSL.'
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
              <h1 className="text-2xl font-bold mb-2">Tushar Kanti Acharyya</h1>
              <p className="text-indigo-400 mb-4">Senior DevOps & Backend Engineer</p>
              <div className="flex items-center justify-center gap-2 text-slate-400 text-sm mb-1">
                <MapPin className="h-4 w-4" /> Nashik, Maharashtra, India
              </div>
              <div className="flex items-center justify-center gap-2 text-slate-400 text-sm">
                <Mail className="h-4 w-4" /> +91 8777845607
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-6 font-[var(--font-display)]">About Me</h2>
            <p className="text-slate-300 text-lg mb-6">
              Results-driven Senior DevOps & Backend Engineer with 7+ years of combined experience designing, 
              deploying, and maintaining production-grade distributed systems. Deep hands-on expertise in 
              Docker-based microservices, Node.js backend development, Nginx configuration, and VPS/cloud infrastructure management.
            </p>
            <p className="text-slate-400 mb-6">
              Proven track record delivering high-availability solutions for enterprise logistics clients including 
              Amazon, Flipkart, DHL, and Delhivery. Equally comfortable bridging hardware-software integration layers, 
              with specialized experience in PLC and industrial automation systems.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                <GitBranch className="h-5 w-5" /> GitHub
              </a>
              <a href="https://linkedin.com/in/acharyyatk" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                <GitBranch className="h-5 w-5" /> LinkedIn
              </a>
              <a href="mailto:tushar.whitecollar@gmail.com" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
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