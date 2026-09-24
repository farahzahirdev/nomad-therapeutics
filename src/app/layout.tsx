import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nomadtherapeutics.org"),
  title: "At-Home IM Ketamine in Seattle | Nomad Therapeutics",
  description:
    "Nurse-administered IM ketamine at home for treatment-resistant depression, PTSD, and anxiety. Seattle’s interventional psychiatry practice. Book a free consultation or find out if you qualify.",
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  keywords: [
    "at-home ketamine Seattle",
    "IM ketamine Seattle",
    "Nomad Therapeutics",
    "treatment-resistant depression",
    "PTSD ketamine therapy",
    "ketamine therapy King County",
  ],
  openGraph: {
    title: "At-Home IM Ketamine in Seattle | Nomad Therapeutics",
    description:
      "A registered nurse comes to you. Physician-supervised IM ketamine for depression, PTSD, and anxiety. Most patients start within a week.",
    url: "https://www.nomadtherapeutics.org",
    locale: "en_US",
    type: "website",
    images: [{ url: "/images/og.jpg" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#124B38",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <Script src="https://go.4tms.com/js/form_embed.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
