import { StoreHeaderCarousel } from "./store-card";

export default function StoreHeader() {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://i.ibb.co.com/DgrDrbMh/pexels-markus-winkler-1430818-3812433-1.png)",
      }}
      className={`flex min-h-[785px] w-full flex-col items-center justify-center bg-cover bg-no-repeat text-white backdrop-blur-md`}
    >
      <StoreHeaderCarousel />
    </div>
  );
}
