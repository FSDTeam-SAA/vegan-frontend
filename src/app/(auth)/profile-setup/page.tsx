"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useSearchParams } from "next/navigation";
import { getProfileType } from "@/lib/utils";
// import { profileSchema, type ProfileFormData } from "@/lib/schema"
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PlayCircle } from "lucide-react";
import { ProfileFormData, profileSchema } from "@/lib/ProfileSetupSchema";

export default function Page() {
  const searchParams = useSearchParams();
  const type = getProfileType({ type: searchParams.get("type") ?? undefined });

  const form = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      type,
      address: "",
      website_url: "",
      ...(type === "merchant" && {
        businessName: "",
        about_us: "",
      }),
      ...(type === "organization" && {
        organization_name: "",
        about_us: "",
        mission: "",
        experience: "",
      }),
      ...(type === "professional" && {
        fullName: "",
        businessName: "",
        about: "",
        experience: "",
      }),
    },
  });

  async function onSubmit(data: ProfileFormData) {
    try {
      // Here you would typically send the data to your server
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="flex min-h-screen">
      <div className="flex-1 p-8">
        <div className="mx-auto max-w-[790px]">
          <h1 className="mb-2 text-[20px] font-medium text-[#1F2937]">
            Profile Setup
          </h1>
          <p className="mb-8 text-muted-foreground">
            Set up your {type} profile to get started
          </p>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 lg:w-[584px]"
            >
              {/* merchant */}
              {type === "merchant" && (
                <FormField
                  control={form.control}
                  name="businessName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[14px] font-medium">
                        Business Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="h-[48px] bg-white px-[26px] py-[13px]"
                          placeholder="Enter your registered business name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              {/* organization */}
              {type === "organization" && (
                <>
                  <FormField
                    control={form.control}
                    name="organization_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Organization Name</FormLabel>
                        <FormControl>
                          <Input
                            className="h-[48px] bg-white px-[26px] py-[13px]"
                            placeholder="Enter your organization's registered name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="mission"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mission Statement </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Briefly describe your organization's mission"
                            className="h-[127px] bg-white"
                            maxLength={300}
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Maximum 300 characters
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}

              {/* professional */}
              {type === "professional" && (
                <>
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input
                            className="h-[48px] bg-white px-[26px] py-[13px]"
                            placeholder="Enter your full name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="businessName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[14px] text-[#1F2937]">
                          Business Name (Optional){" "}
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="h-[48px] bg-white px-[26px] py-[13px]"
                            placeholder="Enter your business name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}

              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[14px] font-medium">
                      Address
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="h-[48px] bg-white px-[26px] py-[13px]"
                        placeholder="Enter your address"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name={type === "professional" ? "about" : "about_us"}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[14px] font-medium">
                      {type === "professional" ? "About" : "About Us"}
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={`Provide a brief insight about ${
                          type === "professional" ? "yourself" : "your " + type
                        }`}
                        className="bg-white px-[26px] py-[13px] lg:h-[127px]"
                        maxLength={300}
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>Maximum 300 characters</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {(type === "organization" || type === "professional") && (
                <FormField
                  control={form.control}
                  name="experience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Experience & Certifications</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="List your relevant experience and certifications"
                          className="h-[127px] bg-white"
                          maxLength={300}
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>Maximum 300 characters</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              <FormField
                control={form.control}
                name="website_url"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[14px] font-medium">
                      Website URL (optional)
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="h-[48px] bg-white px-[26px] py-[13px]"
                        type="url"
                        placeholder="Enter your website URL"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-end">
                <Button
                  type="submit"
                  className="mt-[40px] h-[51px] w-full rounded-[8px] bg-[#1D3557] p-[16px] lg:w-[200px]"
                >
                  Continue
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>

      <div className="hidden w-[648px] bg-[#1D3557] p-8 pt-[150px] text-white lg:block">
        <h2 className="mb-8 text-center text-2xl font-semibold">
          How It Works
        </h2>
        <div className="relative my-[50px] aspect-video rounded-lg bg-black/20">
          <div className="absolute inset-0 flex items-center justify-center">
            <PlayCircle className="h-12 w-12 text-white/80" />
          </div>
        </div>
        <p className="pointer-events-none rounded-[12px] bg-white p-[24px] text-[#4B5563]">
          Watch our quick guide on setting up your profile and maximizing your
          success on our platform.
        </p>
      </div>
    </div>
  );
}
