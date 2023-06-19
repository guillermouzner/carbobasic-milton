import {Inter} from "next/font/google";

import "@/styles/globals.css";

import {cn} from "@/lib/utils";
import {Toaster} from "@/components/ui/toaster";
import {TailwindIndicator} from "@/components/tailwind-indicator";
import {ThemeProvider} from "@/components/theme-provider";
import {Navbar} from "@/components/navbar";
import {SiteFooter} from "@/components/site-footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

interface RootLayoutProps {
  children: React.ReactNode;
}
export default function RootLayout({children}: RootLayoutProps) {
  return (
    <html suppressHydrationWarning lang="es">
      <head />
      <body
        className={cn(
          "flex min-h-screen flex-col bg-home bg-cover bg-center font-sans antialiased",
          inter.variable,
        )}
      >
        <ThemeProvider enableSystem attribute="class" defaultTheme="system">
          <Navbar />
          <main className="flex justify-center items-center flex-1">{children}</main>
          <SiteFooter />
          <Toaster />
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}
