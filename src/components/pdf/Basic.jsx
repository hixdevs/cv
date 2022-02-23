import React from "react"
import {
  Document,
  Page,
  Text,
  View
} from "@react-pdf/renderer";

import styles from "../../styles/pdf/basic"

const PdfBasic = (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Hello World!</Text>
      </View>
      <View style={styles.section}>
        <Text>We're inside a PDF!</Text>
      </View>
    </Page>
  </Document>
);

export default PdfBasic
