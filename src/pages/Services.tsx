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

const Services = () => {
  const { t } = useTranslation();

  const allServices = [
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
      title: 'Babás Educadoras (BFFs)',
      description: 'Profissionais formadas para cuidar e educar com relatórios trimestrais e apoio aos pais.',
      color: 'primary' as const,
    },
    {
      icon: Calendar,
      title: 'Programas After-School e Férias',
      description: 'Clubes de línguas, reforço escolar, artes, música, ciências e campos de férias STEM.',
      color: 'secondary' as const,
    },
    {
      icon: BookOpen,
      title: 'Formação de Professores',
      description: 'Workshops semanais com metodologias inclusivas e inovação pedagógica.',
      color: 'accent' as const,
    },
    {
      icon: HeartHandshake,
      title: 'Capacitação Parental',
      description: 'Workshops e aconselhamento familiar com estratégias de disciplina positiva.',
      color: 'primary' as const,
    },
    {
      icon: Building2,
      title: t('services.residence.title'),
      description: t('services.residence.description'),
      color: 'secondary' as const,
    },
    {
      icon: Microscope,
      title: 'Investigação e Inovação',
      description: 'Pesquisa pedagógica e desenvolvimento educativo contínuo em Angola.',
      color: 'accent' as const,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            {t('services.title')}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in">
            {t('services.subtitle')}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allServices.map((service, index) => (
              <ServiceCard key={service.title} {...service} delay={index * 0.05} />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Homeschooling Details */}
            <div className="bg-card p-8 rounded-2xl shadow-lg border-2 border-border animate-fade-in">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-secondary text-secondary-foreground flex items-center justify-center">
                  <HomeIcon className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold">Homeschooling Certificado</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  O nosso programa de homeschooling oferece educação flexível e certificada,
                  adaptada ao ritmo e necessidades de cada criança.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h3 className="font-bold text-foreground mb-2">Modalidade 1</h3>
                    <p className="text-sm">Homeschooling Dream Yetu - Acompanhamento completo</p>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h3 className="font-bold text-foreground mb-2">Modalidade 2</h3>
                    <p className="text-sm">Homeschooling pelos Pais - Suporte e certificação</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cape Town Residence Details */}
            <div className="bg-card p-8 rounded-2xl shadow-lg border-2 border-border animate-fade-in">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center">
                  <Building2 className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold">Residência Estudantil Cape Town</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Alojamento supervisionado em Cape Town com ambiente familiar, alimentação
                  balanceada e acompanhamento académico e psicológico completo.
                </p>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span>Ambiente seguro e acolhedor</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span>Supervisão 24/7</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span>Apoio académico personalizado</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span>Acompanhamento psicológico</span>
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
