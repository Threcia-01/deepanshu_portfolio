import Providers from "./providers"
import MainLayout from "../layout/MainLayout"
import { useIntroPage } from "../introPage/useIntroPage"
import StartScreen from "../introPage/StartScreen"
import TransitionScreen from "../introPage/TransitionScreen"
import PortfolioPage from "../layout/PortfolioPage"

function AppContent() {
  const { stage } = useIntroPage()

  return (
    <div>
      {stage === "intro" && <StartScreen />}
      {stage === "transition" && <TransitionScreen />}
      {stage === "portfolio" && (
        <MainLayout>
          <div className="text-center mt-40">Portfolio Coming Soon</div>
        </MainLayout>
      )}
    </div>
  )
}

export default function App() {
  return (
    <Providers>
      <AppContent />
    </Providers>
  )
}