// Packages
import { useState } from "react";

// Local imports

import { Switch } from "@/components/ui/switch";
import { MerchantProduct } from "@/types/merchant";
import { useMutation } from "@tanstack/react-query";

interface Props {
  data: MerchantProduct;
}

const MerchantVisibilityChecker = ({ data }: Props) => {
  const [checked, setChecked] = useState<boolean>(data.visibility);

  const { mutate, isPending } = useMutation({
    mutationKey: ["visibility"],
    mutationFn: (value: boolean) =>
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/merchantproduct/${data._id}`,
        {
          method: "PUT",
          body: JSON.stringify({
            visibility: value,
          }),
        },
      ).then((res) => res.json()),
    onSuccess: (data) => {
      console.log(data);
    },
  });

  const handleVisibilityCheck = () => {
    // check if already visible
    mutate(!checked);
    setChecked((p) => !p);
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
