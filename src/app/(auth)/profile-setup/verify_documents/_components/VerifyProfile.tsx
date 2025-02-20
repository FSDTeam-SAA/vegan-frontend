"use client";

import FileUploader from "@/components/shared/Uploader/FileUploader";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { InfoIcon, Loader2 } from "lucide-react";
import Link from "next/link";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function VerifyProfile() {
  const [loading, setLoading] = useState(false);
  const [governmentIssuedID, setGovernmentIssuedId] = useState<File>();
  const [professionalCertification, setProfessionalCertificate] =
    useState<File>();
  const [photoWithID, setPhotoWithNid] = useState<File>();
  const router = useRouter();

  useEffect(() => {
    return () => {
      setLoading(false);
    };
  }, []);

  const userID = useSearchParams().get("userId");
  const type = useSearchParams().get("type");

  if (!userID) redirect("/");
  const { mutate, isPending } = useMutation({
    mutationKey: ["documents"],
    mutationFn: (data: FormData) =>
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/ProfessionalInfo/uploadImages`,
        {
          method: "PUT",
          body: data,
        },
      ).then((res) => res.json()),

    onSuccess: (data) => {
      if (data.success) {
        setLoading(true);
        toast.success(data.message, {
          position: "top-right",
          richColors: true,
        });
        router.push(`/profile-setup/success?type=${type}`);
      }
      return;
    },
    onError: (err) => {
      toast.error(err.message, {
        position: "top-right",
        richColors: true,
      });
    },
  });

  const handleContinue = () => {
    const formData = new FormData();

    if (type === "professional") {
      formData.append("userID", userID);

      formData.append("governmentIssuedID", governmentIssuedID!);
      formData.append("professionalCertification", professionalCertification!);
      formData.append("photoWithID", photoWithID!);

      mutate(formData);
    }
  };

  return (
    <div className="mt-[48px ] container pb-[48px] lg:mt-[110px]">
      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-semibold text-[#1F2937]">
            Verify Your Profile
          </h1>
          <p className="text-[#475367]">
            Upload documents to complete your profile
          </p>
        </div>

        {/* Info Box */}
        <div className="align-center mx-auto flex min-h-[44px] max-w-3xl items-start justify-center gap-3 rounded-lg bg-white px-4 py-3">
          <InfoIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-500" />
          <p className="text-sm text-[#475367]">
            Ensure all documents are clear and legible. Uploads that do not meet
            requirements may delay verification.
          </p>
        </div>

        {/* Supported inputs */}
        <p className="text-center text-sm text-[#1F2937]">
          *Supported formats: PDF, JPG, PNG. No larger than 3mb in size
        </p>

        {/* Upload Section */}
        <div className="grid gap-[50px] md:grid-cols-2 lg:grid-cols-3 lg:pt-10">
          <div className="mx-auto max-w-[334px] space-y-2">
            <p className="text-sm font-medium text-[#1D3557]">
              Government-Issued ID (Upload a government-issued ID of the
              business owner)
            </p>
            <FileUploader
              onFileSelect={(file) => setGovernmentIssuedId(file!)}
              accept=".pdf,.jpg,.jpeg,.png"
            />
          </div>

          <div className="mx-auto max-w-[334px] space-y-2">
            <p className="text-sm font-medium text-[#1D3557]">
              Business License (Upload proof of business registration or
              license)
            </p>
            <FileUploader
              onFileSelect={(file) => setProfessionalCertificate(file!)}
              accept=".pdf,.jpg,.jpeg,.png"
            />
          </div>

          <div className="mx-auto max-w-[334px] space-y-2">
            <p className="text-sm font-medium text-[#1D3557]">
              Photo with ID (Upload a photo of the owner holding their ID)
            </p>
            <FileUploader
              onFileSelect={(file) => setPhotoWithNid(file!)}
              accept=".pdf,.jpg,.jpeg,.png"
            />
          </div>
        </div>

        {/* Continue Button */}
        <div className="flex justify-end">
          <Button
            className="h-[48px] w-[180px] bg-[#1D3557] transition-colors duration-300 hover:bg-[#1D3557]/90"
            onClick={handleContinue}
            disabled={
              !governmentIssuedID ||
              !photoWithID ||
              !professionalCertification ||
              isPending ||
              loading
            }
          >
            Continue{" "}
            {(isPending || loading) && (
              <Loader2 className="ml-2 animate-spin" />
            )}
          </Button>
        </div>

        {/* Terms */}
        <p className="text-center text-sm text-gray-600">
          By uploading your documents and clicking &quot;Continue&quot;, you
          agree to all our{" "}
          <Link href="/terms" className="text-gray-900 underline">
            terms & conditions
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-gray-900 underline">
            privacy policy
          </Link>
        </p>
      </div>
    </div>
  );
}
