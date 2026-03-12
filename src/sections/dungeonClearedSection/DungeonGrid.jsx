import DungeonCard from "./DungeonCard"
import { projects } from "../../data/projects"

export default function DungeonGrid() {
  return (
    <div className="flex flex-col items-center gap-12">

      {projects.map(project => (
        <DungeonCard
          key={project.id}
          logo={project.logo}
          title={project.title}
          subtitle={project.subtitle}
          tech={project.tech}
          size={project.size}
        />
      ))}

    </div>
  )
}