import React, { useState } from 'react';
import { TrendingUp, Users, DollarSign, ShoppingBag } from 'lucide-react';

export const DemoDashboard: React.FC = () => {
  const [period, setPeriod] = useState<'Semana' | 'Mes' | 'Año'>('Mes');

  const data = {
    Semana: {
      revenue: 48500,
      revenueDiff: '+12.5%',
      newClients: 14,
      avgTicket: 3460,
      conversionRate: '4.8%',
      bars: [
        { label: 'Lun', value: 65, amount: '$7,200' },
        { label: 'Mar', value: 45, amount: '$5,100' },
        { label: 'Mié', value: 80, amount: '$9,400' },
        { label: 'Jue', value: 70, amount: '$8,100' },
        { label: 'Vie', value: 95, amount: '$11,200' },
        { label: 'Sáb', value: 60, amount: '$7,500' },
      ],
      channels: [
        { name: 'Canal B2B / Empresas', share: '55%', color: 'bg-blue-600' },
        { name: 'Tienda en Línea', share: '30%', color: 'bg-teal-500' },
        { name: 'Ventas Mostrador', share: '15%', color: 'bg-slate-400' },
      ],
    },
    Mes: {
      revenue: 215400,
      revenueDiff: '+24.8%',
      newClients: 62,
      avgTicket: 3474,
      conversionRate: '5.2%',
      bars: [
        { label: 'Sem 1', value: 60, amount: '$42,000' },
        { label: 'Sem 2', value: 75, amount: '$51,400' },
        { label: 'Sem 3', value: 85, amount: '$58,000' },
        { label: 'Sem 4', value: 95, amount: '$64,000' },
      ],
      channels: [
        { name: 'Canal B2B / Empresas', share: '58%', color: 'bg-blue-600' },
        { name: 'Tienda en Línea', share: '28%', color: 'bg-teal-500' },
        { name: 'Ventas Mostrador', share: '14%', color: 'bg-slate-400' },
      ],
    },
    Año: {
      revenue: 2840000,
      revenueDiff: '+41.2%',
      newClients: 780,
      avgTicket: 3640,
      conversionRate: '5.9%',
      bars: [
        { label: 'Q1', value: 50, amount: '$520,000' },
        { label: 'Q2', value: 70, amount: '$680,000' },
        { label: 'Q3', value: 85, amount: '$790,000' },
        { label: 'Q4', value: 100, amount: '$850,000' },
      ],
      channels: [
        { name: 'Canal B2B / Empresas', share: '62%', color: 'bg-blue-600' },
        { name: 'Tienda en Línea', share: '25%', color: 'bg-teal-500' },
        { name: 'Ventas Mostrador', share: '13%', color: 'bg-slate-400' },
      ],
    },
  };

  const current = data[period];

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden p-5 sm:p-7">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800">
              Demo Interactiva 04
            </span>
            <span className="text-xs text-slate-500 font-medium">Visualización de Datos</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900">
            Dashboard Ejecutivo en Tiempo Real
          </h3>
        </div>

        {/* Period Switcher */}
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
          {(['Semana', 'Mes', 'Año'] as const).map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                period === p
                  ? 'bg-nexora-blue text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 my-6">
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
          <div className="flex items-center justify-between text-slate-500 text-xs mb-1 font-medium">
            <span>Ingresos ({period})</span>
            <DollarSign className="w-4 h-4 text-nexora-blue" />
          </div>
          <div className="text-xl sm:text-2xl font-extrabold text-slate-900">
            ${current.revenue.toLocaleString('es-MX')}
          </div>
          <span className="text-[11px] font-bold text-green-600">{current.revenueDiff} vs anterior</span>
        </div>

        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
          <div className="flex items-center justify-between text-slate-500 text-xs mb-1 font-medium">
            <span>Clientes Nuevos</span>
            <Users className="w-4 h-4 text-teal-600" />
          </div>
          <div className="text-xl sm:text-2xl font-extrabold text-slate-900">
            +{current.newClients}
          </div>
          <span className="text-[11px] font-bold text-teal-700">Adquisición continua</span>
        </div>

        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
          <div className="flex items-center justify-between text-slate-500 text-xs mb-1 font-medium">
            <span>Ticket Promedio</span>
            <ShoppingBag className="w-4 h-4 text-indigo-600" />
          </div>
          <div className="text-xl sm:text-2xl font-extrabold text-slate-900">
            ${current.avgTicket.toLocaleString('es-MX')}
          </div>
          <span className="text-[11px] font-bold text-indigo-600">Por transacción</span>
        </div>

        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
          <div className="flex items-center justify-between text-slate-500 text-xs mb-1 font-medium">
            <span>Conversión</span>
            <TrendingUp className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-xl sm:text-2xl font-extrabold text-slate-900">
            {current.conversionRate}
          </div>
          <span className="text-[11px] font-bold text-emerald-600">+0.8% optimizado</span>
        </div>
      </div>

      {/* Chart and Distribution Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Dynamic Bar Chart */}
        <div className="lg:col-span-2 p-5 rounded-2xl border border-slate-200 bg-slate-50/50">
          <div className="flex items-center justify-between mb-6">
            <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Evolución de Ventas ({period})
            </div>
            <span className="text-xs text-slate-500 font-medium">Monto estimado</span>
          </div>

          <div className="flex items-end justify-between gap-3 h-44 pt-4 px-2">
            {current.bars.map((bar, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                <span className="text-[10px] font-bold text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  {bar.amount}
                </span>
                <div
                  style={{ height: `${bar.value}%` }}
                  className="w-full max-w-[48px] rounded-t-xl bg-gradient-to-t from-nexora-blue to-blue-400 group-hover:from-nexora-blue-dark group-hover:to-teal-400 transition-all duration-300 shadow-sm"
                />
                <span className="text-xs font-bold text-slate-600">{bar.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Channel Distribution */}
        <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 flex flex-col justify-between">
          <div>
            <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-4">
              Ventas por Canal
            </div>
            <div className="space-y-4">
              {current.channels.map((ch, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-800">
                    <span>{ch.name}</span>
                    <span>{ch.share}</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
                    <div
                      style={{ width: ch.share }}
                      className={`h-full rounded-full ${ch.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200 mt-4 text-[11px] text-slate-500">
            📌 Tablero interactivo con datos demostrativos actualizados.
          </div>
        </div>
      </div>
    </div>
  );
};
