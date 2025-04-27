import { NextResponse } from "next/server"

// Mock data for demonstration
const mockLocations = [
  {
    id: 1,
    name: "Rahul Kumar",
    type: "volunteer",
    lat: 28.6129,
    lng: 77.2295,
    address: "123 Gandhi Road, New Delhi",
    phone: "+91 98765 43210",
  },
  {
    id: 2,
    name: "Hope Foundation",
    type: "ngo",
    lat: 28.6219,
    lng: 77.219,
    address: "45 Nehru Street, New Delhi",
    phone: "+91 98765 12345",
  },
  {
    id: 3,
    name: "Delhi Food Bank",
    type: "donation-point",
    lat: 28.6139,
    lng: 77.209,
    address: "78 Patel Nagar, New Delhi",
    phone: "+91 98765 67890",
  },
  // More mock data would be added here
]

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const lat = searchParams.get("lat")
    const lng = searchParams.get("lng")
    const type = searchParams.get("type")

    let filteredLocations = [...mockLocations]

    // Filter by type if specified
    if (type && type !== "all") {
      filteredLocations = filteredLocations.filter((location) => location.type === type)
    }

    // Sort by distance if coordinates provided
    if (lat && lng) {
      const userLat = Number.parseFloat(lat)
      const userLng = Number.parseFloat(lng)

      // Calculate distance (simplified version)
      filteredLocations = filteredLocations
        .map((location) => {
          const distance = Math.sqrt(Math.pow(location.lat - userLat, 2) + Math.pow(location.lng - userLng, 2)) * 111 // Rough conversion to kilometers

          return {
            ...location,
            distance: distance.toFixed(1),
          }
        })
        .sort((a, b) => Number.parseFloat(a.distance) - Number.parseFloat(b.distance))
    }

    return NextResponse.json({
      success: true,
      locations: filteredLocations,
    })
  } catch (error) {
    console.error("Error fetching locations:", error)
    return NextResponse.json({ success: false, message: "Failed to fetch locations" }, { status: 500 })
  }
}
