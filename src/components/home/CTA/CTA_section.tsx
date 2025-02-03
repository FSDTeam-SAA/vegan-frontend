import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTA_section() {
  return (
    <div
      className="CTA-section relative flex min-h-screen items-center justify-center"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center text-white">
        <h1 className="mb-6 text-[40px] font-semibold leading-[60px] md:text-5xl">
          Real change comes from all of us
        </h1>
        <p className="mb-8 max-w-[694px] text-[14px] leading-relaxed md:text-lg">
          Vegan Collective is dedicated to creating a sustainable world by
          funding animal justice initiatives to end animal agriculture and
          combat misinformation from meat industry lobbying.
        </p>
        <Button
          variant="outline"
          className="border-white bg-transparent px-[43px] py-[14px] font-semibold text-white hover:bg-white/10 hover:text-white/80"
        >
          Join Us
          <ArrowUpRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
