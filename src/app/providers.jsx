import { IntroProvider } from "../introPage/useIntroPage"

export default function Providers({ children }) {
  return <IntroProvider>{children}</IntroProvider>
}