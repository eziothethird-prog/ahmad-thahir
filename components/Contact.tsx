"use client";

import { CONTENT, type Localized } from "@/lib/content";

export function Contact({ t }: { t: Localized }) {
  return (
    <section
      id="contact"
      className="wrap"
      style={{ padding: "60px 36px", borderTop: "1px solid var(--border)", textAlign: "center" }}
    >
      <div style={{ fontSize: 13, color: "var(--muted)" }}>$ echo &quot;contact&quot;</div>
      <div style={{ fontSize: 24, fontWeight: 700, maxWidth: 560, margin: "14px auto 0" }}>
        {t.contactCta}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 22,
          marginTop: 18,
          fontSize: 13,
          color: "var(--muted)",
        }}
      >
        <a href={`mailto:${t.meta.email}`} className="link">
          {t.meta.email}
        </a>
        <a href={`https://wa.me/${t.meta.phone.replace(/[^0-9]/g, "")}`} target="_blank" rel="noopener noreferrer">
          {t.meta.phone}
        </a>
      </div>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 16, marginTop: 16 }}>
        {CONTENT.meta.links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: 11.5, color: "var(--accent)" }}
          >
            [{l.label}]
          </a>
        ))}
      </div>
      <div style={{ marginTop: 40, fontSize: 11, color: "var(--muted)", opacity: 0.7 }}>
        © {new Date().getFullYear()} Ahmad Thahir — built with Next.js
      </div>
    </section>
  );
}
