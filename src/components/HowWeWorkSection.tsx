import React from 'react';
import { Search, PenTool, Code2, Rocket } from 'lucide-react';

export const HowWeWorkSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Diagnóstico y entendimiento',
      desc: 'Conocemos a fondo tus procesos actuales, tus cuellos de botella y las metas de tu empresa.',
      icon: Search,
    },
    {
      number: '02',
      title: 'Diseño de la solución',
      desc: 'Definimos la arquitectura, pantallas y flujos de trabajo adaptados exactamente a tu negocio.',
      icon: PenTool,
    },
    {
      number: '03',
      title: 'Desarrollo y pruebas',
      desc: 'Construimos el sistema, realizamos pruebas rigurosas y capacitamos a tu equipo.',
      icon: Code2,
    },
    {
      number: '04',
      title: 'Evolución continua',
      desc: 'Damos soporte técnico, cuidamos tus datos y agregamos mejoras conforme tu negocio crece.',
      icon: Rocket,
    },
  ];

  return (
    <section id="metodologia" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: 4 Clean Steps */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100/80 text-nexora-blue text-xs font-bold uppercase tracking-wider mb-3">
                Metodología de Trabajo
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Un proceso claro y transparente de principio a fin
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:shadow-sm transition-all"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-xl bg-blue-50 text-nexora-blue flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-black text-slate-300">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="font-bold text-sm sm:text-base text-slate-900 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Visual illustration */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-white group max-w-md">
              <img
                src="/images/smart_solutions.jpg"
                alt="Flujos digitales diseñados por NEXORA"
                className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
