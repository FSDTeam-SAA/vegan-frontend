import VeganHeader from "@/components/shared/sections/VeganHeader";
// import HeadImg from "../../../Public/assets/vegan-header.png";

const Page = () => {
  return (
    <div>
      <VeganHeader
        img={"https://i.postimg.cc/hG8hYMJy/vegan-header.png"}
        heading={"Find a Professional"}
        subheading={
          "Connect with expert vegan professionals for personalized guidiance"
        }
      />
    </div>
  );
};

export default Page;
