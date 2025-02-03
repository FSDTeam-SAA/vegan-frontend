"use client";

// Packages
// import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// Components
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import Image from "next/image";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false); // Track scrolling state for styling changes

  const pathname = usePathname(); // Get current route to highlight active menu

  const menus = [
    { id: 1, href: "/", linkText: "Professional" },
    { id: 2, href: "/packages", linkText: "Merchant" },
    { id: 3, href: "/news", linkText: "Organiation" },
    { id: 4, href: "/about", linkText: "Profit-sharing" },
    { id: 5, href: "/Contact", linkText: "Store" },
  ];

  // Track window scroll to update navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true); // Set navbar background when scrolling
      } else {
        setScrolling(false); // Reset when not scrolling
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`py-4 fixed top-0 z-50 text-white w-full  border-b-[1px] ${
        scrolling && "backdrop-blur-lg " // Add background when scrolling
      }  ${
        pathname === "/"
          ? !scrolling && "md:py-4" // Add margin on homepage when not scrolling
          : "backdrop-blur-lg mt-0" // Default background for other pages
      } transition duration-300`}
    >
      <div className=" md:container px-4">
        <div className="flex justify-between items-center ">
          <div>
            <Link href={"/"} className="font-semibold  flex items-center">
              <Image
                src="/assets/logo_white.png"
                alt="logo"
                width={56}
                height={56}
                className="w-[56px] h-[56px]"
              />
              VEGAN COLLECTIVE
            </Link>
          </div>
          <div className="hidden lg:flex items-center md:gap-x-5 lg:gap-x-10">
            {/* Desktop Menu Links */}
            {menus.map((menu) => (
              <Link
                key={menu.id}
                href={menu.href}
                className={`${
                  pathname === menu.href ? "font-semibold" : "font-light" // Highlight active menu
                }`}
              >
                {menu.linkText}
              </Link>
            ))}
          </div>
          {/* Login button */}
          <div className="hidden md:block">
            {/* <SignedOut>
              <SignInButton
                fallbackRedirectUrl="/"
                signUpFallbackRedirectUrl="/wizard"
              >
                <Button
                  className={cn(
                    scrolling && "border-[1px] border-white/10", // Add border when scrolling
                    "bg-tourHub-green-dark hover:bg-[#3a6f54]" // Change hover color for button
                  )}
                >
                  Sign In
                </Button>
              </SignInButton>
            </SignedOut> */}
            <Button
              className={cn(
                "border-[1px] border-white bg-transparent rounded-[8px] font-medium py-[10px] px-[20px] mx-4" // Change hover color for button
              )}
            >
              Login
            </Button>
            <Button
              className={cn(
                scrolling && " border-white/10", // Add border when scrolling
                "bg-tourHub-green-dark bg-[#1D3557] raounded-[8px] font-medium py-[10px] px-[20px]" // Change hover color for button
              )}
            >
              Get Started
            </Button>

            {/* <SignedIn>
              <div className="flex items-center mt-[3px]">
                <UserButton />
              </div>
            </SignedIn> */}
          </div>

          {/* Mobile Responsive */}
          <div className="lg:hidden flex items-center gap-x-4">
            <div>
              <Button
                className={cn(
                  "border-[1px] border-white bg-transparent rounded-[8px] font-medium py-[10px] px-[20px] mx-4" // Change hover color for button
                )}
              >
                Login
              </Button>
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" className="p-1 ">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="top"
                className="backdrop-blur-lg *:text-white bg-transparent "
              >
                <div className="flex flex-col items-center gap-y-8 mt-6 ">
                  {/* Login button for mobile */}

                  <div className="flex flex-col items-center gap-y-5 ">
                    {/* Mobile Menu Links */}
                    {menus.map((menu) => (
                      <Link
                        key={menu.id}
                        href={menu.href}
                        className={`*:hover:scale-105 *:-translate-y-2 *:transition-all *:duration-300" ${
                          pathname === menu.href
                            ? "font-semibold"
                            : "font-light" // Highlight active menu on mobile
                        }`}
                      >
                        <SheetClose>{menu.linkText}</SheetClose>
                      </Link>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
