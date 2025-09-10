import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Gift,
  Star,
  Crown,
  Award,
  Zap,
  CheckCircle,
  TrendingUp,
  Calendar,
  Percent,
  Coins,
  Trophy,
  Target,
  Shield,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function RewardsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-muted to-card py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-primary/10 text-primary border-primary/20">Exclusive Rewards Program</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Earn Rewards with
                  <span className="text-primary"> Every Booking</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Our unique reward system ensures that every transaction brings you value. The more you book, the more
                  you earn! Experience benefits that go beyond just booking.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6">
                  Join Rewards Program
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                  Calculate My Rewards
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">2x</div>
                  <div className="text-sm text-muted-foreground">Points Multiplier</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Reward Options</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">24h</div>
                  <div className="text-sm text-muted-foreground">Point Processing</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/images/referral-program.jpeg"
                  alt="Referral Program and Rewards System"
                  width={600}
                  height={600}
                  className="rounded-lg shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-primary/20 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* How Rewards Work Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">How Our Rewards System Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple, transparent, and rewarding - earn points with every booking and unlock amazing benefits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Coins className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Earn Points</h3>
              <p className="text-muted-foreground">
                Get 1 point for every $1 spent on bookings. Premium members earn 2x points!
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Tier Up</h3>
              <p className="text-muted-foreground">
                Advance through Bronze, Silver, Gold, and Platinum tiers for better benefits
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Gift className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Redeem Rewards</h3>
              <p className="text-muted-foreground">Use points for discounts, free bookings, or exclusive experiences</p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Enjoy Benefits</h3>
              <p className="text-muted-foreground">
                Access exclusive deals, priority support, and special member-only offers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Tiers Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Membership Tiers</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Unlock better benefits as you book more and advance through our tier system
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Bronze Tier */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-amber-600" />
                </div>
                <CardTitle className="text-amber-600">Bronze</CardTitle>
                <CardDescription>$0 - $499 spent</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    1x Points on bookings
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Basic customer support
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Monthly newsletters
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Standard booking fees
                  </div>
                </div>
                <Progress value={25} className="h-2" />
                <p className="text-xs text-muted-foreground text-center">Entry Level</p>
              </CardContent>
            </Card>

            {/* Silver Tier */}
            <Card className="hover:shadow-lg transition-shadow border-gray-300">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-gray-600" />
                </div>
                <CardTitle className="text-gray-600">Silver</CardTitle>
                <CardDescription>$500 - $1,999 spent</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    1.25x Points on bookings
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Priority customer support
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    5% booking discounts
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Exclusive offers
                  </div>
                </div>
                <Progress value={50} className="h-2" />
                <p className="text-xs text-muted-foreground text-center">Growing Member</p>
              </CardContent>
            </Card>

            {/* Gold Tier */}
            <Card className="hover:shadow-lg transition-shadow border-primary/50">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Crown className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-primary">Gold</CardTitle>
                <CardDescription>$2,000 - $4,999 spent</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    1.5x Points on bookings
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    24/7 premium support
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    10% booking discounts
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Free cancellations
                  </div>
                </div>
                <Progress value={75} className="h-2" />
                <p className="text-xs text-muted-foreground text-center">Valued Member</p>
              </CardContent>
            </Card>

            {/* Platinum Tier */}
            <Card className="hover:shadow-lg transition-shadow border-purple-300 bg-gradient-to-br from-background to-purple-50">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Trophy className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-purple-600">Platinum</CardTitle>
                <CardDescription>$5,000+ spent</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    2x Points on bookings
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Dedicated account manager
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    15% booking discounts
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    VIP experiences
                  </div>
                </div>
                <Progress value={100} className="h-2" />
                <p className="text-xs text-muted-foreground text-center">Elite Member</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Rewards Catalog Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Rewards Catalog</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover amazing ways to use your reward points
            </p>
          </div>

          <Tabs defaultValue="discounts" className="w-full">
            <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto mb-12">
              <TabsTrigger value="discounts">Discounts</TabsTrigger>
              <TabsTrigger value="experiences">Experiences</TabsTrigger>
              <TabsTrigger value="upgrades">Upgrades</TabsTrigger>
              <TabsTrigger value="gifts">Gifts</TabsTrigger>
            </TabsList>

            <TabsContent value="discounts" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <Percent className="h-5 w-5 text-primary" />
                        10% Off Next Booking
                      </CardTitle>
                      <Badge className="bg-primary text-primary-foreground">500 pts</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      Get 10% discount on your next booking of any service category
                    </CardDescription>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Redeem Now
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <Percent className="h-5 w-5 text-primary" />
                        25% Off Premium Services
                      </CardTitle>
                      <Badge className="bg-primary text-primary-foreground">1000 pts</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      Exclusive discount on premium service bookings and upgrades
                    </CardDescription>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Redeem Now
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <Gift className="h-5 w-5 text-primary" />
                        Free Booking Credit
                      </CardTitle>
                      <Badge className="bg-primary text-primary-foreground">2000 pts</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      $50 credit towards any booking - perfect for trying new services
                    </CardDescription>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Redeem Now
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="experiences" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <Star className="h-5 w-5 text-primary" />
                        VIP Event Access
                      </CardTitle>
                      <Badge className="bg-primary text-primary-foreground">3000 pts</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      Exclusive access to VIP events and member-only experiences
                    </CardDescription>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Redeem Now
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-primary" />
                        Priority Booking
                      </CardTitle>
                      <Badge className="bg-primary text-primary-foreground">1500 pts</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      Skip the queue with priority booking access for popular services
                    </CardDescription>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Redeem Now
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <Crown className="h-5 w-5 text-primary" />
                        Concierge Service
                      </CardTitle>
                      <Badge className="bg-primary text-primary-foreground">5000 pts</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      Personal concierge service to handle all your booking needs
                    </CardDescription>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Redeem Now
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="upgrades" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <Zap className="h-5 w-5 text-primary" />
                        Service Upgrade
                      </CardTitle>
                      <Badge className="bg-primary text-primary-foreground">800 pts</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      Upgrade any standard booking to premium service level
                    </CardDescription>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Redeem Now
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <Target className="h-5 w-5 text-primary" />
                        Express Processing
                      </CardTitle>
                      <Badge className="bg-primary text-primary-foreground">600 pts</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      Get instant confirmation and express processing for urgent bookings
                    </CardDescription>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Redeem Now
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <Shield className="h-5 w-5 text-primary" />
                        Flexible Cancellation
                      </CardTitle>
                      <Badge className="bg-primary text-primary-foreground">400 pts</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      Add flexible cancellation policy to any booking for peace of mind
                    </CardDescription>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Redeem Now
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="gifts" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <Gift className="h-5 w-5 text-primary" />
                        Gift Card $25
                      </CardTitle>
                      <Badge className="bg-primary text-primary-foreground">2500 pts</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      Share the Robin Online Book experience with friends and family
                    </CardDescription>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Redeem Now
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <Gift className="h-5 w-5 text-primary" />
                        Gift Card $50
                      </CardTitle>
                      <Badge className="bg-primary text-primary-foreground">4500 pts</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      Perfect gift for special occasions and celebrations
                    </CardDescription>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Redeem Now
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <Crown className="h-5 w-5 text-primary" />
                        Premium Membership
                      </CardTitle>
                      <Badge className="bg-primary text-primary-foreground">10000 pts</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      Gift premium membership benefits to someone special
                    </CardDescription>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Redeem Now
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Terms & Conditions Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Rewards Terms & Conditions</h2>
              <p className="text-xl text-muted-foreground">Important information about our rewards program</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    Point Earning
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <p>• Points are earned on completed bookings only</p>
                  <p>• Points are credited within 24 hours of booking completion</p>
                  <p>• Bonus point promotions may apply during special periods</p>
                  <p>• Refunded bookings will have points deducted accordingly</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Gift className="h-5 w-5 text-primary" />
                    Point Redemption
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <p>• Points can be redeemed for rewards in the catalog</p>
                  <p>• Minimum redemption varies by reward type</p>
                  <p>• Points expire after 24 months of account inactivity</p>
                  <p>• Some rewards may have limited availability</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Crown className="h-5 w-5 text-primary" />
                    Tier Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <p>• Tier status is calculated based on annual spending</p>
                  <p>• Benefits are active immediately upon tier advancement</p>
                  <p>• Tier status is reviewed annually on account anniversary</p>
                  <p>• Premium tier benefits may have additional terms</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    Program Rules
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <p>• Program terms may be updated with notice</p>
                  <p>• Points and benefits are non-transferable</p>
                  <p>• Account must be in good standing to participate</p>
                  <p>• Robin Online Book reserves the right to modify the program</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Link href="/terms">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                  View Full Terms & Conditions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">Ready to Start Earning Rewards?</h2>
            <p className="text-xl text-background/80">
              Join our rewards program today and start earning points with your first booking. The more you book, the
              more you earn!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6">
                Join Rewards Program
              </Button>
              <Link href="/services">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-background/20 text-background hover:bg-background/10 text-lg px-8 py-6 bg-transparent"
                >
                  Make Your First Booking
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
