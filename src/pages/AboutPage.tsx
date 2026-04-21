import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';

const skills = [
  'Node.js', 'Express.js', 'Bun.js', 'Docker', 'Nginx', 
  'MongoDB', 'Linux', 'Git', 'CI/CD', 'Python', 'REST APIs', 'Microservices', 'PLC', 'TCP'
];

const experience = [
  {
    role: 'Senior DevOps Engineer',
    company: 'Nido Machineries Pvt Ltd',
    period: 'Sep 2024 – Present',
    description: 'Docker-based deployment for logistics (Amazon, Flipkart, DHL, Delhivery). Node.js microservices, Nginx + SSL, PLC TCP integration.'
  },
  {
    role: 'Automation Maintenance Executive',
    company: 'Instakart (Flipkart)',
    period: 'Sep 2021 – Aug 2024',
    description: '98%+ uptime. Python/JS health monitoring scripts. Hardware-software troubleshooting.'
  },
  {
    role: 'Full-Stack Developer',
    company: 'Rudra Tech Innovations',
    period: 'Aug 2017 – Jun 2019',
    description: 'Node.js, Django, React. DigitalOcean VPS, domain & SSL.'
  },
];

export function AboutPage() {
return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto space-y-6"
      >
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-dot red" />
            <div className="terminal-dot yellow" />
            <div className="terminal-dot green" />
            <span className="ml-2 text-xs text-[#525252] font-mono">about.sh</span>
          </div>
          <div className="p-6">
            <div className="flex items-start gap-6">
              <div className="w-24 h-24 bg-[#171717] border border-[#262626] flex items-center justify-center flex-shrink-0">
                <span className="font-mono text-2xl text-[#22c55e]">TK</span>
              </div>
              <div>
                <h1 className="text-xl font-mono text-[#e5e5e5] mb-1">Tushar Kanti Acharyya</h1>
                <p className="text-sm text-[#22c55e] mb-2">Senior DevOps & Backend Engineer</p>
                <div className="flex gap-4 text-xs text-[#737373]">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" /> Nashik, Maharashtra
                  </span>
                  <span className="flex items-center gap-1">
                    <Mail className="h-3 w-3" /> +91 8777845607
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-dot red" />
            <div className="terminal-dot yellow" />
            <div className="terminal-dot green" />
            <span className="ml-2 text-xs text-[#525252] font-mono">bio.sh</span>
          </div>
          <div className="p-4 font-mono text-sm">
            <p className="text-[#737373] mb-2">$ cat &gt; /proc/bio</p>
            <p className="text-[#e5e5e5] mb-4">
              7+ years in DevOps & Backend. Docker, Node.js, Nginx, VPS management.
              Enterprise logistics (Amazon, Flipkart, DHL). PLC automation.
            </p>
            <p className="text-[#737373] mb-2">$ links=</p>
            <div className="flex gap-4 ml-2">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[#22c55e] hover:underline">
                [github]
              </a>
              <a href="https://linkedin.com/in/acharyyatk" target="_blank" rel="noopener noreferrer" className="text-[#22c55e] hover:underline">
                [linkedin]
              </a>
              <a href="mailto:tushar.whitecollar@gmail.com" className="text-[#22c55e] hover:underline">
                [email]
              </a>
            </div>
          </div>
        </div>

        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-dot red" />
            <div className="terminal-dot yellow" />
            <div className="terminal-dot green" />
            <span className="ml-2 text-xs text-[#525252] font-mono">skills.sh --list</span>
          </div>
          <div className="p-4">
            <p className="text-[#525252] text-xs font-mono mb-3"># skills</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-[#171717] border border-[#262626] text-xs font-mono text-[#e5e5e5]">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-dot red" />
            <div className="terminal-dot yellow" />
            <div className="terminal-dot green" />
            <span className="ml-2 text-xs text-[#525252] font-mono">experience.sh</span>
          </div>
          <div className="p-4 space-y-4">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border-l-2 border-[#262626] pl-4"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-xs text-[#22c55e]">&gt;</span>
                  <span className="font-mono text-sm text-[#e5e5e5]">{exp.role}</span>
                </div>
                <p className="text-xs text-[#737373] mb-1">{exp.company} | {exp.period}</p>
                <p className="text-xs text-[#a1a1aa]">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}