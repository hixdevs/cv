import { Text, View } from "@react-pdf/renderer"
import React from "react"
import styles from "../../styles/pdf/Skills"
import List, { Item } from "./List"

const Skills = () => {
  const skills = ["ccok", "koko", "koaksodjidj", "ccok"]
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Skills</Text>
      <List>
        {skills.map((skill, i) => (
          <Item key={i}>{skill}</Item>
        ))}
      </List>
    </View>
  )
}

export default Skills
