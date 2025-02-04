import Image from "next/image";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p>Login Page</p>{" "}
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
  );
};

export default Page;
