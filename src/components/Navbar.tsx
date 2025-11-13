import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, MapPin, Mail, X, Globe, Search } from 'lucide-react';
import Logo from "@/assets/logo.jpeg";
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
      {/* Top bar */}
      <div className="bg-secondary border-b border-border/30">
        <div className="max-w-full mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1 sm:gap-2 text-white">
              <Mail className="h-3 w-3 sm:h-6 sm:w-6" />
              <span className="text-[.625rem] sm:text-[.875rem]">geral@dreamyetu.com</span>
              <MapPin className="h-3 w-3 sm:h-6 sm:w-6" />
              <span className="text-[.625rem] sm:text-[.875rem]">Luanda, Camama e Sequele</span>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                onClick={toggleLanguage}
                className="flex items-center text-[.625rem] sm:text-sm text-white hover:text-orange-400 rounded-lg px-1 py-3 sm:px-4 h-4 sm:h-8 w-[60px] sm:w-[78px]"
              >
                <Globe className="mr-0 sm:mr-1" />
                {i18n.language.toUpperCase()}
              </Button>
              <Link to="/contact" className="hidden sm:flex">
                <Button size="sm" className="h-8 bg-orange-500 text-white hover:bg-orange-400">
                  {t('nav.contact')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-lg">
              <img src={Logo} alt="Dream Yetu logo" className="rounded-full" />
            </div>
            <span className="text-2xl font-bold">
              <span className="text-primary mr-1">Dream</span>
              <span className="text-secondary">Yetu</span>
            </span>
          </Link>

          {/* Desktop NavLinks */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-300 ${
                  isActive(link.path)
                    ? 'text-orange-500'
                    : 'text-foreground hover:text-orange-500'
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
                className="w-64 pl-4 pr-10 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300/50"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-orange-400">
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-orange-50 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6 text-orange-500" /> : <Menu className="w-6 h-6 text-orange-500" />}
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
                    className={`block py-2 px-4 rounded-lg transition-colors duration-300 ${
                      isActive(link.path)
                        ? 'bg-orange-500 text-white'
                        : 'hover:bg-orange-50 hover:text-orange-500 text-gray-800'
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
