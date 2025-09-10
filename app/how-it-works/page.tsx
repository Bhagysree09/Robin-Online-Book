import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  CreditCard,
  CheckCircle,
  Gift,
  Shield,
  Clock,
  Phone,
  Mail,
  MessageCircle,
  User,
  Settings,
  Zap,
  Award,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-muted to-card py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <Badge className="bg-primary/10 text-primary border-primary/20">Step-by-Step Guide</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              How Earning Guruji
              <span className="text-primary"> Works</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Discover how easy it is to book services, earn rewards, and enjoy a seamless experience with our platform.
              Get started in just a few simple steps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6">
                Start Booking Now
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                Watch Demo Video
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Simple 4-Step Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From browsing services to earning rewards - here's how it works
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg flex-shrink-0">
                  1
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                    <Search className="h-5 w-5 text-primary" />
                    Browse & Select Services
                  </h3>
                  <p className="text-muted-foreground">
                    Explore our comprehensive service categories including personal, business, and premium options. Use
                    filters to find exactly what you need.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg flex-shrink-0">
                  2
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                    <CreditCard className="h-5 w-5 text-primary" />
                    Secure Payment
                  </h3>
                  <p className="text-muted-foreground">
                    Complete your booking with our secure payment system. All transactions are encrypted and protected
                    with advanced security measures.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg flex-shrink-0">
                  3
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    Instant Confirmation
                  </h3>
                  <p className="text-muted-foreground">
                    Receive immediate booking confirmation via email with all the details you need. Track your booking
                    status in real-time.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg flex-shrink-0">
                  4
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                    <Gift className="h-5 w-5 text-primary" />
                    Earn Rewards
                  </h3>
                  <p className="text-muted-foreground">
                    Automatically earn reward points with every booking. Use points for discounts, upgrades, and
                    exclusive experiences.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/4-step-process.png"
                alt="Booking Process Flow"
                width={500}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Platform Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover what makes Earning Guruji the preferred choice for online bookings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Advanced Security</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Military-grade encryption, secure payment processing, and verified service providers ensure your data
                  and transactions are always protected.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Lightning Fast</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Optimized platform performance ensures quick loading times, instant confirmations, and seamless
                  booking experiences across all devices.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>24/7 Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Book anytime, anywhere with our always-available platform. Customer support is ready to help whenever
                  you need assistance.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>User-Friendly Interface</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Intuitive design and easy navigation make booking services effortless for users of all technical skill
                  levels.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Reward System</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Unique rewards program that gives back to customers with every booking, creating long-term value and
                  exclusive benefits.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Customizable Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Personalize your booking preferences, save favorite services, and manage your account settings for a
                  tailored experience.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our platform and services
            </p>
          </div>

          <Tabs defaultValue="general" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="booking">Booking</TabsTrigger>
              <TabsTrigger value="rewards">Rewards</TabsTrigger>
              <TabsTrigger value="support">Support</TabsTrigger>
            </TabsList>

            <TabsContent value="general" className="mt-8">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What is Earning Guruji?</AccordionTrigger>
                  <AccordionContent>
                    Earning Guruji is a comprehensive digital booking platform that allows you to book various
                    services online while earning rewards with every transaction. We offer personal, business, and
                    premium services with a focus on security, convenience, and customer satisfaction.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>How do I create an account?</AccordionTrigger>
                  <AccordionContent>
                    Creating an account is simple! Click the "Sign Up" button, provide your email address and create a
                    secure password. You'll receive a confirmation email to verify your account. Once verified, you can
                    start booking services and earning rewards immediately.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>Is my personal information secure?</AccordionTrigger>
                  <AccordionContent>
                    We use military-grade encryption to protect all personal information and transactions. Our platform
                    is regularly audited for security compliance, and we never share your personal data with third
                    parties without your explicit consent.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                  <AccordionContent>
                    We accept all major credit cards (Visa, MasterCard, American Express), debit cards, PayPal, and
                    various digital payment methods. All payments are processed through secure, encrypted channels to
                    ensure your financial information is protected.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            <TabsContent value="booking" className="mt-8">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How do I make a booking?</AccordionTrigger>
                  <AccordionContent>
                    Simply browse our service categories, select the service you need, choose your preferred date and
                    time, provide necessary details, and complete the secure payment process. You'll receive instant
                    confirmation via email with all booking details.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>Can I modify or cancel my booking?</AccordionTrigger>
                  <AccordionContent>
                    Yes! You can modify or cancel most bookings through your account dashboard. Cancellation policies
                    vary by service type and provider. Premium members enjoy more flexible cancellation terms. Check
                    your booking confirmation for specific terms and conditions.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>How far in advance can I book services?</AccordionTrigger>
                  <AccordionContent>
                    Booking availability varies by service type. Most services can be booked up to 6 months in advance,
                    while some specialized services may have different availability windows. The booking calendar will
                    show all available dates for your selected service.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>What happens if a service provider cancels?</AccordionTrigger>
                  <AccordionContent>
                    If a service provider needs to cancel, you'll be notified immediately and offered alternative
                    options or a full refund. We work closely with backup providers to minimize disruptions and ensure
                    you receive the service you booked.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            <TabsContent value="rewards" className="mt-8">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How do I earn reward points?</AccordionTrigger>
                  <AccordionContent>
                    You earn 1 point for every $1 spent on bookings. Premium members earn 2x points! Points are
                    automatically credited to your account within 24 hours of booking completion. Bonus point promotions
                    may apply during special periods.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>How do I redeem my reward points?</AccordionTrigger>
                  <AccordionContent>
                    Visit the Rewards section in your account to browse available rewards. You can redeem points for
                    discounts, free services, upgrades, and exclusive experiences. Simply select your desired reward and
                    follow the redemption process.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>Do reward points expire?</AccordionTrigger>
                  <AccordionContent>
                    Reward points expire after 24 months of account inactivity. As long as you make at least one booking
                    or account activity every 24 months, your points will remain active. We'll send reminder emails
                    before any points are set to expire.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>What are the membership tiers?</AccordionTrigger>
                  <AccordionContent>
                    We have four tiers: Bronze (entry level), Silver ($500+ spent), Gold ($2,000+ spent), and Platinum
                    ($5,000+ spent). Each tier offers increasing benefits including higher point multipliers, exclusive
                    discounts, priority support, and special perks.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            <TabsContent value="support" className="mt-8">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How can I contact customer support?</AccordionTrigger>
                  <AccordionContent>
                    We offer multiple support channels: 24/7 live chat, email support (ROBINWHATSAPP@GMAIL.COM), phone
                    support (7494854057), and WhatsApp support. Premium members have access to priority support with
                    faster response times.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>What are your support hours?</AccordionTrigger>
                  <AccordionContent>
                    Our platform is available 24/7 for bookings. Customer support is available 24/7 through live chat
                    and email. Phone support is available Monday-Friday 9AM-6PM. Premium members have access to 24/7
                    phone support.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>How quickly will I receive support responses?</AccordionTrigger>
                  <AccordionContent>
                    Live chat responses are typically immediate during business hours. Email responses are provided
                    within 24 hours for standard inquiries and within 4 hours for urgent matters. Premium members
                    receive priority support with faster response times.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>Do you offer technical support?</AccordionTrigger>
                  <AccordionContent>
                    Yes! Our technical support team can help with account issues, booking problems, payment questions,
                    and platform navigation. We also provide troubleshooting guides and video tutorials in our help
                    center.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Need More Help?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our support team is here to help you with any questions or issues
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Live Chat</CardTitle>
                <CardDescription>Instant support available 24/7</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Start Chat</Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Email Support</CardTitle>
                <CardDescription>ROBINWHATSAPP@GMAIL.COM</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Send Email</Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Phone Support</CardTitle>
                <CardDescription>7494854057</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Call Now</Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>WhatsApp</CardTitle>
                <CardDescription>Quick messaging support</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Message Us</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">Ready to Get Started?</h2>
            <p className="text-xl text-background/80">
              Now that you know how it works, start your journey with Earning Guruji and experience the convenience
              of secure booking with rewards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6">
                Create Account
              </Button>
              <Link href="/services">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-background/20 text-background hover:bg-background/10 text-lg px-8 py-6 bg-transparent"
                >
                  Browse Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
