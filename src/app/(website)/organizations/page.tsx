import VeganHeader from "@/components/shared/sections/VeganHeader";
import OrganizationContainer from "./_components/main/organization-container";
import OrganizationCTA from "./_components/main/organization-cta";
import OrganizationFilterContainer, {
  OrganizationFilterContainerMobile,
} from "./_components/main/organization-filter-container";

const Page = () => {
  return (
    <div>
      <VeganHeader
        img="https://res.cloudinary.com/dgnustmny/image/upload/v1738649578/vegan-header_ufz7o8.png"
        heading="Find Organizations Making and Impact"
        subheading="Connect with organizations aligned with your values and make a difference"
      />

      <div className="container mb-[109px] mt-[70px] hidden lg:block">
        <OrganizationFilterContainer />
      </div>
      <div className="mb-[40px] mt-[24px] lg:hidden">
        <OrganizationFilterContainerMobile />
      </div>
      <OrganizationContainer />
      <div>
        <OrganizationCTA />
      </div>
    </div>
  );
};

export default Page;
