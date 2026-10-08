import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles, MessageSquare } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Soluciones', href: '#servicios' },
    { label: 'Metodología', href: '#metodologia' },
    { label: 'Casos de Uso', href: '#casos' },
    { label: 'Diagnóstico', href: '#diagnostico' },
    { label: 'Demos en Vivo', href: '#demos', badge: 'Interactivo' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Preguntas', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-2 border-b border-slate-200/80'
          : 'bg-white/85 backdrop-blur-md py-3 sm:py-3.5 border-b border-slate-100'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between min-h-[58px] sm:min-h-[64px]">
          
          {/* Logo Section */}
          <a
            href="#"
            className="flex items-center shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-nexora-blue rounded-xl py-0.5 mr-4"
          >
            <img
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt="NEXORA Logo"
              className="h-11 sm:h-12 md:h-13 w-auto object-contain transition-transform duration-200 hover:scale-105"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 bg-slate-100/70 border border-slate-200/80 rounded-full px-3.5 py-1.5 shadow-2xs whitespace-nowrap">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-slate-700 hover:text-nexora-blue transition-all rounded-full hover:bg-white hover:shadow-2xs flex items-center gap-1.5 whitespace-nowrap shrink-0"
              >
                <span className="whitespace-nowrap">{link.label}</span>
                {link.badge && (
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-teal-100 text-teal-800 border border-teal-200 shadow-2xs whitespace-nowrap shrink-0">
                    <Sparkles className="w-2.5 h-2.5 mr-0.5 text-teal-600 shrink-0" />
                    <span>{link.badge}</span>
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Action CTA Button */}
          <div className="hidden sm:flex items-center gap-3 shrink-0 ml-4">
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-nexora-blue to-nexora-blue-dark hover:from-nexora-blue-dark hover:to-blue-900 shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
            >
              <span className="whitespace-nowrap">Hablemos de tu proyecto</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </button>
          </div>

          {/* Mobile/Tablet Menu Toggle Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-700 hover:text-nexora-blue hover:bg-slate-100 focus:outline-none"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-200 bg-white/95 backdrop-blur-xl px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold text-slate-800 hover:bg-nexora-blue-50 hover:text-nexora-blue transition-colors"
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="px-2.5 py-0.5 text-xs font-bold bg-teal-100 text-teal-800 rounded-full">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
            <div className="pt-4 px-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full text-base font-bold text-white bg-nexora-blue hover:bg-nexora-blue-dark shadow-md"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Hablemos de tu proyecto</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
