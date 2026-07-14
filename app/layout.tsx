import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ahmad Thahir — IT Support & Web Developer",
  description:
    "Portfolio Ahmad Thahir — IT Support, Web Developer, Network & Content. React/Next.js, Laravel, Node.js. Berbasis di Makassar, Indonesia.",
  keywords: [
    "Ahmad Thahir",
    "Web Developer Makassar",
    "IT Support",
    "Next.js",
    "Laravel",
    "React",
    "Jasa Website",
  ],
  authors: [{ name: "Ahmad Thahir" }],
  openGraph: {
    title: "Ahmad Thahir — IT Support & Web Developer",
    description:
      "Portfolio & daftar harga jasa pembuatan website. React/Next.js, Laravel, Node.js.",
    type: "website",
    locale: "id_ID",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d1117",
  width: "device-width",
  initialScale: 1,
};

// Applies saved theme/lang before first paint to avoid a flash of the wrong theme.
const noFlash = `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';}document.documentElement.setAttribute('data-theme',t);var l=localStorage.getItem('lang')||'id';document.documentElement.setAttribute('lang',l);}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFlash }} />
      </head>
      <body className={jetbrains.variable}>{children}</body>
    </html>
  );
}
