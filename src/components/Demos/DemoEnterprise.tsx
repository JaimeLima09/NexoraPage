import React, { useState } from 'react';
import { Plus, UserPlus, DollarSign, ShoppingCart, Users, CheckCircle, Clock, Truck, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface SaleRecord {
  id: string;
  client: string;
  product: string;
  amount: number;
  status: 'Completado' | 'En proceso' | 'Enviado';
  date: string;
}

export const DemoEnterprise: React.FC = () => {
  const [sales, setSales] = useState<SaleRecord[]>([
    { id: 'FAC-1082', client: 'Abarrotes San Miguel', product: 'Lote de Distribución #12', amount: 14500, status: 'Completado', date: 'Hoy, 10:30 am' },
    { id: 'FAC-1081', client: 'Café & Bistro Roma', product: 'Suministros Mensuales', amount: 6800, status: 'En proceso', date: 'Hoy, 09:15 am' },
    { id: 'FAC-1080', client: 'Logística Monterrey', product: 'Paquete de Mantenimiento', amount: 22000, status: 'Enviado', date: 'Ayer, 04:45 pm' },
  ]);

  const [clientCount, setClientCount] = useState<number>(48);
  const [totalRevenue, setTotalRevenue] = useState<number>(43300);
  const [filter, setFilter] = useState<string>('Todos');

  const handleAddSale = () => {
    const clients = ['Farmacias del Centro', 'Consultores Delta', 'Restaurante Los Arcos', 'Ferretería Nacional', 'Grupo Textil'];
    const products = ['Servicio Premium', 'Lote de Reposición', 'Licencias de Software', 'Paquete Operativo'];
    const randomClient = clients[Math.floor(Math.random() * clients.length)];
    const randomProduct = products[Math.floor(Math.random() * products.length)];
    const randomAmount = Math.floor(Math.random() * 15000) + 3500;
    const newId = `FAC-${1083 + sales.length}`;

    const newSale: SaleRecord = {
      id: newId,
      client: randomClient,
      product: randomProduct,
      amount: randomAmount,
      status: 'En proceso',
      date: 'Justo ahora',
    };

    setSales([newSale, ...sales]);
    setTotalRevenue((prev) => prev + randomAmount);

    confetti({
      particleCount: 30,
      spread: 50,
      origin: { y: 0.7 },
      colors: ['#2563eb', '#00bfa5', '#3b82f6'],
    });
  };

  const handleAddClient = () => {
    setClientCount((prev) => prev + 1);
  };

  const toggleStatus = (index: number) => {
    const statuses: SaleRecord['status'][] = ['En proceso', 'Enviado', 'Completado'];
    setSales((prev) =>
      prev.map((item, i) => {
        if (i === index) {
          const nextIdx = (statuses.indexOf(item.status) + 1) % statuses.length;
          return { ...item, status: statuses[nextIdx] };
        }
        return item;
      })
    );
  };

  const filteredSales = filter === 'Todos' ? sales : sales.filter((s) => s.status === filter);

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden p-5 sm:p-7">
      {/* Demo Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800">
              Demo Interactiva 01
            </span>
            <span className="text-xs text-slate-500 font-medium">Prueba haciendo clic en los botones</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900">
            Panel de Ventas y Gestión Operativa
          </h3>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={handleAddSale}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-white bg-nexora-blue hover:bg-nexora-blue-dark shadow-sm transition-all transform active:scale-95"
          >
            <Plus className="w-4 h-4" />
            <span>Registrar Venta</span>
          </button>
          <button
            onClick={handleAddClient}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
          >
            <UserPlus className="w-4 h-4 text-nexora-cyan" />
            <span>+1 Cliente</span>
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 my-6">
        <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100">
          <div className="flex items-center justify-between text-blue-600 mb-1">
            <span className="text-xs font-semibold">Ventas del Mes</span>
            <DollarSign className="w-4 h-4" />
          </div>
          <div className="text-xl sm:text-2xl font-extrabold text-slate-900">
            ${totalRevenue.toLocaleString('es-MX')} MXN
          </div>
          <span className="text-[11px] text-green-600 font-bold">▲ +18.4% vs mes anterior</span>
        </div>

        <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-100">
          <div className="flex items-center justify-between text-teal-600 mb-1">
            <span className="text-xs font-semibold">Clientes Activos</span>
            <Users className="w-4 h-4" />
          </div>
          <div className="text-xl sm:text-2xl font-extrabold text-slate-900">
            {clientCount} empresas
          </div>
          <span className="text-[11px] text-teal-700 font-bold">● Todos sincronizados</span>
        </div>

        <div className="p-4 rounded-2xl bg-indigo-50/50 border border-indigo-100">
          <div className="flex items-center justify-between text-indigo-600 mb-1">
            <span className="text-xs font-semibold">Pedidos Totales</span>
            <ShoppingCart className="w-4 h-4" />
          </div>
          <div className="text-xl sm:text-2xl font-extrabold text-slate-900">
            {sales.length} registrados
          </div>
          <span className="text-[11px] text-indigo-600 font-bold">Actualizado en vivo</span>
        </div>

        <div className="p-4 rounded-2xl bg-slate-100/70 border border-slate-200">
          <div className="flex items-center justify-between text-slate-600 mb-1">
            <span className="text-xs font-semibold">Eficiencia</span>
            <Sparkles className="w-4 h-4 text-amber-500" />
          </div>
          <div className="text-xl sm:text-2xl font-extrabold text-slate-900">
            99.4%
          </div>
          <span className="text-[11px] text-slate-600 font-medium">0 duplicados</span>
        </div>
      </div>

      {/* Table Filter Selector */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className="text-xs font-bold text-slate-700">Registros Recientes</span>
        <div className="flex items-center gap-1">
          {['Todos', 'Completado', 'En proceso', 'Enviado'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${
                filter === f
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Sales Table */}
      <div className="overflow-x-auto rounded-2xl border border-slate-200">
        <table className="w-full text-left text-xs sm:text-sm">
          <thead className="bg-slate-100 text-slate-700 font-bold uppercase text-[11px]">
            <tr>
              <th className="py-3 px-4">Folio</th>
              <th className="py-3 px-4">Cliente</th>
              <th className="py-3 px-4 hidden sm:table-cell">Concepto</th>
              <th className="py-3 px-4">Monto</th>
              <th className="py-3 px-4 text-center">Estado (Clic para cambiar)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filteredSales.map((sale, idx) => (
              <tr key={sale.id} className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3 px-4 font-mono font-bold text-nexora-blue">
                  {sale.id}
                </td>
                <td className="py-3 px-4 font-semibold text-slate-900">
                  {sale.client}
                </td>
                <td className="py-3 px-4 text-slate-500 hidden sm:table-cell">
                  {sale.product}
                </td>
                <td className="py-3 px-4 font-bold text-slate-900">
                  ${sale.amount.toLocaleString('es-MX')}
                </td>
                <td className="py-3 px-4 text-center">
                  <button
                    onClick={() => toggleStatus(idx)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-transform active:scale-95 ${
                      sale.status === 'Completado'
                        ? 'bg-green-100 text-green-800'
                        : sale.status === 'En proceso'
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    {sale.status === 'Completado' && <CheckCircle className="w-3.5 h-3.5" />}
                    {sale.status === 'En proceso' && <Clock className="w-3.5 h-3.5" />}
                    {sale.status === 'Enviado' && <Truck className="w-3.5 h-3.5" />}
                    <span>{sale.status}</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500 flex items-center justify-between">
        <span>💡 Este es un ejemplo conceptual de sistema administrativo a la medida.</span>
        <span className="font-semibold text-nexora-blue">Datos 100% interactivos</span>
      </div>
    </div>
  );
};
