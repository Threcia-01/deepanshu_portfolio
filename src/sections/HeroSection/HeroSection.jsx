import HeroBackground from "./HeroBackground"
import HeroContent from "./HeroContent"

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden">
      <HeroBackground />
      <HeroContent />

    </section>
  )
}