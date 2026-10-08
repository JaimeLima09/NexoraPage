import React from 'react';
import {
  LayoutDashboard,
  Zap,
  Smartphone,
  Bot,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="servicios" className="py-20 sm:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-nexora-blue text-xs font-bold uppercase tracking-wider mb-3 border border-blue-200/60">
            <Sparkles className="w-3.5 h-3.5 text-nexora-cyan" />
            <span>Soluciones a la Medida</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Tecnología diseñada para resolver los retos de tu empresa
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            No adaptamos tu negocio a un programa genérico. Construimos la solución exacta que necesitas para operar con mayor velocidad, orden y rentabilidad.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Bento Card 1: Featured Large ERP Card (7 cols) */}
          <div className="md:col-span-12 lg:col-span-7 bg-gradient-to-br from-slate-900 via-slate-900 to-nexora-navy text-white rounded-3xl p-7 sm:p-9 shadow-xl relative overflow-hidden flex flex-col justify-between group">
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-blue-600/80 backdrop-blur-md text-white flex items-center justify-center shadow-md">
                  <LayoutDashboard className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/10 text-teal-300 border border-white/10">
                  Principal
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
                  Sistemas Empresariales & ERP a la Medida
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                  Centraliza inventarios, cotizaciones, pedidos, facturación y control de personal en una sola plataforma creada para cómo trabaja tu empresa hoy.
                </p>
              </div>

              {/* Feature Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                <div className="flex items-center gap-2 text-xs text-slate-200 bg-white/5 border border-white/10 p-2.5 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Control de stock en tiempo real</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200 bg-white/5 border border-white/10 p-2.5 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Permisos de usuario y auditoría</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200 bg-white/5 border border-white/10 p-2.5 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Reportes automáticos de venta</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200 bg-white/5 border border-white/10 p-2.5 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Acceso seguro desde la nube</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-bold text-teal-300">💡 0% información duplicada o perdida</span>
              <button
                onClick={() => onSelectService('Sistemas Empresariales')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 transition-all shadow-sm"
              >
                <span>Consultar esta solución</span>
                <ArrowRight className="w-3.5 h-3.5 text-nexora-blue" />
              </button>
            </div>
          </div>

          {/* Bento Card 2: Automatización de Procesos (5 cols) */}
          <div className="md:col-span-12 lg:col-span-5 bg-teal-50/50 rounded-3xl p-7 sm:p-8 border border-teal-200/80 shadow-xs hover:shadow-soft-hover transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-600 text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                  <Zap className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-teal-100 text-teal-800 border border-teal-200">
                  ⚡ 2 segundos / tarea
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                Automatización de Procesos
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Eliminamos la captura manual repetitiva. El sistema procesa pedidos, envía confirmaciones por WhatsApp y correo, y actualiza el stock automáticamente.
              </p>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span>Emisión automática de recibos y folios</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span>Alertas y recordatorios programados</span>
                </div>
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-teal-200/60 flex items-center justify-between">
              <span className="text-xs font-bold text-teal-700">+80% tiempo ahorrado</span>
              <button
                onClick={() => onSelectService('Automatización de Procesos')}
                className="text-xs font-bold text-teal-700 hover:text-teal-900 flex items-center gap-1"
              >
                <span>Detalles</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Bento Card 3: Aplicaciones Web & Móviles (4 cols) */}
          <div className="md:col-span-6 lg:col-span-4 bg-slate-50/70 rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:bg-white hover:border-slate-300 hover:shadow-soft-hover transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-xs mb-4 group-hover:scale-105 transition-transform">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1.5">
                Apps Web & Móviles
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Portales web para clientes y aplicaciones para vendedores o técnicos en ruta, optimizadas para Android y web.
              </p>
              <div className="text-[11px] font-semibold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-lg inline-block border border-indigo-100">
                📲 Operación en campo 24/7
              </div>
            </div>

            <button
              onClick={() => onSelectService('Aplicaciones Web y Móviles')}
              className="mt-4 pt-3 border-t border-slate-200/70 w-full text-left text-xs font-bold text-nexora-blue hover:underline flex items-center justify-between"
            >
              <span>Solicitar aplicación</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Bento Card 4: Inteligencia Artificial Práctica (4 cols) */}
          <div className="md:col-span-6 lg:col-span-4 bg-purple-50/40 rounded-3xl p-6 sm:p-7 border border-purple-200/70 hover:bg-white hover:border-purple-300 hover:shadow-soft-hover transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-purple-600 text-white flex items-center justify-center shadow-xs mb-4 group-hover:scale-105 transition-transform">
                <Bot className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1.5">
                Inteligencia Artificial Práctica
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Asistentes automáticos en WhatsApp para resolver dudas de clientes al instante y resúmenes ejecutivos de desempeño.
              </p>
              <div className="text-[11px] font-semibold text-purple-700 bg-purple-100/70 px-2.5 py-1 rounded-lg inline-block border border-purple-200">
                🤖 Respuestas en 2 segundos
              </div>
            </div>

            <button
              onClick={() => onSelectService('Inteligencia Artificial Aplicada')}
              className="mt-4 pt-3 border-t border-purple-200/70 w-full text-left text-xs font-bold text-purple-700 hover:underline flex items-center justify-between"
            >
              <span>Integrar IA</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Bento Card 5: Dashboards & Datos en Vivo (4 cols) */}
          <div className="md:col-span-12 lg:col-span-4 bg-slate-50/70 rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:bg-white hover:border-slate-300 hover:shadow-soft-hover transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-xs mb-4 group-hover:scale-105 transition-transform">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1.5">
                Dashboards & Datos en Vivo
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Convierte datos dispersos en tableros gráficos para conocer tus ingresos, productos estrella y métricas de rentabilidad.
              </p>
              <div className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-lg inline-block border border-blue-100">
                📊 Decisiones con certeza
              </div>
            </div>

            <button
              onClick={() => onSelectService('Dashboards y Datos')}
              className="mt-4 pt-3 border-t border-slate-200/70 w-full text-left text-xs font-bold text-nexora-blue hover:underline flex items-center justify-between"
            >
              <span>Crear dashboard</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
