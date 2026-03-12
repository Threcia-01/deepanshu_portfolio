export default function SectionWrapper({ children, className = "" }) {
  return (
    <section className={`section w-full mx-auto px-3 sm:px-4 md:px-6 ${className}`}>
      {children}
    </section>
  )
}