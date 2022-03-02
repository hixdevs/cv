import React from "react"
import { Document, Page, View } from "@react-pdf/renderer"
import createStyles from "../../styles/pdf/ColsOneToOne"
import TopBar from "./TopBar"
import usePdfTheme from "../../hooks/usePdfTheme"
import ColLeft from "./ColLeft"
import ColRight from "./ColRight"

const ColsOneToOne = ({ data }) => {
  const theme = usePdfTheme()
  console.log("ColsOneToOne", theme)

  const styles = createStyles(theme)
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <TopBar data={data} />
        <View style={styles.panel}></View>
        <View style={styles.main}>
          <ColLeft data={data} />
          <ColRight data={data} />
        </View>
      </Page>
    </Document>
  )
}

export default ColsOneToOne
