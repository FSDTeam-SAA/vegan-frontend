import { ForgotPasswordForm } from "./_components/forget-password-form";

const Page = () => {
  return (
    <div>
      <div className="w-full rounded-[10px] border-[1px] border-[#F4F0EB] bg-white px-[28px] py-[32px] md:w-[456px]">
        <div className="sapce-y-[8px]">
          <h3 className="text-center font-inter text-[28px] font-medium leading-[33.69px] text-[#1F2937]">
            Forget Password
          </h3>
          <p className="text-center font-inter text-[16px] leading-[19.36px] text-[#6B7280]">
            You may receive email notifications from us to reset your password
            for security and login purposes.
          </p>
        </div>
        <ForgotPasswordForm />
      </div>
    </div>
  );
};

export default Page;
