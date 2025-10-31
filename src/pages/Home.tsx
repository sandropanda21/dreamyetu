import { useTranslation } from 'react-i18next';
import { GraduationCap, BookOpen, Heart } from 'lucide-react';
import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import AboutSection from '@/components/AboutSection';
import StatsSection from '@/components/StatsSection';

const Home = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: GraduationCap,
      title: t('features.graduation.title') || 'Graduation',
      description: t('features.graduation.description') || 'Dream Yetu was established it is recognized.',
    },
    {
      icon: Heart,
      title: t('features.life.title') || 'University Life',
      description: t('features.life.description') || 'Dream Yetu was established it is recognized.',
    },
    {
      icon: BookOpen,
      title: t('features.services.title') || 'Education Services',
      description: t('features.services.description') || 'Dream Yetu was established it is recognized.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Feature Cards - Overlapping Hero */}
      <section className="relative -mt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                {...feature}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Stats Section */}
      <StatsSection />
    </>
  );
};

export default Home;
