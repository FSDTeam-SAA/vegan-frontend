import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export default function FAQProfitCalculator() {
  return (
    <div className="relative min-h-screen px-4 py-16 md:px-6 lg:px-8">
      <Image
        src="https://res.cloudinary.com/dgnustmny/image/upload/v1739013974/Ornament-left_ro4nzk.png"
        alt="from_bottom"
        width={300}
        height={300}
        className="absolute left-[-25px] top-0 hidden lg:h-[200px] lg:w-[100px] xl:h-[300px] xl:w-[150px] 2xl:block"
      />
      <Image
        src="https://res.cloudinary.com/dgnustmny/image/upload/v1739013974/Ornament-left_ro4nzk.png"
        alt="from_bottom"
        width={300}
        height={300}
        className="absolute bottom-0 left-[-25px] hidden lg:h-[200px] lg:w-[100px] xl:h-[300px] xl:w-[150px] 2xl:block"
      />
      <Image
        src="https://res.cloudinary.com/dgnustmny/image/upload/v1739014003/Ornament-right_wtmzel.png"
        alt="from_bottom"
        width={300}
        height={300}
        className="absolute right-[-25px] top-0 hidden lg:h-[200px] lg:w-[100px] xl:w-[150px] 2xl:block 2xl:h-[300px]"
      />
      <Image
        src="https://res.cloudinary.com/dgnustmny/image/upload/v1739014003/Ornament-right_wtmzel.png"
        alt="from_bottom"
        width={300}
        height={300}
        className="absolute bottom-0 right-[-25px] hidden lg:h-[200px] lg:w-[100px] xl:w-[150px] 2xl:block 2xl:h-[300px]"
      />

      <div className="mx-auto max-w-[1248px]">
        <div className="mb-12 text-center">
          <h1 className="mb-3 text-[28px] font-medium leading-[41px] text-[#1D3557] lg:text-[32px] lg:leading-[46px]">
            Frequently Asked Questions
          </h1>
          <p className="text-[16px] text-[#374151]">
            Our transparent system ensures every activity is tracked and
            rewarded.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="border-none">
            <AccordionTrigger className="rounded-lg bg-white px-6 py-4 text-left hover:no-underline [&[data-state=open]]:rounded-b-none">
              How does profit-sharing work?
            </AccordionTrigger>
            <AccordionContent className="rounded-b-lg bg-white px-6 pt-0 text-gray-600">
              You share your unique link, and when someone engages or purchases
              through it, you earn a percentage
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-none">
            <AccordionTrigger className="rounded-lg bg-white px-6 py-4 text-left hover:no-underline [&[data-state=open]]:rounded-b-none">
              When will I receive my earnings?
            </AccordionTrigger>
            <AccordionContent className="rounded-b-lg bg-white px-6 pt-0 text-gray-600">
              Earnings are processed at the end of each month and paid out
              within the first week of the following month.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border-none">
            <AccordionTrigger className="rounded-lg bg-white px-6 py-4 text-left hover:no-underline [&[data-state=open]]:rounded-b-none">
              Can I track my referrals?
            </AccordionTrigger>
            <AccordionContent className="rounded-b-lg bg-white px-6 pt-0 text-gray-600">
              Yes, you can track all your referrals in real-time through your
              personalized dashboard.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border-none">
            <AccordionTrigger className="rounded-lg bg-white px-6 py-4 text-left hover:no-underline [&[data-state=open]]:rounded-b-none">
              When will I receive my earnings?
            </AccordionTrigger>
            <AccordionContent className="rounded-b-lg bg-white px-6 pt-0 text-gray-600">
              Earnings are processed monthly and transferred directly to your
              connected bank account.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border-none">
            <AccordionTrigger className="rounded-lg bg-white px-6 py-4 text-left hover:no-underline [&[data-state=open]]:rounded-b-none">
              Can I track my referrals?
            </AccordionTrigger>
            <AccordionContent className="rounded-b-lg bg-white px-6 pt-0 text-gray-600">
              Yes, our dashboard provides detailed analytics and tracking for
              all your referrals.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="border-none">
            <AccordionTrigger className="rounded-lg bg-white px-6 py-4 text-left hover:no-underline [&[data-state=open]]:rounded-b-none">
              Do you provide meal plans?
            </AccordionTrigger>
            <AccordionContent className="rounded-b-lg bg-white px-6 pt-0 text-gray-600">
              Yes, we offer customized meal plans tailored to your dietary
              preferences and goals.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7" className="border-none">
            <AccordionTrigger className="rounded-lg bg-white px-6 py-4 text-left hover:no-underline [&[data-state=open]]:rounded-b-none">
              When will I receive my earnings?
            </AccordionTrigger>
            <AccordionContent className="rounded-b-lg bg-white px-6 pt-0 text-gray-600">
              Payments are processed automatically at the end of each month.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
