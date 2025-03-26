import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import ExpertsSection from "@/components/experts-section"
import TechSection from "@/components/tech-section"
import PartnersSection from "@/components/partners-section"
import TestimonialSection from "@/components/testimonial-section"
import PortfolioSection from "@/components/portfolio-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PartnersSection />
      <TestimonialSection />
      <TechSection />
      <ExpertsSection />
      <PortfolioSection />

    </main>
  )
}

