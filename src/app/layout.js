import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/latout/Navbar";
import ScrollToTop from "../components/latout/ScrollToTop";
import FixedButtons from "../components/latout/FixedButtons";
import Footer from "../components/latout/Footer";

// import Footer from "./components/latout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata = {
  title: "Star Dance Academy | Best Dance Classes in Satna",
  description:
    "Star Dance Academy is the best dance academy in Satna offering Hip Hop, Contemporary, Bollywood, Kathak, Freestyle & Zumba classes. We specialize in wedding choreography and event performances across Satna, Rewa, Maihar, Nagod & Rampur.",

  keywords: [
    "Star Dance Academy",
    "Star Dance Satna",
    "dance academy in Satna",
    "best dance academy in Satna",
    "dance classes in Satna",
    "hip hop dance classes Satna",
    "bollywood dance classes Satna",
    "wedding dance choreography Satna",
    "dance studio in Satna",
  ],

  authors: [{ name: "TFP Technologies" }],
  creator: "Prins Singh",
  publisher: "TFP Technologies",

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    apple: [
      { url: "/apple-icon-57x57.png", sizes: "57x57" },
      { url: "/apple-icon-60x60.png", sizes: "60x60" },
      { url: "/apple-icon-72x72.png", sizes: "72x72" },
      { url: "/apple-icon-76x76.png", sizes: "76x76" },
      { url: "/apple-icon-114x114.png", sizes: "114x114" },
      { url: "/apple-icon-120x120.png", sizes: "120x120" },
      { url: "/apple-icon-144x144.png", sizes: "144x144" },
      { url: "/apple-icon-152x152.png", sizes: "152x152" },
      { url: "/apple-icon-180x180.png", sizes: "180x180" },
    ],
    icon: [
      { url: "/android-icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-icon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
  },
  alternates: {
    canonical: "https://stardanceacademy.in/",
  },

  manifest: "/manifest.json",
  openGraph: {
    title: "Star Dance Academy | Best Dance Classes in Satna",
    description:
      "Join Star Dance Academy – Satna’s leading dance academy for Hip Hop, Bollywood, Contemporary, Kathak & Wedding Choreography.",
    type: "website",
    siteName: "Star Dance Academy",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Star Dance Academy Satna",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Star Dance Academy | Dance Classes in Satna",
    description:
      "Professional dance classes and wedding choreography in Satna by Star Dance Academy.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <ScrollToTop />
        <FixedButtons />
        <Footer />
      </body>
    </html>
  );
}
