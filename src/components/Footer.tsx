import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Inicio', href: '#' },
    { label: 'Soluciones', href: '#servicios' },
    { label: 'Metodología', href: '#metodologia' },
    { label: 'Casos de Uso', href: '#casos' },
    { label: 'Diagnóstico', href: '#diagnostico' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Preguntas Frecuentes', href: '#faq' },
    { label: 'Demos en Vivo', href: '#demos' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center">
              <div className="bg-white rounded-2xl px-3 py-1.5 shadow-sm inline-block">
                <img
                  src="/logo.png"
                  alt="NEXORA Logo"
                  className="h-10 sm:h-12 w-auto object-contain"
                />
              </div>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Socio tecnológico para empresas. Transformamos procesos, ideas y problemas operativos en soluciones tecnológicas a la medida que generan crecimiento real.
            </p>

            <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-xs text-slate-300 inline-block">
              <span className="font-semibold text-white block mb-0.5">Soluciones para empresas que quieren avanzar.</span>
              <span>Jaime Lima García & Alan Manuel Hernández Rocha</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Navegación
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-slate-400 hover:text-white transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Direct */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Contacto
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-nexora-cyan shrink-0" />
                <span>contacto@nexora.tech</span>
              </div>
              <p className="text-[11px] text-slate-500 pt-2 leading-relaxed">
                Atención remota a empresas en México y Latinoamérica.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} NEXORA. Todos los derechos reservados.
          </div>

          <div className="flex items-center gap-2">
            <span>Tecnología que impulsa tu negocio</span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-colors"
            title="Volver arriba"
          >
            <span>Subir</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
