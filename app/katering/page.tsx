import type { Metadata } from "next";
import { CONTENT } from "@/lib/content";

export const metadata: Metadata = {
  title: "Order Online untuk Katering Makassar — Ahmad Thahir",
  description:
    "Halaman menu & harga per porsi, form pesanan yang masuk rapi ke WhatsApp, dan balasan otomatis 24 jam untuk usaha katering di Makassar.",
  openGraph: {
    title: "Pesanan katering tidak hilang lagi karena telat dibalas",
    description: "Halaman menu & harga + form pesanan ke WhatsApp. Jadi 7 hari kerja. Ahmad Thahir, Makassar.",
    type: "website",
    locale: "id_ID",
  },
};

const WA = CONTENT.meta.phone.replace(/[^0-9]/g, "");
const WA_TEXT = encodeURIComponent(
  "Halo Ahmad, saya dari usaha katering. Mau tanya soal halaman menu & order online.",
);

const PROBLEMS = [
  "Setiap pelanggan harus tanya menu & harga satu per satu lewat chat.",
  "Chat yang masuk saat dapur sibuk atau malam hari baru terbalas besok, dan pelanggan sudah pesan di tempat lain.",
  "Usaha sudah ramai ulasan di Google Maps, tapi belum ada halaman menu yang bisa langsung dibuka.",
];

const PACKAGES = [
  {
    name: "Order Online Katering",
    price: "Rp 2.500.000",
    note: "sekali bayar",
    items: [
      "Halaman menu + harga per porsi + minimal order",
      "Form pesanan masuk ke WA dengan format rapi (nama, tanggal acara, jumlah porsi, alamat)",
      "Tautan dari Google Maps + SEO dasar",
      "Rapi dibuka di HP",
    ],
    highlight: true,
  },
  {
    name: "+ Admin WA Otomatis",
    price: "+ Rp 3.000.000",
    note: "setup, lalu Rp 300.000 / bulan",
    items: [
      "Balasan otomatis 24 jam untuk pertanyaan yang sering muncul: menu, harga, ongkir, tanggal kosong",
      "Pelanggan tetap dilayani walau dapur sedang sibuk",
      "Pesanan diteruskan ke admin yang tepat",
    ],
    highlight: false,
  },
  {
    name: "Rawat Bulanan",
    price: "Rp 250.000",
    note: "per bulan",
    items: ["Update menu & harga", "Backup rutin", "Laporan jumlah klik WA tiap bulan"],
    highlight: false,
  },
];

const STEPS = [
  "Ngobrol 15 menit (gratis): berapa chat masuk, berapa yang jadi pesanan, apa yang mau dicapai.",
  "DP 50%, lalu Bapak/Ibu kirim menu, harga, foto, dan logo.",
  "Jadi dalam 7 hari kerja setelah materi lengkap. Sudah termasuk 2 putaran revisi.",
  "Pelunasan setelah website live. Saya kirim video singkat cara memakainya.",
];

const PROOF = [
  {
    title: "Evely Cake & Bakery",
    desc: "Website toko kue + panel admin untuk katalog produk dan pesanan.",
    img: "/screenshots/proj-evely.png",
    link: "",
  },
  {
    title: "AWM Tour",
    desc: "Website travel umrah + sistem admin untuk booking, pembayaran jamaah, dan keuangan.",
    img: "/screenshots/proj-awmtour.png",
    link: "https://awmtour.com",
  },
  {
    title: "Natural Liveaboard",
    desc: "Website pemesanan trip kapal di Labuan Bajo, dalam 3 bahasa.",
    img: "/screenshots/proj-liveaboard.png",
    link: "https://naturalliveaboard.com",
  },
];

export default function Katering() {
  const waHref = `https://wa.me/${WA}?text=${WA_TEXT}`;
  return (
    <main>
      <section className="wrap hero-pad" style={{ padding: "56px 36px 40px" }}>
        <div style={{ fontSize: 13, color: "var(--accent)" }}>Untuk usaha katering di Makassar</div>
        <h1 style={{ fontSize: 32, fontWeight: 700, lineHeight: 1.3, margin: "12px 0 14px", maxWidth: 820 }}>
          Pesanan dari WA &amp; Google tidak hilang lagi karena telat dibalas.
        </h1>
        <p style={{ fontSize: 15, lineHeight: 1.8, color: "var(--muted)", maxWidth: 720 }}>
          Pelanggan bisa langsung lihat menu &amp; harga per porsi, lalu pesanannya masuk ke WhatsApp Bapak/Ibu
          dalam format rapi. Admin tidak perlu menjawab pertanyaan yang sama berulang-ulang.
        </p>
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
          style={{
            background: "var(--accent)",
            color: "var(--bg)",
            fontSize: 14,
            fontWeight: 700,
            padding: "13px 22px",
            display: "inline-block",
            marginTop: 24,
          }}
        >
          Tanya lewat WhatsApp
        </a>
      </section>

      <section className="section wrap">
        <h2 style={sectionTitle}>Masalah yang sering terjadi</h2>
        {PROBLEMS.map((p) => (
          <p key={p} style={bullet}>
            <span style={{ position: "absolute", left: 0, color: "var(--accent)" }}>×</span>
            {p}
          </p>
        ))}
      </section>

      <section className="section wrap">
        <h2 style={sectionTitle}>Paket</h2>
        <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14 }}>
          {PACKAGES.map((p) => (
            <div
              key={p.name}
              className="card themed"
              style={{ padding: 20, borderColor: p.highlight ? "var(--accent)" : "var(--border)" }}
            >
              <div style={{ fontSize: 15, fontWeight: 700 }}>{p.name}</div>
              <div style={{ fontSize: 20, fontWeight: 700, color: "var(--accent)", marginTop: 10 }}>{p.price}</div>
              <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 2 }}>{p.note}</div>
              {p.items.map((i) => (
                <p key={i} style={{ ...bullet, fontSize: 13, marginTop: 10 }}>
                  <span style={{ position: "absolute", left: 0, color: "var(--accent)" }}>+</span>
                  {i}
                </p>
              ))}
            </div>
          ))}
        </div>
        <p style={{ fontSize: 12.5, color: "var(--muted)", marginTop: 16, lineHeight: 1.7 }}>
          Mau isinya lebih sedikit supaya lebih hemat? Bisa. Bagian yang belum perlu kita pindah ke tahap berikutnya.
        </p>
      </section>

      <section className="section wrap">
        <h2 style={sectionTitle}>Cara kerja</h2>
        {STEPS.map((s, i) => (
          <p key={s} style={bullet}>
            <span style={{ position: "absolute", left: 0, color: "var(--accent)", fontWeight: 700 }}>{i + 1}.</span>
            {s}
          </p>
        ))}
      </section>

      <section className="section wrap">
        <h2 style={sectionTitle}>Yang sudah saya kerjakan</h2>
        <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14 }}>
          {PROOF.map((p) => (
            <div key={p.title} className="card themed" style={{ overflow: "hidden" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.img}
                alt={`Tampilan website ${p.title}`}
                style={{ width: "100%", aspectRatio: "16/10", objectFit: "cover", objectPosition: "top", display: "block" }}
              />
              <div style={{ padding: 16 }}>
                <div style={{ fontSize: 14, fontWeight: 700 }}>{p.title}</div>
                <p style={{ fontSize: 12.5, color: "var(--muted)", marginTop: 6, lineHeight: 1.6 }}>{p.desc}</p>
                {p.link ? (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "inline-block", fontSize: 12.5, color: "var(--accent)", marginTop: 8 }}
                  >
                    Lihat website ↗
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        className="wrap"
        style={{ padding: "50px 36px 60px", borderTop: "1px solid var(--border)", textAlign: "center" }}
      >
        <div style={{ fontSize: 22, fontWeight: 700 }}>Ahmad Thahir</div>
        <p style={{ fontSize: 13, color: "var(--muted)", marginTop: 8, lineHeight: 1.7 }}>
          Web developer di Makassar · S1 Teknik Komputer, Universitas Negeri Makassar
        </p>
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
          style={{
            background: "var(--accent)",
            color: "var(--bg)",
            fontSize: 14,
            fontWeight: 700,
            padding: "13px 22px",
            display: "inline-block",
            marginTop: 20,
          }}
        >
          WhatsApp {CONTENT.meta.phone}
        </a>
        <div style={{ marginTop: 18 }}>
          <a href="/" style={{ fontSize: 12.5, color: "var(--accent)" }}>
            Lihat profil lengkap →
          </a>
        </div>
      </section>
    </main>
  );
}

const sectionTitle: React.CSSProperties = { fontSize: 18, fontWeight: 700, marginBottom: 16 };
const bullet: React.CSSProperties = {
  position: "relative",
  paddingLeft: 22,
  fontSize: 14,
  lineHeight: 1.7,
  marginTop: 10,
};
