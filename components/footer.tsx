import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="font-bold text-xl flex items-center mb-4">
              <span className="text-green-600">Food</span>
              <span className="text-blue-600">Bridge</span>
            </Link>
            <p className="text-gray-600 text-sm mb-4">
              Addressing food wastage and hunger in India through community action and volunteer networks.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-600 hover:text-green-600">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-green-600">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-green-600">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-sm mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-600 hover:text-green-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/donate-food" className="text-gray-600 hover:text-green-600">
                  Donate Food
                </Link>
              </li>
              <li>
                <Link href="/volunteer" className="text-gray-600 hover:text-green-600">
                  Become a Volunteer
                </Link>
              </li>
              <li>
                <Link href="/impact" className="text-gray-600 hover:text-green-600">
                  Impact Tracker
                </Link>
              </li>
              <li>
                <Link href="/map" className="text-gray-600 hover:text-green-600">
                  Find Nearby
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-sm mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-green-600">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-green-600">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-green-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-green-600">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-sm mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-600">123 Food Bridge Street, New Delhi, 110001, India</li>
              <li className="text-gray-600">info@foodbridge.org</li>
              <li className="text-gray-600">+91 98765 43210</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-sm text-gray-600">"Every Meal Matters – Let's Make a Difference Together."</p>
          <p className="text-xs text-gray-500 mt-4">
            © {new Date().getFullYear()} Food Bridge Project. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
