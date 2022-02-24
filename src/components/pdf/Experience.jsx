import { View, Text } from "@react-pdf/renderer"
import React from "react"
import styles from "../../styles/pdf/Experience"
import List, { Item } from "./List"

const Experience = () => {
  const skills = ["ccok", "koko", "koaksodjidj", "ccok"]

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Experience</Text>
      <List>
        {skills.map((skill, i) => (
          <Item key={i}>{skill}</Item>
        ))}
      </List>
    </View>
  )
}

export default Experience
