export function ExperienceTab() {
  return (
    <div className="max-w-[604px]">
      <h1 className="mb-6 font-lexend text-lg font-medium leading-[22px] text-[#1D3557] md:leading-[25px]">
        Education & Credentials
      </h1>

      <div className="space-y-6">
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 font-inter text-lg font-medium leading-[22px] text-[#374151] md:leading-[30px]">
            Education
          </h2>
          <ul className="space-y-3 *:my-2 *:ml-6 *:list-disc *:font-inter *:text-lg *:font-normal *:leading-[28px] *:text-[#374151] md:*:text-lg md:*:leading-[30px] ">
            <li>Ph.D in Nutritional Sciences, Cornell University</li>
            <li>Certified in Plant-Based Nutrition, Cornell University</li>
            <li>Certified in Plant-Based Nutrition, Cornell University</li>
            <li>Certified in Plant-Based Nutrition, Cornell University</li>
          </ul>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-medium">Certifications</h2>
          <ul className="space-y-3 *:my-2 *:ml-6 *:list-disc *:font-inter *:text-lg *:font-normal *:leading-[28px] *:text-[#374151] md:*:text-lg md:*:leading-[30px]">
            <li>Certified Nutrition Specialist (CNS)</li>
            <li>Plant-Based Nutrition Certificate</li>
            <li>Plant-Based Nutrition Certificate</li>
            <li>Plant-Based Nutrition Certificate</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
