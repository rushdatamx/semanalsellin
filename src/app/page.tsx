"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Slide1Portada from "@/components/Slide1Portada";
import Slide2KPIs from "@/components/Slide2KPIs";
import Slide3Clientes from "@/components/Slide3Clientes";
import Slide4TopProductos from "@/components/Slide4TopProductos";
import Slide5Tendencia from "@/components/Slide5Tendencia";
import Slide6Exportacion from "@/components/Slide6Exportacion";
import Slide7Acciones from "@/components/Slide7Acciones";

const slides = [
  { component: Slide1Portada, label: "Portada" },
  { component: Slide2KPIs, label: "KPIs" },
  { component: Slide3Clientes, label: "Clientes" },
  { component: Slide4TopProductos, label: "Top Productos" },
  { component: Slide5Tendencia, label: "Tendencia" },
  { component: Slide6Exportacion, label: "Exportación" },
  { component: Slide7Acciones, label: "Acciones" },
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const Slide = slides[current].component;

  return (
    <div className="min-h-screen bg-[#111] flex flex-col items-center justify-center py-8">
      <div className="relative">
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-700/50">
          <Slide />
        </div>

        <div className="flex items-center justify-center gap-6 mt-6">
          <button
            onClick={() => setCurrent((p) => Math.max(0, p - 1))}
            disabled={current === 0}
            className="p-2 rounded-full bg-[#222] text-gray-400 disabled:opacity-30 hover:bg-[#333] transition-colors shadow-sm border border-gray-700/50"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="w-2.5 h-2.5 rounded-full transition-colors"
                style={{
                  backgroundColor: i === current ? "#F7B500" : "#555",
                }}
              />
            ))}
          </div>

          <button
            onClick={() => setCurrent((p) => Math.min(slides.length - 1, p + 1))}
            disabled={current === slides.length - 1}
            className="p-2 rounded-full bg-[#222] text-gray-400 disabled:opacity-30 hover:bg-[#333] transition-colors shadow-sm border border-gray-700/50"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <p className="text-center text-gray-600 text-xs mt-3">
          {slides[current].label} · Slide {current + 1} / {slides.length}
        </p>
      </div>
    </div>
  );
}
