import { Button } from "@/components/ui/button";
import VeganModal from "@/components/ui/vegan-modal";
import { useState } from "react";
import OrganizationReviewCreateForm from "./organization-review-create-form";

interface Props {
  loggedinUserId: string;
  reviewUserId: string;
}
const CreateOrganizationReview = ({ loggedinUserId, reviewUserId }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button variant="outline" onClick={() => setOpen(true)}>
        Send Feedback
      </Button>

      <VeganModal open={open} onOpenChange={setOpen} className="md:w-[500px]">
        <OrganizationReviewCreateForm
          userId={loggedinUserId}
          organizationID={reviewUserId}
          onClose={() => {
            setOpen(false);
          }}
        />
      </VeganModal>
    </div>
  );
};

export default CreateOrganizationReview;
