import { Mountain, Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4 md:mb-6">
                <Mountain className="h-6 sm:h-8 w-6 sm:w-8 text-accent" />
                <span className="text-lg sm:text-2xl font-bold">Camping Culture India</span>
              </div>
              <p className="text-primary-foreground/80 leading-relaxed mb-4 md:mb-6 max-w-md text-sm sm:text-base">
                Transforming lives through authentic wilderness experiences. Join us in discovering the untamed beauty
                of India's diverse landscapes.
              </p>
              <div className="flex gap-3 md:gap-4">
                <a
                  href="#"
                  className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                >
                  <Facebook className="h-4 sm:h-5 w-4 sm:w-5" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                >
                  <Instagram className="h-4 sm:h-5 w-4 sm:w-5" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                >
                  <Twitter className="h-4 sm:h-5 w-4 sm:w-5" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                >
                  <Youtube className="h-4 sm:h-5 w-4 sm:w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-3 md:mb-4 text-sm sm:text-base">Quick Links</h3>
              <ul className="space-y-2 md:space-y-3 text-sm sm:text-base">
                <li>
                  <a
                    href="#about"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Our Services
                  </a>
                </li>
                <li>
                  <a
                    href="#gallery"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Adventures */}
            <div>
              <h3 className="font-semibold mb-3 md:mb-4 text-sm sm:text-base">Adventures</h3>
              <ul className="space-y-2 md:space-y-3 text-sm sm:text-base">
                <li>
                  <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Weekend Camping
                  </a>
                </li>
                <li>
                  <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Himalayan Treks
                  </a>
                </li>
                <li>
                  <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Photography Tours
                  </a>
                </li>
                <li>
                  <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Corporate Retreats
                  </a>
                </li>
                <li>
                  <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Luxury Camping
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-6 md:pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm">
              <p className="text-primary-foreground/60">© 2025 Camping Culture India. All rights reserved.</p>
              <div className="flex gap-4 md:gap-6">
                <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
