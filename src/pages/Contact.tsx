import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
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
      details: ['Luanda, Angola', '+244 xxx xxx xxx'],
    },
    {
      icon: MapPin,
      title: t('contact.info.capetown'),
      details: ['Cape Town, South Africa', '+27 76 113 8020'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@dreamyetu.com', 'capetown@dreamyetu.com'],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
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
              <h2 className="text-3xl font-bold mb-6">Envie-nos uma mensagem</h2>
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
                      <SelectValue placeholder="Selecione um serviço" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="preschool">Educação Pré-Escolar</SelectItem>
                      <SelectItem value="homeschooling">Homeschooling</SelectItem>
                      <SelectItem value="inclusion">Educação Inclusiva</SelectItem>
                      <SelectItem value="residence">Residência Cape Town</SelectItem>
                      <SelectItem value="other">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{t('contact.form.message')}</Label>
                  <Textarea
                    id="message"
                    placeholder="Conte-nos como podemos ajudar..."
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
                <h3 className="text-2xl font-bold mb-4">Localizações</h3>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <MapPin className="w-12 h-12 text-muted-foreground" />
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Visite-nos em Luanda ou Cape Town
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/27761138020"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] rounded-full shadow-lg flex items-center justify-center z-50 hover-lift"
        aria-label="WhatsApp"
      >
        <Phone className="w-7 h-7 text-white" />
      </a>

      <Footer />
    </div>
  );
};

export default Contact;
