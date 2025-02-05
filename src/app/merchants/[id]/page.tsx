import VeganHeader from "@/components/shared/sections/VeganHeader";
import MerchantHeader from "./_components/merchant-header";
import MerchantsTabs from "./_components/merchant-tabs";

const Page = () => {
  return (
    <div>
      <VeganHeader
        img="https://res.cloudinary.com/dgnustmny/image/upload/v1738732034/pexels-tima-miroshnichenko-6169033_1_huaatq.png"
        heading="Green Earth Initiatives"
        subheading="A leading environmental organization dedicated to protecting and preserving our natural environment through community action, education, and sustainable practices."
      />
      <MerchantHeader />
      <MerchantsTabs />
    </div>
  );
};

export default Page;
