import { Button } from "@/components/ui/button";
import VeganModal from "@/components/ui/vegan-modal";
import { useState } from "react";
import ReviewCreateForm from "./ReviewCreateForm";

interface Props {
  userId: string;
}
const CreateReview = ({ userId }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button variant="outline" onClick={() => setOpen(true)}>
        Send Feedback
      </Button>

      <VeganModal open={open} onOpenChange={setOpen} className="">
        <ReviewCreateForm userId={userId}/>
      </VeganModal>
    </div>
  );
};

export default CreateReview;
