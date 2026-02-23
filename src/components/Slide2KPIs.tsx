"use client";

import SlideWrapper from "./SlideWrapper";
import { TrendingUp, TrendingDown, DollarSign, FileText } from "lucide-react";

const kpis = [
  {
    label: "Venta YTD 2026",
    sublabel: "Ene - Feb",
    value: "$13.6M",
    icon: DollarSign,
    color: "#2E75B6",
    bgColor: "#2E75B6/10",
  },
  {
    label: "Variación YTD",
    sublabel: "vs mismo periodo 2025",
    value: "-21.5%",
    icon: TrendingDown,
    color: "#E31837",
    bgColor: "#E31837/10",
    negative: true,
  },
  {
    label: "Venta Febrero 2026",
    sublabel: "Mes actual",
    value: "$3.8M",
    icon: DollarSign,
    color: "#F7B500",
    bgColor: "#F7B500/10",
  },
  {
    label: "Var. Febrero",
    sublabel: "vs Feb 2025",
    value: "-54.8%",
    icon: TrendingDown,
    color: "#E31837",
    bgColor: "#E31837/10",
    negative: true,
  },
];

const annualData = [
  { year: "2023", value: "$91.5M", growth: null },
  { year: "2024", value: "$101.7M", growth: "+11.1%" },
  { year: "2025", value: "$124.8M", growth: "+22.7%" },
];

export default function Slide2KPIs() {
  return (
    <SlideWrapper className="bg-[#1A1A1A] p-10">
      <h2 className="text-3xl font-bold text-white mb-1">KPIs Principales</h2>
      <p className="text-gray-500 text-sm mb-6">Facturación sell-in DELIKOS · YTD Ene-Feb 2026</p>

      <div className="grid grid-cols-4 gap-4 mb-6">
        {kpis.map((kpi, i) => {
          const Icon = kpi.icon;
          return (
            <div
              key={i}
              className="bg-[#222] rounded-xl border border-gray-700/50 p-5 flex flex-col animate-count-up"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 rounded-lg" style={{ backgroundColor: `${kpi.color}20` }}>
                  <Icon className="w-4 h-4" style={{ color: kpi.color }} />
                </div>
              </div>
              <p className="text-gray-400 text-xs mb-1">{kpi.label}</p>
              <p
                className="text-3xl font-bold mb-1"
                style={{ color: kpi.negative ? kpi.color : "white" }}
              >
                {kpi.value}
              </p>
              <p className="text-gray-600 text-[10px]">{kpi.sublabel}</p>
            </div>
          );
        })}
      </div>

      <div className="bg-[#222] rounded-xl border border-gray-700/50 p-5 flex-1">
        <p className="text-gray-400 text-xs mb-3 flex items-center gap-2">
          <FileText className="w-3.5 h-3.5" />
          Trayectoria anual
        </p>
        <div className="flex items-end gap-8">
          {annualData.map((d, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
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
          <div className="ml-auto bg-[#E31837]/10 border border-[#E31837]/30 rounded-lg px-4 py-2 max-w-[320px]">
            <p className="text-[#E31837] text-[11px] font-semibold">
              &#9888; Feb 2026 puede estar incompleto (datos hasta 15-Feb). La caida de -54.8% podria ser por datos parciales.
            </p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
