import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe } from 'lucide-react';
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
    { path: '/services', label: t('nav.services') },
    { path: '/about', label: t('nav.about') },
    { path: '/gallery', label: t('nav.gallery') },
    { path: '/blog', label: t('nav.blog') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full gradient-hero flex items-center justify-center">
              <span className="text-white font-bold text-xl">DY</span>
            </div>
            <span className="text-xl font-bold text-foreground">Dream Yetu</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.path) ? 'text-primary' : 'text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="hidden md:flex items-center space-x-1"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">{i18n.language.toUpperCase()}</span>
            </Button>

            <Button
              size="sm"
              className="hidden md:inline-flex bg-primary hover:bg-primary-dark text-primary-foreground"
            >
              {t('nav.enroll')}
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
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
              <div className="py-4 space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 px-4 rounded-lg transition-colors ${
                      isActive(link.path)
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-muted'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="flex items-center space-x-2 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={toggleLanguage}
                    className="flex-1"
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    {i18n.language.toUpperCase()}
                  </Button>
                  <Button size="sm" className="flex-1 bg-primary hover:bg-primary-dark">
                    {t('nav.enroll')}
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
