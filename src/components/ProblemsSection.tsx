import React, { useState } from 'react';
import { Clock, Layers, Sliders, LineChart, Sparkles, RefreshCw, ArrowRight, CheckCircle } from 'lucide-react';

interface ProblemsSectionProps {
  onOpenContact: () => void;
}

export const ProblemsSection: React.FC<ProblemsSectionProps> = ({ onOpenContact }) => {
  const [selectedProblem, setSelectedProblem] = useState<string | null>(null);

  const problems = [
    {
      id: 'manual-tasks',
      icon: Clock,
      title: '¿Tu empresa todavía depende de procesos manuales?',
      subtitle: 'Captura repetitiva, cotizaciones a mano y pérdida de tiempo valioso.',
      solutionTitle: 'Automatización Integral',
      solutionDesc: 'Convertimos tareas repetitivas en procesos automáticos que se ejecutan en segundos y sin errores.',
      badge: 'Ahorro de horas semanales',
      color: 'text-blue-600',
      bg: 'bg-blue-50',
    },
    {
      id: 'scattered-info',
      icon: Layers,
      title: '¿Tu información está repartida entre Excel, WhatsApp y varios lugares?',
      subtitle: 'Nadie sabe cuál es la versión correcta y se pierden seguimientos.',
      solutionTitle: 'Centralización en una Sola Plataforma',
      solutionDesc: 'Diseñamos una plataforma centralizada donde tu equipo consulta y actualiza todo en tiempo real.',
      badge: '0% datos duplicados o perdidos',
      color: 'text-teal-600',
      bg: 'bg-teal-50',
    },
    {
      id: 'custom-system',
      icon: Sliders,
      title: '¿Necesitas un sistema hecho específicamente a la medida de tu empresa?',
      subtitle: 'Los programas comerciales son rígidos, caros y no se adaptan a cómo trabajas.',
      solutionTitle: 'Desarrollo Hecho a la Medida',
      solutionDesc: 'Creamos soluciones exactas para tus operaciones y flujos reales, sin funciones innecesarias.',
      badge: 'Adaptado 100% a tu negocio',
      color: 'text-indigo-600',
      bg: 'bg-indigo-50',
    },
    {
      id: 'data-insights',
      icon: LineChart,
      title: '¿Tienes información pero no sabes cómo aprovecharla?',
      subtitle: 'Sabes cuánto vendes, pero no cuáles son tus productos más rentables ni tendencias.',
      solutionTitle: 'Dashboards y Análisis de Datos',
      solutionDesc: 'Creamos tableros visuales interactivos para convertir tus datos dispersos en decisiones claras.',
      badge: 'Claridad total de números',
      color: 'text-blue-600',
      bg: 'bg-blue-50',
    },
    {
      id: 'practical-ai',
      icon: Sparkles,
      title: '¿Quieres incorporar Inteligencia Artificial de forma práctica?',
      subtitle: 'Mucho ruido sobre IA pero pocas aplicaciones que realmente resuelvan problemas de negocio.',
      solutionTitle: 'Inteligencia Artificial Aplicada',
      solutionDesc: 'Integramos asistentes inteligentes y análisis predictivo para acelerar tu atención y operaciones.',
      badge: 'IA útil y orientada a resultados',
      color: 'text-teal-600',
      bg: 'bg-teal-50',
    },
    {
      id: 'system-evolution',
      icon: RefreshCw,
      title: '¿Ya tienes un sistema pero se quedó obsoleto o necesita mejoras?',
      subtitle: 'El desarrollador original ya no está, falla seguido o es difícil de actualizar.',
      solutionTitle: 'Mantenimiento, Modernización y Soporte',
      solutionDesc: 'Auditamos tu sistema actual, corregimos fallas, mejoramos su velocidad y lo hacemos evolucionar.',
      badge: 'Continuidad y tranquilidad',
      color: 'text-slate-700',
      bg: 'bg-slate-100',
    },
  ];

  return (
    <section id="problemas" className="py-20 sm:py-28 bg-white border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-nexora-blue text-xs font-bold uppercase tracking-wider mb-4">
            ¿Te suena familiar alguna de estas situaciones?
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            No vendemos código. <br className="hidden sm:block" />
            <span className="text-nexora-blue">Resolvemos los dolores diarios de tu empresa.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            La mayoría de las empresas pierden tiempo y dinero no por falta de esfuerzo, sino por herramientas desconectadas o anticuadas.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {problems.map((item) => {
            const Icon = item.icon;
            const isSelected = selectedProblem === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedProblem(isSelected ? null : item.id)}
                className={`group rounded-3xl p-6 sm:p-7 border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-blue-50/50 border-nexora-blue shadow-lg ring-1 ring-nexora-blue'
                    : 'bg-slate-50/50 border-slate-200/80 hover:bg-white hover:border-slate-300 hover:shadow-soft-hover'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${item.bg} ${item.color} shadow-sm group-hover:scale-110 transition-transform duration-200`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-200/70 text-slate-700">
                      Situación real
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>

                {/* Solution Reveal Box */}
                <div className="pt-4 border-t border-slate-200/80">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-nexora-blue mb-1">
                    <CheckCircle className="w-4 h-4 text-nexora-cyan shrink-0" />
                    <span>Con NEXORA: {item.solutionTitle}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    {item.solutionDesc}
                  </p>
                  <div className="inline-block text-[11px] font-semibold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200/60">
                    ✨ {item.badge}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 to-nexora-navy text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-1">¿Identificaste tu problema en esta lista?</h3>
            <p className="text-slate-300 text-sm sm:text-base">
              Platícanos tu caso. Te explicamos en 15 minutos cómo podemos resolverlo de forma simple.
            </p>
          </div>
          <button
            onClick={onOpenContact}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 transition-colors shadow"
          >
            <span>Consultar mi caso</span>
            <ArrowRight className="w-4 h-4 text-nexora-blue" />
          </button>
        </div>
      </div>
    </section>
  );
};
