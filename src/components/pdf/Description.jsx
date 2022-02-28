import { View, Text } from "@react-pdf/renderer"
import React from "react"
import createStyles from "../../styles/pdf/Description"
import usePdfTheme from "../../hooks/usePdfTheme"

const Description = ({ data }) => {
  const theme = usePdfTheme()
  const styles = createStyles(theme)

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Profile</Text>
      <Text>{data}</Text>
    </View>
  )
}

export default Description
