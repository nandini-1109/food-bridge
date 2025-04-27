"use client"

import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Share2 } from "lucide-react"

export default function SocialShare() {
  const shareUrl = typeof window !== "undefined" ? window.location.href : "https://foodbridge.org"
  const shareTitle = "Join the Food Bridge Project to fight hunger and food waste in India"

  const handleShare = (platform: string) => {
    let shareLink = ""

    switch (platform) {
      case "facebook":
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
        break
      case "twitter":
        shareLink = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`
        break
      case "whatsapp":
        shareLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareTitle + " " + shareUrl)}`
        break
      default:
        if (navigator.share) {
          navigator
            .share({
              title: shareTitle,
              url: shareUrl,
            })
            .catch((err) => console.error("Error sharing:", err))
          return
        }
    }

    if (shareLink) {
      window.open(shareLink, "_blank", "noopener,noreferrer")
    }
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-6">
      <Button
        variant="outline"
        className="flex items-center gap-2 border-blue-600 text-blue-600 hover:bg-blue-50"
        onClick={() => handleShare("facebook")}
      >
        <Facebook className="h-4 w-4" />
        Facebook
      </Button>
      <Button
        variant="outline"
        className="flex items-center gap-2 border-sky-500 text-sky-500 hover:bg-sky-50"
        onClick={() => handleShare("twitter")}
      >
        <Twitter className="h-4 w-4" />
        Twitter
      </Button>
      <Button
        variant="outline"
        className="flex items-center gap-2 border-pink-600 text-pink-600 hover:bg-pink-50"
        onClick={() => handleShare("instagram")}
      >
        <Instagram className="h-4 w-4" />
        Instagram
      </Button>
      <Button
        variant="outline"
        className="flex items-center gap-2 border-green-600 text-green-600 hover:bg-green-50"
        onClick={() => handleShare("whatsapp")}
      >
        <Share2 className="h-4 w-4" />
        WhatsApp
      </Button>
    </div>
  )
}
