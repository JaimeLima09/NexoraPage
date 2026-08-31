import React, { useState } from 'react';
import { Play, RotateCcw, CheckCircle2, Clock, AlertTriangle, Zap, MessageSquare, Database, PackageCheck, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

export const DemoAutomation: React.FC = () => {
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [completed, setCompleted] = useState<boolean>(false);

  const steps = [
    {
      title: '1. Pedido recibido',
      desc: 'El cliente realiza una orden desde la web o WhatsApp.',
      icon: MessageSquare,
      timeSaved: '5 min',
    },
    {
      title: '2. Validación y Stock',
      desc: 'El sistema verifica existencias y descuenta unidades de inmediato.',
      icon: Database,
      timeSaved: '10 min',
    },
    {
      title: '3. Notificación al Cliente',
      desc: 'Se envía confirmación formal con número de guía por WhatsApp y correo.',
      icon: Send,
      timeSaved: '8 min',
    },
    {
      title: '4. Alerta a Bodega / Almacén',
      desc: 'Se imprime ticket de empaque en la terminal de bodega automáticamente.',
      icon: PackageCheck,
      timeSaved: '12 min',
    },
  ];

  const handleRun = () => {
    if (isRunning) return;
    setIsRunning(true);
    setCurrentStep(1);
    setCompleted(false);

    const stepInterval = 700;

    setTimeout(() => setCurrentStep(2), stepInterval * 1);
    setTimeout(() => setCurrentStep(3), stepInterval * 2);
    setTimeout(() => setCurrentStep(4), stepInterval * 3);
    setTimeout(() => {
      setIsRunning(false);
      setCompleted(true);
      confetti({
        particleCount: 35,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#00bfa5', '#2563eb', '#38bdf8'],
      });
    }, stepInterval * 4);
  };

  const handleReset = () => {
    setIsRunning(false);
    setCurrentStep(0);
    setCompleted(false);
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden p-5 sm:p-7">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-teal-100 text-teal-800">
              Demo Interactiva 02
            </span>
            <span className="text-xs text-slate-500 font-medium">Automatización de flujos</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900">
            Comparativa: Proceso Manual vs. Automatizado
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleRun}
            disabled={isRunning}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white shadow-md transition-all ${
              isRunning
                ? 'bg-slate-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-teal-600 to-nexora-blue hover:from-teal-700 hover:to-blue-800'
            }`}
          >
            <Play className={`w-4 h-4 fill-white ${isRunning ? 'animate-spin' : ''}`} />
            <span>{isRunning ? 'Ejecutando...' : 'Ejecutar Automatización'}</span>
          </button>
          {(currentStep > 0 || completed) && (
            <button
              onClick={handleReset}
              className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
              title="Reiniciar"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Comparison Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-6">
        {/* Before / Manual Way */}
        <div className="p-5 rounded-2xl bg-rose-50/40 border border-rose-200/80">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-rose-700 font-bold text-sm">
              <AlertTriangle className="w-4 h-4" />
              <span>Antes (Proceso Manual Tradicional)</span>
            </div>
            <span className="text-xs font-bold px-2 py-0.5 rounded bg-rose-100 text-rose-800">
              ~45 minutos / pedido
            </span>
          </div>

          <div className="space-y-3 text-xs text-slate-600">
            <div className="p-3 bg-white/80 rounded-xl border border-rose-100 flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-800">1. Alguien revisa el mensaje o correo:</strong> Se pierde tiempo si la persona está ocupada o fuera de horario.
              </div>
            </div>
            <div className="p-3 bg-white/80 rounded-xl border border-rose-100 flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-800">2. Copia y pega datos a mano:</strong> Pasa datos a un Excel, arriesgando errores tipográficos en direcciones o importes.
              </div>
            </div>
            <div className="p-3 bg-white/80 rounded-xl border border-rose-100 flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-800">3. Redacta el correo y mensaje:</strong> Escribe manualmente al cliente para confirmar.
              </div>
            </div>
            <div className="p-3 bg-white/80 rounded-xl border border-rose-100 flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-800">4. Avisa por teléfono a bodega:</strong> Fricción constante y retraso en las entregas.
              </div>
            </div>
          </div>
        </div>

        {/* After / Automated NEXORA Way */}
        <div className="p-5 rounded-2xl bg-teal-50/40 border border-teal-200/80">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-teal-800 font-bold text-sm">
              <Zap className="w-4 h-4 text-teal-600" />
              <span>Con NEXORA (Flujo 100% Automático)</span>
            </div>
            <span className="text-xs font-bold px-2 py-0.5 rounded bg-teal-100 text-teal-800">
              ⚡ ~2.1 segundos / pedido
            </span>
          </div>

          <div className="space-y-3">
            {steps.map((step, idx) => {
              const StepIcon = step.icon;
              const isPassed = currentStep > idx;
              const isCurrent = currentStep === idx + 1;

              return (
                <div
                  key={idx}
                  className={`p-3 rounded-xl border transition-all duration-300 flex items-start gap-2.5 ${
                    isPassed || isCurrent
                      ? 'bg-white border-teal-300 shadow-sm ring-1 ring-teal-200'
                      : 'bg-slate-50/70 border-slate-200/70 opacity-60'
                  }`}
                >
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                      isPassed
                        ? 'bg-teal-600 text-white'
                        : isCurrent
                        ? 'bg-nexora-blue text-white animate-bounce'
                        : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {isPassed ? <CheckCircle2 className="w-4 h-4" /> : <StepIcon className="w-4 h-4" />}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900">{step.title}</span>
                      <span className="text-[11px] font-semibold text-teal-700">Ahorra {step.timeSaved}</span>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-snug mt-0.5">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Result Metrics */}
      <div className={`p-4 rounded-2xl transition-all duration-300 border flex flex-col sm:flex-row items-center justify-between gap-4 ${
        completed
          ? 'bg-teal-50 border-teal-300 text-teal-900'
          : 'bg-slate-50 border-slate-200 text-slate-700'
      }`}>
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${
            completed ? 'bg-teal-600 text-white' : 'bg-slate-200 text-slate-700'
          }`}>
            ⚡
          </div>
          <div>
            <div className="text-sm font-bold">
              {completed ? '¡Automatización completada con éxito!' : 'Presiona "Ejecutar Automatización" arriba'}
            </div>
            <div className="text-xs text-slate-500">
              {completed
                ? 'Tiempo ahorrado: ~35 minutos por pedido • Errores humanos: 0%'
                : 'Observa la ejecución paso a paso en tiempo real.'}
            </div>
          </div>
        </div>

        {completed && (
          <span className="text-xs font-extrabold text-teal-800 bg-teal-200/80 px-3 py-1.5 rounded-xl">
            🎉 Proceso 100% optimizado
          </span>
        )}
      </div>
    </div>
  );
};
