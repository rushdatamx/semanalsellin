"use client";

import SlideWrapper from "./SlideWrapper";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

const data = [
  { mes: "Mar 24", alsuper: 862485, merco: 828164, heb: 108397 },
  { mes: "Abr 24", alsuper: 1572985, merco: 1018370, heb: 49912 },
  { mes: "May 24", alsuper: 1577786, merco: 1038764, heb: 106528 },
  { mes: "Jun 24", alsuper: 1272529, merco: 1088115, heb: 140517 },
  { mes: "Jul 24", alsuper: 1073999, merco: 1132285, heb: 80468 },
  { mes: "Ago 24", alsuper: 1211505, merco: 1015489, heb: 19060 },
  { mes: "Sep 24", alsuper: 1468531, merco: 1526147, heb: 41440 },
  { mes: "Oct 24", alsuper: 1078301, merco: 1154378, heb: 43680 },
  { mes: "Nov 24", alsuper: 1571637, merco: 951780, heb: 48060 },
  { mes: "Dic 24", alsuper: 1806949, merco: 1041704, heb: 750346 },
  { mes: "Ene 25", alsuper: 1478325, merco: 1532742, heb: 551442 },
  { mes: "Feb 25", alsuper: 858566, merco: 937061, heb: 512530 },
  { mes: "Mar 25", alsuper: 7768328, merco: 1251240, heb: 495920 },
  { mes: "Abr 25", alsuper: 7079441, merco: 1602469, heb: 604214 },
  { mes: "May 25", alsuper: 2275880, merco: 1284541, heb: 556708 },
  { mes: "Jun 25", alsuper: 2095305, merco: 1092561, heb: 703068 },
  { mes: "Jul 25", alsuper: 2698672, merco: 1850278, heb: 560612 },
  { mes: "Ago 25", alsuper: 2048102, merco: 1487586, heb: 1127425 },
  { mes: "Sep 25", alsuper: 2349493, merco: 2107933, heb: 394947 },
  { mes: "Oct 25", alsuper: 3434412, merco: 1604708, heb: 1095553 },
  { mes: "Nov 25", alsuper: 3435424, merco: 1883528, heb: 306897 },
  { mes: "Dic 25", alsuper: 2659345, merco: 1416971, heb: 905872 },
  { mes: "Ene 26", alsuper: 3968059, merco: 2183783, heb: 680478 },
  { mes: "Feb 26", alsuper: 1409844, merco: 396864, heb: 198477 },
];

const formatPesos = (v: number) => `$${(v / 1_000_000).toFixed(1)}M`;

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number; name: string; color: string }>; label?: string }) {
  if (!active || !payload) return null;
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-lg min-w-[160px]">
      <p className="text-gray-500 text-xs mb-2 font-semibold">{label}</p>
      {payload.map((p, i) => (
        <div key={i} className="flex items-center justify-between gap-4 text-xs mb-0.5">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: p.color }} />
            <span className="text-gray-500">{p.name}</span>
          </div>
          <span className="text-gray-800 font-bold">${p.value.toLocaleString()}</span>
        </div>
      ))}
    </div>
  );
}

const badges = [
  { mes: "Mar 25", label: "ALSUPER $7.8M", color: "#F7B500", y: 7768328 },
  { mes: "Abr 25", label: "ALSUPER $7.1M", color: "#F7B500", y: 7079441 },
  { mes: "Feb 26", label: "Datos parciales", color: "#E31837", y: 1409844 },
];

export default function Slide5Tendencia() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-1">Tendencia Mensual por Cliente</h2>
      <p className="text-gray-500 text-sm mb-3">Top 3 clientes nacionales — ultimos 24 meses</p>

      {/* Leyenda */}
      <div className="flex gap-5 mb-3 text-[10px]">
        <div className="flex items-center gap-1.5">
          <div className="w-8 h-0.5 bg-[#F7B500]" />
          <span className="text-[#B8860B] font-semibold">ALSUPER</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-8 h-0.5 bg-[#1A1A1A]" />
          <span className="text-gray-800 font-semibold">MERCO</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-8 h-0.5 bg-[#9CA3AF]" />
          <span className="text-[#6B7280] font-semibold">HEB</span>
        </div>
        <div className="ml-auto flex gap-3">
          {badges.map((b, i) => (
            <span
              key={i}
              className="px-2 py-0.5 rounded-full text-[9px] font-bold"
              style={{ backgroundColor: b.color + "20", color: b.color, border: `1px solid ${b.color}40` }}
            >
              {b.label}
            </span>
          ))}
        </div>
      </div>

      <div className="flex-1 bg-white rounded-xl border border-gray-200 shadow-sm p-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 20, left: 10, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis dataKey="mes" stroke="#9CA3AF" fontSize={9} interval={2} angle={-45} textAnchor="end" height={40} />
            <YAxis stroke="#9CA3AF" fontSize={10} tickFormatter={formatPesos} />
            <Tooltip content={<CustomTooltip />} />
            <ReferenceLine x="Ene 25" stroke="#D1D5DB" strokeDasharray="3 3" label={{ value: "2025", position: "top", fill: "#9CA3AF", fontSize: 9 }} />
            <ReferenceLine x="Ene 26" stroke="#D1D5DB" strokeDasharray="3 3" label={{ value: "2026", position: "top", fill: "#9CA3AF", fontSize: 9 }} />
            <Line
              type="monotone"
              dataKey="alsuper"
              name="ALSUPER"
              stroke="#F7B500"
              strokeWidth={2.5}
              dot={{ r: 2, fill: "#F7B500" }}
              activeDot={{ r: 5 }}
            />
            <Line
              type="monotone"
              dataKey="merco"
              name="MERCO"
              stroke="#1A1A1A"
              strokeWidth={2}
              dot={{ r: 2, fill: "#1A1A1A" }}
              activeDot={{ r: 5 }}
            />
            <Line
              type="monotone"
              dataKey="heb"
              name="HEB"
              stroke="#9CA3AF"
              strokeWidth={2}
              dot={{ r: 2, fill: "#9CA3AF" }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="flex justify-between mt-2 text-[10px] text-gray-500">
        <span>Pico: ALSUPER Mar 2025 ($7.8M) — pedido masivo de Almendras y Frutos Secos</span>
        <span>Feb 2026: datos parciales (hasta 15-Feb)</span>
      </div>
    </SlideWrapper>
  );
}
