import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider"
import { ThemeSwitch } from "@/components/ui/theme-switch"
import { Nav } from "@/components/ui/nav"
import { Back } from "@/components/ui/back"
import { Footer } from "@/components/ui/footer"


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "MukiZone.com",
  description: "learning purposes",
};

    // layout.tsx (partial update)
    export default function RootLayout({
      children,
    }: Readonly<{
      children: React.ReactNode;
    }>) {
      return (
        <html lang="en" suppressHydrationWarning>
          <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <Nav />
              <main className="min-h-[calc(100vh-14rem)]">
                <div className="container mx-auto px-2 sm:px-6 lg:px-8 py-0">
                  {children}
                </div>
              </main>
              <Footer />
            </ThemeProvider>
          </body>
        </html>
      );
    }
