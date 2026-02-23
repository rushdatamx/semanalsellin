"use client";

import SlideWrapper from "./SlideWrapper";
import { TrendingUp, TrendingDown } from "lucide-react";

// Paleta por cliente: ALSUPER=#F7B500, MERCO=#1A1A1A(borde blanco), HEB=#9CA3AF
// Barras comparativas: negro=#333 = año anterior, dorado=#F7B500 = año actual

const clientes = [
  {
    nombre: "ALSUPER",
    razon: "Operadora Futurama",
    total2024: 15.7,
    total2025: 38.2,
    variacion: "+143.7%",
    positivo: true,
    topProducto: "Almendra Rebanada 200g",
    topVenta: "$581K",
    color: "#F7B500",
    dotColor: "#F7B500",
  },
  {
    nombre: "MERCO",
    razon: "Operadora Merco",
    total2024: 12.7,
    total2025: 18.1,
    variacion: "+41.8%",
    positivo: true,
    topProducto: "Tostada Roja 70PZ",
    topVenta: "$1.6M (61.8%)",
    color: "#ffffff",
    dotColor: "#1A1A1A",
  },
  {
    nombre: "HEB",
    razon: "Supermercados Internacionales",
    total2024: 1.6,
    total2025: 7.8,
    variacion: "+383.7%",
    positivo: true,
    topProducto: "Durito 20 piezas",
    topVenta: "$384K (43.7%)",
    color: "#9CA3AF",
    dotColor: "#9CA3AF",
  },
];

const maxVal = 38.2; // ALSUPER 2025

export default function Slide3Clientes() {
  return (
    <SlideWrapper className="bg-[#1A1A1A] p-10">
      <h2 className="text-3xl font-bold text-white mb-1">Desempeno por Cliente</h2>
      <p className="text-gray-500 text-sm mb-5">2024 vs 2025 — Venta anual completa</p>

      <div className="grid grid-cols-3 gap-5 flex-1">
        {clientes.map((c, i) => {
          const bar2024pct = (c.total2024 / maxVal) * 100;
          const bar2025pct = (c.total2025 / maxVal) * 100;
          return (
            <div
              key={i}
              className="bg-[#222] rounded-xl border border-gray-700/50 p-5 flex flex-col animate-count-up"
              style={{ animationDelay: `${i * 200}ms` }}
            >
              {/* Header con nombre y badge */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: c.dotColor, border: c.nombre === 'MERCO' ? '2px solid #666' : 'none' }} />
                  <h3 className="text-lg font-bold text-white">{c.nombre}</h3>
                </div>
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1"
                  style={{
                    color: "#F7B500",
                    backgroundColor: "#F7B500" + "20",
                    border: "1px solid #F7B500" + "40",
                  }}
                >
                  <TrendingUp className="w-3 h-3" />
                  {c.variacion}
                </span>
              </div>
              <p className="text-gray-600 text-[10px] mb-4">{c.razon}</p>

              {/* Barras comparativas 2024 vs 2025 */}
              <div className="space-y-2 mb-4">
                <div>
                  <div className="flex justify-between text-[10px] mb-1">
                    <span className="text-gray-500">2024</span>
                    <span className="text-gray-400 font-semibold">${c.total2024}M</span>
                  </div>
                  <div className="w-full bg-gray-700/20 rounded-full h-4">
                    <div
                      className="h-4 rounded-full animate-bar-grow flex items-center justify-end pr-2"
                      style={{
                        width: `${bar2024pct}%`,
                        backgroundColor: "#333",
                        animationDelay: `${i * 200 + 300}ms`,
                      }}
                    >
                      {bar2024pct > 15 && <span className="text-gray-400 text-[9px] font-bold">${c.total2024}M</span>}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[10px] mb-1">
                    <span className="text-[#F7B500] font-semibold">2025</span>
                    <span className="text-[#F7B500] font-bold">${c.total2025}M</span>
                  </div>
                  <div className="w-full bg-gray-700/20 rounded-full h-4">
                    <div
                      className="h-4 rounded-full animate-bar-grow flex items-center justify-end pr-2"
                      style={{
                        width: `${bar2025pct}%`,
                        backgroundColor: "#F7B500",
                        animationDelay: `${i * 200 + 500}ms`,
                      }}
                    >
                      {bar2025pct > 15 && <span className="text-[#1A1A1A] text-[9px] font-bold">${c.total2025}M</span>}
                    </div>
                  </div>
                </div>
              </div>

              {/* Producto #1 */}
              <div className="mt-auto bg-[#FDF8F0]/5 rounded-lg p-3 border border-[#F7B500]/10">
                <p className="text-gray-500 text-[10px] mb-1">Producto #1 en 2026</p>
                <p className="text-white text-sm font-semibold">{c.topProducto}</p>
                <p className="text-gray-400 text-xs">{c.topVenta}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Leyenda */}
      <div className="flex items-center gap-6 mt-3 justify-center text-[10px]">
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-2.5 rounded bg-[#333]" />
          <span className="text-gray-500">2024</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-2.5 rounded bg-[#F7B500]" />
          <span className="text-[#F7B500]">2025</span>
        </div>
      </div>
    </SlideWrapper>
  );
}
