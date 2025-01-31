import "./globals.css";
import type { Metadata } from "next";
import { Inter, Roboto_Mono } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "DevFlow AI",
  description: "A commmunity-driven platform for sharing knowledge and solving problems",
  icons: {
    icon: "/images/site-logo.svg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${roboto_mono.variable} antialiased`}
      >
          {children}
      </body>
    </html>
  );
}
