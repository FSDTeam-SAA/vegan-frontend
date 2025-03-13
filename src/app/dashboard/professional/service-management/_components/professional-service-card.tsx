// Packages
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import { PencilLine, Trash } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

// Local imports

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AlertModal from "@/components/ui/alert-modal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Switch } from "@/components/ui/switch";
import { ProfessionalService } from "@/types/professional";
const AddServiceForm = dynamic(() => import("./add-service-form"), {
  ssr: false,
});
interface Props {
  data?: ProfessionalService;
  id: string;
}

const ProfessionalServiceCard = ({ data, id }: Props) => {
  const [openAccordions, setOpenAccordions] = useState<string[]>([]);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [checked, setChecked] = useState(data?.visibility || false);
  const [deleteModal, setDeleteModal] = useState(false);

  const queryClient = useQueryClient();

  const { mutate: editMutate, isPending: editPending } = useMutation({
    mutationKey: ["professional-service-edit", data?._id],
    mutationFn: (body: FormData) =>
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/updateservice/${data?._id}`,
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

      // handle success
      toast.success(data.message, {
        position: "top-right",
        richColors: true,
      });
      queryClient.invalidateQueries({ queryKey: ["professional-services"] });
    },
  });
  const { mutate: deleteMutate, isPending: deletePending } = useMutation({
    mutationKey: ["professional-service-delete"],
    mutationFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/deleteservice/${data?._id}`,
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
      toast.success(data.message, {
        position: "top-right",
        richColors: true,
      });
      queryClient.invalidateQueries({ queryKey: ["professional-services"] });
    },
  });

  const VisibilityChange = () => {
    const formData = new FormData();

    formData.append("visibility", (!checked).toString());

    editMutate(formData);
    setChecked((p) => !p);
  };
  return (
    <Card className="mb-[51px] bg-[#F9FAFB]">
      <Accordion
        type="multiple"
        value={openAccordions}
        onValueChange={(values) => setOpenAccordions(values)}
      >
        <AccordionItem value={"a"}>
          <div className="flex w-full justify-between rounded-t-[12px] bg-white p-6">
            <div className="w-full">
              <div className="flex items-center space-x-2">
                <Switch
                  id={`vegan-visibility-${data?._id}`}
                  checked={checked}
                  onCheckedChange={VisibilityChange}
                  disabled={editPending}
                />
                <Label
                  className="text-sm font-medium leading-[20px] text-[#1F2937]"
                  htmlFor={`vegan-visibility-`}
                >
                  Visibility{" "}
                  <span className="font-normal">
                    (Service is {checked ? "visible" : "hidden"})
                  </span>
                </Label>
              </div>
              <div>
                <CardTitle className="py-4 text-lg font-medium leading-[26px] text-[#1F2937]">
                  {data?.serviceName}
                </CardTitle>
                <CardDescription className="text-base font-normal leading-[23px] text-[#1F2937]">
                  {data?.serviceDescription}
                </CardDescription>
              </div>
            </div>
            <AccordionTrigger></AccordionTrigger>
          </div>

          <AnimatePresence initial={false}>
            {openAccordions.includes("a") && (
              <AccordionContent forceMount>
                <motion.div
                  key={`content-a`}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <CardContent>
                    <h5 className="pb-[8px] pt-[24px] text-lg font-medium leading-[26px] text-[#1F2937]">
                      SEO Details
                    </h5>
                    <div className="space-y-4">
                      <div className="space-y-4 bg-white p-4">
                        <div>
                          <h4 className="text-lg font-medium leading-[26px] text-[#1F2937]">
                            Meta Description
                          </h4>
                          <p className="pt-[8px] text-base font-medium leading-[24px] text-[#6B7280]">
                            {data?.metaDescription}
                          </p>
                        </div>
                        <div>
                          <h4 className="pb-[12px] text-lg font-medium leading-[26px] text-[#1F2937]">
                            Keywords
                          </h4>
                          <div className="mt-1 flex flex-wrap gap-2">
                            {data?.keyWords.map((keyword, index) => (
                              <Badge
                                key={index}
                                className="rounded-[10px] px-2 text-[12px] font-normal leading-[26px] text-[#1F2937]"
                                variant="secondary"
                              >
                                {keyword}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="border-none pb-[16px] text-lg font-medium leading-[26px] text-[#1F2937]">
                          Media
                        </h3>
                        <div className="flex flex-col items-center gap-4 md:flex-row">
                          {data?.serviceImage && (
                            <Image
                              src={data?.serviceImage || "/placeholder.svg"}
                              alt="Vegan market logo"
                              width={180}
                              height={180}
                              className="h-[120px] w-full rounded-[12px] md:h-[180px] md:w-[180px]"
                            />
                          )}

                          {data?.serviceVideo && (
                            <video
                              controls
                              width="320"
                              height="180"
                              className="aspect-video rounded-[12px]"
                            >
                              <source
                                src={data?.serviceVideo}
                                type="video/mp4"
                              />
                              Your browser does not support the video tag.
                            </video>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </motion.div>
              </AccordionContent>
            )}
          </AnimatePresence>
        </AccordionItem>
      </Accordion>

      <CardContent>
        <div className="mt-4 flex justify-end">
          <Button
            className="text-base font-normal leading-[23px] text-[#1F2937]"
            variant="ghost"
            size="sm"
            onClick={() => setOpenEditModal(true)}
          >
            <PencilLine />
            Edit Service
          </Button>
          <Button
            className="text-base font-normal leading-[23px] text-[#1F2937] hover:bg-red-100 hover:text-red-500"
            variant="ghost"
            size="sm"
            onClick={() => setDeleteModal(true)}
          >
            <Trash />
            Delete
          </Button>
        </div>
      </CardContent>

      {/* Edit Service Modal */}
      {openEditModal && (
        <section className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm">
          <div className="relative z-10">
            <ScrollArea className="h-[700px] w-[327px] rounded-b-[16px] md:w-[500px] lg:w-[769px]">
              <AddServiceForm
                onOpenChange={setOpenEditModal}
                initialdata={data}
                userId={id}
              />
            </ScrollArea>
          </div>
        </section>
      )}

      <AlertModal
        isOpen={deleteModal}
        onClose={() => setDeleteModal(false)}
        onConfirm={deleteMutate}
        loading={deletePending}
      />
    </Card>
  );
};

export default ProfessionalServiceCard;
