import type { Metadata } from "next"
import LocationMap from "@/components/location-map"

export const metadata: Metadata = {
  title: "Map - Food Bridge Project",
  description: "Find nearby volunteers, NGOs, and donation points on our interactive map.",
}

export default function MapPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Find Nearby</h1>
        <p className="text-gray-600 md:text-xl/relaxed max-w-3xl mx-auto">
          Use our interactive map to find nearby volunteers, NGOs, and donation points to make your contribution easier.
        </p>
      </div>
      <LocationMap />
    </div>
  )
}
