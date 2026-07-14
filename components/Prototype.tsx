"use client";

import type { Localized } from "@/lib/content";

// Optional real screenshots — drop files in /public and map them by slotId.
const SCREENSHOTS: Record<string, string> = {
  // "proj-awmtour": "/screenshots/awmtour.png",
};

export function Prototype({ t }: { t: Localized }) {
  const demos = t.projects.slice(0, 3);
  return (
    <section id="prototype" className="section wrap">
      <div className="prompt">$ ./run {t.sectionLabels.prototype}</div>
      <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14 }}>
        {demos.map((p) => {
          const shot = SCREENSHOTS[p.slotId];
          return (
            <div key={p.slotId} className="card themed hoverable" style={{ overflow: "hidden" }}>
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
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                ) : (
                  <span style={{ fontSize: 11, color: "var(--muted)", letterSpacing: 0.5 }}>
                    [ screenshot ]
                  </span>
                )}
              </div>
              <div style={{ padding: "12px 14px", fontSize: 12.5, color: "var(--fg)" }}>{p.title}</div>
            </div>
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
