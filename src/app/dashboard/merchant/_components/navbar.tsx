import Image from "next/image";
import { FaRegBell } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="flex items-center justify-end gap-3 border-b border-white px-10 py-[20px]">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
        <FaRegBell className="h-[17.8px] w-[13.73px]" />
      </span>
      <Image
        src="https://res.cloudinary.com/dw5wizivl/image/upload/v1739003577/dmcbpem50y1ydjcxne0p.png"
        alt="logo"
        width={40}
        height={40}
      />
    </div>
  );
}
