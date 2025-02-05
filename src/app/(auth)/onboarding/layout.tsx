import Image from "next/image";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function AuthLayout({ children }: Props) {
  return (
    <div className="min-h-screen">
      <div className="flex h-[58px] w-full items-center justify-center bg-[#1D3557]">
        <Image
          src="https://res.cloudinary.com/dgnustmny/image/upload/v1738649859/logo_white_zsmua3.png"
          height={48}
          width={48}
          alt="Logo"
        />
        <p className="font-lexend text-[16px] font-semibold leading-[23.2px] tracking-[-4%] text-white">
          VEGAN COLLECTIVE
        </p>
      </div>
      <div className="container flex min-h-[calc(100vh-58px)] items-center justify-center">
        <div>{children}</div>
      </div>
    </div>
  );
}
