"use client";

import FileUploader from "@/components/shared/Uploader/FileUploader";
import { Button } from "@/components/ui/button";
import { InfoIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function VerifyProfile() {
  const [files, setFiles] = useState<{ type: string; file: File }[]>([]);

  const handleFileSelect = (type: string) => (file: File | null) => {
    setFiles((prevFiles) => {
      if (file) {
        // Replace file if the type already exists, otherwise add new
        const filteredFiles = prevFiles.filter((f) => f.type !== type);
        return [...filteredFiles, { type, file }];
      } else {
        // Remove file if null
        return prevFiles.filter((f) => f.type !== type);
      }
    });
  };

  const handleContinue = () => {
    console.log("Uploaded files:", files);
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
          <div className="max-w-[334px] space-y-2">
            <p className="text-sm font-medium text-[#1D3557]">
              Government-Issued ID (Upload a government-issued ID of the
              business owner)
            </p>
            <FileUploader
              onFileSelect={handleFileSelect("government-id")}
              accept=".pdf,.jpg,.jpeg,.png"
            />
          </div>

          <div className="max-w-[334px] space-y-2">
            <p className="text-sm font-medium text-[#1D3557]">
              Business License (Upload proof of business registration or
              license)
            </p>
            <FileUploader
              onFileSelect={handleFileSelect("business-license")}
              accept=".pdf,.jpg,.jpeg,.png"
            />
          </div>

          <div className="max-w-[334px] space-y-2">
            <p className="text-sm font-medium text-[#1D3557]">
              Photo with ID (Upload a photo of the owner holding their ID)
            </p>
            <FileUploader
              onFileSelect={handleFileSelect("photo-with-id")}
              accept=".pdf,.jpg,.jpeg,.png"
            />
          </div>
        </div>

        {/* Continue Button */}
        <div className="flex justify-end">
          <Button
            className="h-[48px] w-[180px] bg-[#1D3557] transition-colors duration-300 hover:bg-[#1D3557]/90"
            onClick={handleContinue}
            disabled={files.length < 3}
          >
            Continue
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
