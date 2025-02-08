"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { NavigationItem } from "@/data/dashboard";
import Image from "next/image";
import Link from "next/link";
import { MdLogout } from "react-icons/md";
import { usePathname } from "next/navigation";

interface Props {
  lists: NavigationItem[];
}

export function Sidebar({ lists }: Props) {
  const pathname = usePathname();

  return (
    <div className="fixed left-0 top-0 flex h-screen w-[272px] flex-col overflow-y-auto bg-[#1D3557] py-6 text-white">
      <div className="">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="https://res.cloudinary.com/dgnustmny/image/upload/v1739002910/logo_white_tne296.png"
            alt="Vegan Collective"
            width={56}
            height={56}
          />
          <span className="font-lexend text-base font-semibold leading-[23.2px] tracking-[-4%]">
            VEGAN COLLECTIVE
          </span>
        </Link>
      </div>
      <nav className="flex-1 px-4">
        {lists.map((item: NavigationItem) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.id}
              href={item.path}
              className={`my-4 mb-1 flex items-center gap-3 rounded-lg px-4 py-3 transition-colors ${
                pathname === item.path
                  ? "bg-white text-[#1D3557]"
                  : "text-[#F8F5F2] hover:bg-white/5 hover:text-white"
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="font-inter text-sm font-normal leading-[20.3px]">
                {item.linkText}
              </span>
            </Link>
          );
        })}
        <hr className="mt-6" />
      </nav>
      <div className="p-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <Avatar>
              <AvatarImage src="/placeholder-avatar.jpg" alt="Alison Eyo" />
              <AvatarFallback>AE</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">Alison Eyo</p>
              <p className="text-xs text-gray-400">alison.e@rayna.ui</p>
            </div>
          </div>
          <span>
            <MdLogout className="h-5 w-5 text-gray-400" />
          </span>
        </div>
      </div>
    </div>
  );
}
