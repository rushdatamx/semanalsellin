"use client";

import SlideWrapper from "./SlideWrapper";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

const data = [
  { mes: "Mar 24", venta: 9426594 },
  { mes: "Abr 24", venta: 7896698 },
  { mes: "May 24", venta: 8111811 },
  { mes: "Jun 24", venta: 7063935 },
  { mes: "Jul 24", venta: 7429601 },
  { mes: "Ago 24", venta: 6714352 },
  { mes: "Sep 24", venta: 7778732 },
  { mes: "Oct 24", venta: 9086430 },
  { mes: "Nov 24", venta: 10197146 },
  { mes: "Dic 24", venta: 8015098 },
  { mes: "Ene 25", venta: 9069510 },
  { mes: "Feb 25", venta: 8303918 },
  { mes: "Mar 25", venta: 17078542 },
  { mes: "Abr 25", venta: 15974917 },
  { mes: "May 25", venta: 9476632 },
  { mes: "Jun 25", venta: 9698886 },
  { mes: "Jul 25", venta: 10828761 },
  { mes: "Ago 25", venta: 7200050 },
  { mes: "Sep 25", venta: 8350066 },
  { mes: "Oct 25", venta: 10144708 },
  { mes: "Nov 25", venta: 9285929 },
  { mes: "Dic 25", venta: 9425489 },
  { mes: "Ene 26", venta: 9884187 },
  { mes: "Feb 26", venta: 3753992 },
];

const promedio = 9177537;

const formatPesos = (v: number) => `$${(v / 1_000_000).toFixed(1)}M`;

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number }>; label?: string }) {
  if (!active || !payload) return null;
  return (
    <div className="bg-[#222] border border-gray-600 rounded-lg p-3 shadow-lg">
      <p className="text-gray-400 text-xs mb-1">{label}</p>
      <p className="text-white font-bold text-sm">${payload[0].value.toLocaleString()}</p>
    </div>
  );
}

export default function Slide5Tendencia() {
  return (
    <SlideWrapper className="bg-[#1A1A1A] p-10">
      <h2 className="text-3xl font-bold text-white mb-1">Tendencia Mensual</h2>
      <p className="text-gray-500 text-sm mb-4">Venta mensual facturada — ultimos 24 meses · Promedio: $9.2M</p>

      <div className="flex gap-4 mb-3 text-[10px]">
        <div className="flex items-center gap-1.5">
          <div className="w-8 h-0.5 bg-[#2E75B6]" />
          <span className="text-gray-400">Venta mensual</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-8 h-0.5 bg-gray-500 border-dashed border-b border-gray-500" />
          <span className="text-gray-400">Promedio</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded bg-[#27AE60]/30" />
          <span className="text-gray-400">Pico (&gt;1.5x)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded bg-[#E31837]/30" />
          <span className="text-gray-400">Caida (&lt;0.5x)</span>
        </div>
      </div>

      <div className="flex-1 bg-[#222] rounded-xl border border-gray-700/50 p-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 20, left: 10, bottom: 10 }}>
            <defs>
              <linearGradient id="colorVenta" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2E75B6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#2E75B6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="mes" stroke="#666" fontSize={9} interval={1} angle={-45} textAnchor="end" height={40} />
            <YAxis stroke="#666" fontSize={10} tickFormatter={formatPesos} />
            <Tooltip content={<CustomTooltip />} />
            <ReferenceLine y={promedio} stroke="#666" strokeDasharray="5 5" />
            <Area
              type="monotone"
              dataKey="venta"
              stroke="#2E75B6"
              strokeWidth={2}
              fill="url(#colorVenta)"
              dot={({ cx, cy, payload }: { cx?: number; cy?: number; payload?: Record<string, number> }) => {
                if (cx == null || cy == null || !payload) return <circle />;
                if (payload.venta > promedio * 1.5) {
                  return <circle key={cx} cx={cx} cy={cy} r={4} fill="#27AE60" stroke="#27AE60" />;
                }
                if (payload.venta < promedio * 0.5) {
                  return <circle key={cx} cx={cx} cy={cy} r={4} fill="#E31837" stroke="#E31837" />;
                }
                return <circle key={cx} cx={cx} cy={cy} r={2} fill="#2E75B6" stroke="#2E75B6" />;
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="flex justify-between mt-2 text-[10px] text-gray-500">
        <span>Mejor mes: Mar 2025 ($17.1M) — Pico de pedidos</span>
        <span>Peor mes: Feb 2026 ($3.8M) — Posiblemente incompleto</span>
      </div>
    </SlideWrapper>
  );
}
