import React from 'react';
import { ShieldCheck, HeartHandshake, Sparkles, TrendingUp } from 'lucide-react';

export const AboutUsSection: React.FC = () => {
  const pillars = [
    {
      icon: Sparkles,
      title: 'Soluciones a tu medida',
      desc: 'No te vendemos licencias rígidas. El software se adapta a tus flujos de trabajo.',
    },
    {
      icon: TrendingUp,
      title: 'Visión empresarial',
      desc: 'Cada desarrollo tiene como objetivo ahorrar costos, tiempo o generar más ventas.',
    },
    {
      icon: HeartHandshake,
      title: 'Acompañamiento continuo',
      desc: 'Un socio técnico de confianza para capacitar, resolver dudas y mejorar tu plataforma.',
    },
    {
      icon: ShieldCheck,
      title: 'Seguridad y respaldo',
      desc: 'Tu información protegida en la nube con altos estándares de privacidad y disponibilidad.',
    },
  ];

  return (
    <section id="nosotros" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Visual image */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-white group max-w-md">
              <img
                src={`${import.meta.env.BASE_URL}images/tech_partnership.jpg`}
                alt="Equipo y Alianza Tecnológica NEXORA"
                className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column: Founders & Pillars */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3 border border-teal-200/60">
                Sobre NEXORA
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Tu socio tecnológico para crecer con certeza
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Fundada por <strong>Jaime Lima García</strong> y <strong>Alan Manuel Hernández Rocha</strong>, NEXORA nació con la misión de ser el aliado técnico confiable que las empresas necesitan para automatizar procesos y modernizarse.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {pillars.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5"
                  >
                    <div className="flex items-center gap-2 text-slate-900 font-bold text-xs sm:text-sm">
                      <Icon className="w-4 h-4 text-nexora-blue" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
