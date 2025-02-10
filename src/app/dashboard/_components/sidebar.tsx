"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

import { useState } from "react";
import { NavigationItem } from "@/data/dashboard";
import { Menu } from "lucide-react";
interface Props {
  lists: NavigationItem[];
}

export function Sidebar({ lists }: Props) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const NavigationContent = () => (
    <nav className="min-w-[272px] flex-1 px-4">
      {lists.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.id}
            href={item.path}
            className={`mb-1 flex items-center gap-3 rounded-lg px-4 py-3 transition-colors ${pathname === item.path ? "bg-white/10 text-white" : "text-gray-400 hover:bg-white/5 hover:text-white"}`}
            onClick={() => setIsOpen(false)}
          >
            <Icon className="h-5 w-5" />
            <span className="text-sm">{item.linkText}</span>
          </Link>
        );
      })}
    </nav>
  );

  const UserProfile = () => (
    <div className="border-t border-white/10 p-4">
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src="/placeholder-avatar.jpg" alt="Alison Eyo" />
          <AvatarFallback>AE</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium text-white">Alison Eyo</p>
          <p className="text-xs text-gray-400">alison.e@rayna.ui</p>
        </div>
      </div>
    </div>
  );

  // Mobile Header
  const MobileHeader = () => (
    <div className="fixed left-0 right-0 top-0 z-50 flex h-16 items-center justify-between bg-[#1D3557] p-0 md:hidden">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="https://res.cloudinary.com/dgnustmny/image/upload/v1739002910/logo_white_tne296.png"
          alt="Vegan Collective"
          width={56}
          height={56}
        />
        <span className="text-center font-lexend text-lg font-semibold leading-[23.2px] text-white">
          VEGAN COLLECTIVE
        </span>
      </Link>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="text-white">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="w-[300px] bg-[#1D3557] p-0 text-white"
        >
          <div className="flex h-full flex-col">
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
            <NavigationContent />
            <UserProfile />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );

  // Desktop Sidebar
  const DesktopSidebar = () => (
    <div className="fixed left-0 top-0 hidden h-screen w-[240px] flex-col overflow-y-auto bg-[#1E2A3B] text-white md:flex">
      <div className="p-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="https://res.cloudinary.com/dgnustmny/image/upload/v1739002910/logo_white_tne296.png"
            alt="Vegan Collective"
            width={32}
            height={32}
          />
          <span className="text-lg font-semibold">VEGAN COLLECTIVE</span>
        </Link>
      </div>
      <NavigationContent />
      <UserProfile />
    </div>
  );

  return (
    <>
      <MobileHeader />
      <DesktopSidebar />
    </>
  );
}
