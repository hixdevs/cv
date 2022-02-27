import { View, Text } from "@react-pdf/renderer"
import React from "react"
import styles from "../../styles/pdf/DescriptionTop"

const Description = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text>{data}</Text>
    </View>
  )
}

export default Description
