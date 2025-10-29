import { useTranslation } from 'react-i18next';
import { GraduationCap, Home as HomeIcon, Heart, Building2 } from 'lucide-react';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';

const Home = () => {
  const { t } = useTranslation();

  const services = [
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
      icon: Building2,
      title: t('services.residence.title'),
      description: t('services.residence.description'),
      color: 'primary' as const,
    },
  ];

  const testimonials = [
    {
      name: 'Maria Silva',
      role: 'Mãe de Aluno',
      content: 'A Dream Yetu transformou a vida da minha filha. O apoio pedagógico é excepcional e o carinho com que tratam cada criança é notável.',
      rating: 5,
    },
    {
      name: 'João Santos',
      role: 'Pai de Aluno',
      content: 'O programa de homeschooling superou todas as nossas expectativas. Flexibilidade e qualidade educacional de excelência.',
      rating: 5,
    },
    {
      name: 'Ana Costa',
      role: 'Mãe de Aluno',
      content: 'Meu filho com necessidades especiais encontrou o ambiente perfeito para se desenvolver. Equipe maravilhosa!',
      rating: 5,
    },
  ];

  return (
    <>
      {/* Hero Section with Parallax */}
      <Hero />

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('services.title')}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                {...service}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('testimonials.title')}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('testimonials.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pronto para começar esta jornada?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Entre em contacto connosco e descubra como podemos ajudar no desenvolvimento do seu filho.
          </p>
          <a href="/contact">
            <button className="bg-white text-primary hover:bg-white/90 font-bold px-8 py-4 rounded-xl text-lg shadow-lg hover-lift">
              {t('nav.contact')}
            </button>
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
