"use client";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface Props {
  isGreetings: boolean;
  userId: string;
  isVerified: "approved" | "pending" | "declined";
  role: "user" | "vendor";
}

const ProfessionalGreetings = ({
  isGreetings,
  userId,
  isVerified,
  role,
}: Props) => {
  /*  const [isOpen, setOpen] = useState(false); // Initially closed */

  const router = useRouter();

  // API call mutation
  const updateGreetings = useMutation({
    mutationFn: async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/users/${userId}/update-isgratings`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ isgratings: true }),
        },
      );
      if (!response.ok) throw new Error("Failed to update greetings");
      return response.json();
    },
    onSuccess: (data) => {
      if (data.status) {
        // setOpen(true); // Open the modal only when API call is successful
        router.push(`/onboarding/success?role=${role}`);
      }
    },
  });

  // Run API call instantly when conditions are met
  useEffect(() => {
    if (!isGreetings && isVerified === "approved") {
      updateGreetings.mutate(); // Call API instantly
    }
  }, [isGreetings, isVerified, updateGreetings]);
  return <></>;

  /* return (
    <VeganModal
      open={isOpen}
      onOpenChange={() => {
        window.location.reload();
        setOpen(false);
      }}
      className=""
    >
      <div className="flex w-full flex-col items-center justify-center rounded-[16px] bg-white px-[16px] py-[16px]">
        <Image
          src="https://res.cloudinary.com/dgnustmny/image/upload/v1738925272/Rectangle_yzijtk.png"
          height={100}
          width={100}
          alt="LOGO"
        />
        <h1 className="mt-[16px] text-[20px] font-medium leading-[24px] text-[#1F2937] lg:text-[30px]">
          Welcome to Vegan Collective
        </h1>

        <p className="mt-[16px] text-center text-[16px] font-normal leading-[28px] text-[#1F2937]">
          Congratulations! You are now a vendor on Vegan Collective, the world’s
          trusted all-vegan platform.
        </p>
      </div>
    </VeganModal>
  ); */
};

export default ProfessionalGreetings;
