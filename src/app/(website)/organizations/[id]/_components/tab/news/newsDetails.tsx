import TiptapEditor from "@/components/ui/tip-tap-editor";
import { News } from "@/types/organization";
import { ArrowLeft, MessageCircle } from "lucide-react";
import moment from "moment";
import Image from "next/image";
import CommentContainer from "./comments/comment-container";

interface Props {
  data: News;
  onClose: () => void;
  loggedinUserId: string;
}

const NewsDetails = ({ data, onClose, loggedinUserId }: Props) => {
  return (
    <div className="max-w-[835px]">
      <button
        className="flex items-center gap-x-2 hover:underline"
        onClick={onClose}
      >
        <ArrowLeft /> Back to News & Updates
      </button>

      <div className="mt-[32px]">
        <h1 className="text-[22px] font-semibold text-[#1F2937]">
          New Community Garden Project Launches to Preserve Local Wildlife
        </h1>
        <p className="mt-[16px] font-normal text-[#374151]">
          Posted on {moment(data.createdAt).format("MMMM D, YYYY")}
        </p>

        <div className="relative mt-[24px] h-[309px] w-full rounded-[12px]">
          <Image
            src={
              data?.image ??
              "https://res.cloudinary.com/dgnustmny/image/upload/v1738815951/pexels-ron-lach-9034660_1_1_kgtnea.png"
            }
            fill
            alt="image"
            className="rounded-[12px]"
          />
        </div>

        <p className="mt-[40px] font-medium text-[#1F2937]">
          {data.shortDescription}
        </p>
      </div>

      <div className="mt-[56px] rounded-[12px] bg-white p-[24px]">
        <TiptapEditor content={data.statement} onlyView />

        <div className="mt-[56px]">
          <button>
            <span className="flex items-center gap-[4px] text-base font-normal leading-[19px] text-[#4B5563]">
              <MessageCircle className="h-[16px] w-[16px] text-[#4B5563]" />{" "}
              {data?.comments.length} Comments
            </span>
          </button>
        </div>
      </div>

      <div className="mt-[56px]">
        <CommentContainer loggedinUserId={loggedinUserId} newsId={data._id} />
      </div>
    </div>
  );
};

export default NewsDetails;
