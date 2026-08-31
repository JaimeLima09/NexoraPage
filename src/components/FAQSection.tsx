import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

interface FAQSectionProps {
  onOpenContact: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenContact }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: '¿Necesito saber de programación o tecnología para trabajar con NEXORA?',
      a: 'No, en lo absoluto. Nuestro trabajo es encargarnos de toda la parte técnica, servidores, bases de datos y desarrollo. Te explicamos los avances y funcionamiento en un lenguaje claro y transparente.',
    },
    {
      q: '¿Solo trabajan con empresas grandes o también con negocios en crecimiento?',
      a: 'Trabajamos con empresas de todos los tamaños: desde negocios locales, restaurantes y distribuidoras que buscan automatizar sus primeros procesos, hasta medianas y grandes empresas que requieren sistemas empresariales completos.',
    },
    {
      q: '¿Pueden trabajar con sistemas, bases de datos o Excels que ya tenemos funcionando?',
      a: 'Sí. Podemos auditar, mantener, mejorar, modernizar o interconectar tus sistemas actuales. Si tu información está en hojas de cálculo o software antiguo, realizamos la migración de datos de forma segura sin interrumpir tu operación.',
    },
    {
      q: '¿Puedo contratar solo una automatización específica o un módulo puntual?',
      a: 'Totalmente. No estás obligado a contratar un desarrollo gigantesco. Muchos de nuestros clientes inician automatizando un solo cuello de botella (por ejemplo, confirmaciones por WhatsApp o cotizadores) y posteriormente continúan evolucionando.',
    },
    {
      q: '¿Trabajan de forma remota?',
      a: 'Sí. Nuestra infraestructura y herramientas de trabajo nos permiten colaborar, dar soporte y realizar demostraciones en vivo de manera 100% remota y eficiente para empresas de cualquier estado de México o Latinoamérica.',
    },
    {
      q: '¿Cuánto cuesta desarrollar un sistema o automatización?',
      a: 'El costo depende del alcance y complejidad de tus necesidades. En nuestra primera reunión de diagnóstico entendemos tu problema y te presentamos una propuesta clara, con tiempos y costos definidos sin cargos ocultos.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100/80 text-nexora-blue text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-nexora-cyan" />
            <span>Dudas Comunes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Preguntas Frecuentes
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Respuestas directas y honestas a las preguntas que más nos hacen los empresarios antes de empezar.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'bg-nexora-blue text-white rotate-180' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Have more questions banner */}
        <div className="mt-10 text-center p-6 rounded-2xl bg-white border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-bold text-slate-900 text-sm">¿Tienes una pregunta que no está en la lista?</h4>
            <p className="text-xs text-slate-500">Estamos listos para responderte sin compromiso.</p>
          </div>
          <button
            onClick={onOpenContact}
            className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-nexora-blue hover:bg-nexora-blue-dark transition-colors shadow-xs"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Preguntar a NEXORA</span>
          </button>
        </div>
      </div>
    </section>
  );
};
