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
  { mes: "Mar 24", alsuper: 931485, merco: 846783, heb: 113856 },
  { mes: "Abr 24", alsuper: 1698824, merco: 1047564, heb: 52348 },
  { mes: "May 24", alsuper: 1704009, merco: 1058000, heb: 112032 },
  { mes: "Jun 24", alsuper: 1374332, merco: 1107497, heb: 147086 },
  { mes: "Jul 24", alsuper: 1159919, merco: 1155995, heb: 84570 },
  { mes: "Ago 24", alsuper: 1308426, merco: 1029216, heb: 20585 },
  { mes: "Sep 24", alsuper: 1586014, merco: 1557093, heb: 44755 },
  { mes: "Oct 24", alsuper: 1164566, merco: 1200049, heb: 47174 },
  { mes: "Nov 24", alsuper: 1697368, merco: 974805, heb: 51905 },
  { mes: "Dic 24", alsuper: 1951505, merco: 1062805, heb: 810375 },
  { mes: "Ene 25", alsuper: 1596591, merco: 1586768, heb: 595558 },
  { mes: "Feb 25", alsuper: 927252, merco: 947841, heb: 553533 },
  { mes: "Mar 25", alsuper: 7997534, merco: 1275863, heb: 535595 },
  { mes: "Abr 25", alsuper: 7398584, merco: 1640477, heb: 652552 },
  { mes: "May 25", alsuper: 2408191, merco: 1314068, heb: 601245 },
  { mes: "Jun 25", alsuper: 2218516, merco: 1120824, heb: 759314 },
  { mes: "Jul 25", alsuper: 2857354, merco: 1909930, heb: 605462 },
  { mes: "Ago 25", alsuper: 2137585, merco: 1539254, heb: 1217619 },
  { mes: "Sep 25", alsuper: 2448593, merco: 2172498, heb: 426543 },
  { mes: "Oct 25", alsuper: 3616293, merco: 1630440, heb: 1183197 },
  { mes: "Nov 25", alsuper: 3523636, merco: 1914256, heb: 331449 },
  { mes: "Dic 25", alsuper: 2800615, merco: 1451079, heb: 978343 },
  { mes: "Ene 26", alsuper: 4112155, merco: 2241812, heb: 734917 },
  { mes: "Feb 26", alsuper: 2297532, merco: 1336266, heb: 292132 },
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
  { mes: "Mar 25", label: "ALSUPER $8.0M", color: "#F7B500", y: 7997534 },
  { mes: "Abr 25", label: "ALSUPER $7.4M", color: "#F7B500", y: 7398584 },
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
        <span>Pico: ALSUPER Mar 2025 ($8.0M) — pedido masivo de Almendras y Frutos Secos</span>
        <span>Datos al 23 de febrero 2026</span>
      </div>
    </SlideWrapper>
  );
}
