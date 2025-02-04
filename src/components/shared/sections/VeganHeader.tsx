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
      className={`min-w-screen h-[504px] bg-cover bg-center bg-no-repeat text-white`}
    >
      <div className="flex min-h-[504px] min-w-full flex-col items-center justify-center bg-black/50 bg-opacity-80">
        <h1 className="pb-2 text-[32px] font-medium text-white md:text-[48px]">
          {heading}
        </h1>
        <p className="leading[28px] max-w-[844px] text-wrap text-[18px] font-normal">
          {subheading}
        </p>
      </div>
    </div>
  );
}
