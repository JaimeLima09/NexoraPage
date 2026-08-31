import React from 'react';
import { ArrowRight, Sparkles, Play, ShieldCheck, Clock, CheckCircle } from 'lucide-react';

interface FinalCTASectionProps {
  onOpenContact: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onOpenContact }) => {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-slate-50 via-blue-50/60 to-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white border border-blue-200/80 p-8 sm:p-14 lg:p-16 shadow-xl relative overflow-hidden text-center">
          {/* Subtle background glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl -z-10 pointer-events-none" />
          <div className="absolute -bottom-24 right-10 w-72 h-72 bg-teal-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-nexora-blue text-xs font-bold uppercase tracking-wider border border-blue-200/60 shadow-xs">
              <Sparkles className="w-4 h-4 text-nexora-cyan" />
              <span>Da el primer paso hoy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              ¿Tienes un problema que podría resolverse con tecnología?
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Cuéntanos qué sucede en tu empresa. Nosotros nos encargamos de analizarlo, encontrar oportunidades y construir la solución que necesitas.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-nexora-blue to-nexora-blue-dark hover:from-nexora-blue-dark hover:to-blue-900 shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30 transition-all transform hover:-translate-y-0.5"
              >
                <span>Hablemos de tu proyecto</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="#demos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all"
              >
                <Play className="w-4 h-4 text-nexora-blue fill-nexora-blue/20" />
                <span>Explorar demos interactivas</span>
              </a>
            </div>

            {/* Reassurance points */}
            <div className="pt-8 border-t border-slate-100 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-nexora-cyan" />
                <span>Diagnóstico inicial sin costo</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-nexora-cyan" />
                <span>Respuesta en menos de 24 horas</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-nexora-cyan" />
                <span>Confidencialidad garantizada</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
