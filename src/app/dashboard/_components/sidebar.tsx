"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

import { dashboardTabsList } from "@/data/dashboard";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex w-[240px] flex-col bg-[#1E2A3B] text-white">
      <div className="p-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/placeholder.svg?height=32&width=32"
            alt="Vegan Collective"
            width={32}
            height={32}
          />
          <span className="text-lg font-semibold">VEGAN COLLECTIVE</span>
        </Link>
      </div>
      <nav className="flex-1 px-4">
        {dashboardTabsList.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.id}
              href={item.path}
              className={`mb-1 flex items-center gap-3 rounded-lg px-4 py-3 transition-colors ${
                pathname === item.path
                  ? "bg-white/10 text-white"
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="text-sm">{item.linkText}</span>
            </Link>
          );
        })}
      </nav>
      <div className="border-t border-white/10 p-4">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="/placeholder-avatar.jpg" alt="Alison Eyo" />
            <AvatarFallback>AE</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">Alison Eyo</p>
            <p className="text-xs text-gray-400">alison.e@rayna.ui</p>
          </div>
        </div>
      </div>
    </div>
  );
}
