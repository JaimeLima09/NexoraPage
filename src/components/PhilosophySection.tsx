import React from 'react';
import { Target, CheckCircle2, ShieldCheck, TrendingUp, Sparkles, RefreshCw, Layers } from 'lucide-react';

interface PhilosophySectionProps {
  onOpenContact: () => void;
}

export const PhilosophySection: React.FC<PhilosophySectionProps> = ({ onOpenContact }) => {
  const lifecycleSteps = [
    { name: 'Desarrollo', desc: 'Construcción a la medida', icon: Layers },
    { name: 'Implementación', desc: 'Puesta en marcha sin fricción', icon: CheckCircle2 },
    { name: 'Soporte', desc: 'Acompañamiento continuo', icon: ShieldCheck },
    { name: 'Mejoras', desc: 'Optimización de procesos', icon: RefreshCw },
    { name: 'Automatización', desc: 'Nuevas eficiencias', icon: Sparkles },
    { name: 'Innovación', desc: 'Evolución con IA y datos', icon: TrendingUp },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Philosophy Card */}
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-nexora-navy to-slate-900 text-white p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden mb-16">
          {/* Subtle glowing accents */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-teal-300 text-xs font-bold uppercase tracking-wider mb-6 border border-white/10">
              <Target className="w-3.5 h-3.5 text-teal-400" />
              <span>Nuestra Filosofía de Trabajo</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6">
              No empezamos preguntando qué tecnología quieres.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">
                Empezamos preguntando qué problema quieres resolver.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
              Cada empresa funciona de manera diferente. Por eso no creemos en soluciones genéricas o plantillas rígidas que te obligan a cambiar la forma en que atiendes a tus clientes.
            </p>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
              Primero <strong className="text-white font-semibold">entendemos cómo funciona tu negocio</strong>, identificamos cuellos de botella y oportunidades, y después diseñamos la tecnología que realmente necesitas.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenContact}
                className="px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-nexora-blue to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white shadow-lg transition-all"
              >
                Cuéntanos tu problema empresarial
              </button>
            </div>
          </div>
        </div>

        {/* Long Term Partnership Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3">
            Socio Tecnológico a Largo Plazo
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
            Tu tecnología no debería quedarse estancada
          </h3>
          <p className="text-slate-600 text-sm sm:text-base">
            Tu empresa cambia. Tus clientes cambian. Tus necesidades cambian. Por eso nuestras soluciones están pensadas para evolucionar contigo en cada etapa.
          </p>
        </div>

        {/* Lifecycle Flow */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {lifecycleSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center flex flex-col items-center justify-between hover:bg-blue-50/50 hover:border-blue-200 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center text-nexora-blue group-hover:scale-110 transition-transform mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 group-hover:text-nexora-blue transition-colors">
                    {step.name}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5 leading-tight">
                    {step.desc}
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
