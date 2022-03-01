import React from "react"
import { PDFDownloadLink } from "@react-pdf/renderer"
import ColsOneToOne from "./ColsOneToOne"
import styles from "../../styles/pdf/Download"

const Download = ({ data }) => {
  return (
    <PDFDownloadLink
      document={<ColsOneToOne data={data} />}
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
