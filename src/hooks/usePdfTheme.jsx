import { createContext, useContext } from "react"

export const theme = {
  primary: "#42413e",
  teranry: "#fafafa",
  secondary: "#c4ad93",
  textLight: "#ffffff",
  textDark: "#222222",
  link: "#54b2ff",
  img: "circle",
}

export const PdfThemeContext = createContext(theme)

const usePdfTheme = () => useContext(PdfThemeContext)
export default usePdfTheme
