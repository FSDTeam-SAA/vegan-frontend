"use client";

// Packages
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Loader2, Plus, X } from "lucide-react";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { toast } from "sonner";

// Local imports
import FileUploader from "@/components/shared/Uploader/FileUploader";
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
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ProfileFormData, profileSchema } from "@/lib/ProfileSetupSchema";
import { getProfileType } from "@/lib/utils";

const dayOptions = [
  { value: "monday", label: "Monday" },
  { value: "tuesday", label: "Tuesday" },
  { value: "wednesday", label: "Wednesday" },
  { value: "thursday", label: "Thursday" },
  { value: "friday", label: "Friday" },
  { value: "saturday", label: "Saturday" },
  { value: "sunday", label: "Sunday" },
];

export default function ProfileSetupForm() {
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const type = getProfileType({ type: searchParams.get("type") ?? undefined });
  const userId = searchParams.get("userId");
  const router = useRouter();

  if (!type || !userId) redirect("/");

  useEffect(() => {
    return () => {
      setLoading(false);
    };
  }, []);

  const { mutate: professionalMutate, isPending: professionalPending } =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    useMutation<any, unknown, FormData>({
      mutationKey: ["professional_update"],
      mutationFn: (formData) =>
        fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/ProfessionalInfo`,
          {
            method: "POST",
            body: formData, // ✅ Send FormData directly
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
        setLoading(true);
        router.push(
          `/profile-setup/verify_documents?type=${type}&userId=${userId}`,
        );
      },
      onError: () => {
        toast.error("Something went wrong to setup your profile...", {
          position: "top-right",
          richColors: true,
        });
      },
    });

  const { mutate: merchantMutate, isPending: merchantPending } =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    useMutation<any, unknown, FormData>({
      mutationKey: ["merchant_update"],
      mutationFn: (formData) =>
        fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/merchant`, {
          method: "POST",
          body: formData, // ✅ Send FormData directly
        }).then((res) => res.json()),
      onSuccess: (data) => {
        if (!data.success) {
          toast.error(data.message, {
            position: "top-right",
            richColors: true,
          });
          return;
        }
        setLoading(true);
        router.push(
          `/profile-setup/verify_documents?type=${type}&userId=${userId}`,
        );
      },
      onError: () => {
        toast.error("Something went wrong to setup your profile...", {
          position: "top-right",
          richColors: true,
        });
      },
    });
  const { mutate: organizationMutate, isPending: organizationPending } =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    useMutation<any, unknown, FormData>({
      mutationKey: ["organization_update"],
      mutationFn: (formData) =>
        fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/organization`, {
          method: "POST",
          body: formData, // ✅ Send FormData directly
        }).then((res) => res.json()),
      onSuccess: (data) => {
        if (!data.success) {
          toast.error(data.message, {
            position: "top-right",
            richColors: true,
          });
          return;
        }
        setLoading(true);
        router.push(
          `/profile-setup/verify_documents?type=${type}&userId=${userId}`,
        );
      },
      onError: () => {
        toast.error("Something went wrong to setup your profile...", {
          position: "top-right",
          richColors: true,
        });
      },
    });

  const form = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      type,
      websiteURL: "",
      ...(type === "merchant" && {
        businessName: "",
        about: "",
        businessHours: [
          {
            Day: "",
            Time: "",
          },
        ],
      }),
      ...(type === "organization" && {
        about: "",
        mission: "",
        experience: "",
      }),
      ...(type === "professional" && {
        fullName: "",
        businessName: "",
        about: "",
        Profession: "",
        experiences: [{ title: "" }],
        certifications: [{ name: "" }],
      }),
    },
  });

  const {
    fields: experienceFields,
    append: appendExperience,
    remove: removeExperience,
  } = useFieldArray({
    control: form.control,
    name:
      type === "professional" || type === "organization"
        ? "experiences"
        : "experiences",
  });

  const {
    fields: certificationFields,
    append: appendCertification,
    remove: removeCertification,
  } = useFieldArray({
    control: form.control,
    name:
      type === "professional" || type === "organization"
        ? "certifications"
        : "certifications",
  });

  const { fields, append, remove } = useFieldArray({
    name: "businessHours",
    control: form.control,
  });

  async function onSubmit(data: ProfileFormData) {
    const formData = new FormData();
    if (data.type === "professional") {
      try {
        // Append basic fields
        formData.append("userID", userId!);
        formData.append("fullName", data.fullName ?? "");
        formData.append("businessName", data.businessName ?? "");
        formData.append("about", data.about ?? "");
        formData.append("websiteURL", data.websiteURL ?? "");
        formData.append("designation", data.designation);

        // Append experiences as a JSON string
        formData.append(
          "experience",
          JSON.stringify(
            data.experiences
              ?.map((exp) => exp.title)
              .filter((title): title is string => !!title) || [],
          ),
        );

        // Append certifications as JSON string
        formData.append(
          "certifications",
          JSON.stringify(
            data.certifications
              ?.map((item) => item.name)
              .filter((n): n is string => !!n) || [],
          ),
        );

        // Append highlighted statement as JSON string
        formData.append(
          "highlightedStatement",
          JSON.stringify([
            {
              title: data.highlightedTitle ?? "",
              description: data.highlightedDescription ?? "",
            },
          ]),
        );

        // Append profile photo if exists
        if (data.profilePhoto) {
          console.log("Uploading Profile Photo:", data.profilePhoto.name);
          formData.append("profilePhoto", data.profilePhoto);
        }

        // Debugging: Log FormData Entries
        // for (const [key, value] of formData.entries()) {
        //   console.log(`${key}:`, value);
        // }

        // Submit the form data
        await professionalMutate(formData);
      } catch (error) {
        console.error("Form submission error:", error);
      }
    } else if (data.type === "merchant") {
      // Append basic fields
      formData.append("userID", userId!);
      formData.append("fullName", data.fullName ?? "");
      formData.append("businessName", data.businessName ?? "");
      formData.append("about", data.about ?? "");
      formData.append("websiteURL", data.websiteURL ?? "");
      formData.append("shortDescriptionOfStore", data.shortDescriptionOfStore);

      if (data.businessHours) {
        formData.append("businessHours", JSON.stringify(data.businessHours));
      }

      // Append highlighted statement as JSON string
      formData.append(
        "highlightedStatement",
        JSON.stringify([
          {
            title: data.highlightedTitle ?? "",
            description: data.highlightedDescription ?? "",
          },
        ]),
      );

      if (data.profilePhoto) {
        formData.append("profilePhoto", data.profilePhoto);
      }

      merchantMutate(formData);
    } else if (data.type === "organization") {
      formData.append("userID", userId!);
      formData.append("businessName", data.businessName ?? "");
      formData.append("organizationName", data.organizationName ?? "");
      formData.append("missionStatement", data.missionStatement);

      formData.append("about", data.about ?? "");
      formData.append(
        "shortDescriptionOfOrganization",
        data.shortDescriptionOfOrganization,
      );

      formData.append("websiteURL", data.websiteURL ?? "");

      // Append experiences as a JSON string
      formData.append(
        "experience",
        JSON.stringify(
          data.experiences
            ?.map((exp) => exp.title)
            .filter((title): title is string => !!title) || [],
        ),
      );

      // Append certifications as JSON string
      formData.append(
        "certifications",
        JSON.stringify(
          data.certifications
            ?.map((item) => item.name)
            .filter((n): n is string => !!n) || [],
        ),
      );

      // call api here
      organizationMutate(formData);
    }
  }

  const isLoading =
    professionalPending || loading || merchantPending || organizationPending;

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
              {/* organization */}
              {type === "organization" && (
                <>
                  <FormField
                    control={form.control}
                    name="organizationName"
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
                    name="shortDescriptionOfOrganization"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Short Description (Organization)</FormLabel>
                        <FormControl>
                          <Input
                            className="h-[48px] bg-white px-[26px] py-[13px]"
                            placeholder="Enter your short description of your organization..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="missionStatement"
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

              <FormField
                control={form.control}
                name="businessName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[14px] text-[#1F2937]">
                      Business Name
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

              {/* professional */}
              {(type === "professional" || type === "merchant") && (
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
                </>
              )}

              {type === "merchant" && (
                <FormField
                  control={form.control}
                  name="shortDescriptionOfStore"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Short Description</FormLabel>
                      <FormControl>
                        <Input
                          className="h-[48px] bg-white px-[26px] py-[13px]"
                          placeholder="Enter a short description"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              {type === "professional" && (
                <FormField
                  control={form.control}
                  name="designation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[14px] text-[#1F2937]">
                        Profession
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="h-[48px] bg-white px-[26px] py-[13px]"
                          placeholder="Enter your Designation"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              {/* <FormField
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
              /> */}

              <FormField
                control={form.control}
                name="about"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[14px] font-medium">
                      {type === "professional"
                        ? "Service Description"
                        : "About Us"}
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        // placeholder={`Provide a brief insight about ${
                        //   type === "professional" ? "yourself" : "your " + type
                        // }`}
                        placeholder={`${type === "professional" ? "Briefly describe the services you offer (max 300 words)." : "Provide a brief insight about you"}`}
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

              {(type === "professional" || type === "merchant") && (
                <div>
                  <div className="mb-5 flex w-full items-center justify-between">
                    <FormLabel>Highlighted Statement</FormLabel>
                  </div>

                  <FormField
                    control={form.control}
                    name="highlightedTitle"
                    render={({ field }) => (
                      <FormItem>
                        {/* <FormLabel className="text-[14px] font-medium">
                          Title (optional)
                        </FormLabel> */}
                        <FormControl>
                          <Input
                            className="h-[48px] bg-white px-[26px] py-[13px]"
                            placeholder="Enter your Highlighted Title"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="highlightedDescription"
                    render={({ field }) => (
                      <FormItem className="mt-4">
                        {/* <FormLabel className="text-[14px] font-medium">
                          Description (optional)
                        </FormLabel> */}
                        <FormControl>
                          <Input
                            className="h-[48px] bg-white px-[26px] py-[13px]"
                            placeholder="Enter your Highlighted Description"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}

              {(type === "organization" || type === "professional") && (
                <div>
                  <div className="mb-5 flex w-full items-center justify-between">
                    <FormLabel>Experience</FormLabel>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        appendExperience({
                          title: "",
                        })
                      }
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Add Experience
                    </Button>
                  </div>
                  <div className="space-y-5">
                    {experienceFields.map((field, index) => (
                      <div
                        className="relative mt-2 flex h-[40px] items-center"
                        key={field.id}
                      >
                        <FormField
                          control={form.control}
                          name={`experiences.${index}.title`}
                          render={({ field }) => (
                            <FormItem className="flex-1">
                              <FormControl>
                                <div className="flex items-center gap-x-3">
                                  <Input
                                    placeholder="Add Your experience here..."
                                    className="h-[48px] bg-white px-[26px] py-[13px] shadow-none"
                                    {...field}
                                  />
                                  <Button
                                    type="button"
                                    variant="outline"
                                    size="icon"
                                    className="h-[48px] w-[48px] bg-white"
                                    onClick={() => removeExperience(index)}
                                  >
                                    <X />
                                  </Button>
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {(type === "organization" || type === "professional") && (
                <div className="mt-2">
                  <div className="mb-5 flex w-full items-center justify-between">
                    <FormLabel>Certificates</FormLabel>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        appendCertification({
                          name: "",
                        })
                      }
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Add Certificate
                    </Button>
                  </div>
                  <div className="space-y-5">
                    {certificationFields.map((field, index) => (
                      <div
                        className="relative mt-2 flex h-[40px] items-center"
                        key={field.id}
                      >
                        <FormField
                          control={form.control}
                          name={`certifications.${index}.name`}
                          render={({ field }) => (
                            <FormItem className="flex-1">
                              <FormControl>
                                <div className="flex items-center gap-x-3">
                                  <Input
                                    placeholder="Add Your certificate here..."
                                    className="h-[48px] bg-white px-[26px] py-[13px] shadow-none"
                                    {...field}
                                  />
                                  <Button
                                    type="button"
                                    variant="outline"
                                    size="icon"
                                    className="h-[48px] w-[48px] bg-white"
                                    onClick={() => removeCertification(index)}
                                  >
                                    <X />
                                  </Button>
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {type === "merchant" && (
                <div className="mt-2">
                  <div className="mb-5 flex w-full items-center justify-between">
                    <FormLabel>Business Hours</FormLabel>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => append({ Day: "", Time: "" })} // Append correct schema
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Add Hours
                    </Button>
                  </div>
                  <div className="space-y-5">
                    {fields.map((field, index) => (
                      <div
                        className="relative mt-2 flex items-center gap-x-3"
                        key={field.id}
                      >
                        {/* Day Selection */}
                        <FormField
                          control={form.control}
                          name={`businessHours.${index}.Day`} // ✅ Correct name
                          render={({ field }) => (
                            <FormItem className="flex-1">
                              <FormControl>
                                <Select
                                  onValueChange={(value) =>
                                    field.onChange(value)
                                  }
                                  value={field.value}
                                >
                                  <SelectTrigger className="bg-white">
                                    <SelectValue placeholder="Select day" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {dayOptions.map((option) => (
                                      <SelectItem
                                        key={option.value}
                                        value={option.value}
                                      >
                                        {option.label}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        {/* Time Input */}
                        <FormField
                          control={form.control}
                          name={`businessHours.${index}.Time`} // ✅ Correct name
                          render={({ field }) => (
                            <FormItem className="flex-1">
                              <FormControl>
                                <Input
                                  placeholder="e.g. 9:00 AM - 5:00 PM"
                                  className="bg-white px-[26px] py-[13px] shadow-none"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        {/* Remove Button */}
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          className="h-[40px] w-[40px] bg-white"
                          onClick={() => remove(index)}
                        >
                          <X />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <FormField
                control={form.control}
                name="websiteURL"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[14px] font-medium">
                      Website URL (optional)
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="h-[48px] bg-white px-[26px] py-[13px]"
                        placeholder="Enter your website URL"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="space-y-2">
                <p className="text-sm font-medium text-[#1D3557]">
                  Profile Photo (Upload a Profile photo)
                </p>
                <FileUploader
                  onFileSelect={(file) => form.setValue("profilePhoto", file!)}
                  accept=".pdf,.jpg,.jpeg,.png"
                />
              </div>

              <div className="flex justify-end">
                <Button
                  type="submit"
                  className="duration-300unded-[8px] relative mt-[40px] h-[51px] w-full bg-[#1D3557] p-[16px] transition-colors hover:bg-[#1D3557]/80 lg:w-[200px]"
                  disabled={isLoading}
                >
                  <span className="cursor-pointer">
                    Continue{" "}
                    {isLoading && (
                      <Loader2 className="absolute right-4 top-4 animate-spin" />
                    )}
                  </span>
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
        <div className="relative h-[382px]">
          <HeroVideoDialog
            className="block h-[382px] dark:hidden"
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/N8tnM9KyLos?si=At0fyXPZjPYutssz?autoplay=1"
            thumbnailSrc="https://res.cloudinary.com/dgnustmny/image/upload/v1738663361/image_fx__9_1_1_n5h56k.png"
            thumbnailAlt="Hero Video"
            imageWrapperClassName="h-[382px]"
          />
        </div>
        <p className="pointer-events-none mt-[51px] rounded-[12px] bg-white p-[24px] text-[#4B5563]">
          Watch our quick guide on setting up your profile and maximizing your
          success on our platform.
        </p>
      </div>
    </div>
  );
}
