// components/PortfolioHoverCard.tsx
"use client";

import { useRef } from "react";

interface PortfolioHoverCardProps {
  image: string;       // full page screenshot ka path (public/ folder ya CDN url)
  siteName: string;    // e.g. "divout.site"
  imageHeight: number; // screenshot ki asal height (px) — GoFullPage se export karte waqt pata chal jayegi
}

export default function PortfolioHoverCard({
  image,
  siteName,
  imageHeight,
}: PortfolioHoverCardProps) {
  const imgRef = useRef<HTMLImageElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const containerHeight = 340; // card ki fixed height (aapki design ke hisaab se badal lein)

  const handleEnter = () => {
    const distance = imageHeight - containerHeight;
    if (imgRef.current) {
      imgRef.current.style.transitionDuration = "7s";
      imgRef.current.style.transform = `translateY(-${distance}px)`;
    }
    if (barRef.current) {
      barRef.current.style.transitionDuration = "7s";
      barRef.current.style.width = "100%";
    }
  };

  const handleLeave = () => {
    if (imgRef.current) {
      imgRef.current.style.transitionDuration = "0.4s";
      imgRef.current.style.transform = "translateY(0)";
    }
    if (barRef.current) {
      barRef.current.style.transitionDuration = "0.4s";
      barRef.current.style.width = "0%";
    }
  };

  return (
    <div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="relative w-full max-w-sm rounded-xl border border-neutral-200 bg-white overflow-hidden"
      style={{ height: containerHeight }}
    >
      {/* browser-frame top bar */}
      <div className="h-8 flex items-center gap-1.5 px-3 border-b border-neutral-200 bg-neutral-50">
        <span className="w-2 h-2 rounded-full bg-neutral-300" />
        <span className="w-2 h-2 rounded-full bg-neutral-300" />
        <span className="w-2 h-2 rounded-full bg-neutral-300" />
        <span className="ml-2 text-xs text-neutral-400">{siteName}</span>
      </div>

      {/* scrolling screenshot */}
      <img
        ref={imgRef}
        src={image}
        alt={siteName}
        className="w-full ease-in-out"
        style={{ transform: "translateY(0)", transition: "transform 0.4s" }}
      />

      {/* progress bar */}
      <div
        ref={barRef}
        className="absolute bottom-0 left-0 h-[3px] bg-blue-500 ease-linear"
        style={{ width: "0%", transition: "width 0.4s" }}
      />
    </div>
  );
}