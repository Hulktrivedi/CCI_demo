import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { TrekkingCamps } from "@/components/trekking-camps"
import { AboutUs } from "@/components/about-us"
import { OurExpedition } from "@/components/our-expedition"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TrekkingCamps />
      <AboutUs />
      <OurExpedition />
      <WhyChooseUs />
      <Footer />
    </main>
  )
}
