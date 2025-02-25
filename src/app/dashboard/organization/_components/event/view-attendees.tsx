import { Button } from "@/components/ui/button";

//add a comment
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import VeganPagination from "@/components/ui/vegan-pagination";
import { OrganizationEvent } from "@/types/organization";
import { useState } from "react";

interface Props {
  data: OrganizationEvent;
}

const ViewAttendees = ({}: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link">View Attendees</Button>
      </DialogTrigger>
      <DialogContent className="p-0 sm:max-w-[425px]">
        fsdfds
        <DialogFooter>
          <VeganPagination
            currentPage={currentPage}
            onPageChange={(page) => setCurrentPage(page)}
            totalPages={5}
          />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ViewAttendees;
