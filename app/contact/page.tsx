import type { Metadata } from "next"
import ContactForm from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us - Food Bridge Project",
  description: "Get in touch with the Food Bridge Project team. We're here to help.",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Contact Us</h1>
        <p className="text-gray-600 md:text-xl/relaxed max-w-3xl mx-auto">
          Have questions or want to get involved? We'd love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <Card>
          <CardContent className="pt-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <Phone className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <p className="text-gray-600">+91 98765 43210</p>
            <p className="text-gray-600">Mon-Fri, 9am-5pm IST</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <Mail className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-gray-600">info@foodbridge.org</p>
            <p className="text-gray-600">support@foodbridge.org</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <MapPin className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Address</h3>
            <p className="text-gray-600">123 Food Bridge Street</p>
            <p className="text-gray-600">New Delhi, 110001, India</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
          <ContactForm />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Location</h2>
          <div className="rounded-lg overflow-hidden h-[400px] bg-gray-200 flex items-center justify-center">
            <p className="text-gray-600">Map will be loaded here</p>
            {/* In a real implementation, you would use a map component here */}
          </div>
        </div>
      </div>
    </div>
  )
}
