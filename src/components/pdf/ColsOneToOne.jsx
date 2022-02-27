import React from "react"
import { Document, Page, View } from "@react-pdf/renderer"

import createStyles from "../../styles/pdf/Basic"
import MainBox from "./MainBox"
import TopBar from "./TopBar"
import usePdfTheme from "../../hooks/usePdfTheme"

const ColsOneToOne = ({ data }) => {
  const { sideBar, mainBox } = data
  const theme = usePdfTheme()
  const styles = createStyles(theme)
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <TopBar data={sideBar} />
        {/* <View style={styles.panel}></View> */}
        {/* <MainBox data={mainBox} /> */}
      </Page>
    </Document>
  )
}

export default ColsOneToOne