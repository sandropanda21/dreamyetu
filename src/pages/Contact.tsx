import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import WhatsApp from '@/assets/icons/whatsappIcon.svg'
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';

// ⭐ Importe sua nova imagem de background aqui
import heroBackground from '../../public/galeeria1.jpeg';

const Contact = () => {
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Mensagem enviada com sucesso! Entraremos em contacto em breve.');
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t('contact.info.luanda'),
      details: ['Camama (Condomínio das Acácias, Casa J1)', 'Centralidade do Sequele (Bloco 6, Prédio 5, Entrada B, Apto.: 001)', '(+244) 927 228 993', '(+244) 930 292 592'],
    },
    {
      icon: MapPin,
      title: t('contact.info.capetown'),
      details: ['Cape Town, South Africa', '+27 76 113 8020']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@dreamyetu.com', 'capetown@dreamyetu.com'],
    },
  ];

  return (
    <>
      {/* Hero Section - Background alterado */}
      <section 
        className="relative pt-32 pb-20 bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }} // ⭐ Background alterado aqui
      >
        <div className="absolute inset-0 bg-black/50"></div> {/* Overlay mais escuro para contraste */}
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">{t('contact.form.formTitle')}</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">{t('contact.form.name')}</Label>
                  <Input
                    id="name"
                    placeholder="João Silva"
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">{t('contact.form.email')}</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="joao@exemplo.com"
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">{t('contact.form.phone')}</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+244 xxx xxx xxx"
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">{t('contact.form.service')}</Label>
                  <Select>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder={t('contact.form.servicePlaceholder')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="preschool">{t('contact.form.serviceOptions.preschool')}</SelectItem>
                      <SelectItem value="homeschooling">{t('contact.form.serviceOptions.homeschooling')}</SelectItem>
                      <SelectItem value="inclusion">{t('contact.form.serviceOptions.inclusion')}</SelectItem>
                      <SelectItem value="residence">{t('contact.form.serviceOptions.residence')}</SelectItem>
                      <SelectItem value="other">{t('contact.form.serviceOptions.other')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{t('contact.form.message')}</Label>
                  <Textarea
                    id="message"
                    placeholder={t('contact.form.placeholderMessage')}
                    required
                    className="min-h-32"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary-dark text-lg h-12"
                >
                  <Send className="w-5 h-5 mr-2" />
                  {t('contact.form.send')}
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6 animate-fade-in">
              <Card className="p-8">
                <h2 className="text-3xl font-bold mb-6">{t('contact.info.title')}</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Map Placeholder */}
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-4">{t('contact.form.location')}</h3>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.833826535474!2d13.260748499999998!3d-8.8950369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f5003567ad9d%3A0xfe8b9123ff8ac02!2sCondom%C3%ADnio%20Ac%C3%A1cias%20(Cooperativa%20Cajueiro)!5e0!3m2!1spt-PT!2sao!4v1762605042605!5m2!1spt-PT!2sao" className="w-full h-full border-0" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Localização da Dream Yetu - Condomínio Acácias (Cooperativa Cajueiro)"/>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  {t('contact.form.visitUs')}
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/244930292592"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg flex items-center justify-center z-50 hover-lift"
        aria-label="WhatsApp"
      >
        <img src={WhatsApp} alt="WhatsApp" />
      </a>
    </>
  );
};

export default Contact;