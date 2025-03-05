// Packages
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Edit, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

// Local imports
import AlertModal from "@/components/ui/alert-modal";
import { Button } from "@/components/ui/button";
import { MerchantProduct } from "@/types/merchant";
import { useSession } from "next-auth/react";
import AddProductDialog from "./add-product-dialog";

interface Props {
  data: MerchantProduct;
}

const MerchantProductActions = ({ data }: Props) => {
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);

  const queryClient = useQueryClient();

  const session = useSession();

  const merchantID = session.data?.user.userId;

  const { mutate: deleteMutate, isPending: isDeleting } = useMutation({
    mutationKey: ["merchant-product-delete"],
    mutationFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/merchantproduct/${data._id}`,
        {
          method: "DELETE",
        },
      ).then((res) => res.json()),
    onSuccess: (data) => {
      if (!data.success) {
        toast.error(data.message, {
          position: "top-right",
          richColors: true,
        });
        return;
      }
      // handle success
      setDeleteModalOpen(false);
      // Remove the deleted product from the cache
      queryClient.invalidateQueries({ queryKey: ["merchantsProduct"] });
    },
  });

  if (!session || session.status === "loading") return null;

  if (!merchantID) return null;

  return (
    <div>
      <AlertModal
        isOpen={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={deleteMutate}
        loading={isDeleting}
      />
      {/* edit product modal */}
      <AddProductDialog
        merchantID={merchantID}
        open={editModalOpen}
        onOpenChange={setEditModalOpen}
        initialData={data}
      />
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setEditModalOpen(true)}
        >
          <Edit className="h-4 w-4 text-[#6B7280] transition-colors duration-500 hover:text-[#1F2937]" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setDeleteModalOpen(true)}
        >
          <Trash2 className="h-4 w-4 text-[#6B7280] transition-colors duration-500 hover:text-[#1F2937]" />
        </Button>
      </div>
    </div>
  );
};

export default MerchantProductActions;
