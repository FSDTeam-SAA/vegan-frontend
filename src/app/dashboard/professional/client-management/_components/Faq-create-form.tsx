"use client";
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
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

const formSchema = z.object({
  question: z.string().min(1),
  answer: z.string(),
});

interface Props {
  userId: string;
  onSuccess: () => void;
}

interface MutateBody {
  question: string;
  answer: string;
  userID: string;
}

export default function FaqCreateForm({ userId, onSuccess }: Props) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const { mutate: createMuate, isPending } = useMutation({
    mutationKey: ["forget-password"],
    mutationFn: (data: MutateBody) =>
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/faqs`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => res.json()),
    onSuccess: (data) => {
      if (!data.success) {
        toast.error(data.message, {
          position: "top-right",
          richColors: true,
        });
        return;
      }

      // Clear input fields after successful API call
      form.reset();

      // handle success
      toast.success(data.message, {
        position: "bottom-right",
        richColors: true,
      });

      onSuccess();
    },
    onError: (err) => {
      toast.error(err.message ?? "Something went wrong", {
        position: "top-right",
        richColors: true,
      });
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const data = {
      question: values.question,
      answer: values.answer,
      userID: userId,
    };

    createMuate(data);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto max-w-3xl space-y-8 pt-10"
      >
        <FormField
          control={form.control}
          name="question"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Question</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter a question"
                  className="h-[40px]"
                  type="text"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="answer"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Answer</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Write answer"
                  className="min-h-[40px] resize-none"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end">
          <Button type="submit" className="h-[40px]">
            Submit {isPending && <Loader2 className="animate-spin" />}
          </Button>
        </div>
      </form>
    </Form>
  );
}
