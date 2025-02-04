import dynamic from "next/dynamic";
import ProfessionalFilterContainer, {
  ProfessionalFilterContainerMobile,
} from "./_components/professionals-filter-container";
const ProfessionalContainer = dynamic(
  () => import("./_components/professional-container"),
  { ssr: false },
);

const Page = () => {
  return (
    <div className="mt-[200px]">
      <div className="container mb-[109px] mt-[70px] hidden lg:block">
        <ProfessionalFilterContainer />
      </div>
      <div className="mb-[40px] mt-[24px] lg:hidden">
        <ProfessionalFilterContainerMobile />
      </div>
      <ProfessionalContainer />
    </div>
  );
};

export default Page;
