import { View, Text } from "@react-pdf/renderer"
import React from "react"
import styles from "../../styles/pdf/Description"

const Description = () => {
  return (
    <View style={styles.container}>
      <Text>
        Software Engineer with demonstrated experience in both code development
        and maintenance. Possesses a strong ability to identify issues and offer
        creative solutions to complex situations, based on effective research,
        data analysis, and compelling communication. Eagers to learn new
        technologies, chooses the best fit for the requirement.
      </Text>
    </View>
  )
}

export default Description
