import { useTranslation } from 'react-i18next';
import { Target, Eye, Heart } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  const { t } = useTranslation();

  const values = [
    { icon: Target, title: t('about.mission'), content: t('about.missionText') },
    { icon: Eye, title: t('about.vision'), content: t('about.visionText') },
    { icon: Heart, title: t('about.values'), content: t('about.valuesText') },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            {t('about.title')}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in">
            {t('about.subtitle')}
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((item, index) => (
              <Card
                key={item.title}
                className="p-8 text-center hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 rounded-full gradient-hero flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.content}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">A Nossa História</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A Dream Yetu nasceu do sonho de transformar a educação em Angola, criando um
                  espaço onde cada criança pode aprender ao seu próprio ritmo, com amor, respeito
                  e dedicação.
                </p>
                <p>
                  Desde o início, comprometemo-nos a oferecer programas educativos inovadores que
                  respeitam a individualidade de cada aluno, promovendo não apenas o desenvolvimento
                  académico, mas também o crescimento emocional e social.
                </p>
                <p className="font-semibold text-foreground italic text-lg mt-6">
                  "Acreditamos que a educação começa com amor, curiosidade e respeito pelo ritmo
                  de cada criança."
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Nossa Equipa</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Profissionais dedicados e apaixonados por educação
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((member) => (
              <Card key={member} className="p-6 text-center hover-lift">
                <div className="w-24 h-24 rounded-full bg-gradient-hero mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                  DY
                </div>
                <h3 className="text-xl font-bold mb-1">Membro da Equipa</h3>
                <p className="text-muted-foreground text-sm">Educador(a)</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
