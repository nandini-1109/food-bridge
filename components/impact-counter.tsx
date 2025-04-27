"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Utensils, Users, Heart } from "lucide-react"

interface ImpactCounterProps {
  large?: boolean
}

export default function ImpactCounter({ large = false }: ImpactCounterProps) {
  const [count, setCount] = useState(1500)

  useEffect(() => {
    // Simulate real-time counter by incrementing every few seconds
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1)
    }, 10000) // Increment every 10 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`grid grid-cols-1 ${large ? "md:grid-cols-3 gap-8" : "md:grid-cols-3 gap-4"} w-full max-w-4xl`}>
      <Card className="border-green-100">
        <CardContent className={`flex flex-col items-center justify-center ${large ? "py-8" : "py-6"}`}>
          <Utensils className={`${large ? "h-12 w-12" : "h-8 w-8"} text-green-600 mb-2`} />
          <h3 className={`${large ? "text-4xl" : "text-2xl"} font-bold text-green-600`}>{count.toLocaleString()}</h3>
          <p className="text-gray-600 text-center">Meals Saved</p>
        </CardContent>
      </Card>
      <Card className="border-blue-100">
        <CardContent className={`flex flex-col items-center justify-center ${large ? "py-8" : "py-6"}`}>
          <Users className={`${large ? "h-12 w-12" : "h-8 w-8"} text-blue-600 mb-2`} />
          <h3 className={`${large ? "text-4xl" : "text-2xl"} font-bold text-blue-600`}>
            {Math.floor(count / 3).toLocaleString()}
          </h3>
          <p className="text-gray-600 text-center">Volunteers</p>
        </CardContent>
      </Card>
      <Card className="border-green-100">
        <CardContent className={`flex flex-col items-center justify-center ${large ? "py-8" : "py-6"}`}>
          <Heart className={`${large ? "h-12 w-12" : "h-8 w-8"} text-green-600 mb-2`} />
          <h3 className={`${large ? "text-4xl" : "text-2xl"} font-bold text-green-600`}>
            {Math.floor(count * 2).toLocaleString()}
          </h3>
          <p className="text-gray-600 text-center">Lives Impacted</p>
        </CardContent>
      </Card>
    </div>
  )
}
