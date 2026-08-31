import React, { useState } from 'react';
import { LayoutDashboard, Zap, Bot, BarChart3, Smartphone, Network, Sparkles } from 'lucide-react';
import { DemoEnterprise } from './DemoEnterprise';
import { DemoAutomation } from './DemoAutomation';
import { DemoAI } from './DemoAI';
import { DemoDashboard } from './DemoDashboard';
import { DemoMobileApp } from './DemoMobileApp';
import { DemoIntegration } from './DemoIntegration';

export const DemosSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const demoTabs = [
    {
      id: 0,
      title: 'Sistema Empresarial',
      short: 'ERP / Ventas',
      icon: LayoutDashboard,
      desc: 'Panel de ventas, clientes y control de operaciones.',
    },
    {
      id: 1,
      title: 'Automatización',
      short: 'Flujo en Vivo',
      icon: Zap,
      desc: 'Comparativa de proceso manual vs. automatización en 2 segundos.',
    },
    {
      id: 2,
      title: 'Inteligencia Artificial',
      short: 'Asistente IA',
      icon: Bot,
      desc: 'IA aplicada a resúmenes ejecutivos, clientes y alertas de stock.',
    },
    {
      id: 3,
      title: 'Dashboard de Datos',
      short: 'Métricas BI',
      icon: BarChart3,
      desc: 'Tableros ejecutivos interactivos con filtros de tiempo.',
    },
    {
      id: 4,
      title: 'App Móvil',
      short: 'Simulador App',
      icon: Smartphone,
      desc: 'Experiencia interactiva de pedidos en smartphone para clientes.',
    },
    {
      id: 5,
      title: 'Integración',
      short: 'Nodos Conectados',
      icon: Network,
      desc: 'Interconexión de CRM, inventario, facturación y tableros.',
    },
  ];

  return (
    <section id="demos" className="py-20 sm:py-28 bg-gradient-to-b from-slate-50 via-white to-blue-50/40 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100/80 text-nexora-blue text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-nexora-cyan" />
            <span>Laboratorio Interactivo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Mira lo que podemos hacer por tu empresa
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Experimenta con estas demostraciones interactivas reales. Cada botón responde y simula cómo construimos soluciones tecnológicas personalizadas.
          </p>
        </div>

        {/* Demo Tab Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-8">
          {demoTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`p-3.5 rounded-2xl text-left border transition-all duration-200 flex flex-col justify-between ${
                  isActive
                    ? 'bg-gradient-to-br from-nexora-blue to-nexora-blue-dark text-white border-transparent shadow-md shadow-blue-500/20 scale-[1.02]'
                    : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-700 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded ${isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'}`}>
                    0{tab.id + 1}
                  </span>
                </div>
                <div>
                  <div className={`text-xs font-bold leading-tight ${isActive ? 'text-white' : 'text-slate-900'}`}>
                    {tab.title}
                  </div>
                  <div className={`text-[10px] mt-0.5 truncate ${isActive ? 'text-blue-100' : 'text-slate-500'}`}>
                    {tab.short}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Demo Container */}
        <div className="transition-all duration-300">
          {activeTab === 0 && <DemoEnterprise />}
          {activeTab === 1 && <DemoAutomation />}
          {activeTab === 2 && <DemoAI />}
          {activeTab === 3 && <DemoDashboard />}
          {activeTab === 4 && <DemoMobileApp />}
          {activeTab === 5 && <DemoIntegration />}
        </div>
      </div>
    </section>
  );
};
