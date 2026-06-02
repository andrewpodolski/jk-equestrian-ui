import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { AppIntlProvider } from "@/components/providers/AppIntlProvider";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "RK Warszawa — Szkoła jazdy konnej, Warszawa",
  description:
    "Prestiżowy ośrodek jeździecki w regionie warszawskim. Lekcje jazdy konnej dla dzieci i dorosłych, obozy letnie, ujeżdżenie i skoki przez przeszkody.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${cormorant.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AppIntlProvider>
          <Nav />
          <main className="flex flex-col flex-1">{children}</main>
          <Footer />
        </AppIntlProvider>
      </body>
    </html>
  );
}
