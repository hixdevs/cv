import React from "react"
import { Document, Page, View, Text } from "@react-pdf/renderer"

import createStyles from "../../styles/pdf/ColOneToOne"
import TopBar from "./TopBar"
import usePdfTheme from "../../hooks/usePdfTheme"
import ColOne from "./ColOne"
import ColTwo from "./ColTwo"

const ColsOneToOne = ({ data }) => {
  const theme = usePdfTheme()
  const styles = createStyles(theme)
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <TopBar data={data} />
        <View style={styles.panel}></View>
        <View style={styles.main}>
          <ColOne data={data} />
          <ColTwo data={data} />
        </View>
      </Page>
    </Document>
  )
}

export default ColsOneToOne
