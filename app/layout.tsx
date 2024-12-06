import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/sidebar";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio Profesional",
  description: "Mi portfolio profesional creado con Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Para pantallas grandes */}
          <div className="hidden md:flex h-screen">
            <Sidebar />
            <main className="flex-1 overflow-y-auto p-8">{children}</main>
          </div>

          {/* Para pantallas pequeñas */}
          <div className="flex md:hidden h-screen items-center justify-center">
            <span className="text-center text-red-200 font-medium">
                 <p>Opps!, resolution is not supported</p>
            </span>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
