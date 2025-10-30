"use client"

import { useEffect, useRef } from "react"

export function Gallery() {
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])

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

    imageRefs.current.forEach((img) => {
      if (img) observer.observe(img)
    })

    return () => observer.disconnect()
  }, [])

  const images = [
    {
      src: "/camping-tents-under-starry-night-sky-in-ladakh.jpg",
      alt: "Starry night camping in Ladakh",
      title: "Ladakh Nights",
    },
    {
      src: "/sunrise-view-from-mountain-peak-with-camping-gear.jpg",
      alt: "Mountain sunrise camping",
      title: "Summit Sunrise",
    },
    {
      src: "/group-of-adventurers-around-campfire-in-forest.jpg",
      alt: "Campfire gathering",
      title: "Forest Stories",
    },
    {
      src: "/river-camping-with-kayaks-and-adventure-gear.jpg",
      alt: "River camping adventure",
      title: "River Adventures",
    },
    {
      src: "/luxury-glamping-tent-in-scenic-mountain-valley.jpg",
      alt: "Luxury glamping experience",
      title: "Luxury Camping",
    },
    {
      src: "/hiking-trail-through-dense-indian-forest-with-back.jpg",
      alt: "Forest trekking",
      title: "Forest Trails",
    },
  ]

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Captured
              <span className="block text-primary">Moments</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Every adventure tells a story. Here are glimpses of the incredible experiences our adventurers have shared
              with us across India's diverse landscapes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                ref={(el) => {
                  imageRefs.current[index] = el
                }}
                className={`group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 ${
                  index === 0 || index === 3 ? "md:col-span-2" : ""
                }`}
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-64 md:h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-semibold">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
