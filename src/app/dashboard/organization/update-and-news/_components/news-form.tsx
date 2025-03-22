"use client";
import FileUploader from "@/components/shared/Uploader/FileUploader";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import TiptapEditor from "@/components/ui/tip-tap-editor";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  shortDescription: z.string().min(1, "Short description is required"),
  image: z.instanceof(File, { message: "Invalid file type" }),
});

interface Props {
  organizationID: string;
}

export default function NewsForm({ organizationID }: Props) {
  const [content, setContent] = useState("");
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const router = useRouter();

  const { mutate: createNews, isPending: isNewsCreating } = useMutation({
    mutationKey: ["create-news"],
    mutationFn: (body: FormData) =>
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/createOrganizationUpdate`,
        {
          method: "POST",
          body: body,
        },
      ).then((res) => res.json()),
    onSuccess: (data) => {
      if (!data.success) {
        toast.error(data.message ?? "Failed to publish news", {
          position: "top-right",
          richColors: true,
        });
        return;
      }

      toast.success(data.message ?? "news published successfully", {
        position: "top-right",
        richColors: true,
      });
      form.reset();
      setContent("");
      router.back();
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (!content) {
      toast.warning("Please add some content", {
        position: "top-right",
        richColors: true,
      });
      return;
    }
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("image", values.image);
    formData.append("shortDescription", values.shortDescription);
    formData.append("statement", content);
    formData.append("organizationID", organizationID);

    createNews(formData);
  }

  return (
    <div className="rounded-[16px] bg-[#F8F5F2] p-[40px]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-[24px]">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input
                    className="h-[40px] bg-white md:h-[48px]"
                    placeholder="Enter your title"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <div>
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image</FormLabel>
                  <FormControl>
                    <FileUploader
                      onFileSelect={(file) => field.onChange(file)}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="shortDescription"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Short Description</FormLabel>
                <FormControl>
                  <Input
                    className="h-[40px] bg-white md:h-[48px]"
                    placeholder="Enter short desription"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <TiptapEditor content={content} onChange={(c) => setContent(c)} />
          <div className="flex justify-end">
            <Button
              type="submit"
              className="h-[40px] min-w-[150px] rounded-[10px] bg-[#1D3557]"
              disabled={isNewsCreating}
            >
              Publish {isNewsCreating && <Loader2 className="animate-spin" />}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
