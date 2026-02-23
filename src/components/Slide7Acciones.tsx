"use client";

import SlideWrapper from "./SlideWrapper";
import { AlertTriangle, TrendingUp, Info, ChevronRight } from "lucide-react";

const alertas = [
  {
    tipo: "ALTA",
    icon: AlertTriangle,
    color: "#E31837",
    texto: "Feb 2026 con caida de -54.8% vs Feb 2025. Posiblemente datos incompletos (ultimo registro: 15-Feb).",
    accion: "Verificar si hay facturas pendientes de capturar. Si el dato es real, investigar causa.",
    responsable: "Mario Pena",
  },
  {
    tipo: "ALTA",
    icon: AlertTriangle,
    color: "#E31837",
    texto: "BOTANAS Y DERIVADOS cayo -95.5% YTD (de $4.5M a $202K).",
    accion: "Contactar al cliente. ¿Perdimos la cuenta? ¿Cambiaron de proveedor?",
    responsable: "Direccion",
  },
  {
    tipo: "ALTA",
    icon: AlertTriangle,
    color: "#E31837",
    texto: "LA MOLIENDA MEXICANA (exportacion) cayo -37.3% YTD.",
    accion: "Revisar estatus de ordenes pendientes. Verificar timing de pedidos.",
    responsable: "Direccion",
  },
];

const positivos = [
  {
    tipo: "POSITIVO",
    icon: TrendingUp,
    color: "#27AE60",
    texto: "ALSUPER crecio +130.1% YTD. Ahora es el 1er cliente nacional.",
    accion: "Reforzar relacion y explorar ampliacion de catalogo.",
    responsable: "Mario Pena",
  },
  {
    tipo: "POSITIVO",
    icon: TrendingUp,
    color: "#27AE60",
    texto: "Trayectoria anual: $91.5M (2023) → $124.8M (2025), +36.5% en 2 anos.",
    accion: "Establecer meta 2026 y monitorear mensualmente.",
    responsable: "Direccion",
  },
  {
    tipo: "INFO",
    icon: Info,
    color: "#F7B500",
    texto: "HEB cayo -17.4% YTD. PDQs y duritos concentran 85.6% de la venta.",
    accion: "Revisar pedidos pendientes. Evaluar ampliar catalogo.",
    responsable: "Mario Pena",
  },
];

export default function Slide7Acciones() {
  return (
    <SlideWrapper className="bg-[#1A1A1A] p-10" hideFooter>
      <h2 className="text-3xl font-bold text-white mb-1">Insights y Acciones</h2>
      <p className="text-gray-500 text-sm mb-5">Hallazgos clave y proximos pasos</p>

      <div className="grid grid-cols-2 gap-5 flex-1">
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
                      <p className="text-gray-300 text-xs mb-1">{a.texto}</p>
                      <div className="flex items-center gap-1 text-[10px]">
                        <ChevronRight className="w-2.5 h-2.5 text-gray-500" />
                        <span className="text-gray-400">{a.accion}</span>
                      </div>
                      <p className="text-gray-600 text-[10px] mt-1">→ {a.responsable}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

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
                      <p className="text-gray-300 text-xs mb-1">{a.texto}</p>
                      <div className="flex items-center gap-1 text-[10px]">
                        <ChevronRight className="w-2.5 h-2.5 text-gray-500" />
                        <span className="text-gray-400">{a.accion}</span>
                      </div>
                      <p className="text-gray-600 text-[10px] mt-1">→ {a.responsable}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-4 bg-gradient-to-r from-[#2E75B6]/10 to-[#F7B500]/10 border border-[#2E75B6]/30 rounded-lg px-6 py-3 text-center">
        <p className="text-gray-400 text-xs">
          Datos actualizados al <span className="text-white font-semibold">23 de febrero 2026</span> · Resumen Ejecutivo DELIKOS
        </p>
      </div>
    </SlideWrapper>
  );
}
