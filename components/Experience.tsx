"use client";

import type { Localized } from "@/lib/content";

export function Experience({ t }: { t: Localized }) {
  return (
    <section id="experience" className="section wrap">
      <div className="prompt">$ cat {t.sectionLabels.experience}.log</div>
      {t.experience.map((job) => (
        <div
          key={job.role + job.period}
          className="card themed hoverable"
          style={{ padding: "18px 20px", marginBottom: 12 }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
            <div style={{ fontSize: 14.5, fontWeight: 700, color: "var(--fg)" }}>{job.role}</div>
            <div style={{ fontSize: 11.5, color: "var(--accent)" }}>[{job.period}]</div>
          </div>
          <div style={{ fontSize: 12.5, color: "var(--muted)", marginTop: 3 }}>{job.company}</div>
          {job.bullets.map((b, i) => (
            <div
              key={i}
              style={{
                fontSize: 13,
                color: "var(--muted)",
                marginTop: 9,
                paddingLeft: 16,
                position: "relative",
              }}
            >
              <span style={{ position: "absolute", left: 0, color: "var(--accent)" }}>&gt;</span>
              {b}
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}
