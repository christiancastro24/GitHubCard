import { DisplayProvider } from "./DisplayCards"

export const Providers = ({ children }) => {
  return (
    <DisplayProvider>
      {children}
    </DisplayProvider>
  )
}