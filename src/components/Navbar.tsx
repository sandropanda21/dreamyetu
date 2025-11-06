import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, MapPin, Mail, X, Globe, Search  } from 'lucide-react';
import Logo from "@/assets/logo.jpeg"
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'pt' ? 'en' : 'pt';
    i18n.changeLanguage(newLang);
  };

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/services', label: t('nav.services') },
    { path: '/gallery', label: t('nav.gallery') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="bg-secondary border-b border-border/30">
        <div className="max-w-full mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1 sm:gap-2 text-white">
              <Mail className="h-3 w-3 sm:h-6 sm:w-6"></Mail>
              <span className="text-[.625rem] sm:text-[.875rem] ">info@dreamyetu.com</span>
              <MapPin className="h-3 w-3 sm:h-6 sm:w-6"></MapPin>
              <span className="text-[.625rem] sm:text-[.875rem]">Luanda, Angola</span>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                onClick={toggleLanguage}
                className="flex items-center text-[.625rem] sm:text-sm text-white hover:text-foreground rounded-lg px-1 py-3 sm:px-4 h-4 sm:h-8 w-[60px] sm:w-[78px]"
              >
                <Globe className=" mr-0 sm:mr-1" />
                {i18n.language.toUpperCase()}
              </Button>
              <Link to="/contact" className="hidden sm:flex">
                <Button size="sm" className="h-8 bg-foreground text-background hover:bg-foreground/90">
                  {t('nav.contact')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-lg">
              <img src={Logo} alt="Dream Yetu logo" className="rounded-full"/>
            </div>
            <span className="text-2xl font-bold">
              <span className="text-primary mr-1">Dream</span>
              <span className="text-secondary">Yetu</span>
            </span>
          </Link>
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${
                  isActive(link.path) ? 'text-primary' : 'text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          {/* Search Bar */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="relative">
              <input
                type="search"
                placeholder={t('nav.search') || 'Search...'}
                className="w-64 pl-4 pr-10 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-ring-primary/20">
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 px-4 rounded-lg transition-colors ${
                      isActive(link.path)
                        ? 'bg-primary text-white'
                        : 'hover:bg-muted'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
