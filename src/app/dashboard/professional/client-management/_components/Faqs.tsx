"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { PencilIcon, TrashIcon, PlusIcon } from "lucide-react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
import * as z from "zod"

const faqSchema = z.object({
  faqs: z.array(
    z.object({
      question: z.string().max(100),
      answer: z.string().max(200),
    }),
  ),
})

type FaqFormValues = z.infer<typeof faqSchema>

export default function Faqs() {
  const form = useForm<FaqFormValues>({
    resolver: zodResolver(faqSchema),
    defaultValues: {
      faqs: [
        {
          question: "What services do you offer?",
          answer:
            "I specialize in vegan nutrition coaching and meal planning. This includes personalized diet plans, cooking tutorials, and ongoing support for your plant-based journey.",
        },
      ],
    },
  })

  const { fields, append, remove } = useFieldArray({
    name: "faqs",
    control: form.control,
  })

  function onSubmit(data: FaqFormValues) {
    console.log(data)
  }

  return (
    <div className="mt-[48px] bg-[#F8F5F2] rounded-[16px] p-[24px] md:p-[32px] lg:p-[40px]">
        <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 ">
        <div className="space-y-4">
          {fields.map((field, index) => (
            <Card key={field.id} className="">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name={`faqs.${index}.question`}
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex justify-between">
                          <FormLabel>Question {index + 1}</FormLabel>
                          <span className="text-sm text-muted-foreground">{field.value.length}/100</span>
                        </div>
                        <FormControl>
                          <Textarea placeholder="Enter your question" className="resize-none" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`faqs.${index}.answer`}
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex justify-between">
                          <FormLabel>Answer</FormLabel>
                          <span className="text-sm text-muted-foreground">{field.value.length}/200</span>
                        </div>
                        <FormControl>
                          <Textarea placeholder="Enter your answer" className="resize-none" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <div className="flex justify-end gap-2">
                    <Button type="button" variant="ghost" size="sm" className="h-8 px-2">
                      <PencilIcon className="h-4 w-4" />
                      <span className="ml-2">Edit</span>
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="h-8 px-2 text-destructive"
                      onClick={() => remove(index)}
                    >
                      <TrashIcon className="h-4 w-4" />
                      <span className="ml-2">Delete</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Button
          type="button"
          variant="outline"
          className="w-full border-dashed"
          onClick={() => {
            if (fields.length < 10) {
              append({ question: "", answer: "" })
            }
          }}
        >
          <PlusIcon className="mr-2 h-4 w-4" />
          Add New Q&A (Maximum 10)
        </Button>

        <Button type="submit" className="w-32">
          Save Changes
        </Button>
      </form>
    </Form>
    </div>
  )
}

