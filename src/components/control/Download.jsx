import React from "react"
import { PDFDownloadLink } from "@react-pdf/renderer"
import ColsOneToOne from "../pdf/ColsOneToOne"
import { PdfThemeContext } from "../../hooks/usePdfTheme"
import ColsOneToTwo from "../pdf/ColsOneToTwo"
import LessDense from "../pdf/LessDense"

const Download = ({ data, theme, LayoutComponent }) => {
  return (
    <PDFDownloadLink
      document={
        <PdfThemeContext.Provider value={theme}>
          <LayoutComponent data={data} />
        </PdfThemeContext.Provider>
      }
      fileName="resume.pdf"
    >
      <button className="btn btn-success">Download</button>
    </PDFDownloadLink>
  )
}

export default Download
