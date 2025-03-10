"use client";
import Image from "next/image";
import { useState } from "react";
import VeganModal from "./vegan-modal";

const ProfessionalGreetings = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <VeganModal open={isOpen} onOpenChange={setOpen} className="">
      <div className="flex w-full flex-col items-center justify-center rounded-[16px] bg-white px-[16px] py-[16px]">
        <Image
          src="https://res.cloudinary.com/dgnustmny/image/upload/v1738925272/Rectangle_yzijtk.png"
          height={100}
          width={100}
          alt="LOGO"
        />
        <h1 className="mt-[16px] text-[20px] font-medium leading-[24px] text-[#1F2937] lg:text-[30px]">
          Welcome to Vegan Collective
        </h1>

        <p className="mt-[16px] text-center text-[16px] font-normal leading-[28px] text-[#1F2937]">
          Congratulations! You are now a vendor on Vegan Collective, the world’s
          trusted all-vegan platform.
        </p>
      </div>
    </VeganModal>
  );
};

export default ProfessionalGreetings;
