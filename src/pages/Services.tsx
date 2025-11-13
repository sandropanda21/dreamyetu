import { useTranslation } from 'react-i18next';
import {
  GraduationCap,
  Home as HomeIcon,
  Heart,
  Users,
  Calendar,
  BookOpen,
  HeartHandshake,
  Building2,
  Microscope,
} from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';

import heroBackground from '../../public/galeeria1102.jpeg.jpeg';

const Services = () => {
  const { t } = useTranslation();

  const allServices = [
    {
      icon: Microscope,
      title: t('services.research.title'),
      description: t('services.research.description'),
      color: 'accent' as const, // 🔶 laranja
    },
    {
      icon: GraduationCap,
      title: t('services.preschool.title'),
      description: t('services.preschool.description'),
      color: 'primary' as const, // 🔴 vermelho suave
    },
    {
      icon: HomeIcon,
      title: t('services.homeschooling.title'),
      description: t('services.homeschooling.description'),
      color: 'accent' as const, // 🔶 laranja
    },
    {
      icon: Heart,
      title: t('services.inclusion.title'),
      description: t('services.inclusion.description'),
      color: 'primary' as const, // 🔴 vermelho suave
    },
    {
      icon: Users,
      title: t('services.nanies.title'),
      description: t('services.nanies.description'),
      color: 'accent' as const, // 🔶 laranja
    },
    {
      icon: Calendar,
      title: t('services.programs.title'),
      description: t('services.programs.description'),
      color: 'primary' as const, // 🔴 vermelho suave
    },
    {
      icon: BookOpen,
      title: t('services.teacher.title'),
      description: t('services.teacher.description'),
      color: 'accent' as const, // 🔶 laranja
    },
    {
      icon: HeartHandshake,
      title: t('services.parentingTraining.title'),
      description: t('services.parentingTraining.description'),
      color: 'primary' as const, // 🔴 vermelho suave
    },
    {
      icon: Building2,
      title: t('services.residence.title'),
      description: t('services.residence.description'),
      color: 'accent' as const, 
    },
  ];

  return (
    <>
      <section
        className="relative pt-20 sm:pt-32 pb-12 sm:pb-20 bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Nossos Serviços
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto animate-fade-in">
            {t('services.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-20 px-auto bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allServices.map((service, index) => (
              <ServiceCard key={service.title} {...service} delay={index * 0.05} />
            ))}
          </div>
        </div>
      </section>

      
    </>
  );
};

export default Services;
