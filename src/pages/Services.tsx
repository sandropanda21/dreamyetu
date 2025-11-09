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
      color: 'accent' as const,
    },
    {
      icon: GraduationCap,
      title: t('services.preschool.title'),
      description: t('services.preschool.description'),
      color: 'primary' as const,
    },
    {
      icon: HomeIcon,
      title: t('services.homeschooling.title'),
      description: t('services.homeschooling.description'),
      color: 'secondary' as const,
    },
    {
      icon: Heart,
      title: t('services.inclusion.title'),
      description: t('services.inclusion.description'),
      color: 'accent' as const,
    },
    {
      icon: Users,
      title: t('services.nanies.title'),
      description: t('services.nanies.description'),
      color: 'primary' as const,
    },
    {
      icon: Calendar,
      title: t('services.programs.title'),
      description: t('services.programs.description'),
      color: 'secondary' as const,
    },
    {
      icon: BookOpen,
      title: t('services.teacher.title'),
      description: t('services.teacher.description'),
      color: 'accent' as const,
    },
    {
      icon: HeartHandshake,
      title: t('services.parentingTraining.title'),
      description: t('services.parentingTraining.description'),
      color: 'primary' as const,
    },
    {
      icon: Building2,
      title: t('services.residence.title'),
      description: t('services.residence.description'),
      color: 'secondary' as const,
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
            Nossos Serviços {/* Alterado de {t('services.title')} para texto direto */}
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
      <section className="pb-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="bg-card p-8 rounded-2xl shadow-lg border-2 border-border animate-fade-in">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-secondary text-secondary-foreground flex items-center justify-center">
                  <HomeIcon className="w-6 sm:w-8 h-6 sm:h-8" />
                </div>
                <h2 className="text-lg sm:text-3xl font-bold">{t('services.certifiedHomeschooling.title')}</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  {t('services.certifiedHomeschooling.description')}
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h3 className="font-bold text-foreground mb-2">{t('services.certifiedHomeschooling.firstModality')}</h3>
                    <p className="text-sm">{t('services.certifiedHomeschooling.firstModalityDescription')}</p>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h3 className="font-bold text-foreground mb-2">{t('services.certifiedHomeschooling.secondModality')}</h3>
                    <p className="text-sm">{t('services.certifiedHomeschooling.secondModalityDescription')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-card p-8 rounded-2xl shadow-lg border-2 border-border animate-fade-in">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center">
                  <Building2 className="w-6 sm:w-8 h-6 sm:h-8" />
                </div>
                <h2 className="text-lg sm:text-3xl font-bold">{t('services.studentResidence.title')}</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  {t('services.studentResidence.description')}
                </p>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-center space-x-2">
                    <div className="w-1 sm:w-2 sm:h-2 rounded-full bg-primary" />
                    <span>{t('services.studentResidence.benefit1')}</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1 sm:w-2 sm:h-2 rounded-full bg-primary" />
                    <span>{t('services.studentResidence.benefit2')}</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1 sm:w-2 sm:h-2 rounded-full bg-primary" />
                    <span>{t('services.studentResidence.benefit3')}</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1 sm:w-2 sm:h-2 rounded-full bg-primary" />
                    <span>{t('services.studentResidence.benefit4')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;