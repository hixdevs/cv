import React from "react"
import styles from "../../styles/pdf/Interests"
import { View, Text } from "@react-pdf/renderer"
import List, { Item } from "../../components/pdf/List"

const Interests = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Interests</Text>
      <List>
        {data.map((interests, i) => (
          <Text key={i}>{interests}</Text>
        ))}
      </List>
    </View>
  )
}

export default Interests
