"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tent, Mountain, Camera, Backpack, Users, Star } from "lucide-react"

export function Services() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: Tent,
      title: "Weekend Camping",
      description: "Perfect for beginners and families. Escape the city for a refreshing weekend in nature.",
      features: ["All equipment provided", "Guided activities", "Campfire sessions", "Local cuisine"],
      price: "From ₹2,999",
      duration: "2 Days / 1 Night",
    },
    {
      icon: Mountain,
      title: "Himalayan Expeditions",
      description: "Challenge yourself with multi-day treks through the majestic Himalayan ranges.",
      features: ["Expert mountaineers", "High-altitude gear", "Acclimatization support", "Summit certificates"],
      price: "From ₹12,999",
      duration: "7-14 Days",
    },
    {
      icon: Camera,
      title: "Photography Tours",
      description: "Capture stunning landscapes with professional photographers as your guides.",
      features: ["Photography workshops", "Golden hour sessions", "Equipment rental", "Post-processing tips"],
      price: "From ₹4,999",
      duration: "3-5 Days",
    },
    {
      icon: Backpack,
      title: "Solo Adventures",
      description: "Specially designed experiences for solo travelers seeking personal growth.",
      features: ["Small group sizes", "Personal mentoring", "Skill development", "Safety priority"],
      price: "From ₹3,499",
      duration: "2-4 Days",
    },
    {
      icon: Users,
      title: "Corporate Retreats",
      description: "Team building activities in nature to strengthen workplace relationships.",
      features: ["Team challenges", "Leadership activities", "Custom programs", "Catering included"],
      price: "Custom Pricing",
      duration: "Flexible",
    },
    {
      icon: Star,
      title: "Luxury Camping",
      description: "Experience the wilderness without compromising on comfort and luxury.",
      features: ["Glamping tents", "Gourmet meals", "Spa services", "Private guides"],
      price: "From ₹8,999",
      duration: "2-3 Days",
    },
  ]

  return (
    <section id="services" className="py-20 relative" ref={sectionRef}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Adventure
              <span className="block text-primary">Experiences</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              From weekend getaways to epic expeditions, we offer carefully curated experiences for every type of
              adventurer and skill level.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                ref={(el) => {
                  cardRefs.current[index] = el
                }}
                className="opacity-0"
              >
                <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm hover:scale-105 hover:-translate-y-2">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="text-sm text-muted-foreground">{service.duration}</div>
                    </div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-bold text-primary">{service.price}</div>
                      <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
