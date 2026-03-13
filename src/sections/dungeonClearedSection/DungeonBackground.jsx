import DungeonBg from "../../assets/images/dungeonsSectionBg.webp"

export default function DungeonBackground() {
  return (
    <div
      className="absolute inset-0 bg-cover bg-center opacity-80"
      style={{ backgroundImage: `url(${DungeonBg})` }}
    />
  )
}