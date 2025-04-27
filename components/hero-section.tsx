import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-green-600/90 to-blue-600/90 z-10" />
      <div className="relative h-[70vh] min-h-[500px]">
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt="Food donation"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container px-4 md:px-6">
            <div className="max-w-2xl text-white space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none">
                Every Meal Can Save A Child's Life
              </h1>
              <p className="text-xl/relaxed text-white/90 max-w-xl">
                Join the Food Bridge Project to address food wastage and hunger in India. Help feed hungry children,
                stray animals, and communities in need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-green-600 hover:bg-white/90">
                  <Link href="/donate">Donate Now</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <Link href="/volunteer">Join the Cause</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-6">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="p-4">
              <h2 className="text-xl font-bold text-green-600">Every Meal Can Save A Child's Life</h2>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold text-blue-600">Save A Life, Feed A Stray</h2>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold text-green-600">Donate Today, Make A Change</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
