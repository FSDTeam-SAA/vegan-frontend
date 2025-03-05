"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface QRCodeShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  qrCodeValue: string;
  title?: string;
}

export default function QRCodeShareModal({
  isOpen,
  onClose,
  qrCodeValue,
  title = "Share via QR Code",
}: QRCodeShareModalProps) {
  const [qrCodeImage, setQrCodeImage] = useState<string>("");

  // Generate QR code on component mount
  useState(() => {
    // In a real implementation, you would generate the QR code here
    // For this example, we're using a placeholder
    setQrCodeImage(
      `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrCodeValue)}`,
    );
  });

  console.log("qrCodeValue", qrCodeImage);

  const socialPlatforms = [
    {
      name: "WhatsApp",
      icon: "/whatsapp-icon.svg", // In a real app, you'd use actual icon files
      color: "#25D366",
      shareUrl: `https://api.whatsapp.com/send?text=${encodeURIComponent(qrCodeValue)}`,
    },
    {
      name: "Instagram",
      icon: "/instagram-icon.svg",
      color: "#E1306C",
      // Instagram doesn't support direct sharing via URL, would need app integration
      shareUrl: "#",
    },
    {
      name: "LinkedIn",
      icon: "/linkedin-icon.svg",
      color: "#0077B5",
      shareUrl: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(qrCodeValue)}`,
    },
    {
      name: "X",
      icon: "/x-icon.svg",
      color: "#000000",
      shareUrl: `https://twitter.com/intent/tweet?url=${encodeURIComponent(qrCodeValue)}`,
    },
    {
      name: "Facebook",
      icon: "/facebook-icon.svg",
      color: "#1877F2",
      shareUrl: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(qrCodeValue)}`,
    },
  ];

  const handleShare = (platform: string, url: string) => {
    if (url === "#") {
      alert(`Sharing to ${platform} requires app integration.`);
      return;
    }
    window.open(url, "_blank");
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle>{title}</DialogTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-8 w-8 rounded-full"
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>

        <div className="flex justify-center py-4">
          {qrCodeImage && (
            <Image
              src={qrCodeImage || "/placeholder.svg"}
              alt="QR Code"
              width={200}
              height={200}
              className="border border-border p-2"
            />
          )}
        </div>

        <div className="space-y-2">
          <p className="text-center text-sm">Share To:</p>
          <div className="flex justify-center gap-4">
            {socialPlatforms.map((platform) => (
              <button
                key={platform.name}
                onClick={() => handleShare(platform.name, platform.shareUrl)}
                className="flex flex-col items-center"
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full"
                  style={{ backgroundColor: platform.color }}
                >
                  {platform.name === "WhatsApp" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  )}
                  {platform.name === "Instagram" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  )}
                  {platform.name === "LinkedIn" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  )}
                  {platform.name === "X" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  )}
                  {platform.name === "Facebook" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 011-1h3v-4h-3a5 5 0 00-5 5v2.01h-2l-.396 3.98h2.396v8.01z" />
                    </svg>
                  )}
                </div>
                <span className="mt-1 text-xs">{platform.name}</span>
              </button>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
