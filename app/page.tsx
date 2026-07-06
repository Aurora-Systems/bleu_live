import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/home/hero-section'
import { StatsBar } from '@/components/home/stats-bar'
import { WhatWeDoSection } from '@/components/home/what-we-do-section'
import { WhyBleuSection } from '@/components/home/why-bleu-section'
import { HowItWorksSection } from '@/components/home/how-it-works-section'
import { WhoWeServeSection } from '@/components/home/who-we-serve-section'
import { WaitlistSection } from '@/components/home/waitlist-section'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsBar />
        <WhatWeDoSection />
        <WhyBleuSection />
        <HowItWorksSection />
        <WhoWeServeSection />
        <WaitlistSection />
      </main>
      <Footer />
    </>
  )
}
