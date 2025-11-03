import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import PromoPopup from "@/components/PromoPopup";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "O/L Countdown 2026",
  description: "Daily O/L Exam Reminder - Offline Supported",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                navigator.serviceWorker.register('/sw.js');
              }
            `,
          }}
        />
      </head>
      <body className={poppins.className}>
        {children}
        <PromoPopup />
      </body>
    </html>
  );
}