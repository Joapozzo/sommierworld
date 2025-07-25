import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sommier World - Colchones y Sommiers Premium en Córdoba",
  description: "Descubre tu descanso perfecto con Sommier World. Especialistas en colchones y sommiers premium de las mejores marcas: Natural Soft, King Koil y Deseo. Más de 20 años brindando asesoramiento personalizado en Córdoba, Argentina.",
  keywords: [
    "colchones",
    "sommiers",
    "descanso premium",
    "Natural Soft",
    "King Koil",
    "Deseo",
    "Córdoba",
    "Argentina",
    "colchones premium",
    "sommiers de lujo",
    "asesoramiento personalizado",
    "garantía extendida",
    "período de prueba"
  ],
  authors: [{ name: "Sommier World" }],
  creator: "Sommier World",
  publisher: "Sommier World",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://sommierworld.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sommier World - Colchones y Sommiers Premium",
    description: "Especialistas en descanso premium con más de 20 años de experiencia. Marcas exclusivas: Natural Soft, King Koil y Deseo. Asesoramiento personalizado en Córdoba.",
    url: "https://sommierworld.com",
    siteName: "Sommier World",
    images: [
      {
        url: "/logotipo-reducido.svg",
        width: 1200,
        height: 630,
        alt: "Sommier World - Especialistas en Descanso Premium",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sommier World - Colchones y Sommiers Premium",
    description: "Especialistas en descanso premium con más de 20 años de experiencia. Asesoramiento personalizado en Córdoba.",
    images: ["/logotipo-reducido.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/logotipo-reducido.svg", type: "image/svg+xml" },
      { url: "/logotipo-reducido.svg", sizes: "32x32" },
      { url: "/logotipo-reducido.svg", sizes: "16x16" },
    ],
    apple: [
      { url: "/logotipo-reducido.svg", sizes: "180x180" },
    ],
    shortcut: "/logotipo-reducido.svg",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/logotipo-reducido.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/logotipo-reducido.svg" />
        <meta name="theme-color" content="#3468c0" />
        <meta name="msapplication-TileColor" content="#3468c0" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Sommier World" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Sommier World" />
      </head>
      <body
        className={`${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}