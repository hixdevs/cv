import React from "react"
import { Document, Page, View } from "@react-pdf/renderer"

import createStyles from "../../styles/pdf/Basic"
import MainBox from "./MainBox"
import SideBar from "./SideBar"
import usePdfTheme from "../../hooks/usePdfTheme"

const ColsOneToTwo = ({ data }) => {
  const theme = usePdfTheme()
  const styles = createStyles(theme)
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <SideBar data={data} />
        <View style={styles.panel}></View>
        <MainBox data={data} />
      </Page>
    </Document>
  )
}

export default ColsOneToTwo
