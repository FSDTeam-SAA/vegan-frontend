"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Star } from "lucide-react"
import type React from "react"
import { useState, useEffect } from "react"
import { toast } from "sonner"
import { useMutation } from "@tanstack/react-query"

interface ReviewData {
  userID: string
  professionalID: string
  rating: number
  comment: string
}

interface ReviewResponse {
  success: boolean
  message: string
  data?: any
}

interface Props {
  userId: string
  professionalID: string
}

export default function ReviewCreateForm({ userId, professionalID }: Props) {
  const [rating, setRating] = useState<number>(0)
  const [hoveredRating, setHoveredRating] = useState<number>(0)
  const [description, setDescription] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { mutate, isPending } = useMutation<ReviewResponse, unknown, ReviewData>({
    mutationKey: ["submit-review"],
    mutationFn: (data) =>
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/professionalReview`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => res.json()),
    onSuccess: (data) => {
      setIsLoading(true)

      if (!data.success) {
        toast.error(data.message, {
          position: "top-right",
          richColors: true,
        })

        setIsLoading(false)
        return
      }

      // handle success
      toast.success(data.message || "Review submitted successfully!", {
        position: "bottom-right",
        richColors: true,
      })

      // Reset form
      setRating(0)
      setDescription("")
      setIsLoading(false)
    },
    onError: () => {
      toast.error("Something went wrong while submitting your review", {
        position: "top-right",
        richColors: true,
      })
      setIsLoading(false)
    },
  })

  useEffect(() => {
    return () => {
      setIsLoading(false)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (rating === 0) {
      toast.error("Please select a rating before submitting", {
        position: "top-right",
        richColors: true,
      })
      return
    }

    const reviewData: ReviewData = {
      userID: userId,
      professionalID: professionalID,
      rating: rating,
      comment: description,
    }

    mutate(reviewData)
  }

  return (
    <Card className="mx-auto w-full border-0 p-0 shadow-none">
      <CardHeader className="p-0">
        <CardTitle className="pl-0 text-2xl">Submit Your Review</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4 p-0">
          <div className="space-y-2">
            {/* <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">User:</span>
              <span className="text-sm">Name</span>
            </div> */}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Rating</label>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className="p-1 focus:outline-none"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                >
                  <Star
                    size={24}
                    className={`${
                      star <= (hoveredRating || rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                    } transition-colors`}
                  />
                </button>
              ))}
              <span className="ml-2 self-center text-sm">
                {rating > 0 ? `${rating} star${rating > 1 ? "s" : ""}` : ""}
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="description" className="text-sm font-medium">
              Review Description
            </label>
            <Textarea
              id="description"
              placeholder="Share your experience..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="resize-none"
            />
          </div>
        </CardContent>

        <CardFooter className="p-0 pt-5">
          <Button type="submit" className="w-full" disabled={isPending || isLoading}>
            {isPending || isLoading ? "Submitting..." : "Submit Review"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}

