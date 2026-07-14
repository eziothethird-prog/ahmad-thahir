// ---------------------------------------------------------------------------
// Content model — bilingual (id / en) single source of truth.
// Ported from the Claude Design blueprint; edit here to update the site.
// ---------------------------------------------------------------------------

export type Lang = "id" | "en";
export type Theme = "dark" | "light";

/** A value that may be localized. Plain strings are shared across languages. */
type Loc<T = string> = T | { id: T; en: T };

function pick<T>(v: Loc<T>, lang: Lang): T {
  if (v && typeof v === "object" && ("id" in (v as object) || "en" in (v as object))) {
    return (v as { id: T; en: T })[lang];
  }
  return v as T;
}

export const CONTENT = {
  meta: {
    name: "Ahmad Thahir",
    role: {
      id: "IT Support | Web Developer | Network & Content",
      en: "IT Support | Web Developer | Network & Content",
    },
    location: "Makassar, Indonesia",
    email: "firstahmadthahir@gmail.com",
    phone: "+62 851-1123-0286",
    links: [
      { label: "Portfolio", href: "https://ahmad-thahir.vercel.app/" },
      { label: "GitHub", href: "https://github.com/eziothethird-prog/" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/ahmad-thahir/" },
      { label: "frost.rip", href: "https://www.frost.rip/atsta/" },
      { label: "Instagram", href: "https://instagram.com/atstaaa/" },
    ],
    cvFile: { id: "/cv/ahmad-thahir-id.html", en: "/cv/ahmad-thahir-en.html" },
  },
  profile: {
    id: "Lulusan S1 Teknik Komputer Universitas Negeri Makassar dengan pengalaman nyata di IT Support dan Web Development. Berpengalaman menangani troubleshooting hardware, software, dan jaringan, serta aktif membangun aplikasi web production menggunakan React/Next.js, Laravel, dan Node.js — termasuk workflow AI-assisted development (Claude Code, Cursor) untuk mempercepat development tanpa mengorbankan kualitas kode. Memiliki latar belakang SMK Teknik Komputer dan Jaringan serta penelitian skripsi di bidang embedded system (IoT).",
    en: "Computer Engineering graduate (B.Eng.) from Universitas Negeri Makassar with hands-on experience in both IT Support and Web Development. Experienced in resolving hardware, software, and network issues, and actively building production web applications using React/Next.js, Laravel, and Node.js — including AI-assisted development workflows (Claude Code, Cursor). Holds a vocational background in Computer & Network Engineering and conducted undergraduate research in embedded systems (IoT).",
  },
  stats: [
    { id: "Tahun pengalaman", en: "Years experience", value: "3+" },
    { id: "Proyek unggulan", en: "Featured projects", value: "4" },
    { id: "IPK", en: "GPA", value: "3.55" },
    { id: "Verifikasi token", en: "Token verification", value: "100%" },
  ],
  experience: [
    {
      period: { id: "2025 — Sekarang", en: "2025 — Present" },
      role: "Independent Web Developer (Freelance)",
      company: { id: "Self-employed — Makassar", en: "Self-employed — Makassar, Indonesia" },
      bullets: {
        id: [
          "Merancang dan membangun website production untuk klien lintas industri (travel, F&B), dari arsitektur sistem hingga deployment.",
          "Menggunakan AI-assisted development tools (Claude Code, Cursor) secara strategis untuk mempercepat development.",
          "Menangani end-to-end project lifecycle: requirement gathering, database, development, hingga handover.",
        ],
        en: [
          "Designed and built production websites for clients across travel and F&B industries, owning the full stack.",
          "Leveraged AI-assisted development tools (Claude Code, Cursor) to accelerate delivery while maintaining quality.",
          "Managed end-to-end project lifecycle: requirements, database design, development, and client handover.",
        ],
      },
    },
    {
      period: { id: "Jan 2023 — Agu 2025", en: "Jan 2023 — Aug 2025" },
      role: "IT Support Engineer",
      company: {
        id: "PT. Al Ikhlas Wisata Mandiri — Makassar",
        en: "PT. Al Ikhlas Wisata Mandiri — Makassar, Indonesia",
      },
      bullets: {
        id: [
          "Menangani troubleshooting hardware, software, dan jaringan.",
          "Memelihara dan memonitor perangkat komputer perusahaan.",
          "Mendokumentasikan permasalahan dan solusi teknis.",
        ],
        en: [
          "Resolved hardware, software, and network issues to maintain daily operations.",
          "Maintained and monitored company computer equipment.",
          "Documented technical issues and solutions to improve efficiency.",
        ],
      },
    },
    {
      period: { id: "Sep 2024 — Mar 2025", en: "Sep 2024 — Mar 2025" },
      role: "Video Content Creator",
      company: {
        id: "PT. Magau Kreatif Digital — Makassar",
        en: "PT. Magau Kreatif Digital — Makassar, Indonesia",
      },
      bullets: {
        id: [
          "Mengembangkan konten media sosial sesuai tren terkini, khususnya TikTok.",
          "Menyusun script dan konsep video pendek.",
        ],
        en: [
          "Developed social media content aligned with trends, particularly TikTok.",
          "Wrote scripts and concepts for short-form videos.",
        ],
      },
    },
    {
      period: { id: "Des 2022 — Feb 2023", en: "Dec 2022 — Feb 2023" },
      role: "Video Editor",
      company: { id: "iNews TV Makassar", en: "iNews TV Makassar" },
      bullets: {
        id: [
          "Mengedit video berita untuk tayangan televisi.",
          "Memastikan video siap tayang sesuai deadline.",
        ],
        en: [
          "Edited news footage for television broadcast.",
          "Ensured videos were broadcast-ready and delivered on deadline.",
        ],
      },
    },
    {
      period: { id: "Sep 2018 — Des 2018", en: "Sep 2018 — Dec 2018" },
      role: "Network Technician (Magang / Internship)",
      company: { id: "PT. Telkom Akses — Makassar", en: "PT. Telkom Akses — Makassar, Indonesia" },
      bullets: {
        id: [
          "Membantu instalasi jaringan telekomunikasi di lapangan.",
          "Troubleshooting dasar dan pemeliharaan jaringan.",
        ],
        en: [
          "Assisted with on-site installation of telecommunications networks.",
          "Performed basic troubleshooting and network maintenance.",
        ],
      },
    },
  ],
  projects: [
    {
      title: "AWM Tour",
      url: "awmtour.com",
      link: "https://awmtour.com",
      tags: ["Laravel", "MySQL", "VPS"],
      desc: {
        id: "Website resmi perusahaan travel & tour — desain, development, hingga maintenance berkelanjutan.",
        en: "Official website for a travel & tour company — design through ongoing maintenance.",
      },
      slotId: "proj-awmtour",
    },
    {
      title: "Natural Liveaboard",
      url: "naturalliveaboard.com",
      link: "https://naturalliveaboard.com",
      tags: ["Next.js", "Trilingual", "Booking"],
      desc: {
        id: "Website pemesanan charter liveaboard di Labuan Bajo, tiga bahasa, live di production.",
        en: "Trilingual booking website for a liveaboard charter business in Labuan Bajo. Live in production.",
      },
      slotId: "proj-liveaboard",
    },
    {
      title: "Evely Cake & Bakery",
      url: { id: "Company profile & admin panel", en: "Company profile & admin panel" },
      link: "",
      tags: ["Laravel 13", "Filament 4"],
      desc: {
        id: "Company profile & sistem manajemen produk dengan panel admin untuk katalog dan pesanan.",
        en: "Company profile and product management system with a full admin panel for catalog & orders.",
      },
      slotId: "proj-evely",
    },
    {
      title: { id: "Meteran Air Prabayar Berbasis Token", en: "Token-Based Prepaid Water Meter" },
      url: { id: "Skripsi — dipublikasikan Jan 2024", en: "Undergraduate thesis — published Jan 2024" },
      link: "",
      tags: ["ESP32", "IoT", "Caesar Cipher"],
      desc: {
        id: "R&D embedded system: ESP32, sensor waterflow YF-S201, solenoid valve, enkripsi token Caesar Cipher. Tingkat verifikasi token 100%.",
        en: "R&D embedded system: ESP32, YF-S201 waterflow sensor, solenoid valve, Caesar Cipher token encryption. Achieved 100% token verification.",
      },
      slotId: "proj-thesis",
    },
  ],
  skillChart: [
    { label: { id: "Frontend", en: "Frontend" }, value: 90 },
    { label: { id: "Backend", en: "Backend" }, value: 85 },
    { label: { id: "IT Support & Jaringan", en: "IT Support & Networking" }, value: 88 },
    { label: { id: "Database", en: "Database" }, value: 75 },
    { label: { id: "AI-Assisted Dev", en: "AI-Assisted Dev" }, value: 85 },
    { label: { id: "Konten & Media", en: "Content & Media" }, value: 70 },
  ],
  skillGroups: [
    {
      label: { id: "Frontend", en: "Frontend" },
      items: "React.js, Next.js, Vue, Nuxt, Svelte, HTML, CSS, JavaScript, Tailwind CSS",
    },
    { label: { id: "Backend", en: "Backend" }, items: "Node.js, Express, Laravel, PHP, REST API" },
    { label: { id: "Database", en: "Database" }, items: "SQL/MySQL, MongoDB, SQLite, Prisma" },
    { label: { id: "AI & Tools", en: "AI & Tools" }, items: "Claude Code, Cursor, n8n, MCP, Git/GitHub" },
    {
      label: { id: "IT Support & Jaringan", en: "IT Support & Networking" },
      items: "Computer Networking, Network Installation & Maintenance, Troubleshooting, Computer Repair",
    },
    {
      label: { id: "Konten & Media", en: "Content & Media" },
      items: "Video Editing, Photo & Image Editing, Script Writing, Content Creation",
    },
  ],
  education: [
    {
      period: "Sep 2020 — Jan 2024",
      title: { id: "S1 Teknik Komputer", en: "B.Eng. Computer Engineering" },
      school: "Universitas Negeri Makassar",
      note: { id: "IPK: 3.55 / 4.00", en: "GPA: 3.55 / 4.00" },
    },
    {
      period: "Sep 2017 — Sep 2020",
      title: { id: "SMK — Teknik Komputer dan Jaringan", en: "Vocational HS — Computer & Network Engineering" },
      school: "SMK Telkom Makassar",
      note: { id: "", en: "" },
    },
  ],
  pricing: [
    {
      name: { id: "Landing Page", en: "Landing Page" },
      price: { id: "Rp 1.500.000 – 3.000.000", en: "$300 – 600" },
      desc: {
        id: "Satu halaman untuk promosi produk/jasa/acara.",
        en: "Single page for promoting a product, service, or event.",
      },
      features: {
        id: [
          "1 halaman, desain custom",
          "Responsif mobile & desktop",
          "Formulir kontak / WhatsApp CTA",
          "Optimasi kecepatan & SEO dasar",
          "1x revisi desain",
        ],
        en: [
          "1 page, custom design",
          "Mobile & desktop responsive",
          "Contact form / WhatsApp CTA",
          "Basic speed & SEO optimization",
          "1x design revision",
        ],
      },
      highlight: false,
    },
    {
      name: { id: "Company Profile", en: "Company Profile" },
      price: { id: "Rp 4.000.000 – 8.000.000", en: "$800 – 2,000" },
      desc: {
        id: "Website profil usaha multi-halaman dengan CMS sederhana.",
        en: "Multi-page business profile website with a simple CMS.",
      },
      features: {
        id: [
          "Hingga 6 halaman (Home, Tentang, Layanan, Galeri, Kontak, dst.)",
          "Panel admin untuk update konten sendiri",
          "Domain & hosting setup dibantu",
          "SEO dasar + Google Analytics",
          "2x revisi desain",
        ],
        en: [
          "Up to 6 pages (Home, About, Services, Gallery, Contact, etc.)",
          "Admin panel to update content yourself",
          "Domain & hosting setup assistance",
          "Basic SEO + Google Analytics",
          "2x design revisions",
        ],
      },
      highlight: true,
    },
    {
      name: { id: "Sistem / Web App Custom", en: "Custom System / Web App" },
      price: { id: "Rp 8.000.000 – 20.000.000+", en: "$2,500 – 8,000+" },
      desc: {
        id: "Sistem booking, e-commerce, atau dashboard dengan logika bisnis khusus.",
        en: "Booking systems, e-commerce, or dashboards with custom business logic.",
      },
      features: {
        id: [
          "Arsitektur & database custom",
          "Autentikasi & role/hak akses",
          "Integrasi pembayaran / API pihak ketiga",
          "Panel admin lengkap",
          "Dukungan pasca-launch 30 hari",
        ],
        en: [
          "Custom architecture & database",
          "Authentication & role-based access",
          "Payment integration / 3rd-party APIs",
          "Full admin panel",
          "30-day post-launch support",
        ],
      },
      highlight: false,
    },
    {
      name: { id: "Maintenance / Retainer", en: "Maintenance / Retainer" },
      price: { id: "Mulai Rp 500.000 / bulan", en: "From $60 / month" },
      desc: {
        id: "Perawatan berkala untuk website yang sudah berjalan.",
        en: "Ongoing care for an already-live website.",
      },
      features: {
        id: [
          "Update konten & plugin/dependency",
          "Monitoring uptime & keamanan",
          "Backup rutin",
          "Perbaikan bug prioritas",
        ],
        en: [
          "Content & dependency updates",
          "Uptime & security monitoring",
          "Routine backups",
          "Priority bug fixes",
        ],
      },
      highlight: false,
    },
  ],
  labels: {
    nav: {
      id: ["Beranda", "Pengalaman", "Proyek", "Prototype", "Keahlian", "Harga", "Kontak"],
      en: ["Home", "Experience", "Projects", "Prototype", "Skills", "Pricing", "Contact"],
    },
    hero: {
      id: { greet: "Halo, saya", cta: "Hubungi Saya", cv: "Unduh CV" },
      en: { greet: "Hi, I'm", cta: "Get in Touch", cv: "Download CV" },
    },
    sections: {
      id: {
        profile: "Ringkasan Profil",
        experience: "Pengalaman Kerja",
        projects: "Proyek Unggulan",
        prototype: "Prototype & Demo",
        skills: "Keahlian Teknis",
        education: "Pendidikan",
        pricing: "Daftar Harga Jasa Website",
        contact: "Mari Berkolaborasi",
      },
      en: {
        profile: "Profile Summary",
        experience: "Work Experience",
        projects: "Featured Projects",
        prototype: "Prototype & Demos",
        skills: "Technical Skills",
        education: "Education",
        pricing: "Website Service Pricing",
        contact: "Let's Work Together",
      },
    },
    pricingNote: {
      id: "Harga bersifat estimasi, disesuaikan dengan kompleksitas & kebutuhan proyek.",
      en: "Prices are estimates and vary with project complexity & requirements.",
    },
    contactCta: {
      id: "Punya ide proyek? Ceritakan kebutuhanmu, saya bantu wujudkan.",
      en: "Have a project in mind? Tell me what you need, let's build it.",
    },
  },
} as const;

// Section ids used for smooth-scroll navigation (matches nav order).
export const SECTION_IDS = [
  "home",
  "experience",
  "projects",
  "prototype",
  "skills",
  "pricing",
  "contact",
] as const;

/** Flatten the bilingual CONTENT tree into a single language for rendering. */
export function localize(lang: Lang) {
  const C = CONTENT;
  return {
    meta: {
      ...C.meta,
      role: C.meta.role[lang],
      cvFile: C.meta.cvFile[lang],
    },
    profile: C.profile[lang],
    stats: C.stats.map((s) => ({ label: s[lang], value: s.value })),
    experience: C.experience.map((e) => ({
      period: e.period[lang],
      role: e.role,
      company: e.company[lang],
      bullets: e.bullets[lang],
    })),
    projects: C.projects.map((p) => ({
      title: pick(p.title, lang),
      url: pick(p.url, lang),
      link: p.link,
      tags: p.tags,
      desc: p.desc[lang],
      slotId: p.slotId,
    })),
    skillChart: C.skillChart.map((s) => ({ label: s.label[lang], value: s.value })),
    skillGroups: C.skillGroups.map((s) => ({ label: s.label[lang], items: s.items })),
    education: C.education.map((e) => ({
      period: e.period,
      title: e.title[lang],
      school: e.school,
      note: e.note[lang],
    })),
    pricing: C.pricing.map((p) => ({
      name: p.name[lang],
      price: pick(p.price, lang),
      desc: p.desc[lang],
      features: p.features[lang],
      highlight: p.highlight,
    })),
    nav: C.labels.nav[lang],
    heroLabels: C.labels.hero[lang],
    sectionLabels: C.labels.sections[lang],
    pricingNote: C.labels.pricingNote[lang],
    contactCta: C.labels.contactCta[lang],
  };
}

export type Localized = ReturnType<typeof localize>;
