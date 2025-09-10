"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, ArrowUp, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-royal-gold">Earning Guruji</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-royal-gold" />
                <a href="mailto:ROBINWHATSAPP@GMAIL.COM" className="hover:text-royal-gold transition-colors">
                  ROBINWHATSAPP@GMAIL.COM
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-royal-gold" />
                <a href="tel:7494854057" className="hover:text-royal-gold transition-colors">
                  7494854057
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-royal-gold mt-0.5 flex-shrink-0" />
                <address className="not-italic text-sm leading-relaxed">
                  Ghilaur, Ghilor Khurd,
                  <br />
                  Haryana 124303
                </address>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Your trusted partner for secure online bookings with rewarding benefits.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-royal-gold">Quick Links</h3>
            <nav className="space-y-2">
              <Link href="/" className="block text-gray-300 hover:text-royal-gold transition-colors">
                Home
              </Link>
              <Link href="/about" className="block text-gray-300 hover:text-royal-gold transition-colors">
                About Us
              </Link>
              <Link href="/services" className="block text-gray-300 hover:text-royal-gold transition-colors">
                Services
              </Link>
              <Link href="/rewards" className="block text-gray-300 hover:text-royal-gold transition-colors">
                Rewards
              </Link>
              <Link href="/how-it-works" className="block text-gray-300 hover:text-royal-gold transition-colors">
                How It Works
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-royal-gold transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Services Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-royal-gold">Our Services</h3>
            <div className="space-y-2 text-gray-300">
              <p className="text-sm">Personal Bookings</p>
              <p className="text-sm">Business Solutions</p>
              <p className="text-sm">Premium Services</p>
              <p className="text-sm">Reward Programs</p>
              <p className="text-sm">24/7 Support</p>
            </div>
          </div>

          {/* Social Media & Connect Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-royal-gold">Connect With Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-royal-gold hover:text-black transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-royal-gold hover:text-black transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-royal-gold hover:text-black transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-royal-gold hover:text-black transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>

            {/* Trust Badges */}
            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Secure & Trusted</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <div className="w-2 h-2 bg-royal-gold rounded-full"></div>
                <span>Reward Certified</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">© 2025 Earning Guruji. All rights reserved.</p>

            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-royal-gold transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-400 hover:text-royal-gold transition-colors">
                Terms of Service
              </Link>

              {/* Back to Top Button */}
              <Button
                onClick={scrollToTop}
                variant="outline"
                size="sm"
                className="border-gray-700 text-gray-400 hover:bg-royal-gold hover:text-black hover:border-royal-gold bg-transparent"
              >
                <ArrowUp className="h-4 w-4 mr-1" />
                Top
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
