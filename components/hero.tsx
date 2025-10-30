"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const scrollY = window.scrollY
        const parallaxValue = scrollY * 0.5
        videoRef.current.style.transform = `translateY(${parallaxValue}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="/camping-adventure-landscape.jpg"
      >
        <source src="/camping-adventure-landscape.jpg" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight animate-slide-up">
            Adventure
            <span className="block text-accent">Awaits</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-pretty max-w-2xl mx-auto leading-relaxed animate-slide-up animation-delay-200">
            Discover the untamed wilderness of India with premium camping experiences, expert guides, and memories that
            last a lifetime.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-400">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 hover:scale-105 transition-transform"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-foreground text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 bg-transparent hover:scale-105 transition-transform"
            >
              View Destinations
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
