import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, MessageSquare, Mail, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactSectionProps {
  initialService?: string;
  initialNotes?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService, initialNotes }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: initialService || 'Sistemas Empresariales',
    message: initialNotes || '',
  });

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    if (initialNotes) {
      setFormData((prev) => ({
        ...prev,
        message: prev.message ? `${prev.message}\n\n[Diagnóstico]: ${initialNotes}` : initialNotes,
      }));
    }
  }, [initialNotes]);

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const serviceOptions = [
    'Sistemas Empresariales',
    'Automatización de Procesos',
    'Aplicaciones Web',
    'Aplicaciones Móviles',
    'Inteligencia Artificial Aplicada',
    'Dashboards y Datos',
    'Integración de Sistemas',
    'Mantenimiento y Soporte de Sistema Actual',
    'No estoy seguro (Quiero asesoría)',
  ];

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Por favor escribe tu nombre.';
    if (!formData.company.trim()) errs.company = 'Por favor indica el nombre de tu empresa.';
    if (!formData.email.trim()) {
      errs.email = 'Por favor escribe tu correo.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Escribe un correo electrónico válido.';
    }
    if (!formData.message.trim()) errs.message = 'Cuéntanos un poco sobre tu proyecto o reto actual.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#2563eb', '#00bfa5', '#3b82f6', '#10b981'],
      });
    }, 900);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      service: 'Sistemas Empresariales',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="contacto" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-nexora-blue text-xs font-bold uppercase tracking-wider">
              <MessageSquare className="w-3.5 h-3.5 text-nexora-cyan" />
              <span>Contacto Directo</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Empecemos a construir la tecnología que tu empresa necesita
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              Llena este breve formulario. Revisamos tu solicitud personalmente y te respondemos en menos de 24 horas hábiles para agendar una sesión inicial de diagnóstico.
            </p>

            <div className="space-y-4 pt-4 border-t border-slate-100">
              <div className="flex items-start gap-3 text-sm text-slate-700">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-nexora-blue flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Correo Electrónico</div>
                  <div className="text-slate-500 text-xs mt-0.5">contacto@nexora.tech</div>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm text-slate-700">
                <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Compromiso de Privacidad</div>
                  <div className="text-slate-500 text-xs mt-0.5">Tu información es 100% confidencial y protegida.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-lg">
              {isSubmitted ? (
                /* Success Message */
                <div className="text-center py-10 space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900">
                    ¡Mensaje recibido con éxito!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Gracias, <strong className="text-slate-800">{formData.name}</strong>. Hemos recibido los detalles de <strong className="text-slate-800">{formData.company}</strong>. Nos pondremos en contacto a <span className="text-nexora-blue font-semibold">{formData.email}</span> muy pronto.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-xl text-xs font-bold text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 transition-colors shadow-xs"
                    >
                      Enviar otra consulta
                    </button>
                  </div>
                </div>
              ) : (
                /* Form Fields */
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Tu Nombre Completo *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ej. Roberto Sánchez"
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-nexora-blue/20 bg-white ${
                          errors.name ? 'border-rose-400 focus:border-rose-500' : 'border-slate-200 focus:border-nexora-blue'
                        }`}
                      />
                      {errors.name && <span className="text-[11px] text-rose-500 mt-1 block">{errors.name}</span>}
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Empresa o Negocio *
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Ej. Distribuidora del Valle"
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-nexora-blue/20 bg-white ${
                          errors.company ? 'border-rose-400 focus:border-rose-500' : 'border-slate-200 focus:border-nexora-blue'
                        }`}
                      />
                      {errors.company && <span className="text-[11px] text-rose-500 mt-1 block">{errors.company}</span>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Correo Electrónico *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="tu.correo@empresa.com"
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-nexora-blue/20 bg-white ${
                          errors.email ? 'border-rose-400 focus:border-rose-500' : 'border-slate-200 focus:border-nexora-blue'
                        }`}
                      />
                      {errors.email && <span className="text-[11px] text-rose-500 mt-1 block">{errors.email}</span>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Teléfono / WhatsApp (Opcional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Ej. +52 55 1234 5678"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-nexora-blue/20 focus:border-nexora-blue bg-white"
                      />
                    </div>
                  </div>

                  {/* Service selector */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      ¿Qué tipo de solución estás buscando?
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-nexora-blue/20 focus:border-nexora-blue bg-white text-slate-800"
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Project description */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Cuéntanos brevemente sobre tu proyecto o reto *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Ejemplo: Actualmente llevamos el inventario en Excel y perdemos mucho tiempo registrando pedidos a mano. Queremos un sistema donde el equipo pueda consultar existencias en tiempo real..."
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-nexora-blue/20 bg-white ${
                        errors.message ? 'border-rose-400 focus:border-rose-500' : 'border-slate-200 focus:border-nexora-blue'
                      }`}
                    />
                    {errors.message && <span className="text-[11px] text-rose-500 mt-1 block">{errors.message}</span>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-200 flex items-center justify-center gap-2 ${
                      isSubmitting
                        ? 'bg-slate-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-nexora-blue to-nexora-blue-dark hover:from-nexora-blue-dark hover:to-blue-900'
                    }`}
                  >
                    <Send className={`w-4 h-4 ${isSubmitting ? 'animate-spin' : ''}`} />
                    <span>{isSubmitting ? 'Enviando solicitud...' : 'Enviar solicitud de proyecto'}</span>
                  </button>

                  <div className="text-center text-[11px] text-slate-500 pt-1">
                    🔒 Sin compromisos ni cargos iniciales. Te responderemos en un plazo máximo de 24 horas.
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
