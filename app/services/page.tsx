import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Star,
  CheckCircle,
  Shield,
  Zap,
  Gift,
  Clock,
  Plane,
  Building,
  Calendar,
  Music,
  Home,
  Briefcase,
  Crown,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-muted to-card py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <Badge className="bg-primary/10 text-primary border-primary/20">Our Services</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              Comprehensive Booking
              <span className="text-primary"> Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From personal needs to business requirements, we offer secure booking services across multiple categories
              with our unique rewards system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6">
                Start Booking Now
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Service Categories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our wide range of booking services tailored to your specific needs
            </p>
          </div>

          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-12">
              <TabsTrigger value="personal">Personal</TabsTrigger>
              <TabsTrigger value="business">Business</TabsTrigger>
              <TabsTrigger value="premium">Premium</TabsTrigger>
            </TabsList>

            <TabsContent value="personal" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Plane className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Travel & Accommodation</CardTitle>
                    <CardDescription>Book flights, hotels, and vacation packages</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm mb-4">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Flight Bookings
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Hotel Reservations
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Vacation Packages
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Car Rentals
                      </li>
                    </ul>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Book Travel
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Music className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Entertainment Events</CardTitle>
                    <CardDescription>Tickets for concerts, movies, and shows</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm mb-4">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Concert Tickets
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Movie Bookings
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Theater Shows
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Sports Events
                      </li>
                    </ul>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Book Entertainment
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Home className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Personal Services</CardTitle>
                    <CardDescription>Home services and personal appointments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm mb-4">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Home Cleaning
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Beauty Services
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Health Appointments
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Fitness Classes
                      </li>
                    </ul>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Book Services
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="business" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Corporate Travel</CardTitle>
                    <CardDescription>Business travel solutions and management</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm mb-4">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Business Flights
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Corporate Hotels
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Group Bookings
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Travel Management
                      </li>
                    </ul>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Book Corporate Travel
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Building className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Meeting Rooms</CardTitle>
                    <CardDescription>Conference rooms and event spaces</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm mb-4">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Conference Rooms
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Event Venues
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Co-working Spaces
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Equipment Rental
                      </li>
                    </ul>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Book Meeting Rooms
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Business Services</CardTitle>
                    <CardDescription>Professional services for businesses</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm mb-4">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Consulting Services
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Legal Services
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Accounting Services
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Marketing Services
                      </li>
                    </ul>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Book Business Services
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="premium" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow border-primary/20">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Crown className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="flex items-center gap-2">
                      Priority Booking
                      <Badge className="bg-primary text-primary-foreground">Premium</Badge>
                    </CardTitle>
                    <CardDescription>Skip the queue with priority access</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm mb-4">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Instant Confirmation
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Priority Support
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Flexible Cancellation
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        VIP Treatment
                      </li>
                    </ul>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Upgrade to Premium
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow border-primary/20">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Gift className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="flex items-center gap-2">
                      Exclusive Rewards
                      <Badge className="bg-primary text-primary-foreground">Premium</Badge>
                    </CardTitle>
                    <CardDescription>Enhanced rewards and special offers</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm mb-4">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        2x Reward Points
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Exclusive Discounts
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Special Promotions
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Birthday Bonuses
                      </li>
                    </ul>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Join Premium
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow border-primary/20">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Star className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="flex items-center gap-2">
                      Dedicated Support
                      <Badge className="bg-primary text-primary-foreground">Premium</Badge>
                    </CardTitle>
                    <CardDescription>Personal assistance and concierge service</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm mb-4">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Personal Account Manager
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        24/7 Premium Support
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Concierge Services
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Custom Solutions
                      </li>
                    </ul>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Get Premium Support
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Booking Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">How Our Booking Process Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple, secure, and rewarding - experience our streamlined booking process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold text-foreground">Choose Service</h3>
              <p className="text-muted-foreground">
                Browse our comprehensive service categories and select what you need
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold text-foreground">Secure Booking</h3>
              <p className="text-muted-foreground">Complete your booking with our secure, encrypted payment system</p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold text-foreground">Instant Confirmation</h3>
              <p className="text-muted-foreground">Receive immediate confirmation and booking details via email</p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-semibold text-foreground">Earn Rewards</h3>
              <p className="text-muted-foreground">Automatically earn reward points and unlock exclusive benefits</p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge className="bg-primary text-primary-foreground">Secure Booking Features</Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Your Security is Our Priority</h2>
                <p className="text-xl text-muted-foreground">
                  Advanced security measures and transparent processes ensure every booking is safe and reliable.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">End-to-End Encryption</h3>
                    <p className="text-muted-foreground">
                      All transactions are protected with military-grade encryption
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Verified Partners</h3>
                    <p className="text-muted-foreground">All service providers are thoroughly vetted and verified</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">24/7 Monitoring</h3>
                    <p className="text-muted-foreground">
                      Continuous system monitoring for maximum uptime and security
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Zap className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Instant Processing</h3>
                    <p className="text-muted-foreground">Lightning-fast booking confirmation and processing</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/mobile-shopping.jpeg"
                alt="Secure Booking Platform"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">Ready to Start Booking?</h2>
            <p className="text-xl text-background/80">
              Experience the convenience of secure booking with rewards. Join thousands of satisfied customers today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6">
                Start Your First Booking
              </Button>
              <Link href="/rewards">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-background/20 text-background hover:bg-background/10 text-lg px-8 py-6 bg-transparent"
                >
                  Learn About Rewards
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
