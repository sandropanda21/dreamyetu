import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logo from '@/assets/logo.jpeg';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/share/1BDxv8Fbyg/', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  const quickLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/services', label: t('nav.services') },
    { path: '/about', label: t('nav.about') },
    { path: '/gallery', label: t('nav.gallery') },
    { path: '/contact', label: t('nav.contact') },
  ];

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full gradient-hero flex items-center justify-center">
                <img src={Logo} alt="Dream Yetu logo" className="rounded-full" />
              </div>
              <span className="text-white text-xl font-bold">Dream Yetu</span>
            </div>
            <p className="text-sm text-white">{t('footer.aboutText')}</p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-muted text-white hover:bg-orange-400 hover:text-white transition-all duration-300 flex items-center justify-center"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white hover:text-orange-400 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Luanda */}
          <div>
            <h3 className="text-white mb-4">{t('contact.info.luanda')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm text-white">
                <MapPin className="w-4 h-4 mt-0.5 text-white flex-shrink-0" />
                <span>Luanda, Angola</span>
              </li>
              <li className="flex items-start space-x-2 text-sm text-white">
                <span>Camama (Condomínio das Acácias, Casa J1)</span>
              </li>
              <li className="flex items-start space-x-2 text-sm text-white">
                <span>Centralidade do Sequele (Bloco 6, Prédio 5, Entrada B, Apto.: 001)</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-white">
                <Phone className="w-4 h-4 text-white flex-shrink-0" />
                <span>+244 927 228 993</span>
                <span>+244 930 292 592</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-white">
                <Mail className="w-4 h-4 text-white flex-shrink-0" />
                <span>info@dreamyetu.com</span>
              </li>
            </ul>
          </div>

          {/* Contact Cape Town */}
          <div>
            <h3 className="text-white mb-4">{t('contact.info.capetown')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm text-white">
                <MapPin className="w-4 h-4 mt-0.5 text-white flex-shrink-0" />
                <span>Cape Town, South Africa</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-white">
                <Phone className="w-4 h-4 text-white flex-shrink-0" />
                <span>+27 76 113 8020</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-white">
                <Mail className="w-4 h-4 text-white flex-shrink-0" />
                <span>residencial.capetown@dreamyetu.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-white">
          <p>{t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
