import React, { useState } from 'react';
import { Bot, Sparkles, Copy, Check, BarChart2, MessageSquare, AlertCircle, Lightbulb } from 'lucide-react';

interface PromptPreset {
  id: string;
  label: string;
  icon: any;
  prompt: string;
  response: string;
  insight: string;
}

export const DemoAI: React.FC = () => {
  const presets: PromptPreset[] = [
    {
      id: 'resumen-ventas',
      label: 'Resumir ventas semanales',
      icon: BarChart2,
      prompt: 'Analiza las ventas de esta semana y dime qué debemos priorizar.',
      response: `📊 **Resumen Ejecutivo Semanal:**
• **Ventas Totales:** $184,200 MXN (+14.2% vs semana pasada).
• **Producto Estrella:** Paquete Distribución Pro (42% de los ingresos).
• **Punto de Atención:** El canal minorista cayó un 6% los días martes y miércoles debido a demoras en tiempos de respuesta por WhatsApp.

💡 **Recomendación NEXORA:** Activar la respuesta automática con confirmación de stock para recuperar hasta $18,000 MXN semanales en ventas desatendidas.`,
      insight: 'Ahorro de 3 horas de análisis en Excel.',
    },
    {
      id: 'atencion-cliente',
      label: 'Responder a cliente insatisfecho',
      icon: MessageSquare,
      prompt: 'Redacta una respuesta empática y profesional para un cliente cuyo paquete llegó con 1 día de retraso.',
      response: `Estimado/a [Nombre del Cliente],

Lamentamos sinceramente el retraso en la entrega de su pedido. En NEXORA y nuestro equipo nos tomamos muy en serio su tiempo y su confianza.

Para compensar el inconveniente, hemos acreditado un cupón de 15% de descuento en su próxima orden (Folio: COMPENSA-2026) y asignamos prioridad máxima a sus futuros envíos.

Quedo personalmente a sus órdenes para cualquier duda adicional.

Atentamente,
Equipo de Atención al Cliente`,
      insight: 'Respuesta profesional generada en 2 segundos.',
    },
    {
      id: 'inventario-alerta',
      label: 'Detectar riesgo de inventario',
      icon: AlertCircle,
      prompt: 'Revisa las existencias actuales y detecta productos que puedan agotarse en los próximos 5 días.',
      response: `⚠️ **Alerta Preventiva de Inventario:**
1. **Café Tueste Oscuro 1kg:** Quedan 18 unidades. Tasa de consumo: 6 unidades/día. Se agotará en **3 días**.
2. **Empaques Ecológicos Medianos:** Quedan 45 piezas. Tasa de consumo: 12 unidades/día. Se agotará en **3.5 días**.

✅ **Acción sugerida:** Generar orden de compra automática a los proveedores 'Distribuidora del Norte' y 'EcoPack' hoy antes de las 3:00 PM.`,
      insight: 'Prevención de pérdidas por desabasto.',
    },
    {
      id: 'estrategia-crecimiento',
      label: 'Estrategias para aumentar ventas',
      icon: Lightbulb,
      prompt: '¿Qué 3 acciones tecnológicas podemos implementar para subir el ticket promedio un 20%?',
      response: `🚀 **3 Estrategias Prácticas:**
1. **Venta Cruzada en Checkout:** Sugerir automáticamente insumos complementarios con 10% de descuento cuando el cliente agrega productos base.
2. **Recordatorios de Recompra por WhatsApp:** Mensaje automático a los 25 días a clientes recurrentes para renovar sus consumibles habituales.
3. **Catálogo Digital B2B:** Permitir que tus clientes corporativos reordenen en 2 clics con su historial guardado.`,
      insight: 'Ideas de alto impacto listas para implementar.',
    },
  ];

  const [activePreset, setActivePreset] = useState<PromptPreset>(presets[0]);
  const [displayText, setDisplayText] = useState<string>(presets[0].response);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const handleSelectPreset = (preset: PromptPreset) => {
    setActivePreset(preset);
    setIsTyping(true);
    setDisplayText('');

    let index = 0;
    const fullText = preset.response;
    const interval = setInterval(() => {
      index += 4;
      if (index >= fullText.length) {
        setDisplayText(fullText);
        setIsTyping(false);
        clearInterval(interval);
      } else {
        setDisplayText(fullText.slice(0, index));
      }
    }, 15);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(displayText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden p-5 sm:p-7">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-100 text-purple-800">
              Demo Interactiva 03
            </span>
            <span className="text-xs text-slate-500 font-medium">Asistente Corporativo Simulado</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900">
            Inteligencia Artificial Integrada a tus Procesos
          </h3>
        </div>

        <div className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-purple-50 text-purple-700 border border-purple-200/60 flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-purple-600" />
          <span>IA sin tecnicismos complejos</span>
        </div>
      </div>

      {/* Preset Selector Buttons */}
      <div className="my-6">
        <label className="text-xs font-bold text-slate-700 block mb-2.5">
          Selecciona una consulta de negocio para probar la IA:
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          {presets.map((preset) => {
            const Icon = preset.icon;
            const isSelected = activePreset.id === preset.id;
            return (
              <button
                key={preset.id}
                onClick={() => handleSelectPreset(preset)}
                className={`p-3 rounded-2xl text-left border transition-all duration-200 flex items-center gap-2.5 ${
                  isSelected
                    ? 'bg-purple-50/80 border-purple-400 text-purple-900 shadow-sm ring-1 ring-purple-300'
                    : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700'
                }`}
              >
                <div className={`p-2 rounded-xl shrink-0 ${isSelected ? 'bg-purple-600 text-white' : 'bg-slate-200 text-slate-700'}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold leading-tight truncate">{preset.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Chat Simulation Area */}
      <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4 sm:p-5 space-y-4">
        {/* User Query Bubble */}
        <div className="flex items-start justify-end gap-2.5">
          <div className="bg-nexora-blue text-white p-3.5 rounded-2xl rounded-tr-none text-xs sm:text-sm max-w-lg shadow-sm">
            <div className="font-bold text-[11px] text-blue-100 mb-0.5">Tú preguntaste:</div>
            {activePreset.prompt}
          </div>
          <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold shrink-0">
            TÚ
          </div>
        </div>

        {/* AI Response Bubble */}
        <div className="flex items-start gap-2.5">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-600 text-white flex items-center justify-center shrink-0 shadow-sm">
            <Bot className="w-4 h-4" />
          </div>

          <div className="flex-1 bg-white p-4 sm:p-5 rounded-2xl rounded-tl-none border border-slate-200 shadow-sm text-xs sm:text-sm text-slate-800 space-y-2 relative">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-2">
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-purple-700">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Asistente NEXORA AI</span>
                {isTyping && <span className="text-slate-400 font-normal animate-pulse">(Analizando información...)</span>}
              </div>
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1 text-[11px] text-slate-500 hover:text-slate-900 p-1 rounded hover:bg-slate-100 transition-colors"
                title="Copiar respuesta"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copiado' : 'Copiar'}</span>
              </button>
            </div>

            <div className="whitespace-pre-line leading-relaxed font-sans">
              {displayText}
            </div>

            <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
              <span>✨ {activePreset.insight}</span>
              <span className="font-semibold text-purple-600">Simulación demostrativa</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
