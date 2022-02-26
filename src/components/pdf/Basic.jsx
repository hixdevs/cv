import React from "react"
import { Document, Page, View } from "@react-pdf/renderer"

import styles from "../../styles/pdf/Basic"
import MainBox from "./MainBox"
import SideBar from "./SideBar"

const PdfBasic = ({ data }) => {
  const { sideBar, mainBox } = data

  // console.log("data:", data)

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <MainBox data={mainBox} />
        <View style={styles.panel}></View>
        <SideBar data={sideBar} />
      </Page>
    </Document>
  )
}

export default PdfBasic
