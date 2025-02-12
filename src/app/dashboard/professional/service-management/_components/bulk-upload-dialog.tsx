"use client"

import * as React from "react"
import { Upload, FileUp, CheckCircle, AlertCircle } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface BulkUploadDialogProps {
  open: boolean
  onClose: () => void
}

export function BulkUploadDialog({ open, onClose }: BulkUploadDialogProps) {
  const [isDragging, setIsDragging] = React.useState(false)
  const [file, setFile] = React.useState<File | null>(null)
  const [status, setStatus] = React.useState<"idle" | "uploading" | "success" | "error">("idle")
  const fileInputRef = React.useRef<HTMLInputElement>(null)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const validateFile = (file: File) => {
    return file.type === "text/csv"
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    const droppedFile = e.dataTransfer.files[0]
    if (validateFile(droppedFile)) {
      setFile(droppedFile)
    } else {
      setStatus("error")
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile && validateFile(selectedFile)) {
      setFile(selectedFile)
    } else {
      setStatus("error")
    }
  }

  const handleUpload = async () => {
    if (!file) return

    try {
      setStatus("uploading")
      // Simulate upload delay
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setStatus("success")
    } catch (error) {
      console.error("Upload failed:", error)
      setStatus("error")
    }
  }

  const handleReset = () => {
    setFile(null)
    setStatus("idle")
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <div className="">
      <Dialog open={open} onOpenChange={onClose}>
        <DialogContent className="max-w-sm sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Bulk Upload Services</DialogTitle>
          </DialogHeader>
          <div className="grid gap-6">
            <div
              className={cn(
                "relative grid gap-2 place-items-center p-8 border-2 border-dashed rounded-lg transition-colors",
                isDragging ? "border-primary bg-primary/5" : "border-muted",
                status === "success" && "border-green-500 bg-green-50",
                status === "error" && "border-red-500 bg-red-50",
              )}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              {status === "idle" && (
                <>
                  <FileUp className="h-8 w-8 text-muted-foreground" />
                  <div className="grid gap-1 text-center">
                    <p className="text-sm font-medium">Drag and drop your CSV file here or</p>
                    <label htmlFor="file-upload" className="text-sm text-primary underline cursor-pointer">
                      click to choose file
                    </label>
                  </div>
                </>
              )}

              {status === "uploading" && (
                <div className="grid gap-2 place-items-center">
                  <Upload className="h-8 w-8 animate-bounce text-primary" />
                  <p className="text-sm font-medium">Uploading {file?.name}...</p>
                </div>
              )}

              {status === "success" && (
                <div className="grid gap-2 place-items-center">
                  <CheckCircle className="h-8 w-8 text-green-500" />
                  <p className="text-sm font-medium text-green-600">Upload completed successfully!</p>
                  <Button variant="outline" size="sm" onClick={handleReset}>
                    Upload another file
                  </Button>
                </div>
              )}

              {status === "error" && (
                <div className="grid gap-2 place-items-center">
                  <AlertCircle className="h-8 w-8 text-red-500" />
                  <p className="text-sm font-medium text-red-600">Please upload a valid CSV file</p>
                  <Button variant="outline" size="sm" onClick={handleReset}>
                    Try again
                  </Button>
                </div>
              )}

              <input
                ref={fileInputRef}
                id="file-upload"
                type="file"
                accept=".csv"
                className="sr-only"
                onChange={handleFileSelect}
              />
            </div>

            {file && status === "idle" && (
              <div className="grid gap-2">
                <p className="text-sm">Selected file: {file.name}</p>
                <Button onClick={handleUpload}>Upload Services</Button>
              </div>
            )}
          </div>

          <div className="flex items-center justify-end pt-4">
            <Button size="lg" className="py-[14px] px-[34px] text-base font-semibold leading-[19px] text-white">Upload Services</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

