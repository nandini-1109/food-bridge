import type { Metadata } from "next"
import DonationForm from "@/components/donation-form"

export const metadata: Metadata = {
  title: "Donate - Food Bridge Project",
  description: "Support our mission with a monetary donation to help us fight hunger and food waste in India.",
}

export default function DonatePage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Donate</h1>
          <p className="text-gray-600 md:text-xl/relaxed">
            Your financial support helps us expand our reach and impact more lives across India.
          </p>
        </div>
        <DonationForm />
      </div>
    </div>
  )
}
