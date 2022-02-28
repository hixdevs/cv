import React from "react"
import { Document, Page, View } from "@react-pdf/renderer"

import createStyles from "../../styles/pdf/ColOneToOne"
import TopBar from "./TopBar"
import usePdfTheme from "../../hooks/usePdfTheme"
import ColOne from "./ColOne"
import ColTwo from "./ColTwo"

const ColsOneToOne = ({ data }) => {
  const { sideBar, mainBox } = data
  const theme = usePdfTheme()
  const styles = createStyles(theme)
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <TopBar data={sideBar} />
        <View style={styles.main}>
          <ColOne data={data} />
          <ColTwo data={data} />
        </View>
      </Page>
    </Document>
  )
}

export default ColsOneToOne
