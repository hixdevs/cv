import { createContext, useContext } from "react"
// import { PdfThemeContext } from "../index.js"

// const theme = useContext(PdfThemeContext)
// export const theme = {
//   primary: "#42413e",
//   teranry: "#fafafa",
//   secondary: "#c4ad93",
//   textLight: "#fff",
//   textDark: "#222222",
//   link: "#54b2ff",
//   img: "circle",
// }

// const theme = useContext(PdfThemeContext)
// console.log("theme:", theme)

export const PdfThemeContext = createContext({})

const usePdfTheme = () => useContext(PdfThemeContext)
export default usePdfTheme
