import Image from "next/image";

export default function FeatureCard({
  img,
  title,
  description,
}: {
  img: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center text-center gap-4 max-w-[360px] md:my-0 my-[88px]">
      <div className="h-[50px] w-[50px] rounded-[8px] bg-[#1D3557] flex items-center justify-center">
        <Image src={img} alt={title} width={26} height={26} />
      </div>
      <div>
        <h2 className="text-[20px] font-semibold text-[#1F2937] pb-2">
          {title}
        </h2>
        <p className="text-[#374151] leading-[28px]">{description}</p>
      </div>
    </div>
  );
}
