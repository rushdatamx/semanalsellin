"use client";

import SlideWrapper from "./SlideWrapper";
import { TrendingUp } from "lucide-react";

const clientes = [
  {
    nombre: "ALSUPER",
    razon: "Operadora Futurama",
    total2024: 16.9,
    total2025: 39.9,
    variacion: "+136.0%",
    topProducto: "Almendra Rebanada 200g",
    topVenta: "$625K (9.8%)",
    dotColor: "#F7B500",
  },
  {
    nombre: "MERCO",
    razon: "Operadora Merco",
    total2024: 13.0,
    total2025: 18.5,
    variacion: "+42.2%",
    topProducto: "Tostada Roja 70PZ",
    topVenta: "$2.0M (55.7%)",
    dotColor: "#1A1A1A",
  },
  {
    nombre: "HEB",
    razon: "Supermercados Internacionales",
    total2024: 1.7,
    total2025: 8.4,
    variacion: "+388.2%",
    topProducto: "Durito 20 piezas",
    topVenta: "$469K (45.7%)",
    dotColor: "#9CA3AF",
  },
];

const maxVal = 39.9;

export default function Slide3Clientes() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-1">Desempeno por Cliente</h2>
      <p className="text-gray-500 text-sm mb-5">2024 vs 2025 — Venta anual completa</p>

      <div className="grid grid-cols-3 gap-5 flex-1">
        {clientes.map((c, i) => {
          const bar2024pct = (c.total2024 / maxVal) * 100;
          const bar2025pct = (c.total2025 / maxVal) * 100;
          return (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 flex flex-col animate-count-up"
              style={{ animationDelay: `${i * 200}ms` }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: c.dotColor }} />
                  <h3 className="text-lg font-bold text-gray-800">{c.nombre}</h3>
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 bg-[#F7B500]/15 text-[#B8860B] border border-[#F7B500]/30">
                  <TrendingUp className="w-3 h-3" />
                  {c.variacion}
                </span>
              </div>
              <p className="text-gray-400 text-[10px] mb-4">{c.razon}</p>

              <div className="space-y-2 mb-4">
                <div>
                  <div className="flex justify-between text-[10px] mb-1">
                    <span className="text-gray-500">2024</span>
                    <span className="text-gray-600 font-semibold">${c.total2024}M</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-4">
                    <div
                      className="h-4 rounded-full animate-bar-grow flex items-center justify-end pr-2 bg-gray-800"
                      style={{ width: `${bar2024pct}%`, animationDelay: `${i * 200 + 300}ms` }}
                    >
                      {bar2024pct > 15 && <span className="text-white text-[9px] font-bold">${c.total2024}M</span>}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[10px] mb-1">
                    <span className="text-[#B8860B] font-semibold">2025</span>
                    <span className="text-[#B8860B] font-bold">${c.total2025}M</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-4">
                    <div
                      className="h-4 rounded-full animate-bar-grow flex items-center justify-end pr-2 bg-[#F7B500]"
                      style={{ width: `${bar2025pct}%`, animationDelay: `${i * 200 + 500}ms` }}
                    >
                      {bar2025pct > 15 && <span className="text-[#1A1A1A] text-[9px] font-bold">${c.total2025}M</span>}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-auto bg-[#FDF8F0] rounded-lg p-3 border border-[#E8DCC8]">
                <p className="text-gray-400 text-[10px] mb-1">Producto #1 en 2026</p>
                <p className="text-gray-800 text-sm font-semibold">{c.topProducto}</p>
                <p className="text-gray-500 text-xs">{c.topVenta}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-6 mt-3 justify-center text-[10px]">
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-2.5 rounded bg-gray-800" />
          <span className="text-gray-500">2024</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-2.5 rounded bg-[#F7B500]" />
          <span className="text-[#B8860B]">2025</span>
        </div>
      </div>
    </SlideWrapper>
  );
}
