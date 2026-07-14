"use client";

import type { Localized } from "@/lib/content";

export function Hero({ t }: { t: Localized }) {
  return (
    <section id="home" className="wrap hero-pad" style={{ padding: "56px 36px 40px" }}>
      <div className="card themed" style={{ borderRadius: 8, overflow: "hidden" }}>
        {/* window chrome */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "10px 14px",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <span style={dot("#ff5f56")} />
          <span style={dot("#ffbd2e")} />
          <span style={dot("#27c93f")} />
          <span style={{ fontSize: 11.5, color: "var(--muted)", marginLeft: 10 }}>bash — 120x32</span>
        </div>

        {/* terminal body */}
        <div style={{ padding: "28px 30px", fontSize: 14, lineHeight: 1.9 }}>
          <div style={{ color: "var(--muted)" }}>$ whoami</div>
          <h1 style={{ fontSize: 34, fontWeight: 700, color: "var(--fg)", margin: "6px 0 2px" }}>
            Ahmad Thahir<span className="ot-cursor" />
          </h1>
          <div style={{ color: "var(--accent)", marginBottom: 16 }}>{t.meta.role}</div>

          <div style={{ color: "var(--muted)" }}>$ cat profile.txt</div>
          <p style={{ color: "var(--fg)", maxWidth: 720, marginTop: 6, opacity: 0.9 }}>{t.profile}</p>

          <div style={{ display: "flex", gap: 12, marginTop: 26, flexWrap: "wrap" }}>
            <a
              href="#contact"
              className="btn"
              style={{
                background: "var(--accent)",
                color: "var(--bg)",
                fontSize: 13,
                fontWeight: 700,
                padding: "11px 20px",
                display: "inline-block",
              }}
            >
              ./{t.heroLabels.cta}
            </a>
            <a
              href={t.meta.cvFile}
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "transparent",
                border: "1px solid var(--border)",
                color: "var(--fg)",
                fontSize: 13,
                padding: "11px 20px",
                display: "inline-block",
              }}
            >
              ./{t.heroLabels.cv}
            </a>
          </div>
        </div>
      </div>

      {/* stats */}
      <div
        className="stats-grid"
        style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14, marginTop: 18 }}
      >
        {t.stats.map((s) => (
          <div
            key={s.label}
            className="card themed hoverable"
            style={{ padding: 16, textAlign: "center" }}
          >
            <div style={{ fontSize: 24, fontWeight: 700, color: "var(--accent)" }}>{s.value}</div>
            <div style={{ fontSize: 11, color: "var(--muted)", marginTop: 4 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

const dot = (bg: string): React.CSSProperties => ({
  width: 10,
  height: 10,
  borderRadius: "50%",
  background: bg,
  display: "inline-block",
});
