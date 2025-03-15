import { Button } from "@/components/ui/button";
import VeganModal from "@/components/ui/vegan-modal";
import { useState } from "react";
import ReviewCreateForm from "./ReviewCreateForm";

interface Props {
  loggedinUserId: string;
  reviewUserId: string;
}
const CreateReview = ({ loggedinUserId, reviewUserId }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button variant="outline" onClick={() => setOpen(true)}>
        Send Feedback
      </Button>

      <VeganModal open={open} onOpenChange={setOpen} className="md:w-[500px]">
        <ReviewCreateForm
          userId={loggedinUserId}
          professionalID={reviewUserId}
        />
      </VeganModal>
    </div>
  );
};

export default CreateReview;
