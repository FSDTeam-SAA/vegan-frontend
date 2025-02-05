import { Loader2 } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Suspense } from "react";
const LoginForm = dynamic(() => import("./_components/login-form"), {
  ssr: false,
});

const Page = () => {
  return (
    <>
      <div className="mb-[48px] mt-[97px]">
        <div className="w-full rounded-[10px] border-[1px] border-[#F4F0EB] bg-white px-[28px] py-[32px] md:w-[456px]">
          <div className="sapce-y-[8px]">
            <h3 className="text-center font-inter text-[28px] font-medium leading-[33.69px] text-[#1F2937]">
              Log In
            </h3>
            <p className="text-center font-inter text-[16px] leading-[19.36px] text-[#6B7280]">
              Log in to your account to get started
            </p>
          </div>
          <Suspense
            fallback={
              <div className="flex h-full w-full items-center justify-center">
                <Loader2 className="animate-spin" />
              </div>
            }
          >
            <LoginForm />
          </Suspense>
        </div>

        <div className="mt-[107px] flex h-[40px] w-full items-center justify-center">
          <Image
            src="https://res.cloudinary.com/dgnustmny/image/upload/v1738650472/logo_black_eeyvxr.png"
            height={40}
            width={40}
            alt="Logo"
          />
          <p className="font-lexend text-[16px] font-normal leading-[23.2px] tracking-[-4%] text-[#1D3557]">
            Proudly protected with{" "}
            <span className="font-semibold text-[#1D3557]">SiteLock</span>.
          </p>
        </div>
      </div>
    </>
  );
};

export default Page;
