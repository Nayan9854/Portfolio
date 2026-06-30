import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nayan-jyoti-bhattarai.vercel.app"),
  title: "Nayan Jyoti Bhattarai · Software Developer",
  description:
    "Nayan Jyoti Bhattarai is a software developer and full-stack engineer at IIIT Senapati, Manipur building thoughtful web experiences and product software.",
  openGraph: {
    title: "Nayan Jyoti Bhattarai · Software Developer",
    description:
      "Engineering polished UI, performant APIs, and production-ready web apps.",
    url: "https://nayan-jyoti-bhattarai.vercel.app",
    siteName: "Nayan Jyoti Bhattarai Portfolio",
    images: [
      {
        url: "/nayan_latest.png",
        width: 1200,
        height: 630,
        alt: "Nayan Jyoti Bhattarai portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nayan Jyoti Bhattarai · Software Developer",
    description:
      "Software developer crafting intuitive interfaces, robust systems, and production-ready web apps.",
    images: ["/nayan_latest.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${mono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
