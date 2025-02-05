const data = [
  {
    id: 1,
    day: "Monday - Friday",
    time: "9:00 AM - 6:00 PM",
  },
  {
    id: 2,
    day: "Saterday",
    time: "10:00 AM - 4:00 PM",
  },
];

const MerchantAbout = () => {
  return (
    <div className="space-y-[61px] rounded-[10px] bg-white p-[24px]">
      <div className="space-y-[16px]">
        <h3 className="font-inter text-[20px] font-semibold text-[#1F2937]">
          About Green Earth Organics
        </h3>
        <p className="max-w-[834px] font-inter text-[16px] leading-[24px] text-[#374151]">
          We specialize in organic and sustainably sourced vegan products. Our
          mission is to make plant-based living accessible and delicious for
          everyone.
        </p>
      </div>

      <div>
        <h5 className="font-inter text-[18px] font-semibold leading-[21.78px] text-[#1F2937]">
          Business Hours
        </h5>

        <div className="mt-[24px] space-y-[36px]">
          {data.map(({ id, day, time }) => (
            <div
              key={id}
              className="flex w-full items-center justify-between font-inter font-medium leading-[19.36px] text-[#334155] md:w-[456px]"
            >
              <p>{day}</p>
              <p>{time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MerchantAbout;
