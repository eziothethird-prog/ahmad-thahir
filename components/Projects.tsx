"use client";

import type { Localized } from "@/lib/content";

export function Projects({ t }: { t: Localized }) {
  return (
    <section id="projects" className="section wrap">
      <div className="prompt">$ ls {t.sectionLabels.projects}/</div>
      <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        {t.projects.map((p) => {
          const inner = (
            <div className="card themed hoverable" style={{ padding: 18, height: "100%" }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: "var(--fg)" }}>./{p.title}</div>
              <div style={{ fontSize: 11.5, color: "var(--accent)", marginTop: 3 }}>{p.url}</div>
              <div
                style={{
                  fontSize: 12.5,
                  color: "var(--muted)",
                  lineHeight: 1.6,
                  marginTop: 10,
                }}
              >
                {p.desc}
              </div>
              <div style={{ display: "flex", gap: 6, marginTop: 12, flexWrap: "wrap" }}>
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: 10.5,
                      color: "var(--accent)",
                      border: "1px solid var(--border)",
                      padding: "2px 8px",
                    }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          );
          return p.link ? (
            <a key={p.slotId} href={p.link} target="_blank" rel="noopener noreferrer">
              {inner}
            </a>
          ) : (
            <div key={p.slotId}>{inner}</div>
          );
        })}
      </div>
    </section>
  );
}
