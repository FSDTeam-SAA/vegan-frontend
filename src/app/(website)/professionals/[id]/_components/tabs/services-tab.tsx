import ServiceCard from "@/components/shared/cards/service-card";

const services = [
  {
    title: "Initial Consultation",
    description:
      "A comprehensive 90-minute session to assess your current health status, discuss your goals, and create a personalized nutrition plan.",
    price: 150,
    image: "https://i.ibb.co.com/rV8ndpf/pexels-yankrukov-8436587-1.png",
    type: "One-Time Payment",
  },
  {
    title: "Follow-up Session",
    description:
      "A 60-minute session to review your progress, address any challenges, and adjust your nutrition plan as needed.",
    price: 100,
    image: "https://i.ibb.co.com/rV8ndpf/pexels-yankrukov-8436587-1.png",
    type: "One-Time Payment",
  },
  {
    title: "Monthly Coaching Package",
    description:
      "Includes four 60-minute sessions per month, plus email support between sessions for ongoing guidance and accountability.",
    price: 350,
    image: "https://i.ibb.co.com/rV8ndpf/pexels-yankrukov-8436587-1.png",
    type: "Subscription",
  },
  {
    title: "Customized Meal Plan",
    description:
      "A detailed 7-day meal plan tailored to your nutritional needs, preferences, and lifestyle, including recipes and shopping lists.",
    price: 200,
    image: "https://i.ibb.co.com/rV8ndpf/pexels-yankrukov-8436587-1.png",
    type: "One-Time Payment",
  },
  {
    title: "Group Workshop",
    description:
      "A 2-hour interactive workshop on various nutrition topics, held monthly. Great for learning and connecting with others on a similar journey.",
    price: 50,
    image: "https://i.ibb.co.com/rV8ndpf/pexels-yankrukov-8436587-1.png",
    type: "One-Time Payment",
  },
  {
    title: "Pantry Makeover",
    description:
      "A virtual session to review your current pantry items and provide guidance on stocking a healthy, plant-based kitchen.",
    price: 75,
    image: "https://i.ibb.co.com/rV8ndpf/pexels-yankrukov-8436587-1.png",
    type: "One-Time Payment",
  },
];

export default function ServicesTab() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {services.map((_, index) => (
        <div key={index}>
          <ServiceCard />
        </div>
      ))}
    </div>
  );
}
