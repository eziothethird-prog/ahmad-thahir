"use client";

import type { Localized } from "@/lib/content";

export function Pricing({ t }: { t: Localized }) {
  return (
    <section id="pricing" className="section wrap">
      <div className="prompt" style={{ marginBottom: 0 }}>
        $ cat {t.sectionLabels.pricing}.md
      </div>
      <div style={{ fontSize: 11.5, color: "var(--muted)", margin: "8px 0 18px", opacity: 0.8 }}>
        # {t.pricingNote}
      </div>
      <div className="grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14 }}>
        {t.pricing.map((tier) => (
          <div
            key={tier.name}
            className="card themed hoverable"
            style={{
              padding: 18,
              borderColor: tier.highlight ? "var(--accent)" : "var(--border)",
              position: "relative",
            }}
          >
            {tier.highlight ? (
              <span
                style={{
                  position: "absolute",
                  top: -9,
                  right: 12,
                  fontSize: 9.5,
                  fontWeight: 700,
                  color: "var(--bg)",
                  background: "var(--accent)",
                  padding: "2px 8px",
                }}
              >
                POPULAR
              </span>
            ) : null}
            <div style={{ fontSize: 13.5, fontWeight: 700, color: "var(--fg)" }}>{tier.name}</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: "var(--accent)", marginTop: 8 }}>
              {tier.price}
            </div>
            <div style={{ fontSize: 11.5, color: "var(--muted)", marginTop: 8, lineHeight: 1.5 }}>
              {tier.desc}
            </div>
            {tier.features.map((f, i) => (
              <div
                key={i}
                style={{
                  fontSize: 11,
                  color: "var(--muted)",
                  marginTop: 8,
                  paddingLeft: 14,
                  position: "relative",
                }}
              >
                <span style={{ position: "absolute", left: 0, color: "var(--accent)" }}>+</span>
                {f}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
