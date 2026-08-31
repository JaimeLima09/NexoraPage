import React, { useState } from 'react';
import { UtensilsCrossed, Truck, Briefcase, ShoppingBag, Factory, CheckCircle2 } from 'lucide-react';

export const UseCasesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const cases = [
    {
      id: 0,
      sector: 'Restaurante & Gastronomía',
      icon: UtensilsCrossed,
      title: 'Digitalización completa de órdenes y cocina',
      problem: 'Comandas en papel perdidas, cuentas mal cobradas y retrasos en horas pico.',
      solution: 'Menú digital QR para clientes, comandera táctil en cocina y cuadre de caja automático al cierre de turno.',
      results: [
        'Atención 35% más rápida en mesas',
        '0 comandas traspapeladas',
        'Inventario de ingredientes al día',
      ],
      tag: 'Sector Alimentos',
    },
    {
      id: 1,
      sector: 'Distribuidora & Logística',
      icon: Truck,
      title: 'Control centralizado de rutas, pedidos e inventario',
      problem: 'Vendedores tomando pedidos por WhatsApp sin saber si había stock en bodega.',
      solution: 'App móvil para vendedores con catálogo y existencias en tiempo real + ruta optimizada de entrega.',
      results: [
        'Entregas a tiempo aumentaron 40%',
        'Cero pedidos cancelados por falta de stock',
        'Facturación instantánea al entregar',
      ],
      tag: 'Sector Logístico',
    },
    {
      id: 2,
      sector: 'Empresa de Servicios Profesionales',
      icon: Briefcase,
      title: 'Automatización de cotizaciones y seguimiento de clientes',
      problem: 'Cotizaciones tardaban hasta 3 días en enviarse y se perdían prospectos por falta de seguimiento.',
      solution: 'Generador de cotizaciones en 2 clics con envío automático por PDF y recordatorios programados.',
      results: [
        'Cotizaciones enviadas en menos de 5 minutos',
        'Tasa de cierre aumentó 28%',
        'Seguimiento automático a los 3 y 7 días',
      ],
      tag: 'Sector Servicios',
    },
    {
      id: 3,
      sector: 'Comercio & Retail',
      icon: ShoppingBag,
      title: 'Sincronización de tienda física y comercio electrónico',
      problem: 'Vender el mismo producto en sucursal y en línea por falta de actualización de existencias.',
      solution: 'Sistema unificado de inventario que descuenta productos al segundo de cualquier canal.',
      results: [
        'Inventario 100% exacto',
        'Apertura de ventas nacionales por internet',
        'Métricas de productos más vendidos en tiempo real',
      ],
      tag: 'Sector Comercio',
    },
    {
      id: 4,
      sector: 'Empresa Industrial & Manufactura',
      icon: Factory,
      title: 'Digitalización de órdenes de trabajo y mantenimiento',
      problem: 'Bitácoras en papel imposibles de auditar y demoras en reporte de fallas de maquinaria.',
      solution: 'Plataforma web y tabletas para registro de mantenimiento preventivo y alertas de incidencias.',
      results: [
        'Reducción de tiempos muertos en un 22%',
        'Historial de maquinaria accesible al instante',
        'Reportes de cumplimiento automáticos',
      ],
      tag: 'Sector Manufactura',
    },
  ];

  const current = cases[activeTab];
  const CurrentIcon = current.icon;

  return (
    <section id="casos" className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100/80 text-nexora-blue text-xs font-bold uppercase tracking-wider mb-4">
            Ejemplos Ilustrativos
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Casos de aplicación en distintas industrias
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Mira cómo la tecnología personalizada resuelve retos concretos sin importar el giro de tu empresa.
          </p>
        </div>

        {/* Sector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {cases.map((c) => {
            const Icon = c.icon;
            const isActive = activeTab === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setActiveTab(c.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{c.sector}</span>
              </button>
            );
          })}
        </div>

        {/* Active Case Detail Box */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-nexora-blue flex items-center justify-center shadow-xs">
                <CurrentIcon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200">
                  {current.tag}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">
                  {current.title}
                </h3>
              </div>
            </div>

            <span className="text-[11px] font-semibold text-slate-400">
              * Escenario ilustrativo de solución
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-100 space-y-1.5">
              <div className="text-xs font-bold text-rose-800 uppercase tracking-wider">
                El Reto Común
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {current.problem}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-100 space-y-1.5">
              <div className="text-xs font-bold text-teal-800 uppercase tracking-wider">
                La Solución NEXORA
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {current.solution}
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
              Resultados Conseguidos:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {current.results.map((res, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-nexora-cyan shrink-0" />
                  <span>{res}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
