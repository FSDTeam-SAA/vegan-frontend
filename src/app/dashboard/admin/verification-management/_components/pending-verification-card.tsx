import { VendorProfile } from "@/types/admin";
import moment from "moment";
import { useState } from "react";
import ReviewVendorApplication from "./ReviewVendorApplication";

interface Props {
  data?: VendorProfile;
}
const PendingVerificationsCard = ({ data }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className={`flex flex-col items-start justify-start gap-4 rounded-[10px] bg-white p-4 md:flex-row md:items-center md:justify-between`}
      >
        <div>
          <h6 className="text-base font-medium leading-[23px] text-[#1F2937] md:text-lg md:leading-[26px]">
            {data?.businessName || data?.organizationName}
          </h6>
          <p className="pt-2 text-[12px] font-normal leading-[20px] text-[#4B5563] md:text-base md:leading-[23px]">
            Submitted: {moment(data?.createdAt).format("MMM D, YYYY")}
          </p>
        </div>
        <div>
          <h5
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer text-base font-medium leading-[19px] text-[#1D3557] underline"
          >
            Review Details
          </h5>
        </div>
      </div>
      <div>
        {isOpen && (
          <section className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm">
            <div>
              <ReviewVendorApplication setIsOpen={setIsOpen} />
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default PendingVerificationsCard;
