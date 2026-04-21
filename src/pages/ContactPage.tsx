import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card } from '../components/ui/card';
import { Mail, MessageSquare, Send } from 'lucide-react';

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
        className="max-w-2xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-4 text-center font-[var(--font-display)]">
          <span className="gradient-text">Get In Touch</span>
        </h1>
        <p className="text-slate-400 text-center mb-8">
          Have a project in mind? Let's discuss how I can help bring your ideas to life.
        </p>

        <Card className="p-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <Input {...register('name')} placeholder="Your name" />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <Input {...register('email')} type="email" placeholder="your@email.com" />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Subject</label>
              <Input {...register('subject')} placeholder="What's this about?" />
              {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                {...register('message')}
                placeholder="Your message..."
                className="flex w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:text-slate-100 min-h-[150px]"
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" /> Send Message
                </>
              )}
            </Button>
          </form>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <Card className="p-4 text-center">
            <Mail className="h-8 w-8 mx-auto mb-2 text-blue-600" />
            <p className="font-medium">Email</p>
            <p className="text-sm text-slate-500">tushar.whitecollar@gmail.com</p>
          </Card>
          <Card className="p-4 text-center">
            <MessageSquare className="h-8 w-8 mx-auto mb-2 text-blue-600" />
            <p className="font-medium">LinkedIn</p>
            <p className="text-sm text-slate-500">acharyyatk</p>
          </Card>
          <Card className="p-4 text-center">
            <Mail className="h-8 w-8 mx-auto mb-2 text-blue-600" />
            <p className="font-medium">Location</p>
            <p className="text-sm text-slate-500">Nashik, Maharashtra</p>
          </Card>
        </div>
      </motion.div>
    </div>
  );
}