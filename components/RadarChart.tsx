"use client";

import { useInView } from "./useInView";

type Point = { label: string; value: number };

/**
 * Dependency-free SVG radar chart for the skill categories.
 * Uses currentColor / CSS vars so it follows the active theme automatically.
 */
export function RadarChart({ data, size = 300 }: { data: Point[]; size?: number }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);

  const cx = size / 2;
  const cy = size / 2;
  const radius = size / 2 - 42;
  const n = data.length;
  const levels = 4;

  // Angle for each axis (start at top, go clockwise).
  const angle = (i: number) => (Math.PI * 2 * i) / n - Math.PI / 2;
  const point = (i: number, r: number) => [cx + Math.cos(angle(i)) * r, cy + Math.sin(angle(i)) * r];

  // Concentric grid rings.
  const rings = Array.from({ length: levels }, (_, l) => {
    const r = (radius * (l + 1)) / levels;
    const pts = data.map((_, i) => point(i, r).join(",")).join(" ");
    return pts;
  });

  // Data polygon — collapses to center until in view, then animates out.
  const dataPts = data
    .map((d, i) => point(i, (radius * (inView ? d.value : 0)) / 100).join(","))
    .join(" ");

  return (
    <div ref={ref} style={{ display: "flex", justifyContent: "center" }}>
      <svg viewBox={`0 0 ${size} ${size}`} width="100%" style={{ maxWidth: size }}>
        {/* rings */}
        {rings.map((pts, i) => (
          <polygon
            key={i}
            points={pts}
            fill="none"
            stroke="var(--border)"
            strokeWidth={1}
          />
        ))}
        {/* spokes */}
        {data.map((_, i) => {
          const [x, y] = point(i, radius);
          return <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke="var(--border)" strokeWidth={1} />;
        })}
        {/* data area */}
        <polygon
          points={dataPts}
          fill="var(--accent-soft)"
          stroke="var(--accent)"
          strokeWidth={2}
          style={{ transition: "all 1s cubic-bezier(0.22,1,0.36,1)" }}
        />
        {/* data vertices */}
        {data.map((d, i) => {
          const [x, y] = point(i, (radius * (inView ? d.value : 0)) / 100);
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r={3.5}
              fill="var(--accent)"
              style={{ transition: "all 1s cubic-bezier(0.22,1,0.36,1)" }}
            />
          );
        })}
        {/* axis labels */}
        {data.map((d, i) => {
          const [x, y] = point(i, radius + 22);
          const a = angle(i);
          const anchor = Math.abs(Math.cos(a)) < 0.3 ? "middle" : Math.cos(a) > 0 ? "start" : "end";
          return (
            <text
              key={i}
              x={x}
              y={y}
              fontSize={9.5}
              fill="var(--muted)"
              textAnchor={anchor}
              dominantBaseline="middle"
            >
              {d.label.length > 16 ? d.label.slice(0, 15) + "…" : d.label}
            </text>
          );
        })}
      </svg>
    </div>
  );
}
