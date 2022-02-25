import { Text, View } from "@react-pdf/renderer"
import React from "react"
import styles from "../../styles/pdf/Technologies"
import List, { Item } from "./List"

const Technologies = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Technologies</Text>
      <List>
        {data.map((technologies, i) => (
          <Item key={i}>{technologies.join(" ")}</Item>
        ))}
      </List>
    </View>
  )
}

export default Technologies
