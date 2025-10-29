import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

const TestimonialCard = ({ name, role, content, rating }: TestimonialCardProps) => {
  return (
    <Card className="p-6 h-full hover-lift">
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating ? 'text-accent fill-accent' : 'text-muted'
            }`}
          />
        ))}
      </div>
      <p className="text-muted-foreground mb-6 italic leading-relaxed">"{content}"</p>
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center text-white font-bold">
          {name.charAt(0)}
        </div>
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </Card>
  );
};

export default TestimonialCard;
