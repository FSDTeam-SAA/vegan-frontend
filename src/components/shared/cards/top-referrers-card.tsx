import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function TopReferrersCard() {
  return (
    <Card className="max-w-[327px] lg:max-w-[400px] overflow-hidden p-[24px]">
      <div className="relative aspect-[4/2] w-full overflow-hidden rounded-[12px]">
        <Image
          src="/assets/refferer-card.png"
          width={352}
          height={199}
          alt="Profile photo"
          className="object-cover w-full h-full"
        />
      </div>
      <CardContent className="px-0 pt-[24px]">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <h2 className="text-[18px] font-normal text-[#1D3557]">Sarah David</h2>
            <p className="text-[16px] font-normal text-[#4B5563]">24 Referrals</p>
          </div>
          <div className="text-right space-y-1">
            <p className="text-[18px] font-semibold text-[#16A34A]">$2400</p>
            <p className="text-[16px] text-[#000000] font-normal">Earned</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

