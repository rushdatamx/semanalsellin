"use client";

import SlideWrapper from "./SlideWrapper";
import { Award } from "lucide-react";

const productos = [
  { nombre: "Papa Diabla 5.5oz La Molienda", venta: 1979228, pct: 14.5 },
  { nombre: "Tostada Roja 70PZ Mi Marca", venta: 1595088, pct: 11.7 },
  { nombre: "Papa Salada 5.5oz La Molienda", venta: 1471841, pct: 10.8 },
  { nombre: "Almendra Rebanada Domo 200g", venta: 580736, pct: 4.3 },
  { nombre: "Durito con 20 piezas", venta: 574759, pct: 4.2 },
  { nombre: "Uva Pasa Domo 250g", venta: 459571, pct: 3.4 },
  { nombre: "Almendra Entera Domo 250g", venta: 439389, pct: 3.2 },
  { nombre: "Papa Frita Natural Mimarca 450g", venta: 405328, pct: 3.0 },
  { nombre: "Papa Deshidratada 300g", venta: 302665, pct: 2.2 },
  { nombre: "Pistache Salado Domo 200g", venta: 258482, pct: 1.9 },
];

const maxVenta = productos[0].venta;

const formatPesos = (v: number) => {
  if (v >= 1_000_000) return `$${(v / 1_000_000).toFixed(1)}M`;
  return `$${(v / 1_000).toFixed(0)}K`;
};

export default function Slide4TopProductos() {
  return (
    <SlideWrapper className="bg-[#1A1A1A] p-10">
      <div className="flex items-center gap-3 mb-1">
        <Award className="w-7 h-7 text-[#F7B500]" />
        <h2 className="text-3xl font-bold text-white">Top 10 Productos 2026</h2>
      </div>
      <p className="text-gray-500 text-sm mb-5">Ranking por venta acumulada YTD (Ene-Feb) · Top 10 concentra 59.2%</p>

      <div className="flex-1 space-y-2">
        {productos.map((p, i) => {
          const barPct = (p.venta / maxVenta) * 100;
          const isFirst = i === 0;
          const barColor = isFirst ? "#F7B500" : "#2E75B6";

          return (
            <div key={i} className="flex items-center gap-3">
              <span
                className={`w-6 text-right text-sm font-bold ${isFirst ? "text-[#F7B500]" : "text-gray-500"}`}
              >
                {i + 1}
              </span>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-0.5">
                  <span className={`text-sm ${isFirst ? "text-white font-bold" : "text-gray-300"}`}>
                    {p.nombre}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="text-white font-bold text-sm">{formatPesos(p.venta)}</span>
                    <span className="text-gray-500 text-xs w-12 text-right">{p.pct}%</span>
                  </div>
                </div>
                <div className="w-full bg-gray-700/30 rounded-full h-2">
                  <div
                    className="h-2 rounded-full animate-bar-grow"
                    style={{
                      width: `${barPct}%`,
                      backgroundColor: barColor,
                      animationDelay: `${i * 80}ms`,
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-3 flex justify-between items-center bg-[#222] rounded-lg px-5 py-3 border border-gray-700/50">
        <span className="text-gray-400 text-sm">Total 2026 YTD</span>
        <span className="text-white font-bold text-lg">$13.6M</span>
      </div>
    </SlideWrapper>
  );
}
