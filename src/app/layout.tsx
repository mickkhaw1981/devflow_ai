import "./globals.css";
import type { Metadata } from "next";
import { Inter, Roboto_Mono } from 'next/font/google';
import { ThemeProvider } from "next-themes";
import { ThemeToggle } from "@/components/ui/theme-toggle";


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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${roboto_mono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex justify-end p-4">
            <ThemeToggle
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
