"use client"

import { useEffect, useRef, useState } from "react"
import { Award, Users, Globe, Heart } from "lucide-react"

export function AboutUs() {
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

  const features = [
    {
      icon: Award,
      title: "Expert Guides",
      description: "Certified and experienced guides with deep knowledge of Indian wilderness",
    },
    {
      icon: Users,
      title: "Community Focused",
      description: "Join a vibrant community of adventure enthusiasts and nature lovers",
    },
    {
      icon: Globe,
      title: "Sustainable Tourism",
      description: "Committed to preserving nature while providing unforgettable experiences",
    },
    {
      icon: Heart,
      title: "Safety First",
      description: "Comprehensive safety protocols and emergency support on all expeditions",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">About Us</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Camping Culture India is dedicated to bringing adventure seekers closer to nature through carefully curated
            experiences that combine thrill, comfort, and environmental responsibility.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className={`text-center p-6 rounded-lg bg-card border border-border hover:border-accent transition-all duration-300 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{
                  animationDelay: isVisible ? `${index * 100}ms` : "0ms",
                }}
              >
                <div className="flex justify-center mb-4">
                  <Icon className="h-12 w-12 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
