"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-bold text-xl flex items-center">
            <span className="text-green-600">Food</span>
            <span className="text-blue-600">Bridge</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium hover:text-green-600 transition-colors">
            Home
          </Link>
          <Link href="/donate-food" className="text-sm font-medium hover:text-green-600 transition-colors">
            Donate Food
          </Link>
          <Link href="/volunteer" className="text-sm font-medium hover:text-green-600 transition-colors">
            Become A Volunteer
          </Link>
          <Link href="/impact" className="text-sm font-medium hover:text-green-600 transition-colors">
            Impact Tracker
          </Link>
          <Link href="/map" className="text-sm font-medium hover:text-green-600 transition-colors">
            Find Nearby
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-green-600 transition-colors">
            Contact Us
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button asChild variant="outline" size="sm">
            <Link href="/volunteer">Join the Cause</Link>
          </Button>
          <Button asChild size="sm" className="bg-green-600 hover:bg-green-700">
            <Link href="/donate">Donate Now</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={toggleMenu} aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t py-4">
          <nav className="container flex flex-col space-y-4">
            <Link
              href="/"
              className="text-sm font-medium hover:text-green-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/donate-food"
              className="text-sm font-medium hover:text-green-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Donate Food
            </Link>
            <Link
              href="/volunteer"
              className="text-sm font-medium hover:text-green-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Become A Volunteer
            </Link>
            <Link
              href="/impact"
              className="text-sm font-medium hover:text-green-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Impact Tracker
            </Link>
            <Link
              href="/map"
              className="text-sm font-medium hover:text-green-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Find Nearby
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:text-green-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            <div className="pt-4 flex flex-col gap-2">
              <Button asChild variant="outline" className="w-full">
                <Link href="/volunteer" onClick={() => setIsMenuOpen(false)}>
                  Join the Cause
                </Link>
              </Button>
              <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                <Link href="/donate" onClick={() => setIsMenuOpen(false)}>
                  Donate Now
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
