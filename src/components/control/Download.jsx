import React from "react"
import { PDFDownloadLink } from "@react-pdf/renderer"
// import ColsOneToOne from "../pdf/ColsOneToOne"
import styles from "../../styles/control/Download"
import { PdfThemeContext } from "../../hooks/usePdfTheme"
// import ColsOneToTwo from "../pdf/ColsOneToTwo"
import LessDense from "../pdf/LessDense"

const Download = ({ data, theme }) => {
  return (
    <PDFDownloadLink
      document={
        <PdfThemeContext.Provider value={theme}>
          <LessDense data={data} />
        </PdfThemeContext.Provider>
      }
      fileName="resume.pdf"
    >
      {({ blob, url, loading, error }) =>
        loading ? (
          "Loading document..."
        ) : (
          <button style={styles.button}>Download</button>
        )
      }
    </PDFDownloadLink>
  )
}

export default Download
