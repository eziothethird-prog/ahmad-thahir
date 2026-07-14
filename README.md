# Ahmad Thahir — Portfolio

Website portfolio pribadi bertema **terminal**, dwibahasa (Indonesia / English) dengan
toggle **dark / light**, grafik keahlian (radar chart + bar), dan daftar harga jasa website.
Dibangun dari rancangan Claude Design, diimplementasikan sebagai aplikasi **Next.js**.

## Fitur
- 🌗 Toggle tema **dark/light** (tersimpan di `localStorage`, tanpa flash saat reload)
- 🌐 Toggle bahasa **ID/EN** (semua konten, label, dan link CV ikut berganti)
- 📊 Grafik keahlian: **radar chart SVG** + bar proficiency beranimasi saat di-scroll
- 🧑‍💻 Section: Hero, Pengalaman, Proyek, Prototype/Demo, Keahlian, Pendidikan, Harga, Kontak
- 📄 Halaman CV siap-cetak (ID & EN) di `/cv/` — buka lalu `Ctrl/Cmd + P` → Save as PDF
- ⚡ Statis (SSG), First Load JS ~114 kB, responsif mobile → desktop

## Menjalankan
```bash
npm install
npm run dev      # http://localhost:3000
```

## Build produksi
```bash
npm run build
npm start
```

## Struktur
```
app/
  layout.tsx        # font, metadata SEO, script anti-flash tema
  page.tsx          # merangkai semua section (client component)
  globals.css       # token warna (CSS variables) + animasi
  icon.svg          # favicon
lib/
  content.ts        # ⭐ SUMBER KONTEN (dwibahasa) — edit di sini untuk update isi
  usePrefs.ts       # state tema & bahasa (localStorage)
components/          # Nav, Hero, Experience, Projects, Prototype, Skills,
                    # Education, Pricing, Contact, RadarChart, useInView
public/
  cv/               # CV siap-cetak (id & en)
  screenshots/      # taruh screenshot proyek di sini (lihat catatan bawah)
```

## Cara update konten
Semua teks, proyek, harga, dan skill ada di **`lib/content.ts`** dalam format `{ id, en }`.
Ubah di satu tempat, kedua bahasa langsung ikut.

## Screenshot prototype
Screenshot situs live di-capture otomatis dengan Playwright:
```bash
npx playwright install chromium   # sekali saja
npm run screenshots               # capture ke public/screenshots/
```
Target diatur di [`scripts/capture-screenshots.mjs`](scripts/capture-screenshots.mjs)
(`slot` harus sama dengan `slotId` proyek di `lib/content.ts`). Hasilnya otomatis
dipakai lewat map `SCREENSHOTS` di `components/Prototype.tsx`.

Kalau mau pakai gambar sendiri, cukup taruh file di `public/screenshots/`
dengan nama `<slotId>.png` (mis. `proj-evely.png`) lalu daftarkan di map tersebut.

## Deploy
- **Vercel** (paling mudah): push ke GitHub → import di vercel.com → selesai.
- **VPS / Node**: `npm run build && npm start` (port 3000), pasang di belakang Nginx.
- **Statis**: proyek ini sudah full static; bisa juga `output: "export"` bila perlu.

## Catatan
- Link sosial di `lib/content.ts` (`meta.links`) masih placeholder (GitHub/LinkedIn/Instagram) —
  ganti dengan URL asli.
- File `Ahmad Thahir Portfolio.html` adalah rancangan bundel asli dari Claude Design (referensi).
