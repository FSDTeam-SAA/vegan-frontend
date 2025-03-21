import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";

const image =
  "https://res.cloudinary.com/dgnustmny/image/upload/v1739246388/hero-about_i5ntin.png";

export default async function HomeAboutSection() {
  const buffer = await fetch(image).then(async (res) =>
    Buffer.from(await res.arrayBuffer()),
  );

  const { base64 } = await getPlaiceholder(buffer);

  return (
    <div className="mx-auto px-4 py-[80px] md:container">
      <div className="items-center justify-between gap-4 lg:flex">
        <div className="mb-4 lg:max-w-[464px]">
          <h2 className="text-[32px] font-medium leading-[48px] text-[#1D3557]">
            About Vegan Collective
          </h2>
          <p className="pt-[34px] text-[20px] font-normal leading-[30px] text-[#364153]">
            We invite vegans — and those curious about veganism — to explore our
            marketplace. Connect with verified plant-based professionals, shop
            100% cruelty-free products, learn from registered organizations
            through online talks: all in one place. Our platform is completely
            free to join and use. We earn when transactions happen. As an
            ethical company, we create change by sharing the majority of our
            profits to fund impactful initiatives that protect animals,
            children, and communities.
          </p>
        </div>
        <Image
          src={
            "https://res.cloudinary.com/dgnustmny/image/upload/v1739246388/hero-about_i5ntin.png"
          }
          alt="About"
          width={500}
          height={500}
          className="rounded-xl bg-no-repeat object-cover md:min-w-fit"
          placeholder="blur"
          blurDataURL={base64}
        />
      </div>
    </div>
  );
}
