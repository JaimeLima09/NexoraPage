import React from 'react';
import { Sparkles, MessageCircle, TrendingUp, HeartHandshake, Zap, Compass } from 'lucide-react';

export const WhyNexoraSection: React.FC = () => {
  const reasons = [
    {
      icon: Sparkles,
      title: 'Soluciones a tu medida',
      desc: 'No te vendemos licencias rígidas ni te obligamos a cambiar tus procesos para encajar en un software genérico. El sistema se adapta a tu negocio.',
      highlight: '100% Personalizado',
      color: 'bg-blue-50 text-blue-600',
    },
    {
      icon: MessageCircle,
      title: 'Lenguaje claro y sencillo',
      desc: 'Hablamos el idioma de tu negocio, no el de los servidores. Te explicamos los beneficios, tiempos y costos sin tecnicismos confusos.',
      highlight: 'Cero Jerga Técnica',
      color: 'bg-teal-50 text-teal-600',
    },
    {
      icon: TrendingUp,
      title: 'Visión empresarial real',
      desc: 'No escribimos código solo por escribirlo. Cada botón, pantalla o automatización tiene un propósito: ahorrar costos, tiempo o generar más ingresos.',
      highlight: 'Retorno de Inversión',
      color: 'bg-indigo-50 text-indigo-600',
    },
    {
      icon: HeartHandshake,
      title: 'Acompañamiento continuo',
      desc: 'No somos desarrolladores que entregan un archivo y desaparecen. Estamos a tu lado para capacitar, resolver dudas y evolucionar la plataforma.',
      highlight: 'Soporte Cercano',
      color: 'bg-rose-50 text-rose-600',
    },
    {
      icon: Zap,
      title: 'Tecnología moderna y sólida',
      desc: 'Construimos sobre herramientas rápidas, seguras y escalables para que tu sistema nunca se quede lento ni se caiga en horas pico.',
      highlight: 'Alta Disponibilidad',
      color: 'bg-amber-50 text-amber-600',
    },
    {
      icon: Compass,
      title: 'Una sola alianza tecnológica',
      desc: 'Desde la automatización de WhatsApp hasta tu ERP y tu app móvil: tienes un solo socio responsable que conoce todas tus operaciones.',
      highlight: 'Aliado Integral',
      color: 'bg-cyan-50 text-cyan-600',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
            Nuestros Diferenciadores
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Por qué las empresas eligen a NEXORA
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            La diferencia entre un proveedor de software tradicional y un socio tecnológico que se preocupa genuinamente por tus resultados.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <div
                key={i}
                className="p-7 rounded-3xl bg-slate-50/60 border border-slate-200/80 hover:bg-white hover:border-slate-300 hover:shadow-soft-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${r.color} shadow-xs group-hover:scale-105 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-700">
                      {r.highlight}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                    {r.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {r.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
