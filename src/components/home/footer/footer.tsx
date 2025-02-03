import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../../Public/assets/logo_black.png";
import facebook from "../../../../Public/assets/facebook.svg";
import instagram from "../../../../Public/assets/instagram.svg";
import twitter from "../../../../Public/assets/twitter.svg";
import linkedin from "../../../../Public/assets/linkedin.svg";

export default function Footer() {
  return (
    <footer className="bg-[#F5EDE6] py-12">
      <div className="container mx-auto max-w-[1200px] px-4">
        <div className="flex items-center gap-2 pb-2">
          <Image
            src={logo}
            alt="Vegan Collective Logo"
            width={32}
            height={32}
          />
          <span className="font-semibold text-[#1D3557]">VEGAN COLLECTIVE</span>
        </div>
        <div className="flex flex-wrap-reverse justify-between gap-8 md:flex-wrap">
          {/* Left Column */}
          <div className="w-full md:flex-1">
            <p className="hidden text-[14px] text-[#1B365D] sm:max-w-[210px] md:block">
              We invite vegans — and those curious about veganism — to explore
              our marketplace.
            </p>
            <div className="md:pt-[40px]">
              <h3 className="pb-4 font-medium text-[#1B365D]">
                Stay Up To Date
              </h3>
              <div className="gap-2 md:flex">
                <Input
                  type="email"
                  placeholder="Enter email"
                  className="mb-2 w-full border-0 bg-white p-[10px] md:w-[274px]"
                />
                <Button className="w-full rounded-md bg-[#1D3557] px-6 py-[10px] text-[14px] font-medium text-white hover:bg-[#1B365D]/90 md:w-[112px]">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          <div className="justify-between gap-10 md:flex md:flex-1">
            {/* Middle Column - Navigation */}
            <div className="flex flex-wrap gap-10 py-10 *:font-medium *:text-[#1D3557] md:flex-col md:gap-2 md:py-0">
              <Link href="#" className="hover:underline">
                Professionals
              </Link>
              <Link href="#" className="hover:underline">
                Merchants
              </Link>
              <Link href="#" className="hover:underline">
                Organizations
              </Link>
              <Link href="#" className="hover:underline">
                Profit Sharing
              </Link>
              <Link href="#" className="hidden hover:underline md:block">
                Store
              </Link>
              <Link href="#" className="hidden hover:underline md:block">
                About Us
              </Link>
            </div>

            {/* Right Column - Contact */}
            <div className="hidden space-y-4 md:block">
              <h3 className="font-medium text-[#1D3557]">Contact Us</h3>
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
                <p className="leading-relaxed">
                  Radiant Rhythms Dance Studio
                  <br />
                  123 Rhythm Avenue
                  <br />
                  Danceville, CA 98765
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-[25px] h-px bg-[#1B365D]/10" />

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-[#1B365D]">
            © 2025 Vegan Collective. All rights reserved.
          </p>
          <div className="flex gap-6">
            {[facebook, twitter, instagram, linkedin].map((social, i) => (
              <Link
                key={i}
                href="#"
                className="flex items-center justify-center rounded-full bg-[#1B365D] p-2 transition-all hover:scale-105"
              >
                <Image
                  src={social}
                  alt={"social"}
                  width={12}
                  height={12}
                  className="text-white"
                />
                <span className="sr-only">{"social"}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
