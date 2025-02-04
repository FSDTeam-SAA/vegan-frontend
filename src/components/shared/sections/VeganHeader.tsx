export default function VeganHeader({
  img,
  heading,
  subheading,
}: {
  img: string;
  heading: string;
  subheading: string;
}) {
  return (
    <div
      style={{ backgroundImage: `url(${img})` }}
      className={`h-[375px] w-full bg-cover bg-center bg-no-repeat text-white md:h-[504px]`}
    >
      <div className="flex h-full w-full flex-col items-center justify-center bg-black/50 bg-opacity-80 px-[24px]">
        <h1 className="w-full pb-2 text-center font-lexend text-[32px] font-medium leading-[46.4px] text-white md:text-[48px] md:leading-[69.6px]">
          {heading}
        </h1>
        <p className="md:leading[28px] max-w-[844px] text-wrap text-center font-inter text-[16px] font-thin leading-[23.2px] tracking-[-4%] md:text-[18px]">
          {subheading}
        </p>
      </div>
    </div>
  );
}
