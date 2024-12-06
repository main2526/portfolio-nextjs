"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Onest } from "next/font/google";

const onest = Onest({ subsets: ["latin"], weight: "500" });

const routes = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "skills",
    href: "/skills",
  },
  {
    label: "Experience",
    href: "/experience",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-gray-800 text-white">
      <div className="px-3 py-2 flex-1">
        <h2
          className={` ${onest.className} mb-2 px-4 text-lg font-semibold text-center`}
        >
          BootsDev-X Bussines and Mi Portfolio
        </h2>
        <ScrollArea className="h-[calc(100vh-8rem)]">
          <div className="space-y-1">
            {routes.map((route) => (
              <Button
                key={route.href}
                asChild
                variant={pathname === route.href ? "secondary" : "ghost"}
                className="w-full justify-start hover:scale-105 transition-transform"
              >
                <Link href={route.href}>{route.label}</Link>
              </Button>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
