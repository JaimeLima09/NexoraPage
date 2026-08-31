import React, { useState } from 'react';
import {
  LayoutDashboard,
  Zap,
  Smartphone,
  Bot,
  BarChart3,
  ShieldCheck,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeFilter, setActiveFilter] = useState<'Todos' | 'Sistemas' | 'Automatización & IA' | 'Datos & Soporte'>('Todos');

  const solutions = [
    {
      id: 1,
      category: 'Sistemas',
      icon: LayoutDashboard,
      title: 'Sistemas Empresariales',
      desc: 'Centraliza inventarios, cotizaciones, ventas y clientes en una sola plataforma diseñada para tus flujos reales.',
      benefit: 'Mayor orden y control total de tus operaciones diarias.',
      features: ['Control de inventarios y stock', 'Gestión de clientes y pedidos', 'Acceso seguro con roles de usuario'],
      color: 'from-blue-600 to-indigo-600',
    },
    {
      id: 2,
      category: 'Automatización & IA',
      icon: Zap,
      title: 'Automatización de Procesos',
      desc: 'Elimina tareas manuales repetitivas. El sistema procesa pedidos, envía confirmaciones y actualiza registros al instante.',
      benefit: 'Ahorro de horas de trabajo diario y cero errores de captura.',
      features: ['Generación automática de folios y recibos', 'Sincronización de pedidos y correos', 'Alertas y avisos automáticos'],
      color: 'from-teal-500 to-teal-700',
    },
    {
      id: 3,
      category: 'Sistemas',
      icon: Smartphone,
      title: 'Aplicaciones Web y Móviles',
      desc: 'Herramientas interactivas para que tus clientes compren en línea o tu equipo trabaje desde su celular en campo.',
      benefit: 'Atención disponible en cualquier dispositivo sin instalaciones pesadas.',
      features: ['Portales para clientes y proveedores', 'Apps móviles para repartidores y ventas', 'Catálogos y pedidos digitales'],
      color: 'from-indigo-600 to-blue-700',
    },
    {
      id: 4,
      category: 'Automatización & IA',
      icon: Bot,
      title: 'Inteligencia Artificial Práctica',
      desc: 'Integramos asistentes inteligentes para responder preguntas frecuentes en WhatsApp y resumir información de tu negocio.',
      benefit: 'Atención a clientes 24/7 y respuestas rápidas y precisas.',
      features: ['Atención inteligente de WhatsApp', 'Resumen automático de reportes', 'Detección de patrones de compra'],
      color: 'from-teal-600 to-emerald-700',
    },
    {
      id: 5,
      category: 'Datos & Soporte',
      icon: BarChart3,
      title: 'Dashboards y Datos en Vivo',
      desc: 'Convierte hojas de cálculo dispersas en tableros visuales interactivos para conocer tus ingresos y rendimiento al momento.',
      benefit: 'Decisiones estratégicas basadas en números claros y actualizados.',
      features: ['Métricas de ventas en tiempo real', 'Comparativas por mes y canal', 'Exportación de reportes ejecutivos'],
      color: 'from-blue-600 to-teal-600',
    },
    {
      id: 6,
      category: 'Datos & Soporte',
      icon: ShieldCheck,
      title: 'Integración, Seguridad y Soporte',
      desc: 'Conectamos tus sistemas actuales, respaldamos tu información en la nube y te acompañamos para seguir mejorando.',
      benefit: 'Tranquilidad técnica con un equipo de cabecera que respalda tu negocio.',
      features: ['Conexión entre diferentes herramientas', 'Copias de seguridad automáticas', 'Soporte y evolución continua'],
      color: 'from-slate-700 to-slate-900',
    },
  ];

  const filtered = activeFilter === 'Todos'
    ? solutions
    : solutions.filter((s) => s.category === activeFilter);

  return (
    <section id="servicios" className="py-16 sm:py-24 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-nexora-blue text-xs font-bold uppercase tracking-wider mb-3">
            Soluciones a la Medida
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            ¿Cómo podemos ayudar a tu empresa?
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Diseñamos e implementamos la tecnología que tu negocio necesita para operar mejor.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {(['Todos', 'Sistemas', 'Automatización & IA', 'Datos & Soporte'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeFilter === cat
                  ? 'bg-nexora-blue text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((sol) => {
            const Icon = sol.icon;
            return (
              <div
                key={sol.id}
                className="bg-slate-50/60 rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:bg-white hover:border-slate-300 hover:shadow-soft-hover transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white bg-gradient-to-br ${sol.color} shadow-xs group-hover:scale-105 transition-transform`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200/60">
                      {sol.category}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 group-hover:text-nexora-blue transition-colors">
                    {sol.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                    {sol.desc}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-slate-200/70 space-y-3">
                  <div className="space-y-1.5">
                    {sol.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-nexora-cyan shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => onSelectService(sol.title)}
                    className="w-full mt-2 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-bold text-nexora-blue hover:text-white bg-blue-50 hover:bg-nexora-blue transition-all"
                  >
                    <span>Quiero esta solución</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
