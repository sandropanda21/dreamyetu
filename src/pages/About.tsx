import { useTranslation } from 'react-i18next';
import { Target, Eye, Heart } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  const { t } = useTranslation();

  const values = [
    { icon: Target, title: t('about.mission'), content: t('about.missionText'), background: 'primary' },
    { icon: Eye, title: t('about.vision'), content: t('about.visionText'), background: 'secondary' },
    { icon: Heart, title: t('about.values'), content: t('about.valuesText'), background: 'accent'},
  ];

  const colorMap = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  accent: 'bg-carrot-orange',
};

  const textColor = {
  secondary: 'text-secondary',
  accent: 'text-accent',
  primary: 'text-primary', 
  } 

  return (
    <>
      <section className="relative pt-32 pb-16 sm:pb-20 bg-kids bg-[position:center_32.5%] bg-cover bg-no-repeat">
        <div className="absolute inset-0 bg-black/25"></div>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            <span className="text-primary mr-2">DREAM</span>  
            <span className="text-carrot-orange">YETU</span>
          </h1>
          <p className="text-base sm:text-xl text-white/90 max-w-3xl mx-auto animate-fade-in">
            {t('about.subtitle')}
          </p>
        </div>
      </section>
      <section className="py-12 sm:py-20 px-auto bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((item, index) => (
              <Card
                key={item.title}
                className={`p-6 sm:p-8 ${textColor[item.background]} text-center border-[.25rem] border-dashed border-accent hover-lift animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-10 sm:w-20 h-10 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${colorMap[item.background]}`}>
                  <item.icon className="w-5 sm:w-10 h-5 sm:h-10 text-white" />
                </div>
                <h3 className="text-lg sm:text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.content}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="pb-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 border-[.25rem] border-dashed border-secondary animate-fade-in">
              <h2 className="text-primary text-center sm:text-left text-xl sm:text-3xl md:text-4xl font-bold mb-6">{t('about.historyHeader')}</h2>
              <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
                <p>
                 {t('about.historyParagraph1')}
                </p>
                <p>
                  {t('about.historyParagraph2')}
                </p>
                <p className="font-semibold text- italic text-base sm:text-lg mt-6">
                "{t('about.historyParagraph3')}"
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
