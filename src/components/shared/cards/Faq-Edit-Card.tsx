import AlertModal from "@/components/ui/alert-modal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { FAQ } from "@/types/professional";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  question: z.string(),
  answer: z.string(),
});

type FormValue = z.infer<typeof formSchema>;

interface Props {
  data?: FAQ;
}

const FaqEditCard = ({ data }: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const queryClient = useQueryClient();

  const { mutate: deleteFaq, isPending: isDeleting } = useMutation({
    mutationKey: ["delete-faq", data?._id],
    mutationFn: () =>
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/faqs/${data?._id}`, {
        method: "DELETE",
      }).then((res) => res.json()),
    onSuccess: (data) => {
      if (!data.success) {
        toast.error(data.message ?? "Failed to delete faq question", {
          position: "top-right",
          richColors: true,
        });
        return;
      }

      // handle success
      toast.success(data.message ?? "Faq deleted successfully 🎉", {
        position: "top-right",
        richColors: true,
      });
      queryClient.invalidateQueries({ queryKey: ["faqs"] });
      setIsDeleteModalOpen(false);
    },
    onError: (err) => {
      toast.error(err.message ?? "Failed to delete faq question", {
        position: "top-right",
        richColors: true,
      });
    },
  });

  const { mutate: editFaq, isPending: isEdit } = useMutation({
    mutationKey: ["edit-faq", data?._id],
    mutationFn: (body: FormValue) =>
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/faqs/${data?._id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(body),
      }).then((res) => res.json()),
    onSuccess: (data) => {
      if (!data.success) {
        toast.error(data.message ?? "Failed to edit faq question", {
          position: "top-right",
          richColors: true,
        });
        return;
      }

      // handle success
      toast.success(data.message ?? "Faq edited successfully 🎉", {
        position: "top-right",
        richColors: true,
      });
      queryClient.invalidateQueries({ queryKey: ["faqs"] });
      setIsEditing(false);
    },
    onError: (err) => {
      toast.error(err.message ?? "Failed to edit faq question", {
        position: "top-right",
        richColors: true,
      });
    },
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      question: data?.question ?? "",
      answer: data?.answer ?? "",
    },
  });

  const onSubmit = (values: FormValue) => {
    editFaq(values);
  };

  return (
    <>
      <Card className="mb-6 bg-white p-6">
        <div className="mb-4 flex justify-between"></div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="mb-4">
              <FormField
                control={form.control}
                name="question"
                render={({ field }) => (
                  <FormItem>
                    <div className="mb-2 flex items-center justify-between">
                      <FormLabel className="font-medium text-gray-900">
                        Question
                      </FormLabel>
                      <span className="text-sm text-gray-500">
                        {field.value.length}/100
                      </span>
                    </div>
                    <FormControl>
                      <Textarea
                        placeholder="Enter your question"
                        maxLength={100}
                        {...field}
                        disabled={!isEditing}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="mb-4">
              <FormField
                control={form.control}
                name="answer"
                render={({ field }) => (
                  <FormItem>
                    <div className="mb-2 flex items-center justify-between">
                      <FormLabel className="font-medium text-gray-900">
                        Answer
                      </FormLabel>
                      <span className="text-sm text-gray-500">
                        {field.value.length}/200
                      </span>
                    </div>
                    <FormControl>
                      <Textarea
                        placeholder="Enter your answer"
                        maxLength={200}
                        {...field}
                        disabled={!isEditing}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex justify-end gap-2">
              {!isEditing && (
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10"
                  type="button"
                  onClick={() => setIsEditing(true)}
                >
                  <Pencil className="h-4 w-4" />
                  <span className="sr-only">Edit</span>
                </Button>
              )}
              <Button
                variant="outline"
                size="icon"
                type="button"
                className="h-10 w-10 text-red-500 hover:bg-red-50 hover:text-red-500"
                onClick={() => setIsDeleteModalOpen(true)}
              >
                <Trash2 className="h-4 w-4" />
                <span className="sr-only">Delete</span>
              </Button>
              {isEditing && (
                <Button type="submit" className="h-[40px]" disabled={isEdit}>
                  Save Changes
                </Button>
              )}
            </div>
          </form>
        </Form>
      </Card>

      <AlertModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        loading={isDeleting}
        onConfirm={() => {
          deleteFaq();
        }}
      />
    </>
  );
};

export default FaqEditCard;
