"use client";

import { ReactNode } from "react";

export default function SlideWrapper({
  children,
  className = "",
  hideFooter = false,
}: {
  children: ReactNode;
  className?: string;
  hideFooter?: boolean;
}) {
  return (
    <div
      className={`w-[1280px] h-[720px] mx-auto overflow-hidden flex flex-col relative ${className}`}
    >
      {children}
      {!hideFooter && (
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-8 py-3 bg-gradient-to-t from-black/40 to-transparent">
          <span className="text-[10px] text-gray-400">Resumen Ejecutivo Sell-In · Feb 2026</span>
          <span className="text-[10px] text-gray-500 font-semibold">DELIKOS</span>
        </div>
      )}
    </div>
  );
}
