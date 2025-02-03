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
    <div className="mx-auto my-[88px] flex max-w-[360px] flex-col items-center gap-4 text-center md:my-0">
      <div className="flex h-[50px] w-[50px] items-center justify-center rounded-[8px] bg-[#1D3557]">
        <Image src={img} alt={title} width={26} height={26} />
      </div>
      <div>
        <h2 className="pb-2 text-[20px] font-semibold text-[#1F2937]">
          {title}
        </h2>
        <p className="leading-[28px] text-[#374151]">{description}</p>
      </div>
    </div>
  );
}
