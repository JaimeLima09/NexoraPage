import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, RotateCcw, Sparkles, TrendingUp, Cpu, Database, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';

interface DiagnosticQuizSectionProps {
  onOpenContact: (notes?: string) => void;
}

export const DiagnosticQuizSection: React.FC<DiagnosticQuizSectionProps> = ({ onOpenContact }) => {
  const questions = [
    {
      id: 1,
      question: '¿Cómo administras la información de tus clientes, ventas o inventarios hoy?',
      options: [
        { text: 'Principalmente en libretas, notas o muchas hojas de Excel separadas.', auto: 25, cent: 30, data: 25, ai: 20 },
        { text: 'Uso WhatsApp, correos y un par de programas que no se comunican entre sí.', auto: 25, cent: 25, data: 20, ai: 20 },
        { text: 'Tenemos un sistema antiguo o rígido que ya no se adapta a nuestro ritmo.', auto: 20, cent: 20, data: 20, ai: 15 },
      ],
    },
    {
      id: 2,
      question: '¿Tu equipo pierde tiempo en tareas manuales y repetitivas?',
      options: [
        { text: 'Sí, pasamos horas capturando datos, copiando pedidos o haciendo cotizaciones.', auto: 30, cent: 20, data: 20, ai: 25 },
        { text: 'A veces, en días de alta carga o cierre de mes.', auto: 20, cent: 15, data: 15, ai: 15 },
        { text: 'Poco, pero sentimos que podríamos ser mucho más ágiles.', auto: 15, cent: 10, data: 10, ai: 10 },
      ],
    },
    {
      id: 3,
      question: '¿Qué tan fácil es consultar el estado de tu negocio en tiempo real?',
      options: [
        { text: 'Muy difícil; tengo que pedir reportes y esperar días para saber números exactos.', auto: 15, cent: 30, data: 35, ai: 20 },
        { text: 'Tengo que juntar varios archivos para tener una idea aproximada.', auto: 15, cent: 20, data: 25, ai: 15 },
        { text: 'Tengo algunos datos pero no me ayudan a tomar decisiones rápidas.', auto: 10, cent: 15, data: 20, ai: 15 },
      ],
    },
    {
      id: 4,
      question: '¿Cómo atiendes y das seguimiento a los clientes o pedidos?',
      options: [
        { text: 'Manualmente por WhatsApp o teléfono; a veces se nos pasa responder rápido.', auto: 30, cent: 20, data: 15, ai: 35 },
        { text: 'Tenemos un proceso pero depende 100% de que una persona esté pegada a la pantalla.', auto: 25, cent: 15, data: 15, ai: 25 },
        { text: 'Atendemos bien, pero quisiéramos automatizar respuestas frecuentes y pedidos.', auto: 20, cent: 15, data: 15, ai: 20 },
      ],
    },
    {
      id: 5,
      question: '¿Qué objetivo tecnológico te gustaría alcanzar primero en tu empresa?',
      options: [
        { text: 'Ahorrar tiempo y eliminar tareas repetitivas de mi equipo.', auto: 35, cent: 20, data: 15, ai: 20 },
        { text: 'Centralizar toda la operación en una sola plataforma propia a la medida.', auto: 20, cent: 35, data: 25, ai: 15 },
        { text: 'Tener tableros con métricas claras y aprovechar Inteligencia Artificial.', auto: 15, cent: 15, data: 35, ai: 35 },
      ],
    },
  ];

  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState<boolean>(false);

  const handleSelectOption = (optionIndex: number) => {
    const updatedAnswers = [...answers, optionIndex];
    setAnswers(updatedAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setShowResults(true);
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#2563eb', '#00bfa5', '#38bdf8', '#818cf8'],
      });
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers([]);
    setShowResults(false);
  };

  // Calculate scores
  let autoScore = 70;
  let centScore = 75;
  let dataScore = 65;
  let aiScore = 60;

  answers.forEach((optIdx, qIdx) => {
    const opt = questions[qIdx]?.options[optIdx];
    if (opt) {
      autoScore += opt.auto / 5;
      centScore += opt.cent / 5;
      dataScore += opt.data / 5;
      aiScore += opt.ai / 5;
    }
  });

  const cappedAuto = Math.min(Math.round(autoScore), 98);
  const cappedCent = Math.min(Math.round(centScore), 96);
  const cappedData = Math.min(Math.round(dataScore), 94);
  const cappedAi = Math.min(Math.round(aiScore), 92);
  const overallPotential = Math.round((cappedAuto + cappedCent + cappedData + cappedAi) / 4);

  return (
    <section id="diagnostico" className="py-20 sm:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3 border border-teal-200">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>Herramienta Interactiva</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Descubre cuánto puede hacer la tecnología por tu empresa
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Responde 5 preguntas rápidas y obtén un diagnóstico conceptual de tus mayores oportunidades de digitalización.
          </p>
        </div>

        <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md">
          {!showResults ? (
            <div>
              {/* Quiz Progress Header */}
              <div className="flex items-center justify-between gap-4 pb-4 mb-6 border-b border-slate-200">
                <span className="text-xs font-bold uppercase tracking-wider text-nexora-blue">
                  Pregunta 0{currentStep + 1} de 0{questions.length}
                </span>
                <div className="w-36 h-2 rounded-full bg-slate-200 overflow-hidden">
                  <div
                    style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                    className="h-full bg-gradient-to-r from-nexora-blue to-nexora-cyan transition-all duration-300 rounded-full"
                  />
                </div>
              </div>

              {/* Current Question */}
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-6">
                {questions[currentStep].question}
              </h3>

              {/* Options */}
              <div className="space-y-3">
                {questions[currentStep].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    className="w-full text-left p-4 sm:p-5 rounded-2xl bg-white hover:bg-blue-50/70 border border-slate-200 hover:border-nexora-blue transition-all duration-200 flex items-center justify-between group shadow-xs hover:shadow"
                  >
                    <span className="text-xs sm:text-sm font-medium text-slate-800 group-hover:text-nexora-blue">
                      {option.text}
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-nexora-blue group-hover:translate-x-1 transition-all shrink-0 ml-3" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Results View */
            <div className="space-y-8 animate-fadeIn">
              <div className="text-center space-y-2 pb-6 border-b border-slate-200">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Diagnóstico Completado</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Tu empresa tiene un <span className="text-nexora-blue">{overallPotential}%</span> de potencial de optimización
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
                  Detectamos áreas clave donde implementar tecnología a la medida generará ahorros inmediatos de tiempo y mayor orden.
                </p>
              </div>

              {/* Category Breakdown Bars */}
              <div className="space-y-4 max-w-lg mx-auto">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                    <span className="flex items-center gap-1.5">
                      <Zap className="w-4 h-4 text-teal-600" />
                      Automatización de Procesos
                    </span>
                    <span className="text-teal-700">{cappedAuto}% potencial</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-slate-200 overflow-hidden">
                    <div
                      style={{ width: `${cappedAuto}%` }}
                      className="h-full bg-teal-500 rounded-full transition-all duration-700"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                    <span className="flex items-center gap-1.5">
                      <Database className="w-4 h-4 text-blue-600" />
                      Centralización de Información
                    </span>
                    <span className="text-blue-700">{cappedCent}% potencial</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-slate-200 overflow-hidden">
                    <div
                      style={{ width: `${cappedCent}%` }}
                      className="h-full bg-blue-600 rounded-full transition-all duration-700"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                    <span className="flex items-center gap-1.5">
                      <TrendingUp className="w-4 h-4 text-indigo-600" />
                      Dashboards y Toma de Decisiones
                    </span>
                    <span className="text-indigo-700">{cappedData}% potencial</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-slate-200 overflow-hidden">
                    <div
                      style={{ width: `${cappedData}%` }}
                      className="h-full bg-indigo-600 rounded-full transition-all duration-700"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                    <span className="flex items-center gap-1.5">
                      <Cpu className="w-4 h-4 text-purple-600" />
                      Inteligencia Artificial Práctica
                    </span>
                    <span className="text-purple-700">{cappedAi}% potencial</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-slate-200 overflow-hidden">
                    <div
                      style={{ width: `${cappedAi}%` }}
                      className="h-full bg-purple-600 rounded-full transition-all duration-700"
                    />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                <button
                  onClick={() => onOpenContact(`Resultado Diagnóstico: Potencial general ${overallPotential}% (Automatización: ${cappedAuto}%, Centralización: ${cappedCent}%, Datos: ${cappedData}%, IA: ${cappedAi}%)`)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-nexora-blue hover:bg-nexora-blue-dark shadow-md transition-all"
                >
                  <span>Quiero hablar con NEXORA sobre estos resultados</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-200/80 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Repetir evaluación</span>
                </button>
              </div>

              <div className="text-center text-[11px] text-slate-400">
                * Este diagnóstico interactivo es una estimación orientativa para identificar oportunidades operativas.
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
