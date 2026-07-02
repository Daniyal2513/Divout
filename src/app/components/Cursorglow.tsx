// src/components/CursorGlow.tsx
import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame: number;

    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (glowRef.current) {
          glowRef.current.style.left = `${e.clientX}px`;
          glowRef.current.style.top = `${e.clientY}px`;
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed z-[9999] w-[400px] h-[400px] rounded-full -translate-x-1/2 -translate-y-1/2"
      style={{
        background:
          "radial-gradient(circle, rgba(16, 33, 230, 0.92) 0%, transparent 70%)",
      }}
    />
  );
}