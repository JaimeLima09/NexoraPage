import React from 'react';
import { ShieldCheck, Cpu, Zap, HeartHandshake } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const trustItems = [
    {
      icon: Cpu,
      title: 'Desarrollo 100% a la Medida',
      subtitle: 'Sin plantillas rígidas ni código inflado',
    },
    {
      icon: Zap,
      title: 'Automatización Inmediata',
      subtitle: 'Ahorro comprobado de horas diarias',
    },
    {
      icon: ShieldCheck,
      title: 'Seguridad & Alta Disponibilidad',
      subtitle: 'Información cifrada y respaldada en la nube',
    },
    {
      icon: HeartHandshake,
      title: 'Soporte & Evolución Continua',
      subtitle: 'Tu equipo técnico de confianza',
    },
  ];

  return (
    <section className="py-8 bg-slate-50/80 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-3 p-3 rounded-2xl bg-white/80 border border-slate-200/60 shadow-2xs hover:shadow-xs transition-all"
              >
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-nexora-blue flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                    {item.title}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                    {item.subtitle}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
