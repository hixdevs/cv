import { createContext, useContext } from "react"

export const PdfThemeContext = createContext({})

const usePdfTheme = () => useContext(PdfThemeContext)
export default usePdfTheme
