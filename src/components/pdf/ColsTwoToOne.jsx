import React from "react"
import { Document, Page, View } from "@react-pdf/renderer"

import createStyles from "../../styles/pdf/Basic"
import MainBox from "./MainBox"
import SideBar from "./SideBar"
import usePdfTheme from "../../hooks/usePdfTheme"

const ColsTwoToOne = ({ data }) => {
  const { sideBar, mainBox } = data
  const theme = usePdfTheme()
  const styles = createStyles(theme)
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

export default ColsTwoToOne
