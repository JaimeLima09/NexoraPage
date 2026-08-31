import React from 'react';
import { ArrowRight, Play, TrendingUp, Zap } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-slate-50">
      {/* Background subtle gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-blue-100/40 via-teal-50/30 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headline & Action */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Concentric Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-blue-200/80 text-nexora-blue-dark text-xs sm:text-sm font-semibold shadow-xs">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-nexora-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-nexora-cyan"></span>
              </span>
              <span>Socio Tecnológico para Empresas</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Tecnología que{' '}
              <span className="bg-gradient-to-r from-nexora-blue via-blue-600 to-nexora-cyan bg-clip-text text-transparent">
                impulsa tu negocio
              </span>
            </h1>

            {/* Clear, simple subtitle */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Desarrollamos sistemas empresariales, automatizaciones y aplicaciones a la medida para que tu empresa trabaje de forma más rápida, organizada y rentable.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-nexora-blue to-nexora-blue-dark hover:from-nexora-blue-dark hover:to-blue-900 shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>Hablemos de tu proyecto</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#demos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-xs hover:border-slate-300 transition-all duration-200"
              >
                <Play className="w-4 h-4 text-nexora-blue fill-nexora-blue/20" />
                <span>Ver demostraciones en vivo</span>
              </a>
            </div>

            {/* Quick Value Metrics */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-slate-200/70 max-w-lg mx-auto lg:mx-0">
              <div className="text-left">
                <div className="text-lg sm:text-xl font-extrabold text-slate-900">+80%</div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-medium leading-tight">Tiempo ahorrado</div>
              </div>
              <div className="text-left">
                <div className="text-lg sm:text-xl font-extrabold text-nexora-blue">100%</div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-medium leading-tight">A tu medida</div>
              </div>
              <div className="text-left">
                <div className="text-lg sm:text-xl font-extrabold text-teal-700">24/7</div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-medium leading-tight">Control en vivo</div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with Interactive Floating Badges */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 bg-white group">
              <img
                src="/images/hero_tech.jpg"
                alt="Ecosistema tecnológico empresarial NEXORA"
                className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
              />

              {/* Floating Glassmorphism Tag 1 */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-slate-100 shadow-md flex items-center gap-2.5 animate-float-slow">
                <div className="w-7 h-7 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
                  <Zap className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-[11px] font-bold text-slate-900 leading-tight">Flujo Automático</div>
                  <div className="text-[10px] text-teal-700 font-semibold">Procesado en 2s</div>
                </div>
              </div>

              {/* Floating Glassmorphism Tag 2 */}
              <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-slate-100 shadow-md flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-xl bg-blue-50 text-nexora-blue flex items-center justify-center">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-[11px] font-bold text-slate-900 leading-tight">Datos en Tiempo Real</div>
                  <div className="text-[10px] text-nexora-blue font-semibold">Información centralizada</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
