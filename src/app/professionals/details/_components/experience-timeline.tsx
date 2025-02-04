import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    year: "2023 - Present",
    title: "Private Practice",
    description:
      "Founder and lead nutritionist at Green Nutrition Consulting, specializing in plant-based nutrition and wellness coaching.",
  },
  {
    year: "2020 - 2023",
    title: "Senior Nutritionist",
    description:
      "Worked at New York Wellness Center, focusing on nutrition therapy for chronic disease management and prevention.",
  },
  {
    year: "2017 - 2020",
    title: "Research Associate",
    description:
      "Conducted research on the effects of plant-based diets on cardiovascular health at Cornell University.",
  },
  {
    year: "2015 - 2017",
    title: "Nutrition Educator",
    description:
      "Developed and delivered nutrition education programs for a non-profit organization focused on community health.",
  },
  {
    year: "2011 - 2015",
    title: "Ph.D. in Nutritional Sciences",
    description:
      "Completed doctoral studies at Cornell University, focusing on the impact of plant-based diets on metabolic health.",
  },
];

export function ExperienceTimeline() {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="mb-4 text-xl font-semibold">Education & Experience</h3>
        <div className="relative border-l border-gray-200 dark:border-gray-700">
          {experiences.map((experience, index) => (
            <div key={index} className="mb-10 ml-4">
              <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {experience.year}
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {experience.title}
              </h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                {experience.description}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
