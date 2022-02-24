import { Text, View } from "@react-pdf/renderer"
import React from "react"
import styles from "../../styles/pdf/Technologies"
import List, { Item } from "./List"

const Technologies = () => {
  const skills = ["ccok", "koko", "koaksodjidj", "ccok"]
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Technologies</Text>
      <List>
        {skills.map((skill, i) => (
          <Item key={i}>{skill}</Item>
        ))}
      </List>
    </View>
  )
}

export default Technologies
