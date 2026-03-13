import HeroBackground from "./HeroBackground"
import HeroContent from "./HeroContent"

export default function HeroSection() {
  return (
    <section id="hero" className="relative w-full min-h-[80vh] sm:min-h-[85vh] md:min-h-[90vh] overflow-hidden">
      <HeroBackground />
      <HeroContent />
    </section>
  )
}