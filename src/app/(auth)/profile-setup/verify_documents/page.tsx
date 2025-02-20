import dynamic from "next/dynamic";
const VerifyProfile = dynamic(() => import("./_components/VerifyProfile"), {
  ssr: false,
});

const page = () => {
  return (
    <div>
      <VerifyProfile />
    </div>
  );
};

export default page;
