import { createContext, useContext } from "react"

export const theme = {
  primary: "#42413e",
  secondary: "#fafafa",
  ternary: "#734448",
  textSide: "#fff",
  textMain: "#222",
  link: "#54b2ff",
  heading: "#d4b88a",
  img: "circle",
}

export const PdfThemeContext = createContext(theme)

const usePdfTheme = () => useContext(PdfThemeContext)
export default usePdfTheme
