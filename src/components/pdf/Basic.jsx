import React from "react"
import { Document, Page } from "@react-pdf/renderer"

import styles from "../../styles/pdf/Basic"
import MainBox from "./MainBox"
import SideBar from "./SideBar"

const PdfBasic = (
  <Document>
    <Page size="A4" style={styles.page}>
      <MainBox />
      <SideBar />
    </Page>
  </Document>
)

export default PdfBasic
