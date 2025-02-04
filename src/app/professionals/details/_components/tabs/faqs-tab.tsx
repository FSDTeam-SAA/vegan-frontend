import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What can I expect in our first session?",
    answer:
      "In our first session, we'll discuss your health goals, current diet, and lifestyle. I'll perform a comprehensive nutritional assessment and create a personalized plan tailored to your needs. We'll also address any concerns or questions you may have about transitioning to or maintaining a vegan diet.",
  },
  {
    question: "Do you provide meal plans?",
    answer:
      "Yes, I provide customized meal plans based on your nutritional needs, preferences, and lifestyle. These plans are designed to ensure you're getting all the necessary nutrients while enjoying delicious, varied meals.",
  },
  {
    question: "How often should we have follow-up sessions?",
    answer:
      "The frequency of follow-up sessions depends on your individual needs and goals. Typically, I recommend bi-weekly sessions for the first month, then monthly sessions as you become more comfortable with your new dietary habits. We can adjust this schedule as needed.",
  },
  {
    question: "Can you help with specific health conditions?",
    answer:
      "Absolutely. I have experience working with clients who have various health conditions such as diabetes, heart disease, and autoimmune disorders. I can help create nutrition plans that support your overall health while addressing specific dietary needs related to your condition.",
  },
];

export function FAQsTab() {
  return (
    <Card>
      <CardContent className="p-6">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}
