import "./globals.css";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from 'next/font/google';
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/shared/navbar/Navbar";
import LeftSidebar from "@/components/shared/sidebar/LeftSidebar";
import RightSidebar from "@/components/shared/sidebar/RightSidebar";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-spaceGrotesk',
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <div className="flex">
            <LeftSidebar />
            <main className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
              <div className="mx-auto w-full max-w-5xl">
                {children}
              </div>
            </main>
            <RightSidebar />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
