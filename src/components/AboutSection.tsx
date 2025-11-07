import { useTranslation } from 'react-i18next';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import infantil1 from '@/assets/infantil1.jpeg';
import infantil2 from '@/assets/infantil2.jpeg';
import capetown from '@/assets/capetown.jpg';

const AboutSection = () => {
  const { t } = useTranslation();

  const features = [
    t('about.feature1') || 'Access to all our courses',
    t('about.feature2') || 'Learn the latest skills',
    t('about.feature3') || 'Upskill your organization',
  ];

  return (
    <section className="py-10 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-64 h-64 border-4 border-primary/20 rounded-full -z-10" />
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-4">
                <img
                  src={infantil1}
                  alt="Student learning"
                  className="w-full h-48 object-cover rounded-xl shadow-lg"
                />
                <img
                  src={capetown}
                  alt="Campus building"
                  className="w-full h-48 object-cover rounded-xl shadow-lg"
                />
              </div>
              <div className="pt-12">
                <img
                  src={infantil2}
                  alt="Students together"
                  className="w-full h-96 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl -z-10" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-2 sm:px-4 py-[.1875rem] sm:py-1.5 bg-primary/10 text-primary font-semibold text-xs sm:text-sm rounded-full mb-3 sm:mb-4">
              {t('about.badge') || 'About Dream Yetu'}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-6 leading-tight">
                <span className="text-primary mr-1">DREAM</span>  
                <span className="text-secondary">YETU</span>
            </h2>
            <p className="text-muted-foreground text-justify text-sm sm:text-lg mb-4 sm:mb-8 leading-relaxed">
              {t('about.description') || 
                'Not only can university offer an environment rich in our social an cultural experiences.'
              }
            </p>
            <Link to="/about">
              <Button 
                className="bg-primary hover:bg-primary-dark text-white px-4 sm:px-8 py-6 rounded-lg font-semibold h-9"
              >
                {t('common.readMore') || 'Read More'}
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
