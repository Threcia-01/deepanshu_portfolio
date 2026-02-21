import { useIntroPage } from "../../introPage/useIntroPage"

export default function FlashOverlay() {
  const { flash } = useIntroPage()

  if (!flash) return null

  return (
    <div className="fixed inset-0 bg-white pointer-events-none animate-flash z-50" />
  )
}