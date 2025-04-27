import type { Metadata } from "next"
import VolunteerForm from "@/components/volunteer-form"

export const metadata: Metadata = {
  title: "Become a Volunteer - Food Bridge Project",
  description: "Join our network of volunteers and help us collect and distribute food to those in need.",
}

export default function VolunteerPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Become a Volunteer</h1>
          <p className="text-gray-600 md:text-xl/relaxed">
            Join our network of volunteers and help us make a difference in the lives of people and animals across
            India.
          </p>
        </div>
        <VolunteerForm />
      </div>
    </div>
  )
}
