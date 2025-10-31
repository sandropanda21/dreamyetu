import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
  delay?: number;
}

const FeatureCard = ({ icon: Icon, title, description, link = '/services', delay = 0 }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
    >
      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-foreground">{title}</h3>
      <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
      <Link 
        to={link}
        className="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all duration-300"
      >
        Learn More <span className="ml-1">→</span>
      </Link>
    </motion.div>
  );
};

export default FeatureCard;
