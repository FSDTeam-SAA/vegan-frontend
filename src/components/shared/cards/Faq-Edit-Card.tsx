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
import { Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  question: z
    .string()
    .min(5, "Question must be at least 5 characters")
    .max(100, "Max 100 characters"),
  answer: z
    .string()
    .min(10, "Answer must be at least 10 characters")
    .max(200, "Max 200 characters"),
});

type FormValue = z.infer<typeof formSchema>;

interface Props {
  data?: FAQ;
}

const FaqEditCard = ({ data }: Props) => {
  const [isEditing, setIsEditing] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      question: data?.question ?? "",
      answer: data?.answer ?? "",
    },
  });

  const onSubmit = (values: FormValue) => {
    console.log("Submitted Data:", values);
    setIsEditing(false);
  };

  return (
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
              onClick={() => {}}
            >
              <Trash2 className="h-4 w-4" />
              <span className="sr-only">Delete</span>
            </Button>
            {isEditing && (
              <Button type="submit" className="h-[40px]">
                Save Changes
              </Button>
            )}
          </div>
        </form>
      </Form>
    </Card>
  );
};

export default FaqEditCard;
