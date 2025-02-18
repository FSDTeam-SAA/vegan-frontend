"use client";

// Packages
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Loader2, Plus, X } from "lucide-react";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import { useFieldArray, useForm } from "react-hook-form";

// Local imports
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
import { Textarea } from "@/components/ui/textarea";
import { ProfileFormData, profileSchema } from "@/lib/ProfileSetupSchema";
import { getProfileType } from "@/lib/utils";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface ProfessionalBodyData {
  fullName: string;
  businessName: string;
  about: string;
  experience: string[];
  certifications: string[];
  address: string;
  websiteURL: string;
  highlightedStatement: [
    {
      title: string;
      description: string;
    },
  ];
  photoWithID: string;
  governmentIssuedID: string;
  professionalCertification: string;
}

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
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    useMutation<any, unknown, ProfessionalBodyData>({
      mutationKey: ["professional_update"],
      mutationFn: (data) =>
        fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/ProfessionalInfo`,
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              ...data,
              userID: userId,
            }),
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

  const form = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      type,
      address: "",
      websiteURL: "",
      ...(type === "merchant" && {
        businessName: "",
        about: "",
      }),
      ...(type === "organization" && {
        organization_name: "",
        about: "",
        mission: "",
        experience: "",
      }),
      ...(type === "professional" && {
        fullName: "",
        businessName: "",
        about: "",
        Profession: "",
        experiences: [{ title: "fsdfdsf" }],
        certifications: [{ name: "fsdfdsf" }],
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

  async function onSubmit(data: ProfileFormData) {
    if (data.type === "professional") {
      const formattedData: ProfessionalBodyData = {
        fullName: data.fullName ?? "", // Ensure fullName exists
        businessName: data.businessName ?? "",
        about: data.about ?? "",
        experience: data.experiences
          ? data.experiences
              .map((exp) => exp.title)
              .filter((title): title is string => !!title)
          : [], // Handle undefined experiences
        certifications: data.certifications
          ? data.certifications
              .map((item) => item.name)
              .filter((n): n is string => !!n)
          : [],

        address: data.address,
        websiteURL: data.websiteURL ?? "",
        highlightedStatement: [
          {
            title: data.highlightedTitle!,
            description: data.highlightedDescription!,
          },
        ],
        photoWithID: "base64-encoded-image",
        governmentIssuedID: "ABC123456",
        professionalCertification: "Certified Developer",
      };

      professionalMutate(formattedData as ProfessionalBodyData);
    }
  }

  const isLoading = professionalPending || loading;

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
                  <FormField
                    control={form.control}
                    name="Profession"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[14px] text-[#1F2937]">
                          Profession
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="h-[48px] bg-white px-[26px] py-[13px]"
                            placeholder="Enter your profession"
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
                name="about"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[14px] font-medium">
                      {type === "professional" ? "About Me" : "About Us"}
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

              {type === "professional" && (
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
