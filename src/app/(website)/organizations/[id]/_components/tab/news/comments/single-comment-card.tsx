"use client";

import { Comment } from "@/types/organization";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Heart } from "lucide-react";
import moment from "moment";
import { toast } from "sonner";

interface CommentCardProps {
  comment: Comment;
  loggedinUserId: string;
}

const SingleCommentCard = ({ comment, loggedinUserId }: CommentCardProps) => {
  const likedBy = comment.likedBy ?? [];

  const isLiked = likedBy.includes(loggedinUserId);

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: ["giveLike"],
    mutationFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/like/${comment._id}`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            userId: loggedinUserId,
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

      // handle success
      queryClient.invalidateQueries({ queryKey: ["comments"] });
    },
  });

  const handleLike = () => {
    mutate();
  };

  return (
    <div className="flex gap-3">
      {/* <Avatar className="h-10 w-10">
        <img
          src={"/placeholder.svg"}
          alt={`${comment.userID.fullName}'s avatar`}
          className="h-full w-full object-cover"
        />
      </Avatar> */}
      <div className="flex-1">
        <div className="mb-1 flex items-center gap-2">
          <h3 className="font-medium">{comment.userID.fullName}</h3>
          <span className="text-sm text-muted-foreground">
            • {moment(comment.createdAt).startOf("day").fromNow()}
          </span>
        </div>
        <p className="mb-3 text-gray-700">{comment.comment}</p>
        <div className="flex items-center gap-4">
          <button
            onClick={handleLike}
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-gray-900 disabled:opacity-50"
            disabled={isPending}
          >
            <Heart
              className={`h-4 w-4 ${isLiked ? "fill-current text-red-500" : ""}`}
            />
            <span>{likedBy.length}</span>
          </button>
          {/* <Button
            variant="ghost"
            size="sm"
            className="text-sm text-muted-foreground hover:text-gray-900"
          >
            Reply
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default SingleCommentCard;
