import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: 'primary' | 'secondary' | 'accent';
  delay?: number;
}

const ServiceCard = ({ icon: Icon, title, description, color, delay = 0 }: ServiceCardProps) => {
  const colorClasses = {
    primary: 'bg-primary text-primary-foreground',
    secondary: 'bg-secondary text-secondary-foreground',
    accent: 'bg-accent text-accent-foreground',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="p-6 hover-lift hover-glow border-2 border-border hover:border-primary/50 transition-all cursor-pointer group">
        <div className={`w-16 h-16 rounded-2xl ${colorClasses[color]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
