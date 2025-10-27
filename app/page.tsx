import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { LogoCarousel } from "@/components/logo-carousel"
import { JobsShowcaseSection } from "@/components/jobs-showcase-section"
import { VideoSection } from "@/components/video-section"
import { TrustedBySection } from "@/components/trusted-by-section"
import { ElevateCareerSection } from "@/components/elevate-career-section"
import { TalentSpotlightSection } from "@/components/talent-spotlight-section"
import { PricingSection } from "@/components/pricing-section"
import { MarketingBannerSection } from "@/components/marketing-banner-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { SplitLayoutSection } from "@/components/split-layout-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <VideoSection />
      <LogoCarousel />
      <JobsShowcaseSection />
      <TrustedBySection />
      <ElevateCareerSection />
      <TalentSpotlightSection />
      <PricingSection />
      <MarketingBannerSection />
      <TestimonialSection />
      <SplitLayoutSection />
      <CTASection />
      <Footer />
    </main>
  )
}
