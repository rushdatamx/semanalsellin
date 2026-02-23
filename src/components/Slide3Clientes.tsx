"use client";

import SlideWrapper from "./SlideWrapper";
import { TrendingUp, TrendingDown } from "lucide-react";

const clientes = [
  {
    nombre: "ALSUPER",
    razon: "Operadora Futurama",
    ytd2026: "$5.4M",
    ytd2025: "$2.3M",
    variacion: "+130.1%",
    positivo: true,
    topProducto: "Almendra Rebanada 200g",
    topVenta: "$581K",
    barWidth: "100%",
    color: "#27AE60",
  },
  {
    nombre: "MERCO",
    razon: "Operadora Merco",
    ytd2026: "$2.6M",
    ytd2025: "$2.5M",
    variacion: "+4.5%",
    positivo: true,
    topProducto: "Tostada Roja 70PZ",
    topVenta: "$1.6M (61.8%)",
    barWidth: "48%",
    color: "#2E75B6",
  },
  {
    nombre: "HEB",
    razon: "Supermercados Internacionales",
    ytd2026: "$879K",
    ytd2025: "$1.1M",
    variacion: "-17.4%",
    positivo: false,
    topProducto: "Durito 20 piezas",
    topVenta: "$384K (43.7%)",
    barWidth: "16%",
    color: "#E31837",
  },
];

export default function Slide3Clientes() {
  return (
    <SlideWrapper className="bg-[#1A1A1A] p-10">
      <h2 className="text-3xl font-bold text-white mb-1">Top 3 Clientes Nacionales</h2>
      <p className="text-gray-500 text-sm mb-6">Desempeño YTD 2026 vs 2025 (Ene-Feb)</p>

      <div className="grid grid-cols-3 gap-5 flex-1">
        {clientes.map((c, i) => {
          const Trend = c.positivo ? TrendingUp : TrendingDown;
          return (
            <div
              key={i}
              className="bg-[#222] rounded-xl border border-gray-700/50 p-6 flex flex-col animate-count-up"
              style={{ animationDelay: `${i * 200}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">{c.nombre}</h3>
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1"
                  style={{
                    color: c.color,
                    backgroundColor: `${c.color}20`,
                    border: `1px solid ${c.color}40`,
                  }}
                >
                  <Trend className="w-3 h-3" />
                  {c.variacion}
                </span>
              </div>
              <p className="text-gray-500 text-[10px] mb-4">{c.razon}</p>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-400 text-sm">YTD 2026</span>
                  <span className="text-white font-bold text-lg">{c.ytd2026}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 text-sm">YTD 2025</span>
                  <span className="text-gray-500 text-sm">{c.ytd2025}</span>
                </div>
              </div>

              {/* Barra proporcional */}
              <div className="w-full bg-gray-700/30 rounded-full h-2 mb-5">
                <div
                  className="h-2 rounded-full animate-bar-grow"
                  style={{ width: c.barWidth, backgroundColor: c.color, animationDelay: `${i * 200 + 300}ms` }}
                />
              </div>

              <div className="mt-auto bg-[#1A1A1A] rounded-lg p-3 border border-gray-700/30">
                <p className="text-gray-500 text-[10px] mb-1">Producto #1</p>
                <p className="text-white text-sm font-semibold">{c.topProducto}</p>
                <p className="text-gray-400 text-xs">{c.topVenta}</p>
              </div>
            </div>
          );
        })}
      </div>
    </SlideWrapper>
  );
}
