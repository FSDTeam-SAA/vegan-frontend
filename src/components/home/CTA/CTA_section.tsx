import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTA_section() {
  return (
    <div
      className="min-h-screen relative flex items-center justify-center"
      style={{
        backgroundImage: 'url("/assets/CTA-img.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center text-white">
        <h1 className="md:text-5xl text-[40px]  font-semibold mb-6 leading-[60px]">
          Real change comes from all of us
        </h1>
        <p className="md:text-lg text-[14px] mb-8 leading-relaxed max-w-[694px] ">
          Vegan Collective is dedicated to creating a sustainable world by
          funding animal justice initiatives to end animal agriculture and
          combat misinformation from meat industry lobbying.
        </p>
        <Button
          variant="outline"
          className="text-white hover:text-white/80 border-white hover:bg-white/10 bg-transparent font-semibold py-[14px] px-[43px]"
        >
          Join Us
          <ArrowUpRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
