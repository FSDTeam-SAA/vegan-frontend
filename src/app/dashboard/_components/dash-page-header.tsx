interface Props {
  title: string;
  desc: string;
}
const DashboardPageHeader = ({ title, desc }: Props) => {
  return (
    <div>
      <h1 className="mb-[4px] font-inter text-[24px] font-semibold leading-[34.8px] text-[#1F2937]">
        {title}
      </h1>
      <p className="font-inter text-[16px] font-normal leading-[23.2px] text-[#4B5563]">
        {desc}
      </p>
    </div>
  );
};

export default DashboardPageHeader;
