import type { Metadata } from "next";
import { DM_Serif_Display, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const dmSerif = DM_Serif_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "400",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "bendteis — shot on fujifilm x100vi",
  description:
    "Fotografie, marketing en AI automation door BendTeis. Analoge esthetiek, digitale precisie. Shot on Fujifilm X100VI.",
  keywords: [
    "fotografie",
    "fujifilm x100vi",
    "analoog",
    "BendTeis",
    "marketing",
    "AI automation",
    "portretfotografie",
    "streetfotografie",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body
        className={`${dmSerif.variable} ${ibmPlexMono.variable} antialiased film-grain`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
