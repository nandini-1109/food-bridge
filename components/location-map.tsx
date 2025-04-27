"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Users, Home, Utensils } from "lucide-react"

export default function LocationMap() {
  const [isLoading, setIsLoading] = useState(true)
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null)

  useEffect(() => {
    // Simulate map loading
    const timer = setTimeout(() => {
      setIsLoading(false)
      // Set default location (Delhi, India)
      setUserLocation({ lat: 28.6139, lng: 77.209 })
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      setIsLoading(true)
      try {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setUserLocation({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            })
            setIsLoading(false)
          },
          (error) => {
            console.error("Error getting location:", error)
            // Handle the geolocation error gracefully
            setIsLoading(false)
            // Set a default location (Delhi, India) when geolocation fails
            setUserLocation({ lat: 28.6139, lng: 77.209 })
            // Show a toast notification about the error
            if (typeof window !== "undefined") {
              alert("Couldn't access your location. Using default location instead.")
            }
          },
          { timeout: 10000, enableHighAccuracy: false },
        )
      } catch (err) {
        console.error("Geolocation error:", err)
        setIsLoading(false)
        // Set default location on error
        setUserLocation({ lat: 28.6139, lng: 77.209 })
      }
    } else {
      alert("Geolocation is not supported by your browser")
    }
  }

  const handleSimulateLocation = () => {
    // Simulate different locations around Delhi for demonstration
    const delhiLocations = [
      { lat: 28.6139, lng: 77.209 }, // Central Delhi
      { lat: 28.5355, lng: 77.241 }, // South Delhi
      { lat: 28.7041, lng: 77.1025 }, // North Delhi
      { lat: 28.6304, lng: 77.2177 }, // East Delhi
      { lat: 28.6129, lng: 77.2295 }, // New Delhi
    ]

    const randomLocation = delhiLocations[Math.floor(Math.random() * delhiLocations.length)]
    setIsLoading(true)

    setTimeout(() => {
      setUserLocation(randomLocation)
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex gap-2">
          <Button onClick={handleGetLocation} className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            Use My Location
          </Button>
          <Button onClick={handleSimulateLocation} variant="outline" className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            Simulate Location
          </Button>
        </div>
        <Tabs defaultValue="all" className="w-full sm:w-auto">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="volunteers">Volunteers</TabsTrigger>
            <TabsTrigger value="ngos">NGOs</TabsTrigger>
            <TabsTrigger value="donation-points">Donation Points</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <Card className="h-[600px]">
            <CardContent className="p-0 h-full">
              {isLoading ? (
                <div className="h-full flex items-center justify-center bg-gray-100">
                  <p className="text-gray-500">Loading map...</p>
                </div>
              ) : (
                <div className="h-full bg-gray-100 flex items-center justify-center">
                  <div className="text-center p-6">
                    <p className="mb-2 font-medium">Interactive Map</p>
                    <p className="text-sm text-gray-500">
                      {userLocation
                        ? `Current location: ${userLocation.lat.toFixed(4)}, ${userLocation.lng.toFixed(4)}`
                        : "Location not available"}
                    </p>
                    <p className="text-xs text-gray-500 mt-4">
                      Note: Geolocation may be restricted in some environments.
                      <br />
                      Use the "Simulate Location" button to test the feature.
                    </p>
                    <div className="mt-6 p-4 border rounded-md bg-white max-w-md mx-auto text-left">
                      <h4 className="font-medium mb-2">Nearby Summary</h4>
                      <ul className="text-sm space-y-1">
                        <li>• 3 volunteers within 2km</li>
                        <li>• 2 NGOs within 3km</li>
                        <li>• 4 donation points within 5km</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
        <div className="lg:col-span-1">
          <Card className="h-[600px] overflow-auto">
            <CardContent className="p-4">
              <h3 className="font-medium mb-4">Nearby Locations</h3>
              <div className="space-y-4">
                <LocationItem
                  icon={<Users className="h-4 w-4 text-blue-600" />}
                  name="Rahul Kumar"
                  type="Volunteer"
                  distance="0.8 km"
                  address="123 Gandhi Road, New Delhi"
                  phone="+91 98765 43210"
                />
                <LocationItem
                  icon={<Home className="h-4 w-4 text-green-600" />}
                  name="Hope Foundation"
                  type="NGO"
                  distance="1.2 km"
                  address="45 Nehru Street, New Delhi"
                  phone="+91 98765 12345"
                />
                <LocationItem
                  icon={<Utensils className="h-4 w-4 text-green-600" />}
                  name="Delhi Food Bank"
                  type="Donation Point"
                  distance="1.5 km"
                  address="78 Patel Nagar, New Delhi"
                  phone="+91 98765 67890"
                />
                <LocationItem
                  icon={<Users className="h-4 w-4 text-blue-600" />}
                  name="Priya Sharma"
                  type="Volunteer"
                  distance="2.1 km"
                  address="56 Rajpath, New Delhi"
                  phone="+91 98765 54321"
                />
                <LocationItem
                  icon={<Home className="h-4 w-4 text-green-600" />}
                  name="Feeding India"
                  type="NGO"
                  distance="2.4 km"
                  address="34 Connaught Place, New Delhi"
                  phone="+91 98765 23456"
                />
                <LocationItem
                  icon={<Utensils className="h-4 w-4 text-green-600" />}
                  name="Community Kitchen"
                  type="Donation Point"
                  distance="3.0 km"
                  address="12 Karol Bagh, New Delhi"
                  phone="+91 98765 78901"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

interface LocationItemProps {
  icon: React.ReactNode
  name: string
  type: string
  distance: string
  address: string
  phone: string
}

function LocationItem({ icon, name, type, distance, address, phone }: LocationItemProps) {
  return (
    <div className="border rounded-md p-3 hover:bg-gray-50 cursor-pointer">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-2">
          {icon}
          <span className="font-medium">{name}</span>
        </div>
        <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">{distance}</span>
      </div>
      <div className="mt-2 text-sm text-gray-600">
        <p className="text-xs text-gray-500">{type}</p>
        <p className="mt-1">{address}</p>
        <p className="mt-1">{phone}</p>
      </div>
    </div>
  )
}
