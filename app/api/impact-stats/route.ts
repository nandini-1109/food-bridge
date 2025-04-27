import { NextResponse } from "next/server"

// Mock data for demonstration
const mockImpactStats = {
  mealsServed: 1500,
  volunteersActive: 450,
  donationPoints: 28,
  communitiesReached: 12,
  foodWasteSaved: 420, // in kg
  childrenFed: 650,
  animalsHelped: 780,
  monthlyGrowth: 15, // percentage
}

export async function GET() {
  try {
    // In a real implementation, you would fetch this data from a database

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 500))

    return NextResponse.json({
      success: true,
      stats: mockImpactStats,
    })
  } catch (error) {
    console.error("Error fetching impact stats:", error)
    return NextResponse.json({ success: false, message: "Failed to fetch impact statistics" }, { status: 500 })
  }
}
