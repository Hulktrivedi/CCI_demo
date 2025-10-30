"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin, Clock } from "lucide-react"

interface TrekkingCard {
  id: number
  title: string
  image: string
  location: string
  duration: string
  difficulty: string
}

const trekkingCamps: TrekkingCard[] = [
  {
    id: 1,
    title: "Himalayan Peak Trek",
    image: "/himalayan-mountain-peak-trekking.jpg",
    location: "Himachal Pradesh",
    duration: "5 Days",
    difficulty: "Moderate",
  },
  {
    id: 2,
    title: "Western Ghats Adventure",
    image: "/western-ghats-forest-trekking.jpg",
    location: "Karnataka",
    duration: "3 Days",
    difficulty: "Easy",
  },
  {
    id: 3,
    title: "Desert Safari Camp",
    image: "/desert-sand-dunes-camping.jpg",
    location: "Rajasthan",
    duration: "4 Days",
    difficulty: "Easy",
  },
  {
    id: 4,
    title: "Coastal Beach Camp",
    image: "/beach-coastal-camping-sunset.jpg",
    location: "Goa",
    duration: "3 Days",
    difficulty: "Easy",
  },
  {
    id: 5,
    title: "Forest Wilderness Trek",
    image: "/dense-forest-wilderness-trekking.jpg",
    location: "Uttarakhand",
    duration: "6 Days",
    difficulty: "Hard",
  },
  {
    id: 6,
    title: "Alpine Meadows Camp",
    image: "/alpine-meadows-mountains-camping.jpg",
    location: "Ladakh",
    duration: "7 Days",
    difficulty: "Hard",
  },
]

export function TrekkingCamps() {
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

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Trekking & Camps</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our most frequently inquired and embarked upon journeys across India's most breathtaking landscapes
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trekkingCamps.map((camp, index) => (
            <div
              key={camp.id}
              className={`group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{
                animationDelay: isVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              {/* Image Container - 90% */}
              <div className="relative h-80 overflow-hidden bg-muted">
                <img
                  src={camp.image || "/placeholder.svg"}
                  alt={camp.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              </div>

              {/* Description Container - 10% */}
              <div className="bg-card p-4 border-t border-border">
                <h3 className="font-bold text-lg text-primary mb-2 group-hover:text-accent transition-colors">
                  {camp.title}
                </h3>
                <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4 text-accent" />
                    <span>{camp.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-accent" />
                    <span>{camp.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
