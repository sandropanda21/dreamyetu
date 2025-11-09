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
  // 🔶 Define cores específicas
  const colorClasses = {
    primary: 'bg-red-500 text-white',      // Vermelho suave
    secondary: 'bg-orange-500 text-white', // Laranja vibrante
    accent: 'bg-orange-500 text-white',    // Laranja também
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="p-8 h-full card-interactive group transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <div
          className={`w-16 h-16 rounded-2xl ${colorClasses[color]} flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 shadow-soft`}
        >
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-orange-500 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed text-[15px]">{description}</p>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
