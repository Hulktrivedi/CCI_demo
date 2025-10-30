import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, MapPin, Shield } from "lucide-react"

export function About() {
  const stats = [
    { icon: Users, label: "Happy Campers", value: "2,500+" },
    { icon: Award, label: "Years Experience", value: "8+" },
    { icon: MapPin, label: "Destinations", value: "50+" },
    { icon: Shield, label: "Safety Rating", value: "100%" },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Crafting Wilderness
              <span className="block text-primary">Experiences</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              At Camping Culture India, we believe that the great outdoors holds the power to transform, inspire, and
              connect us with nature and ourselves. Our mission is to make these transformative experiences accessible
              to every adventure seeker.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-balance">Why Choose Camping Culture India?</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Expert Local Guides</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Our certified guides know every trail, every sunrise spot, and every hidden gem across India's
                      diverse landscapes.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Premium Equipment</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      From weather-resistant tents to professional-grade camping gear, we provide everything you need
                      for a comfortable adventure.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Safety First</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Comprehensive safety protocols, emergency preparedness, and 24/7 support ensure your adventure is
                      both thrilling and secure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/camping-guide-helping-adventurers-set-up-tent-in-i.jpg"
                alt="Camping guide helping adventurers"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
