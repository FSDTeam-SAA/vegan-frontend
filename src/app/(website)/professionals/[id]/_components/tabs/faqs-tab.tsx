"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "What can I expect in our first session?",
    answer:
      "In our first session, we'll discuss your health goals, current diet, and lifestyle. I'll perform a comprehensive nutritional assessment and create a personalized plan tailored to your needs",
  },
  {
    question: "Do you provide meal plans?",
    answer:
      "Yes, we provide customized meal plans based on your nutritional needs and preferences.",
  },
  {
    question: "What can I expect in our first session?",
    answer:
      "In our first session, we'll discuss your health goals, current diet, and lifestyle. I'll perform a comprehensive nutritional assessment and create a personalized plan tailored to your needs",
  },
  {
    question: "Do you provide meal plans?",
    answer:
      "Yes, we provide customized meal plans based on your nutritional needs and preferences.",
  },
  {
    question: "What can I expect in our first session?",
    answer:
      "In our first session, we'll discuss your health goals, current diet, and lifestyle. I'll perform a comprehensive nutritional assessment and create a personalized plan tailored to your needs",
  },
  {
    question: "Do you provide meal plans?",
    answer:
      "Yes, we provide customized meal plans based on your nutritional needs and preferences.",
  },
  {
    question: "What can I expect in our first session?",
    answer:
      "In our first session, we'll discuss your health goals, current diet, and lifestyle. I'll perform a comprehensive nutritional assessment and create a personalized plan tailored to your needs",
  },
  {
    question: "Do you provide meal plans?",
    answer:
      "Yes, we provide customized meal plans based on your nutritional needs and preferences.",
  },
  {
    question: "What can I expect in our first session?",
    answer:
      "In our first session, we'll discuss your health goals, current diet, and lifestyle. I'll perform a comprehensive nutritional assessment and create a personalized plan tailored to your needs",
  },
  {
    question: "Do you provide meal plans?",
    answer:
      "Yes, we provide customized meal plans based on your nutritional needs and preferences.",
  },
];

export default function FAQsTab() {
  return (
    <div className="max-w-[848px] p-4">
      <h1 className="mb-6 font-lexend text-xl font-medium leading-[25px] text-[#1D3557]">
        Frequently Asked Questions
      </h1>

      <Accordion type="single" collapsible className="space-y-6">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="rounded-xl bg-white p-6 shadow-sm"
          >
            <AccordionTrigger className="py-0 text-left font-inter text-base font-medium leading-[24px] text-[#1F2937] hover:no-underline md:text-lg md:leading-[22px]">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="pb-0 pt-4 font-inter text-sm font-normal leading-[24px] text-[#374151] md:text-base md:leading-[28px]">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="mt-[68px]">
        <h3 className="mb-6 font-inter text-lg font-medium leading-[21.78px] text-[#1E2939]">
          Still have a question that is not on the list?
        </h3>
        <Button className="rounded-[8px] bg-[#1D3557] px-[20px] py-[10px] text-center font-lexend text-sm font-medium leading-[20.3px] tracking-[-3%]">
          Contact Me
        </Button>
      </div>
    </div>
  );
}
