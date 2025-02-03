import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#F5EDE6] py-12">
      <div className="container mx-auto max-w-[1200px] px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_auto] gap-x-24 gap-y-8">
          {/* Left Column */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Image
                src="/assets/logo_black.png"
                alt="Vegan Collective Logo"
                width={32}
                height={32}
              />
              <span className="text-[#1D3557] font-semibold">
                VEGAN COLLECTIVE
              </span>
            </div>

            <p className="text-[#1B365D] sm :max-w-[210px]  text-[14px] hidden md:block">
              We invite vegans — and those curious about veganism — to explore
              our marketplace.
            </p>
            <div className="pt-[40px]">
              <h3 className="text-[#1B365D] font-medium pb-4">
                Stay Up To Date
              </h3>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter email"
                  className="bg-white border-0 w-[274px] p-[10px]"
                />
                <Button className="bg-[#1D3557] text-white hover:bg-[#1B365D]/90 rounded-md px-6 py-[10px] text-[14px] font-medium">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Middle Column - Navigation */}
          <div className="grid grid-cols-1 gap-y-4 *:font-medium *:text-[#1D3557]">
            <Link href="#" className=" hover:underline">
              Professionals
            </Link>
            <Link href="#" className=" hover:underline">
              Merchants
            </Link>
            <Link href="#" className=" hover:underline">
              Organizations
            </Link>
            <Link href="#" className=" hover:underline">
              Profit Sharing
            </Link>
            <Link href="#" className=" hover:underline">
              Store
            </Link>
            <Link href="#" className=" hover:underline">
              About Us
            </Link>
          </div>

          {/* Right Column - Contact */}
          <div className="space-y-4 hidden md:block">
            <h3 className="text-[#1D3557] font-medium">Contact Us</h3>
            <div className="space-y-2 *:text-[#374151]">
              <Link
                href="mailto:support@vegancollective.com"
                className="block underline hover:text-[#1D3557]"
              >
                support@vegancollective.com
              </Link>
              <Link
                href="tel:+2348145678901 hover:text-[#1D3557]"
                className="block underline"
              >
                +234 814 5678 901
              </Link>
              <p className=" leading-relaxed">
                Radiant Rhythms Dance Studio
                <br />
                123 Rhythm Avenue
                <br />
                Danceville, CA 98765
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#1B365D]/10 my-[25px]" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#1B365D] text-sm">
            © 2025 Vegan Collective. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
              <Link
                key={social}
                href="#"
                className="bg-[#1B365D] rounded-full p-2 flex items-center justify-center hover:scale-105 transition-all"
              >
                <Image
                  src={`/assets/${social}.svg`}
                  alt={social}
                  width={12}
                  height={12}
                  className="text-white "
                />
                <span className="sr-only">{social}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
