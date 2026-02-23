"use client";

import SlideWrapper from "./SlideWrapper";
import { AlertTriangle, TrendingUp, Info, ChevronRight } from "lucide-react";

const alertas = [
  {
    icon: AlertTriangle,
    color: "#E31837",
    texto: "Feb 2026 con caida de -12.8% vs Feb 2025 ($7.6M vs $8.7M).",
    accion: "Verificar si hay facturas pendientes. Monitorear cierre de mes.",
    responsable: "Mario Pena",
  },
  {
    icon: AlertTriangle,
    color: "#E31837",
    texto: "BOTANAS Y DERIVADOS cayo -95.5% YTD (de $4.9M a $218K).",
    accion: "Contactar al cliente. ¿Perdimos la cuenta? ¿Cambiaron de proveedor?",
    responsable: "Direccion",
  },
  {
    icon: AlertTriangle,
    color: "#E31837",
    texto: "HEB cayo -10.6% YTD ($1.1M a $1.0M). Durito concentra 45.7%.",
    accion: "Revisar pedidos pendientes. Evaluar ampliar catalogo en la cadena.",
    responsable: "Mario Pena",
  },
];

const positivos = [
  {
    icon: TrendingUp,
    color: "#27AE60",
    texto: "ALSUPER crecio +154.0% YTD ($2.5M → $6.4M). 1er cliente nacional.",
    accion: "Reforzar relacion y explorar ampliacion de catalogo.",
    responsable: "Mario Pena",
  },
  {
    icon: TrendingUp,
    color: "#27AE60",
    texto: "MERCO crecio +41.2% YTD. Tostada Roja 70PZ con $2.0M (55.7%).",
    accion: "Mantener abasto y explorar nuevas lineas con el cliente.",
    responsable: "Mario Pena",
  },
  {
    icon: TrendingUp,
    color: "#27AE60",
    texto: "Trayectoria anual: $93.8M (2023) → $128.9M (2025), +37.4% en 2 anos.",
    accion: "Establecer meta 2026 y monitorear mensualmente.",
    responsable: "Direccion",
  },
];

export default function Slide7Acciones() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] p-10" hideFooter>
      <h2 className="text-3xl font-bold text-gray-800 mb-1">Insights y Acciones</h2>
      <p className="text-gray-500 text-sm mb-5">Hallazgos clave y proximos pasos</p>

      <div className="grid grid-cols-2 gap-5 flex-1">
        {/* Alertas */}
        <div>
          <p className="text-[#E31837] text-xs font-bold mb-3 flex items-center gap-1.5">
            <AlertTriangle className="w-3.5 h-3.5" /> ALERTAS
          </p>
          <div className="space-y-3">
            {alertas.map((a, i) => {
              const Icon = a.icon;
              return (
                <div key={i} className="bg-[#E31837]/5 border border-[#E31837]/20 rounded-lg p-3">
                  <div className="flex items-start gap-2">
                    <Icon className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: a.color }} />
                    <div>
                      <p className="text-gray-700 text-xs mb-1">{a.texto}</p>
                      <div className="flex items-center gap-1 text-[10px]">
                        <ChevronRight className="w-2.5 h-2.5 text-gray-400" />
                        <span className="text-gray-500">{a.accion}</span>
                      </div>
                      <p className="text-gray-400 text-[10px] mt-1">→ {a.responsable}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Positivos */}
        <div>
          <p className="text-[#27AE60] text-xs font-bold mb-3 flex items-center gap-1.5">
            <TrendingUp className="w-3.5 h-3.5" /> POSITIVOS Y SEGUIMIENTO
          </p>
          <div className="space-y-3">
            {positivos.map((a, i) => {
              const Icon = a.icon;
              return (
                <div key={i} className="bg-[#27AE60]/5 border border-[#27AE60]/20 rounded-lg p-3">
                  <div className="flex items-start gap-2">
                    <Icon className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: a.color }} />
                    <div>
                      <p className="text-gray-700 text-xs mb-1">{a.texto}</p>
                      <div className="flex items-center gap-1 text-[10px]">
                        <ChevronRight className="w-2.5 h-2.5 text-gray-400" />
                        <span className="text-gray-500">{a.accion}</span>
                      </div>
                      <p className="text-gray-400 text-[10px] mt-1">→ {a.responsable}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer crema */}
      <div className="mt-4 bg-[#FDF8F0] rounded-lg px-6 py-3 text-center border border-[#E8DCC8]">
        <p className="text-gray-500 text-xs">
          Datos actualizados al <span className="text-gray-800 font-semibold">23 de febrero 2026</span> · Resumen Ejecutivo DELIKOS
        </p>
      </div>
    </SlideWrapper>
  );
}
