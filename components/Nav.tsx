"use client";

import { SECTION_IDS, type Lang, type Theme, type Localized } from "@/lib/content";

export function Nav({
  t,
  lang,
  theme,
  toggleLang,
  toggleTheme,
}: {
  t: Localized;
  lang: Lang;
  theme: Theme;
  toggleLang: () => void;
  toggleTheme: () => void;
}) {
  return (
    <div
      className="themed"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 20,
        borderBottom: "1px solid var(--border)",
        background: "color-mix(in srgb, var(--bg) 88%, transparent)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div
        className="wrap"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "10px 16px",
          padding: "14px 20px",
        }}
      >
        <a
          href="#home"
          style={{ fontSize: 13, color: "var(--accent)", flexShrink: 0, fontWeight: 600 }}
        >
          ahmad@portfolio<span style={{ color: "var(--muted)" }}>:~$</span>
        </a>

        <nav className="nav-links" style={{ display: "flex", gap: 22 }}>
          {t.nav.map((item, i) => (
            <a
              key={item}
              href={`#${SECTION_IDS[i]}`}
              style={{ fontSize: 12, color: "var(--muted)", whiteSpace: "nowrap" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
            >
              ./{item}
            </a>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
          <button
            className="btn"
            onClick={toggleLang}
            aria-label="Toggle language"
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              color: "var(--fg)",
              fontSize: 11,
              padding: "6px 11px",
            }}
          >
            --lang={lang}
          </button>
          <button
            className="btn"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              color: "var(--fg)",
              fontSize: 11,
              padding: "6px 11px",
            }}
          >
            --theme={theme}
          </button>
        </div>
      </div>
    </div>
  );
}
