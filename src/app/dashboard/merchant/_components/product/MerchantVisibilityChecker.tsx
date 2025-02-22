// Packages
import { useState } from "react";

// Local imports

import { Switch } from "@/components/ui/switch";
import { MerchantProduct } from "@/types/merchant";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

interface Props {
  data: MerchantProduct;
}

const MerchantVisibilityChecker = ({ data }: Props) => {
  const [checked, setChecked] = useState<boolean>(data.visibility);

  const { mutate, isPending } = useMutation({
    mutationKey: [checked],
    mutationFn: (body: FormData) =>
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/merchantproduct/${data._id}`,
        {
          method: "PUT",
          body: body,
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

      // Handle success
    },
  });

  const handleVisibilityCheck = () => {
    const formData = new FormData();
    formData.append("visibility", JSON.stringify(!checked));
    // check if already visible
    setChecked((p) => !p);
    mutate(formData);
  };
  return (
    <div className="flex justify-start">
      <Switch
        checked={checked}
        onCheckedChange={() => handleVisibilityCheck()}
        disabled={isPending}
      />
      ;
    </div>
  );
};

export default MerchantVisibilityChecker;
