import React, { useState } from 'react';
import { Smartphone, ShoppingBag, Check, ArrowRight, Clock, ChevronLeft, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ProductItem {
  id: number;
  name: string;
  desc: string;
  price: number;
  rating: number;
  emoji: string;
}

export const DemoMobileApp: React.FC = () => {
  const products: ProductItem[] = [
    { id: 1, name: 'Café de Especialidad 500g', desc: 'Grano entero, tueste medio', price: 240, rating: 4.9, emoji: '☕' },
    { id: 2, name: 'Combo Desayuno Ejecutivo', desc: 'Croissant + Jugo natural + Café', price: 165, rating: 4.8, emoji: '🥐' },
    { id: 3, name: 'Tarta Artesanal de Frutos', desc: 'Porción individual del día', price: 95, rating: 4.9, emoji: '🍰' },
  ];

  const [cart, setCart] = useState<{ [id: number]: number }>({ 1: 1 });
  const [screen, setScreen] = useState<'catalog' | 'cart' | 'confirmed'>('catalog');

  const addToCart = (id: number) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => {
      const next = { ...prev };
      if (next[id] > 1) {
        next[id] -= 1;
      } else {
        delete next[id];
      }
      return next;
    });
  };

  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);
  const totalPrice = Object.entries(cart).reduce((sum, [id, qty]) => {
    const p = products.find((prod) => prod.id === Number(id));
    return sum + (p ? p.price * qty : 0);
  }, 0);

  const handleCheckout = () => {
    setScreen('confirmed');
    confetti({
      particleCount: 30,
      spread: 50,
      origin: { y: 0.6 },
      colors: ['#2563eb', '#00bfa5', '#38bdf8'],
    });
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden p-5 sm:p-7">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-100 text-indigo-800">
              Demo Interactiva 05
            </span>
            <span className="text-xs text-slate-500 font-medium">Aplicación Móvil para Clientes / Operación</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900">
            Simulador de App Móvil Interactiva
          </h3>
        </div>

        <div className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-indigo-50 text-indigo-700 border border-indigo-200/60 flex items-center gap-1.5">
          <Smartphone className="w-4 h-4 text-indigo-600" />
          <span>iOS y Android nativo / web app</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-6 items-center">
        {/* Mobile Phone Mockup */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-[290px] sm:w-[310px] h-[560px] bg-slate-900 rounded-[44px] p-3 shadow-2xl border-4 border-slate-800 relative flex flex-col justify-between">
            {/* Phone Top Notch */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-4 bg-slate-950 rounded-full z-20" />

            {/* Phone Screen */}
            <div className="w-full h-full bg-slate-50 rounded-[34px] overflow-hidden flex flex-col justify-between pt-6 pb-2 text-slate-800 relative select-none">
              {/* Screen Header */}
              <div className="px-4 py-2 flex items-center justify-between border-b border-slate-200/60 bg-white/90">
                {screen !== 'catalog' ? (
                  <button
                    onClick={() => setScreen('catalog')}
                    className="p-1 text-slate-600 hover:text-slate-900"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                ) : (
                  <span className="text-xs font-black tracking-tight text-nexora-blue">
                    NEXORA APP
                  </span>
                )}

                <div className="text-xs font-bold text-slate-800 truncate">
                  {screen === 'catalog' && 'Menú Digital'}
                  {screen === 'cart' && 'Tu Carrito'}
                  {screen === 'confirmed' && '¡Pedido en Camino!'}
                </div>

                <button
                  onClick={() => setScreen('cart')}
                  className="relative p-1 text-slate-700 hover:text-nexora-blue"
                >
                  <ShoppingBag className="w-4 h-4" />
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-nexora-blue text-white text-[9px] font-bold flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </button>
              </div>

              {/* Screen Body */}
              <div className="flex-1 overflow-y-auto p-3 space-y-2.5">
                {screen === 'catalog' && (
                  <>
                    <div className="p-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl text-white">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-blue-100">
                        Promoción del Día
                      </div>
                      <div className="text-xs font-bold">15% en combos de temporada</div>
                    </div>

                    <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider px-1">
                      Productos Disponibles
                    </div>

                    {products.map((item) => {
                      const qty = cart[item.id] || 0;
                      return (
                        <div
                          key={item.id}
                          className="p-2.5 rounded-xl bg-white border border-slate-200/70 shadow-xs flex items-center justify-between gap-2"
                        >
                          <div className="text-2xl">{item.emoji}</div>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs font-bold text-slate-900 truncate">
                              {item.name}
                            </div>
                            <div className="text-[10px] text-slate-500 truncate">
                              {item.desc}
                            </div>
                            <div className="text-xs font-extrabold text-nexora-blue mt-0.5">
                              ${item.price} MXN
                            </div>
                          </div>

                          {qty === 0 ? (
                            <button
                              onClick={() => addToCart(item.id)}
                              className="px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-nexora-blue text-nexora-blue hover:text-white text-xs font-bold transition-colors"
                            >
                              +
                            </button>
                          ) : (
                            <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-lg">
                              <button
                                onClick={() => removeFromCart(item.id)}
                                className="w-5 h-5 rounded bg-white text-slate-700 font-bold text-xs flex items-center justify-center shadow-xs"
                              >
                                -
                              </button>
                              <span className="text-xs font-bold px-1">{qty}</span>
                              <button
                                onClick={() => addToCart(item.id)}
                                className="w-5 h-5 rounded bg-nexora-blue text-white font-bold text-xs flex items-center justify-center shadow-xs"
                              >
                                +
                              </button>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </>
                )}

                {screen === 'cart' && (
                  <div className="space-y-3">
                    {totalItems === 0 ? (
                      <div className="text-center py-10 text-slate-400 text-xs">
                        Tu carrito está vacío
                      </div>
                    ) : (
                      <>
                        {Object.entries(cart).map(([id, qty]) => {
                          const item = products.find((p) => p.id === Number(id));
                          if (!item) return null;
                          return (
                            <div
                              key={id}
                              className="p-2 rounded-xl bg-white border border-slate-200 flex items-center justify-between text-xs"
                            >
                              <div className="flex items-center gap-2">
                                <span>{item.emoji}</span>
                                <div>
                                  <div className="font-bold text-slate-800">{item.name}</div>
                                  <div className="text-slate-500 text-[10px]">
                                    ${item.price} x {qty} = ${item.price * qty}
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center gap-1">
                                <button
                                  onClick={() => removeFromCart(item.id)}
                                  className="w-5 h-5 bg-slate-100 rounded flex items-center justify-center text-xs font-bold"
                                >
                                  -
                                </button>
                                <span className="font-bold text-xs px-1">{qty}</span>
                                <button
                                  onClick={() => addToCart(item.id)}
                                  className="w-5 h-5 bg-nexora-blue text-white rounded flex items-center justify-center text-xs font-bold"
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          );
                        })}

                        <div className="p-3 bg-slate-100 rounded-xl space-y-1 text-xs">
                          <div className="flex justify-between text-slate-600">
                            <span>Subtotal:</span>
                            <span>${totalPrice} MXN</span>
                          </div>
                          <div className="flex justify-between text-slate-600">
                            <span>Envío:</span>
                            <span className="text-green-600 font-bold">Gratis</span>
                          </div>
                          <div className="flex justify-between text-slate-900 font-extrabold pt-1 border-t border-slate-200">
                            <span>Total a Pagar:</span>
                            <span>${totalPrice} MXN</span>
                          </div>
                        </div>

                        <button
                          onClick={handleCheckout}
                          className="w-full py-2.5 rounded-xl bg-gradient-to-r from-nexora-blue to-teal-600 text-white font-bold text-xs shadow-md flex items-center justify-center gap-1.5"
                        >
                          <span>Confirmar Pedido</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </>
                    )}
                  </div>
                )}

                {screen === 'confirmed' && (
                  <div className="text-center py-6 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto shadow-sm">
                      <Check className="w-6 h-6 stroke-[3]" />
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold text-slate-900">
                        ¡Orden #NX-892 Recibida!
                      </h4>
                      <p className="text-[10px] text-slate-500 mt-1">
                        Tu pedido ya fue enviado a cocina y almacén.
                      </p>
                    </div>

                    <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-left text-[11px] space-y-1.5">
                      <div className="flex items-center gap-1.5 text-teal-700 font-bold">
                        <Clock className="w-3.5 h-3.5" />
                        <span>Tiempo estimado: 25-30 min</span>
                      </div>
                      <div className="text-slate-500 text-[10px]">
                        Notificación por WhatsApp enviada al cliente.
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        setCart({ 1: 1 });
                        setScreen('catalog');
                      }}
                      className="w-full py-2 rounded-xl bg-slate-900 text-white font-bold text-xs"
                    >
                      Hacer otra prueba
                    </button>
                  </div>
                )}
              </div>

              {/* Screen Bottom Bar */}
              <div className="px-4 py-1 flex items-center justify-around border-t border-slate-200 bg-white text-slate-400 text-[9px] font-bold">
                <button
                  onClick={() => setScreen('catalog')}
                  className={`flex flex-col items-center gap-0.5 ${screen === 'catalog' ? 'text-nexora-blue' : ''}`}
                >
                  <span>Inicio</span>
                </button>
                <button
                  onClick={() => setScreen('cart')}
                  className={`flex flex-col items-center gap-0.5 ${screen === 'cart' ? 'text-nexora-blue' : ''}`}
                >
                  <span>Carrito ({totalItems})</span>
                </button>
                <button
                  onClick={() => setScreen('confirmed')}
                  className={`flex flex-col items-center gap-0.5 ${screen === 'confirmed' ? 'text-nexora-blue' : ''}`}
                >
                  <span>Estado</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile App Description */}
        <div className="lg:col-span-7 space-y-5">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>Experiencia de usuario fluida y rápida</span>
          </div>

          <h4 className="text-2xl font-bold text-slate-900">
            Una app intuitiva para que tus clientes compren en segundos
          </h4>

          <p className="text-sm text-slate-600 leading-relaxed">
            Creamos aplicaciones móviles y progresivas (PWA) pensadas para personas reales. Sin pantallas confusas ni pasos innecesarios.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <div className="text-xs font-bold text-slate-900">🛒 Catálogo y Pedidos 24/7</div>
              <p className="text-xs text-slate-500">Tus clientes piden a cualquier hora sin esperar a que un vendedor conteste.</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <div className="text-xs font-bold text-slate-900">📲 Notificaciones Push y WhatsApp</div>
              <p className="text-xs text-slate-500">Avisos automáticos de estado de orden, guías de envío y promociones.</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <div className="text-xs font-bold text-slate-900">💳 Pasarelas de Pago Seguras</div>
              <p className="text-xs text-slate-500">Acepta tarjetas de crédito, débito, transferencias y pagos en efectivo.</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <div className="text-xs font-bold text-slate-900">📦 Conexión a tu Almacén</div>
              <p className="text-xs text-slate-500">Cada venta descuenta existencias de tu inventario en tiempo real.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
