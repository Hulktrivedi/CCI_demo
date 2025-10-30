"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Search, ChevronDown } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">Camping Culture India</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>

            {/* Camps Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors">
                Camps
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a
                  href="#camps-mountain"
                  className="block px-4 py-2 text-foreground hover:text-primary hover:bg-accent/10 transition-colors"
                >
                  Mountain Camps
                </a>
                <a
                  href="#camps-beach"
                  className="block px-4 py-2 text-foreground hover:text-primary hover:bg-accent/10 transition-colors"
                >
                  Beach Camps
                </a>
                <a
                  href="#camps-forest"
                  className="block px-4 py-2 text-foreground hover:text-primary hover:bg-accent/10 transition-colors"
                >
                  Forest Camps
                </a>
                <a
                  href="#camps-desert"
                  className="block px-4 py-2 text-foreground hover:text-primary hover:bg-accent/10 transition-colors"
                >
                  Desert Camps
                </a>
              </div>
            </div>

            {/* Expedition Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors">
                Expedition
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a
                  href="#expedition-trekking"
                  className="block px-4 py-2 text-foreground hover:text-primary hover:bg-accent/10 transition-colors"
                >
                  Trekking
                </a>
                <a
                  href="#expedition-climbing"
                  className="block px-4 py-2 text-foreground hover:text-primary hover:bg-accent/10 transition-colors"
                >
                  Rock Climbing
                </a>
                <a
                  href="#expedition-kayaking"
                  className="block px-4 py-2 text-foreground hover:text-primary hover:bg-accent/10 transition-colors"
                >
                  Kayaking
                </a>
                <a
                  href="#expedition-wildlife"
                  className="block px-4 py-2 text-foreground hover:text-primary hover:bg-accent/10 transition-colors"
                >
                  Wildlife Safari
                </a>
              </div>
            </div>

            <a href="#about-us" className="text-foreground hover:text-primary transition-colors">
              About Us
            </a>
            <a href="#contact-us" className="text-foreground hover:text-primary transition-colors">
              Contact Us
            </a>
            <a href="#our-team" className="text-foreground hover:text-primary transition-colors">
              Our Team
            </a>

            {/* Search Button */}
            <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
              <Search className="h-5 w-5" />
            </Button>

            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Book Adventure</Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-4">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">
                Home
              </a>

              {/* Mobile Camps Dropdown */}
              <div>
                <button
                  onClick={() => toggleDropdown("camps")}
                  className="flex items-center justify-between w-full text-foreground hover:text-primary transition-colors"
                >
                  Camps
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${openDropdown === "camps" ? "rotate-180" : ""}`}
                  />
                </button>
                {openDropdown === "camps" && (
                  <div className="ml-4 mt-2 flex flex-col gap-2">
                    <a href="#camps-mountain" className="text-foreground hover:text-primary transition-colors">
                      Mountain Camps
                    </a>
                    <a href="#camps-beach" className="text-foreground hover:text-primary transition-colors">
                      Beach Camps
                    </a>
                    <a href="#camps-forest" className="text-foreground hover:text-primary transition-colors">
                      Forest Camps
                    </a>
                    <a href="#camps-desert" className="text-foreground hover:text-primary transition-colors">
                      Desert Camps
                    </a>
                  </div>
                )}
              </div>

              {/* Mobile Expedition Dropdown */}
              <div>
                <button
                  onClick={() => toggleDropdown("expedition")}
                  className="flex items-center justify-between w-full text-foreground hover:text-primary transition-colors"
                >
                  Expedition
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${openDropdown === "expedition" ? "rotate-180" : ""}`}
                  />
                </button>
                {openDropdown === "expedition" && (
                  <div className="ml-4 mt-2 flex flex-col gap-2">
                    <a href="#expedition-trekking" className="text-foreground hover:text-primary transition-colors">
                      Trekking
                    </a>
                    <a href="#expedition-climbing" className="text-foreground hover:text-primary transition-colors">
                      Rock Climbing
                    </a>
                    <a href="#expedition-kayaking" className="text-foreground hover:text-primary transition-colors">
                      Kayaking
                    </a>
                    <a href="#expedition-wildlife" className="text-foreground hover:text-primary transition-colors">
                      Wildlife Safari
                    </a>
                  </div>
                )}
              </div>

              <a href="#about-us" className="text-foreground hover:text-primary transition-colors">
                About Us
              </a>
              <a href="#contact-us" className="text-foreground hover:text-primary transition-colors">
                Contact Us
              </a>
              <a href="#our-team" className="text-foreground hover:text-primary transition-colors">
                Our Team
              </a>

              {/* Mobile Search Button */}
              <Button variant="ghost" className="justify-start text-foreground hover:text-primary">
                <Search className="h-5 w-5 mr-2" />
                Search
              </Button>

              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground w-full">Book Adventure</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
