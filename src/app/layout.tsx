import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { IntlProvider } from "@/components/providers/IntlProvider";
import { defaultLocale } from "@/i18n/config";
import { getMessages } from "@/i18n/request";

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
  title: "Silvermane Equestrian — Szkoła jazdy konnej, Piaseczno",
  description:
    "Prestiżowy ośrodek jeździecki w regionie warszawskim. Lekcje jazdy konnej dla dzieci i dorosłych, obozy letnie, ujeżdżenie i skoki przez przeszkody.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages(defaultLocale);

  return (
    <html
      lang={defaultLocale}
      className={`${cormorant.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <IntlProvider locale={defaultLocale} messages={messages}>
          <Nav />
          <main className="flex flex-col flex-1">{children}</main>
          <Footer />
        </IntlProvider>
      </body>
    </html>
  );
}
