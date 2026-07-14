"use client";

import type { Localized } from "@/lib/content";

export function Education({ t }: { t: Localized }) {
  return (
    <section id="education" className="section wrap">
      <div className="prompt">$ cat {t.sectionLabels.education}.log</div>
      {t.education.map((e) => (
        <div
          key={e.title}
          className="card themed hoverable"
          style={{
            padding: "16px 20px",
            marginBottom: 10,
            display: "flex",
            justifyContent: "space-between",
            gap: 12,
          }}
        >
          <div>
            <div style={{ fontSize: 13.5, fontWeight: 700 }}>{e.title}</div>
            <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 3 }}>{e.school}</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 11.5, color: "var(--accent)" }}>{e.period}</div>
            {e.note ? (
              <div style={{ fontSize: 11.5, color: "var(--muted)", marginTop: 3 }}>{e.note}</div>
            ) : null}
          </div>
        </div>
      ))}
    </section>
  );
}
