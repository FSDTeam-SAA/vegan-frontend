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
      className={`min-w-screen flex min-h-[504px] flex-col items-center justify-center bg-gray-100 bg-[url("${img}")] bg-cover`}
    >
      <h1 className="text-12 pb-2 font-medium text-white">{heading}</h1>
      <p>{subheading}</p>
    </div>
  );
}
