interface Props {
  title: string;
}

const VeganBadge = ({ title }: Props) => {
  return (
    <div className="w-fit rounded-[100px] border-[1px] border-[#F9FAFB] bg-[#F9FAFB] px-[10px] py-[6px] font-inter text-[16px] font-normal leading-[19.36px] text-[#1F2937]">
      {title}
    </div>
  );
};

export default VeganBadge;
