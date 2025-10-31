import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/infantil1.jpeg';

const Hero = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="relative h-[600px] lg:h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/40" />
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/30 hover:bg-black/50 text-white rounded-full flex items-center justify-center transition-colors"
      >
        ←
      </button>
      <button 
        onClick={() => setCurrentSlide(currentSlide + 1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/30 hover:bg-black/50 text-white rounded-full flex items-center justify-center transition-colors"
      >
        →
      </button>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <p className="text-white/90 text-sm font-medium mb-4 uppercase tracking-wider">
            DREAM YETU EDUCATION
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
            {t('hero.subtitle')}
          </p>
          <Link to="/services">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-dark text-white px-8 py-6 h-auto text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {t('hero.cta1')}
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
