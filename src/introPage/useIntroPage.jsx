import { createContext, useContext, useState } from "react"

const IntroContext = createContext()

export const IntroProvider = ({ children }) => {
  const [stage, setStage] = useState("intro")

  const startIntro = () => setStage("transition")
  const enterPortfolio = () => setStage("portfolio")

  return (
    <IntroContext.Provider value={{ stage, startIntro, enterPortfolio }}>
      {children}
    </IntroContext.Provider>
  )
}

export const useIntroPage = () => useContext(IntroContext)