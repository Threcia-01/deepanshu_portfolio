import Providers from "./providers"
import MainLayout from "../layout/MainLayout"
import { useIntroPage } from "../introPage/useIntroPage"
import StartScreen from "../introPage/StartScreen"
import TransitionScreen from "../introPage/TransitionScreen"
import PortfolioPage from "../layout/PortfolioPage"
import Navbar from "../components/navigation/Navbar"

function AppContent() {
  const { stage } = useIntroPage()

  if (stage === "intro") return <StartScreen />

  if (stage === "transition") return <TransitionScreen />

  // portfolio stage
  return (
    <>
      <Navbar />

      <MainLayout className="pt-16">
        <PortfolioPage />
      </MainLayout>
    </>
  )
}

export default function App() {
  return (
    <Providers>
      <AppContent />
    </Providers>
  )
}