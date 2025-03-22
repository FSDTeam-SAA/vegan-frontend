"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { Loader2, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface Props {
  loggedinUserId: string;
  newsId: string;
}

const CommentForm = ({ loggedinUserId, newsId }: Props) => {
  const [content, setContent] = useState("");

  const { mutate: createComment, isPending: isCreating } = useMutation({
    mutationKey: ["create-comment"],
    mutationFn: (body: any) =>
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/commentManipulation`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(body),
        },
      ).then((res) => res.json()),

    onSuccess: (data) => {
      if (!data.success) {
        toast.error(data.message ?? "failed to create comment", {
          position: "top-right",
          richColors: true,
        });
        return;
      }

      // handle success
      toast.success(data.message ?? "Comment added successfully", {
        position: "top-right",
        richColors: true,
      });
      setContent("");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    createComment({
      updateAndNewsID: newsId,
      userID: loggedinUserId,
      comment: content,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-start gap-3">
      {/* <Avatar className="h-10 w-10">
        <img
          src="/placeholder.svg?height=40&width=40"
          alt="Your avatar"
          className="h-full w-full object-cover"
        />
      </Avatar> */}
      <div className="relative flex-1">
        <textarea
          className="min-h-[100px] w-full resize-none rounded-lg border border-gray-200 bg-gray-50 p-3 focus:outline-none focus:ring-2 focus:ring-primary/20"
          placeholder="Share your thoughts..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="mt-[30px] flex justify-end">
          <Button
            type="submit"
            className="h-[40px] rounded-md bg-primary px-4 py-2 text-white hover:bg-primary/90"
            disabled={!content.trim()}
          >
            {isCreating ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Send className="mr-2 h-4 w-4" />
            )}
            Post Comment
          </Button>
        </div>
      </div>
    </form>
  );
};

export default CommentForm;
