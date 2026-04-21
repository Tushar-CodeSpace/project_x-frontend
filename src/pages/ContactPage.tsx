import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactForm = z.infer<typeof contactSchema>;

export function ContactPage() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(data);
    reset();
    alert('Message sent! We\'ll get back to you soon.');
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto space-y-6"
      >
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-dot red" />
            <div className="terminal-dot yellow" />
            <div className="terminal-dot green" />
            <span className="ml-2 text-xs text-[#525252] font-mono">contact.sh</span>
          </div>
          <div className="p-4 border-b border-[#262626]">
            <p className="text-xs text-[#525252] font-mono"># Send me a message</p>
          </div>
          <div className="p-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-[#737373] mb-2">name:</label>
                  <Input {...register('name')} placeholder="Your name" className="font-mono text-sm bg-[#0a0a0a] border-[#262626]" />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="block text-xs font-mono text-[#737373] mb-2">email:</label>
                  <Input {...register('email')} type="email" placeholder="your@email.com" className="font-mono text-sm bg-[#0a0a0a] border-[#262626]" />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-mono text-[#737373] mb-2">subject:</label>
                <Input {...register('subject')} placeholder="What's this about?" className="font-mono text-sm bg-[#0a0a0a] border-[#262626]" />
                {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
              </div>
              
              <div>
                <label className="block text-xs font-mono text-[#737373] mb-2">message:</label>
                <textarea
                  {...register('message')}
                  placeholder="Your message..."
                  className="flex w-full font-mono text-sm bg-[#0a0a0a] border border-[#262626] px-3 py-2 placeholder:text-[#525252] focus:outline-none focus:border-[#22c55e] min-h-[150px]"
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full bg-[#22c55e] text-[#0a0a0a] hover:bg-[#16a34a] font-mono">
                {isSubmitting ? 'Sending...' : '> Submit'}
              </Button>
            </form>
          </div>
        </div>

        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-dot red" />
            <div className="terminal-dot yellow" />
            <div className="terminal-dot green" />
            <span className="ml-2 text-xs text-[#525252] font-mono">links.sh</span>
          </div>
          <div className="p-4">
            <p className="text-xs text-[#525252] font-mono mb-3"># Other ways to reach me</p>
            <div className="space-y-2 font-mono text-sm">
              <div className="flex items-center gap-2">
                <span className="text-[#22c55e]">email:</span>
                <a href="mailto:tushar.codespace@gmail.com" className="text-[#e5e5e5] hover:underline">
                  tushar.codespace@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#22c55e]">linkedin:</span>
                <a href="https://linkedin.com/in/acharyyatk" target="_blank" rel="noopener noreferrer" className="text-[#e5e5e5] hover:underline">
                  /in/acharyyatk
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#22c55e]">location:</span>
                <span className="text-[#737373]">Nashik, Maharashtra, India</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}