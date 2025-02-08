import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";

const StoreVideo = () => {
  return (
    <div className="py-[49px] lg:py-[80px]">
      <HeroVideoDialog
        className="block h-[454px] dark:hidden"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/N8tnM9KyLos?si=At0fyXPZjPYutssz?autoplay=1"
        thumbnailSrc="https://res.cloudinary.com/dgnustmny/image/upload/v1738812985/pexels-tima-miroshnichenko-6169025_1_1_egiarp.png"
        thumbnailAlt="Hero Video"
        imageWrapperClassName="h-[454px]"
        title="Watch: How Your Purchase Helps"
      />
    </div>
  );
};

export default StoreVideo;
