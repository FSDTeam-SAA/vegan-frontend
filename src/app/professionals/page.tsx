import VeganHeader from "@/components/shared/sections/VeganHeader";
// import HeadImg from "../../../Public/assets/vegan-header.png";

const Page = () => {
  return (
    <div>
      <VeganHeader
        img={"/assets/vegan-header.png"}
        heading={"'Find a Professional"}
        subheading={
          "Connect with expert vegan professionals for personalized guidiance"
        }
      />
    </div>
  );
};

export default Page;
