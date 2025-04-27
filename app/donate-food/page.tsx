import type { Metadata } from "next"
import FoodDonationForm from "@/components/food-donation-form"

export const metadata: Metadata = {
  title: "Donate Food - Food Bridge Project",
  description: "Donate your leftover food to help hungry children, stray animals, and communities in need.",
}

export default function DonateFoodPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Donate Food</h1>
          <p className="text-gray-600 md:text-xl/relaxed">
            Your leftover food can save lives. Fill out the form below to donate food to those in need.
          </p>
        </div>
        <FoodDonationForm />
      </div>
    </div>
  )
}
