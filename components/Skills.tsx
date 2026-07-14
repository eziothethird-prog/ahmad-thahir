"use client";

import type { Localized } from "@/lib/content";
import { RadarChart } from "./RadarChart";
import { useInView } from "./useInView";

export function Skills({ t }: { t: Localized }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.25);

  return (
    <section id="skills" className="section wrap">
      <div className="prompt">$ cat {t.sectionLabels.skills}.json</div>

      <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        {/* Left: animated proficiency bars */}
        <div ref={ref} className="card themed" style={{ padding: 20 }}>
          {t.skillChart.map((s, i) => (
            <div key={s.label} style={{ marginBottom: 14 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: 12,
                  marginBottom: 5,
                }}
              >
                <span>{s.label}</span>
                <span style={{ color: "var(--accent)" }}>{s.value}%</span>
              </div>
              <div className="bar-track">
                <div
                  className="bar-fill"
                  style={{ width: inView ? `${s.value}%` : 0, transitionDelay: `${i * 90}ms` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Right: radar chart (the "grafik") */}
        <div
          className="card themed"
          style={{ padding: 16, display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <RadarChart data={t.skillChart} />
        </div>
      </div>

      {/* Skill groups */}
      <div className="card themed" style={{ padding: 20, marginTop: 14 }}>
        <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px 24px" }}>
          {t.skillGroups.map((g) => (
            <div key={g.label} style={{ fontSize: 12 }}>
              <span style={{ color: "var(--accent)" }}>{g.label}:</span>
              <span style={{ color: "var(--muted)" }}> {g.items}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
