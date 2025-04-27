import type { Metadata } from "next"
import ImpactCounter from "@/components/impact-counter"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export const metadata: Metadata = {
  title: "Impact Tracker - Food Bridge Project",
  description: "Track our impact in fighting hunger and food waste across India.",
}

export default function ImpactPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Impact Tracker</h1>
        <p className="text-gray-600 md:text-xl/relaxed max-w-3xl mx-auto">
          See the real-time impact of our collective efforts in fighting hunger and food waste across India.
        </p>
      </div>

      <div className="flex flex-col items-center mb-12">
        <ImpactCounter large />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-semibold mb-2">Children Fed</h3>
            <div className="flex justify-between mb-2">
              <span>Progress</span>
              <span className="font-medium">65%</span>
            </div>
            <Progress value={65} className="h-2 mb-4" />
            <p className="text-gray-600">We've provided meals to 650 out of our target 1,000 children this month.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-semibold mb-2">Stray Animals Fed</h3>
            <div className="flex justify-between mb-2">
              <span>Progress</span>
              <span className="font-medium">78%</span>
            </div>
            <Progress value={78} className="h-2 mb-4" />
            <p className="text-gray-600">
              We've provided food to 780 out of our target 1,000 stray animals this month.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-semibold mb-2">Food Waste Reduced</h3>
            <div className="flex justify-between mb-2">
              <span>Progress</span>
              <span className="font-medium">42%</span>
            </div>
            <Progress value={42} className="h-2 mb-4" />
            <p className="text-gray-600">
              We've saved 420kg out of our target 1,000kg of food from being wasted this month.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-4">Monthly Impact</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span>Meals Distributed</span>
                  <span className="font-medium">1,500</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>New Volunteers</span>
                  <span className="font-medium">45</span>
                </div>
                <Progress value={90} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>Donation Points</span>
                  <span className="font-medium">28</span>
                </div>
                <Progress value={56} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>Communities Reached</span>
                  <span className="font-medium">12</span>
                </div>
                <Progress value={60} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-4">Impact Stories</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4 py-1">
                <p className="italic text-gray-600 mb-2">
                  "The Food Bridge Project has been a lifeline for our shelter. We can now feed all 50 children three
                  meals a day."
                </p>
                <p className="font-medium">Sunita Devi</p>
                <p className="text-sm text-gray-500">Orphanage Director, Kolkata</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4 py-1">
                <p className="italic text-gray-600 mb-2">
                  "As a restaurant owner, I'm proud to be part of this initiative. Instead of throwing away food, we're
                  helping feed those in need."
                </p>
                <p className="font-medium">Vikram Singh</p>
                <p className="text-sm text-gray-500">Restaurant Owner, Bangalore</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
