"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle, HelpCircle } from "lucide-react"

export function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

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

  const faqs = [
    {
      question: "Are your expeditions suitable for beginners?",
      answer:
        "Yes! We offer expeditions for all skill levels. Our guides assess your fitness and experience to match you with appropriate adventures. We have easy, moderate, and challenging options.",
    },
    {
      question: "What is included in the package?",
      answer:
        "Our packages include accommodation, meals, professional guides, safety equipment, and transportation to the base camp. Specific inclusions vary by expedition.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "We offer flexible cancellation up to 14 days before the expedition with full refund. Cancellations within 14 days are subject to a 25% cancellation fee.",
    },
    {
      question: "How do you ensure safety during expeditions?",
      answer:
        "Safety is our top priority. All guides are certified, equipment is regularly maintained, we have comprehensive insurance, and emergency protocols are in place for all activities.",
    },
    {
      question: "What should I pack for a camping trip?",
      answer:
        "We provide a detailed packing list based on your expedition. Generally, bring weather-appropriate clothing, sturdy hiking boots, personal medications, and toiletries. We provide camping gear.",
    },
    {
      question: "Can I book a private expedition?",
      answer:
        "We offer customized private expeditions for groups. Contact our team to discuss your requirements and we'll create a tailored experience.",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Why Choose Us</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Addressing your concerns and showcasing what makes Camping Culture India your ideal adventure partner
          </p>
        </div>

        {/* Benefits and FAQs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Benefits */}
          <div className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-6 md:mb-8">Our Advantages</h3>
            <div className="space-y-3 md:space-y-4">
              {[
                "10+ years of experience in adventure tourism",
                "500+ successful expeditions completed",
                "Expert guides with international certifications",
                "100% customer satisfaction guarantee",
                "Eco-friendly and sustainable practices",
                "24/7 emergency support and assistance",
              ].map((benefit, index) => (
                <div
                  key={index}
                  className={`flex gap-3 items-start p-3 md:p-4 rounded-lg bg-card border border-border hover:border-accent transition-all ${
                    isVisible ? "animate-fade-in-up" : "opacity-0"
                  }`}
                  style={{
                    animationDelay: isVisible ? `${index * 50}ms` : "0ms",
                  }}
                >
                  <CheckCircle className="h-5 sm:h-6 w-5 sm:w-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FAQs */}
          <div className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "100ms" }}>
            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-6 md:mb-8">Common Questions</h3>
            <div className="space-y-2 md:space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`rounded-lg border border-border overflow-hidden transition-all ${
                    isVisible ? "animate-fade-in-up" : "opacity-0"
                  }`}
                  style={{
                    animationDelay: isVisible ? `${index * 50}ms` : "0ms",
                  }}
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-3 md:p-4 bg-card hover:bg-secondary transition-colors gap-2"
                  >
                    <span className="font-semibold text-foreground text-left flex items-center gap-2 text-sm sm:text-base">
                      <HelpCircle className="h-4 sm:h-5 w-4 sm:w-5 text-accent flex-shrink-0" />
                      {faq.question}
                    </span>
                    <span
                      className={`text-accent transition-transform flex-shrink-0 ${expandedFaq === index ? "rotate-180" : ""}`}
                    >
                      ▼
                    </span>
                  </button>
                  {expandedFaq === index && (
                    <div className="px-3 md:px-4 py-2 md:py-3 bg-secondary/50 border-t border-border text-muted-foreground text-sm sm:text-base">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
