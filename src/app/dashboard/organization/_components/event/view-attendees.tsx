import { Button } from "@/components/ui/button";

//add a comment
import { OrganizationEvent } from "@/types/organization";

interface Props {
  data: OrganizationEvent;
}

import Link from "next/link";

const ViewAttendees = ({ data: initialData }: Props) => {
  return (
    <Button variant="link">
      <Link
        href={`/dashboard/organization/event-management/attendees/${initialData?._id}`}
      >
        View Attendees
      </Link>
    </Button>
  );
};

export default ViewAttendees;
