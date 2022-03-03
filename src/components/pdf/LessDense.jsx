import React from "react"
import { Document, Page, View } from "@react-pdf/renderer"

import createStyles from "../../styles/pdf/Basic"
import SideBarLessDense from "./SideBarLessDense"
import usePdfTheme from "../../hooks/usePdfTheme"
import MainBoxLessDense from "./MainBoxLessDense"

const ColsOneToTwo = ({ data }) => {
  const theme = usePdfTheme()
  const styles = createStyles(theme)
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <SideBarLessDense data={data} />
        <View style={styles.panel}></View>
        <MainBoxLessDense data={data} />
      </Page>
    </Document>
  )
}

export default ColsOneToTwo
