import { Loader2 } from "lucide-react";
import { Suspense } from "react";
import SignUpForm from "./_components/signup-form";

const Page = () => {
  return (
    <div className="mb-[48px] mt-[97px]">
      <div className="w-full rounded-[10px] border-[1px] border-[#F4F0EB] bg-white px-[28px] py-[32px] md:w-[456px]">
        <div className="sapce-y-[8px]">
          <h3 className="text-center font-inter text-[28px] font-medium leading-[33.69px] text-[#1F2937]">
            Sign Up
          </h3>
          <p className="text-center font-inter text-[16px] leading-[19.36px] text-[#6B7280]">
            Provide your email and choose a password
          </p>
        </div>
        <Suspense
          fallback={
            <div className="flex h-[300px] w-[300px] items-center justify-center">
              <Loader2 className="animate-spin" />
            </div>
          }
        >
          <SignUpForm />
        </Suspense>
      </div>

      <p className="mt-[65px] max-w-[486px] text-center font-inter text-[14px] font-normal leading-[21px]">
        By clicking “Sign Up” or “Continue with Google”, you agree to all our{" "}
        <span className="cursor-pointer text-[#1F2937] underline">
          terms & conditions
        </span>{" "}
        and{" "}
        <span className="cursor-pointer text-[#1F2937] underline">
          privacy policy
        </span>
      </p>
    </div>
  );
};

export default Page;
