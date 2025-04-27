"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/hooks/use-toast"

export default function FoodDonationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Food donation submitted",
        description: "Thank you for your donation! A volunteer will contact you shortly.",
      })

      // Reset form
      event.currentTarget.reset()
    }, 1500)
  }

  return (
    <Card>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input id="name" placeholder="Full Name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="Phone Number" required />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="Email Address" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Pickup Location</Label>
                <Input id="location" placeholder="Full Address" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="food-type">Food Type</Label>
              <Select required>
                <SelectTrigger id="food-type">
                  <SelectValue placeholder="Select food type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cooked">Cooked Food</SelectItem>
                  <SelectItem value="raw">Raw Food</SelectItem>
                  <SelectItem value="packaged">Packaged Food</SelectItem>
                  <SelectItem value="fruits">Fruits & Vegetables</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="quantity">Approximate Quantity</Label>
                <Input id="quantity" placeholder="e.g., 5 kg, 10 meals" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="expiry">Best Before / Expiry</Label>
                <Input id="expiry" type="date" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Food Description</Label>
              <Textarea
                id="description"
                placeholder="Please provide details about the food (e.g., type of dishes, packaging, etc.)"
                rows={3}
                required
              />
            </div>

            <div className="flex items-start space-x-2 pt-2">
              <Checkbox id="safe-food" required />
              <div className="grid gap-1.5 leading-none">
                <Label
                  htmlFor="safe-food"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Safe for Animals and Humans
                </Label>
                <p className="text-sm text-muted-foreground">
                  I confirm that the food is safe for consumption and not spoiled.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox id="terms" required />
              <div className="grid gap-1.5 leading-none">
                <Label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Terms and Conditions
                </Label>
                <p className="text-sm text-muted-foreground">
                  I agree to the terms and conditions of the Food Bridge Project.
                </p>
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Food Donation"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
