import Link from "next/link"
import { ArrowRight, Heart, MapPin, Users, Utensils } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import ImpactCounter from "@/components/impact-counter"
import HeroSection from "@/components/hero-section"
import SocialShare from "@/components/social-share"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <HeroSection />

        {/* Impact Section */}
        <section className="py-12 md:py-16 bg-green-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Impact</h2>
              <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed">
                Together, we're making a real difference in the lives of people and animals across India.
              </p>
              <ImpactCounter />
              <p className="max-w-[700px] text-gray-600 mt-6">
                Each meal represents a child fed, a stray animal nourished, and food waste prevented. Your contributions
                directly impact lives every day.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
              <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed">
                Making a difference is simple with Food Bridge Project
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <Card className="border-2 border-green-100">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <Utensils className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle>Donate Food</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Share your excess food with those in need. Every meal counts in our fight against hunger.
                  </CardDescription>
                  <Link
                    href="/donate-food"
                    className="text-green-600 font-medium inline-flex items-center mt-4 hover:underline"
                  >
                    Donate Food <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
              <Card className="border-2 border-blue-100">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Volunteer</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Join our network of volunteers and help us collect and distribute food to those who need it most.
                  </CardDescription>
                  <Link
                    href="/volunteer"
                    className="text-blue-600 font-medium inline-flex items-center mt-4 hover:underline"
                  >
                    Become a Volunteer <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
              <Card className="border-2 border-green-100">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <MapPin className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle>Find Nearby</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Locate nearby volunteers, NGOs, and donation points on our interactive map.
                  </CardDescription>
                  <Link
                    href="/map"
                    className="text-green-600 font-medium inline-flex items-center mt-4 hover:underline"
                  >
                    View Map <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 md:py-16 bg-blue-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Our Mission Today</h2>
                <p className="text-blue-100 md:text-xl/relaxed max-w-[600px]">
                  Every contribution matters in our fight against hunger and food waste. Together, we can create a
                  better future for all.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  <Link href="/donate">Donate Now</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-blue-700">
                  <Link href="/volunteer">Become a Volunteer</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Stories of Impact</h2>
              <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed">
                Real stories from our volunteers and beneficiaries
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-green-100 p-2">
                      <Heart className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <blockquote className="text-gray-600 italic mb-4">
                        "Working with Food Bridge has been the most rewarding experience. Seeing the smiles on
                        children's faces when they receive a meal is priceless."
                      </blockquote>
                      <p className="font-medium">Priya Sharma</p>
                      <p className="text-sm text-gray-500">Volunteer, Mumbai</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-blue-100 p-2">
                      <Heart className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <blockquote className="text-gray-600 italic mb-4">
                        "Our restaurant reduced food waste by 70% since partnering with Food Bridge. It's a win-win for
                        our business and the community."
                      </blockquote>
                      <p className="font-medium">Rajesh Patel</p>
                      <p className="text-sm text-gray-500">Restaurant Owner, Delhi</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Social Share */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Spread the Word</h2>
              <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed">
                Help us reach more people by sharing our mission on social media
              </p>
              <SocialShare />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
