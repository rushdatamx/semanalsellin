"use client";

import SlideWrapper from "./SlideWrapper";
import { TrendingUp, TrendingDown } from "lucide-react";

// Paleta: ALSUPER=#F7B500 (dorado), MERCO=#1A1A1A (negro), HEB=#9CA3AF (gris)

const annualData = [
  { year: "2023", value: "$91.5M", growth: null },
  { year: "2024", value: "$101.7M", growth: "+11.1%" },
  { year: "2025", value: "$124.8M", growth: "+22.7%" },
];

// Stacked bar: proporción por cliente en YTD 2026
// ALSUPER: $5.4M, MERCO: $2.6M, HEB: $879K → total top3 = $8.9M
const stackTotal = 5378 + 2581 + 879;
const stackAlsuper = Math.round((5378 / stackTotal) * 100);
const stackMerco = Math.round((2581 / stackTotal) * 100);
const stackHeb = 100 - stackAlsuper - stackMerco;

export default function Slide2KPIs() {
  return (
    <SlideWrapper className="bg-[#1A1A1A] p-10">
      <h2 className="text-3xl font-bold text-white mb-1">KPIs Principales</h2>
      <p className="text-gray-500 text-sm mb-6">Facturacion sell-in DELIKOS · YTD Ene-Feb 2026</p>

      {/* Hero KPI */}
      <div className="flex items-center gap-8 mb-6">
        <div className="animate-count-up">
          <p className="text-gray-400 text-sm mb-1">Venta YTD 2026</p>
          <p className="text-6xl font-bold text-[#F7B500] tracking-tight">$13.6M</p>
          <p className="text-gray-600 text-xs mt-1">Ene - Feb 2026</p>
        </div>
        <div className="flex items-center gap-2 bg-[#E31837]/10 border border-[#E31837]/30 rounded-xl px-5 py-3 animate-count-up" style={{ animationDelay: "150ms" }}>
          <TrendingDown className="w-5 h-5 text-[#E31837]" />
          <div>
            <p className="text-[#E31837] text-2xl font-bold">-21.5%</p>
            <p className="text-gray-500 text-[10px]">vs YTD 2025</p>
          </div>
        </div>
        <div className="flex-1" />
        <div className="text-right animate-count-up" style={{ animationDelay: "300ms" }}>
          <p className="text-gray-400 text-xs mb-1">Febrero 2026</p>
          <p className="text-3xl font-bold text-white">$3.8M</p>
          <div className="flex items-center justify-end gap-1 mt-1">
            <TrendingDown className="w-3 h-3 text-[#E31837]" />
            <span className="text-[#E31837] text-sm font-bold">-54.8%</span>
            <span className="text-gray-600 text-[10px]">vs Feb 25</span>
          </div>
        </div>
        <div className="text-right animate-count-up" style={{ animationDelay: "450ms" }}>
          <p className="text-gray-400 text-xs mb-1">Enero 2026</p>
          <p className="text-3xl font-bold text-white">$9.9M</p>
          <div className="flex items-center justify-end gap-1 mt-1">
            <TrendingUp className="w-3 h-3 text-[#27AE60]" />
            <span className="text-[#27AE60] text-sm font-bold">+9.0%</span>
            <span className="text-gray-600 text-[10px]">vs Ene 25</span>
          </div>
        </div>
      </div>

      {/* Stacked bar - composición por cliente */}
      <div className="bg-[#222] rounded-xl border border-gray-700/50 p-5 mb-4">
        <p className="text-gray-400 text-xs mb-3">Composicion YTD 2026 — Top 3 clientes</p>
        <div className="w-full h-6 rounded-full overflow-hidden flex animate-bar-grow">
          <div style={{ width: `${stackAlsuper}%`, backgroundColor: "#F7B500" }} className="h-full" />
          <div style={{ width: `${stackMerco}%`, backgroundColor: "#1A1A1A", borderLeft: "2px solid #333", borderRight: "2px solid #333" }} className="h-full" />
          <div style={{ width: `${stackHeb}%`, backgroundColor: "#9CA3AF" }} className="h-full" />
        </div>
        <div className="flex justify-between mt-2 text-[10px]">
          <span className="text-[#F7B500] font-semibold">ALSUPER $5.4M ({stackAlsuper}%)</span>
          <span className="text-gray-300 font-semibold">MERCO $2.6M ({stackMerco}%)</span>
          <span className="text-[#9CA3AF] font-semibold">HEB $879K ({stackHeb}%)</span>
        </div>
      </div>

      {/* Trayectoria anual + Alerta */}
      <div className="flex gap-4 flex-1">
        <div className="bg-[#222] rounded-xl border border-gray-700/50 p-5 flex-1">
          <p className="text-gray-400 text-xs mb-3">Trayectoria anual</p>
          <div className="flex items-end gap-8">
            {annualData.map((d, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <span className="text-white font-bold text-xl">{d.value}</span>
                {d.growth && (
                  <span className="text-[#27AE60] text-xs font-semibold flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    {d.growth}
                  </span>
                )}
                <span className="text-gray-500 text-sm">{d.year}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#E31837]/10 border border-[#E31837]/30 rounded-xl px-5 py-4 max-w-[320px] flex items-center">
          <p className="text-[#E31837] text-[11px] font-semibold leading-relaxed">
            &#9888; Feb 2026 puede estar incompleto (datos hasta 15-Feb). La caida de -54.8% podria ser por datos parciales.
          </p>
        </div>
      </div>
    </SlideWrapper>
  );
}
