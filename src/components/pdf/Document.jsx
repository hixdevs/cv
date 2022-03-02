import React from "react"
import { Document } from "@react-pdf/renderer"
import { PdfThemeContext } from "../../hooks/usePdfTheme"

const PdfDocument = ({ children, theme }) => {
  console.log("theme:", theme)
  return (
    <Document>
      <PdfThemeContext.Provider value={theme}>
        {children}
      </PdfThemeContext.Provider>
    </Document>
  )
}

export default PdfDocument
