import { Onest } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/sidebar";
import { ThemeProvider } from "@/components/theme-provider";

const onestFonts = Onest({ subsets: ["latin"], weight: "500" });

export const metadata = {
  title: "Portfolio Profesional",
  description: "Mi portfolio profesional creado con Next.js",
  icons: {
    icon: "/favicon.ico", // Icono principal
    shortcut: "/favicon.ico", // Icono de acceso directo
    apple: "/favicon-32x32.png", // Icono para dispositivos Apple
    other: [{ rel: "icon", url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={onestFonts.className}>
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
              <p>
                {" "}
                <p
                  className={` ${onestFonts.className} text-4xl font-bold text-red-300 animate-bounce py-2`}
                >
                  Oops!
                </p>{" "}
                <br /> your resolution is not compatible with this portfolio
              </p>
            </span>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
