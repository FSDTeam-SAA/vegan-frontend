"use client";

// Packages
// import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// Components
import { cn } from "@/lib/utils";
import Hideon from "@/provider/HideOn";
import Image from "next/image";
import { Button } from "../ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";

const hideRoutes = [
  "/login",
  "/signup",
  "/profile-setup",
  "/onboarding",
  "/onboarding/verify_email",
];

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false); // Track scrolling state for styling changes

  const pathname = usePathname(); // Get current route to highlight active menu

  const menus = [
    { id: 1, href: "/professionals", linkText: "Professional" },
    { id: 2, href: "/merchants", linkText: "Merchant" },
    { id: 3, href: "/organizations", linkText: "Organiation" },
    { id: 4, href: "/profit-calculator", linkText: "Profit-sharing" },
    { id: 5, href: "/store", linkText: "Store" },
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
    <Hideon routes={hideRoutes}>
      <div
        className={`fixed top-0 z-50 w-full border-b-[1px] py-4 text-white ${
          scrolling &&
          "bg-[#E8DFD6]/80 backdrop-blur-lg *:text-[18px] *:text-[#4B5563]" // Add background when scrolling
        } ${
          pathname === "/"
            ? !scrolling && "md:py-4" // Add margin on homepage when not scrolling
            : "mt-0 backdrop-blur-lg" // Default background for other pages
        } transition duration-300`}
      >
        <div className="px-4 md:container">
          <div className="flex items-center justify-between">
            <div>
              <Link href={"/"} className="flex items-center font-semibold">
                <Image
                  src={
                    "https://res.cloudinary.com/dgnustmny/image/upload/v1738649859/logo_white_zsmua3.png"
                  }
                  alt="logo"
                  width={56}
                  height={56}
                  className="h-[56px] w-[56px]"
                />
                VEGAN COLLECTIVE
              </Link>
            </div>
            <div className="hidden items-center md:gap-x-5 lg:flex lg:gap-x-10">
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
                  `mx-4 rounded-[8px] border-[1px] border-white bg-transparent px-[20px] py-[10px] font-medium hover:bg-black/5 ${scrolling && "border-black/50 text-[#4B5563]"}`, // Change hover color for button
                )}
              >
                <Link href="/onboarding">Login</Link>
              </Button>
              <Button
                className={cn(
                  scrolling && "border-white/10", // Add border when scrolling
                  "bg-tourHub-green-dark raounded-[8px] h-[40px] bg-[#1D3557] px-[20px] font-medium hover:bg-[#1D3557]/80", // Change hover color for button
                )}
                asChild
              >
                <Link href="/onboarding">Get Started</Link>
              </Button>

              {/* <SignedIn>
              <div className="flex items-center mt-[3px]">
                <UserButton />
              </div>
            </SignedIn> */}
            </div>

            {/* Mobile Responsive */}
            <div className="flex items-center gap-x-4 lg:hidden">
              <div>
                <Button
                  className={cn(
                    "mx-4 rounded-[8px] border-[1px] border-white bg-transparent px-[20px] py-[10px] font-medium", // Change hover color for button
                  )}
                >
                  <Link href="/onboarding">Login</Link>
                </Button>
              </div>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" className="p-1">
                    <Menu />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="top"
                  className="bg-transparent backdrop-blur-lg *:text-white"
                >
                  <div className="mt-6 flex flex-col items-center gap-y-8">
                    {/* Login button for mobile */}

                    <div className="flex flex-col items-center gap-y-5">
                      {/* Mobile Menu Links */}
                      {menus.map((menu) => (
                        <Link
                          key={menu.id}
                          href={menu.href}
                          className={`*:duration-300" *:-translate-y-2 *:transition-all *:hover:scale-105 ${
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
    </Hideon>
  );
};

export default Navbar;
