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
    <Card className="p-8 h-full hover-lift bg-gradient-subtle border-border/30">
      <div className="flex items-center gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 transition-colors ${
              i < rating ? 'text-accent fill-accent' : 'text-muted/40'
            }`}
          />
        ))}
      </div>
      <p className="text-foreground/80 mb-8 italic leading-relaxed text-[15px]">"{content}"</p>
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-gradient-hero flex items-center justify-center text-white font-bold text-lg shadow-soft">
          {name.charAt(0)}
        </div>
        <div>
          <h4 className="font-semibold text-foreground text-base">{name}</h4>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </Card>
  );
};

export default TestimonialCard;
