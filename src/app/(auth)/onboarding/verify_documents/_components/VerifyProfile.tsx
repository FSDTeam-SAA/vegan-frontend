"use client";
import FileUploader from "@/components/shared/Uploader/FileUploader";
import React from "react";

const VerifyProfile = () => {
  const handleFileSelect = (file: File | null) => {
    if (file) {
      console.log("Selected file:", file.name);
    } else {
      console.log("File removed");
    }
  };
  return (
    <div>
      <FileUploader
        onFileSelect={handleFileSelect}
        accept=".pdf,.doc,.docx"
        title="Click To Upload Government ID"
      />
    </div>
  );
};

export default VerifyProfile;
