import React from "react"
import styles from "../../styles/pdf/Interests"
import { View, Text } from "@react-pdf/renderer"
import List, { Item } from "../../components/pdf/List"

const Interests = () => {
  const interests = [
    "ccok",
    "koko",
    "koaksodjidj",
    "ccok",
    "koko",
    "koaksodjidj",
  ]
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Interests</Text>
      <List>
        {interests.map((inter, i) => (
          <Item key={i}>{inter}</Item>
        ))}
      </List>
    </View>
  )
}

export default Interests
