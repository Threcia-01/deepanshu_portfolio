import { useEffect, useRef } from "react"
import DungeonCard from "./DungeonCard"
import { projects } from "../../data/projects"
import { animateStagger } from "../../components/animations/ScrollAnimations"

export default function DungeonGrid() {
  const cardsRef = useRef([])

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean)
    if (cards.length) animateStagger(cards, 0.15)
  }, [])

  return (
    <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-8 sm:gap-6 md:gap-12 px-4">
      {projects.map((project, i) => (
        <div
          key={project.id}
          ref={el => (cardsRef.current[i] = el)}
          className="opacity-0 w-full sm:w-auto"
        >
          <DungeonCard
            logo={project.logo}
            title={project.title}
            subtitle={project.subtitle}
            tech={project.tech}
            size={project.size}
          />
        </div>
      ))}
    </div>
  )
}
