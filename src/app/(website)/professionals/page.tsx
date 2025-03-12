import VeganHeader from "@/components/shared/sections/VeganHeader";
import dynamic from "next/dynamic";
import ProfessionalCTA from "./_components/cta/professional_cta";
import HowWeVerify from "./_components/how-we-verify/how-we-verify";
import ProfessionalFilterContainer, {
  ProfessionalFilterContainerMobile,
} from "./_components/professionals-filter-container";
const ProfessionalContainer = dynamic(
  () => import("./_components/professional-container"),
  { ssr: false },
);

const Page = () => {
  return (
    <div>
      <VeganHeader
        img="https://res.cloudinary.com/dgnustmny/image/upload/v1738649578/vegan-header_ufz7o8.png"
        heading="Find a Professional"
        subheading="Connect with expert vegan professionals for personalized guidiance"
      />
      <div className="container mb-[109px] mt-[70px] hidden lg:block">
        <ProfessionalFilterContainer />
      </div>
      <div className="mb-[40px] mt-[24px] lg:mb-0 lg:hidden">
        <ProfessionalFilterContainerMobile />
      </div>
      <ProfessionalContainer />

      <div>
        <HowWeVerify />
        <ProfessionalCTA />
      </div>
    </div>
  );
};

export default Page;
