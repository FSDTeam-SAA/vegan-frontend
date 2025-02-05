"use client";

import { useState, useRef } from "react";
import { FileIcon, UploadIcon, XIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface FileUploadProps {
  onFileSelect?: (file: File | null) => void;
  accept?: string;
  title?: string;
}

export default function FileUploader({
  onFileSelect,
  accept = ".pdf,.doc,.docx",
  title = "Click to upload or drag and drop",
}: FileUploadProps) {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => {
    setFile(file);
    onFileSelect?.(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFile(null);
    onFileSelect?.(null);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div
      onClick={handleClick}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={cn(
        "relative flex h-[250px] w-[334px] cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed transition-colors",
        isDragging
          ? "border-primary bg-primary/5"
          : "border-gray-300 hover:border-primary",
        "bg-white",
      )}
    >
      <input
        ref={inputRef}
        type="file"
        className="hidden"
        onChange={handleChange}
        accept={accept}
      />

      <div className="flex flex-col items-center justify-center pb-6 pt-5">
        {file ? (
          <>
            <FileIcon className="mb-3 h-[47px] w-[47px] text-gray-400" />
            <p className="mx-auto mb-2 w-[80%] text-sm text-gray-500">
              <span className="font-semibold">{file.name}</span>
            </p>
            <button
              onClick={handleRemove}
              className="absolute right-2 top-2 rounded-full p-1 hover:bg-gray-100"
              aria-label="Remove file"
            >
              <XIcon className="h-5 w-5 text-gray-500" />
            </button>
          </>
        ) : (
          <>
            <Image
              src="/assets/fileupload.png"
              alt="file-upload"
              width={52}
              height={52}
              className="mb-3 h-[52px] w-[52px]"
            />
            <p className="text-[16px] text-[#1D3557] underline">{title}</p>
          </>
        )}
      </div>
    </div>
  );
}
