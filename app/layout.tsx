import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const minecraft = localFont({
  src: "../public/Minecraft.ttf",
  variable: "--font-minecraft",
  display: "swap",
});

export const metadata: Metadata = {
  title: "for you pookie",
  description: "surprise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${minecraft.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
