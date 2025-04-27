"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "@/hooks/use-toast"

export default function DonationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [donationAmount, setDonationAmount] = useState("")

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Donation submitted",
        description: "Thank you for your generous donation!",
      })

      // Reset form
      event.currentTarget.reset()
      setDonationAmount("")
    }, 1500)
  }

  const handleAmountSelect = (amount: string) => {
    setDonationAmount(amount)
  }

  return (
    <Card>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">First Name</Label>
                <Input id="first-name" placeholder="First Name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last Name</Label>
                <Input id="last-name" placeholder="Last Name" required />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="Email Address" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="Phone Number" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Donation Amount</Label>
              <div className="grid grid-cols-3 gap-2">
                <Button
                  type="button"
                  variant={donationAmount === "500" ? "default" : "outline"}
                  className={donationAmount === "500" ? "bg-green-600 hover:bg-green-700" : ""}
                  onClick={() => handleAmountSelect("500")}
                >
                  ₹500
                </Button>
                <Button
                  type="button"
                  variant={donationAmount === "1000" ? "default" : "outline"}
                  className={donationAmount === "1000" ? "bg-green-600 hover:bg-green-700" : ""}
                  onClick={() => handleAmountSelect("1000")}
                >
                  ₹1,000
                </Button>
                <Button
                  type="button"
                  variant={donationAmount === "2000" ? "default" : "outline"}
                  className={donationAmount === "2000" ? "bg-green-600 hover:bg-green-700" : ""}
                  onClick={() => handleAmountSelect("2000")}
                >
                  ₹2,000
                </Button>
              </div>
              <div className="mt-2">
                <Input
                  placeholder="Other Amount (₹)"
                  value={!["500", "1000", "2000"].includes(donationAmount) ? donationAmount : ""}
                  onChange={(e) => setDonationAmount(e.target.value)}
                  required={!["500", "1000", "2000"].includes(donationAmount)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Donation Frequency</Label>
              <RadioGroup defaultValue="one-time" required>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="one-time" id="one-time" />
                  <Label htmlFor="one-time">One-time</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="monthly" id="monthly" />
                  <Label htmlFor="monthly">Monthly</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="quarterly" id="quarterly" />
                  <Label htmlFor="quarterly">Quarterly</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="annually" id="annually" />
                  <Label htmlFor="annually">Annually</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message (Optional)</Label>
              <Textarea id="message" placeholder="Share why you're donating or any message for the team" rows={3} />
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox id="anonymous" />
              <div className="grid gap-1.5 leading-none">
                <Label
                  htmlFor="anonymous"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Make this donation anonymous
                </Label>
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
                  I agree to the donation terms and conditions of the Food Bridge Project.
                </p>
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={isSubmitting}>
            {isSubmitting ? "Processing..." : "Complete Donation"}
          </Button>

          <p className="text-xs text-center text-gray-500 mt-4">
            Your donation is secure and encrypted. All donations are tax-deductible.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
