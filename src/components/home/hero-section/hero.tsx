// Packages
import dynamic from "next/dynamic";
import Image from "next/image";

// Local imports
const HeroSearch = dynamic(() => import("./heroSearch"), {
  ssr: false,
});

// Define the interface for the given JSON structure
export interface LocationResponse {
  success: boolean; // Indicates if the API call was successful
  ip: string; // The IP address as a string
  country: string; // The country code (e.g., "CA" for Canada)
  city: string; // The name of the city
  region: string; // The region or province
  mappedRegion: string; // A mapped or normalized region name
}

const videoContent: Record<
  "usa" | "canada" | "mexico" | "australasia" | "neurope" | "other",
  string
> = {
  usa: "https://res.cloudinary.com/drdztqgcx/video/upload/v1744797515/vegan/uxuqw7na8i4l9eyzc9ym.mp4",
  canada:
    "https://res.cloudinary.com/drdztqgcx/video/upload/v1744797742/vegan/nd33jfpvfann7fajnnd5.mp4",
  mexico:
    "https://res.cloudinary.com/drdztqgcx/video/upload/v1744798204/vegan/aiabfsld2b1pom1jael0.mp4",
  australasia:
    "https://res.cloudinary.com/drdztqgcx/video/upload/v1744798195/vegan/q3d2rfjfwl6hprimeeky.mp4",
  neurope:
    "https://res.cloudinary.com/drdztqgcx/video/upload/v1744797980/vegan/EUROPEAN%20UNION.mp4",
  other:
    "https://res.cloudinary.com/drdztqgcx/video/upload/v1744797742/vegan/nd33jfpvfann7fajnnd5.mp4",
};

async function getCountries() {
  const data: LocationResponse = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/getLocation`,
  ).then((res) => res.json());

  return data ?? null;
}

export default async function HeroSection() {
  const data = await getCountries();

  console.log("countries detected ", data);

  const dat = data;

  console.log("countries detected ", data, dat);

  const selectedVideo =
    videoContent.hasOwnProperty(data.mappedRegion) &&
    data.mappedRegion in videoContent
      ? videoContent[data.mappedRegion as keyof typeof videoContent]
      : videoContent["other"];

  return (
    <div className="hero-section relative h-screen">
      {/* Background video */}
      <video
        src={selectedVideo}
        autoPlay
        loop
        muted
        className="absolute left-0 top-0 h-full w-full object-cover"
      />

      {/* Overlay for visual effect */}
      <div className="bg-opacity absolute z-10 flex h-full w-full flex-col items-center justify-center bg-black/40 bg-center bg-no-repeat text-center backdrop:blur-md" />

      {/* hero content */}
      <div className="absolute z-20 flex h-full w-full flex-col items-center justify-center bg-black/60 backdrop:blur-sm">
        <div className="container flex max-w-[792px] flex-col items-center">
          <h1 className="hero-title text-center text-[40px] font-semibold leading-[50px] text-white md:mx-8 md:tracking-[-4px] lg:text-[64px]">
            The World&apos;s First All Vegan Marketplace
          </h1>
          <Image
            src={
              "https://res.cloudinary.com/dgnustmny/image/upload/v1738650639/hero-Vector_fuaygl.png"
            }
            alt=""
            width={500}
            height={500}
            className="h-auto w-[558px]"
          />
          <p className="my-10 text-center text-[22px] leading-[33px] text-white">
            Book vegan professionals, shop cruelty-free products, connect with
            charity organizations.
          </p>
          <HeroSearch />
        </div>
      </div>
    </div>
  );
}
