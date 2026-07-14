"use client";

import type { Localized } from "@/lib/content";

// Real screenshots captured by `npm run screenshots` (see scripts/capture-screenshots.mjs).
// Keyed by each project's slotId (defined in lib/content.ts).
const SCREENSHOTS: Record<string, string> = {
  "proj-awmtour": "/screenshots/proj-awmtour.png",
  "proj-liveaboard": "/screenshots/proj-liveaboard.png",
  "proj-evely": "/screenshots/proj-evely.png",
};

export function Prototype({ t }: { t: Localized }) {
  const demos = t.projects.slice(0, 3);
  return (
    <section id="prototype" className="section wrap">
      <div className="prompt">$ ./run {t.sectionLabels.prototype}</div>
      <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14 }}>
        {demos.map((p) => {
          const shot = SCREENSHOTS[p.slotId];
          const card = (
            <div className="card themed hoverable" style={{ overflow: "hidden", height: "100%" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "8px 12px",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <span style={miniDot("#ff5f56")} />
                <span style={miniDot("#ffbd2e")} />
                <span style={miniDot("#27c93f")} />
                <span style={{ fontSize: 10, color: "var(--muted)" }}>{p.url}</span>
              </div>
              <div
                style={{
                  width: "100%",
                  aspectRatio: "16 / 10",
                  background:
                    "repeating-linear-gradient(45deg, var(--card), var(--card) 10px, var(--bg) 10px, var(--bg) 20px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                {shot ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={shot}
                    alt={typeof p.title === "string" ? p.title : "screenshot"}
                    loading="lazy"
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                  />
                ) : (
                  <span style={{ fontSize: 11, color: "var(--muted)", letterSpacing: 0.5 }}>
                    [ screenshot ]
                  </span>
                )}
              </div>
              <div
                style={{
                  padding: "12px 14px",
                  fontSize: 12.5,
                  color: "var(--fg)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span>{p.title}</span>
                {p.link ? <span style={{ color: "var(--accent)", fontSize: 12 }}>↗</span> : null}
              </div>
            </div>
          );
          return p.link ? (
            <a key={p.slotId} href={p.link} target="_blank" rel="noopener noreferrer">
              {card}
            </a>
          ) : (
            <div key={p.slotId}>{card}</div>
          );
        })}
      </div>
    </section>
  );
}

const miniDot = (bg: string): React.CSSProperties => ({
  width: 7,
  height: 7,
  borderRadius: "50%",
  background: bg,
  display: "inline-block",
});
