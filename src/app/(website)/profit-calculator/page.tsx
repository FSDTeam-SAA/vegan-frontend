import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";
import EarnMoreCard from "./_components/earn-more-card";
import FAQProfitCalculator from "./_components/faq-profit-calculator";
import HowItWorks from "./_components/how-it-works";
import ProfitCalculator from "./_components/profit-calculator";
import ProfitCalculatorHero from "./_components/profit-calculator-hero";
import TopReferrers from "./_components/top-referrer";

const Page = () => {
  return (
    <div className="overflow-x-hidden">
      <ProfitCalculatorHero />
      <HowItWorks />

      <div className="container py-[80px]">
        <div className="relative h-[454px]">
          <HeroVideoDialog
            className="block h-[454px] dark:hidden"
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/N8tnM9KyLos?si=At0fyXPZjPYutssz?autoplay=1"
            thumbnailSrc="https://res.cloudinary.com/dgnustmny/image/upload/v1738663361/image_fx__9_1_1_n5h56k.png"
            thumbnailAlt="Hero Video"
            title="Watch how it works in a 5 minutes video"
          />
        </div>
      </div>
      <ProfitCalculator />
      <TopReferrers />
      <FAQProfitCalculator />
      <EarnMoreCard />
    </div>
  );
};

export default Page;
