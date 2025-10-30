"use client"

import { useEffect, useRef, useState } from "react"
import { Compass, Mountain, Waves, Flame } from "lucide-react"

export function OurExpedition() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const expeditions = [
    {
      icon: Mountain,
      title: "Mountain Trekking",
      description: "Conquer peaks and experience breathtaking alpine landscapes with expert mountaineers",
    },
    {
      icon: Waves,
      title: "Water Adventures",
      description: "Kayaking, rafting, and water sports in pristine rivers and coastal areas",
    },
    {
      icon: Flame,
      title: "Survival Skills",
      description: "Learn wilderness survival techniques and outdoor skills from seasoned professionals",
    },
    {
      icon: Compass,
      title: "Wildlife Safari",
      description: "Encounter India's diverse wildlife in their natural habitats with naturalist guides",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Expeditions</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose from a variety of thrilling expeditions designed to challenge, inspire, and transform your
            perspective on adventure
          </p>
        </div>

        {/* Expeditions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {expeditions.map((expedition, index) => {
            const Icon = expedition.icon
            return (
              <div
                key={index}
                className={`flex flex-col sm:flex-row gap-4 sm:gap-6 p-6 sm:p-8 rounded-lg bg-card border border-border hover:border-accent hover:shadow-lg transition-all duration-300 group ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{
                  animationDelay: isVisible ? `${index * 100}ms` : "0ms",
                }}
              >
                <div className="flex-shrink-0">
                  <Icon className="h-10 sm:h-12 w-10 sm:w-12 text-accent group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                    {expedition.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{expedition.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
