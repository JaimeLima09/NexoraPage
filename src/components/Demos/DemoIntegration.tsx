import React, { useState } from 'react';
import { Users, Database, Layers, Receipt, BarChart3, ArrowRight, CheckCircle2, Play } from 'lucide-react';

interface NodeItem {
  id: string;
  name: string;
  category: string;
  icon: any;
  desc: string;
  sends: string;
  color: string;
}

export const DemoIntegration: React.FC = () => {
  const nodes: NodeItem[] = [
    {
      id: 'cliente',
      name: '1. Cliente / Pedido',
      category: 'Canal de Entrada',
      icon: Users,
      desc: 'El cliente compra por la tienda web o envía su pedido por WhatsApp.',
      sends: 'Envía datos del cliente, productos y monto.',
      color: 'border-blue-500 bg-blue-50 text-blue-700',
    },
    {
      id: 'crm',
      name: '2. CRM & Contacto',
      category: 'Gestión',
      icon: Layers,
      desc: 'Registra o actualiza el historial del cliente y etiqueta su nivel de fidelidad.',
      sends: 'Genera folio y asigna vendedor responsable.',
      color: 'border-indigo-500 bg-indigo-50 text-indigo-700',
    },
    {
      id: 'inventario',
      name: '3. Inventario en Vivo',
      category: 'Operaciones',
      icon: Database,
      desc: 'Descuenta existencias al instante y aparta el lote en bodega.',
      sends: 'Envía orden de surtido y alerta si el stock es bajo.',
      color: 'border-teal-500 bg-teal-50 text-teal-700',
    },
    {
      id: 'facturacion',
      name: '4. Facturación / Cobro',
      category: 'Finanzas',
      icon: Receipt,
      desc: 'Valida el pago y emite la factura o recibo fiscal automáticamente.',
      sends: 'Envía PDF/XML por correo al cliente sin intervención humana.',
      color: 'border-amber-500 bg-amber-50 text-amber-700',
    },
    {
      id: 'dashboard',
      name: '5. Dashboard Directivo',
      category: 'Toma de Decisiones',
      icon: BarChart3,
      desc: 'Suma la utilidad a las métricas del mes en la pantalla del director.',
      sends: 'Calcula rentabilidad y actualiza proyecciones.',
      color: 'border-emerald-500 bg-emerald-50 text-emerald-700',
    },
  ];

  const [activeNode, setActiveNode] = useState<NodeItem>(nodes[0]);
  const [animatingAll, setAnimatingAll] = useState<boolean>(false);

  const simulateFullFlow = () => {
    if (animatingAll) return;
    setAnimatingAll(true);

    nodes.forEach((node, idx) => {
      setTimeout(() => {
        setActiveNode(node);
        if (idx === nodes.length - 1) {
          setAnimatingAll(false);
        }
      }, idx * 900);
    });
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden p-5 sm:p-7">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-sky-100 text-sky-800">
              Demo Interactiva 06
            </span>
            <span className="text-xs text-slate-500 font-medium">Interconexión de Sistemas</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900">
            Ecosistema de Sistemas Conectados en Tiempo Real
          </h3>
        </div>

        <button
          onClick={simulateFullFlow}
          disabled={animatingAll}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-white bg-nexora-blue hover:bg-nexora-blue-dark shadow-sm transition-all"
        >
          <Play className={`w-4 h-4 fill-white ${animatingAll ? 'animate-spin' : ''}`} />
          <span>{animatingAll ? 'Transmitiendo datos...' : 'Simular Flujo Completo'}</span>
        </button>
      </div>

      {/* Connected Nodes Diagram */}
      <div className="my-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3 relative">
          {nodes.map((node, index) => {
            const Icon = node.icon;
            const isSelected = activeNode.id === node.id;
            return (
              <button
                key={node.id}
                onClick={() => setActiveNode(node)}
                className={`p-4 rounded-2xl border-2 text-left transition-all duration-300 relative flex flex-col justify-between ${
                  isSelected
                    ? `${node.color} shadow-lg scale-105 ring-2 ring-blue-400/30 z-10`
                    : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className={`p-2 rounded-xl ${isSelected ? 'bg-white shadow-xs' : 'bg-slate-200'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      Paso 0{index + 1}
                    </span>
                  </div>
                  <div className="font-bold text-xs sm:text-sm text-slate-900 mb-0.5">
                    {node.name}
                  </div>
                  <div className="text-[11px] text-slate-500 truncate">
                    {node.category}
                  </div>
                </div>

                {isSelected && (
                  <div className="mt-3 pt-2 border-t border-current/20 flex items-center gap-1 text-[10px] font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Nodo Activo</span>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Node Explanation Box */}
      <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50/40 border border-slate-200 space-y-3">
        <div className="flex items-center justify-between">
          <div className="text-xs font-bold uppercase tracking-wider text-nexora-blue">
            Detalle de Integración: {activeNode.category}
          </div>
          <span className="text-xs font-bold text-slate-600">Sincronización instantánea</span>
        </div>

        <h4 className="text-lg font-bold text-slate-900">
          {activeNode.name}
        </h4>

        <p className="text-sm text-slate-600 leading-relaxed">
          {activeNode.desc}
        </p>

        <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-start gap-2 text-xs text-slate-700">
          <ArrowRight className="w-4 h-4 text-nexora-cyan shrink-0 mt-0.5" />
          <div>
            <strong className="text-slate-900">Flujo automático de información:</strong> {activeNode.sends}
          </div>
        </div>
      </div>

      <div className="mt-4 text-center text-xs text-slate-500">
        💡 En NEXORA hacemos que todas las herramientas de tu empresa trabajen juntas sin errores humanos ni doble captura.
      </div>
    </div>
  );
};
