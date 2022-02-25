import { View, Text } from "@react-pdf/renderer"
import React from "react"
import styles from "../../styles/pdf/Experience"
import List, { Item } from "./List"

const Experience = ({ data }) => {
  console.log("data:", data)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Experience</Text>
      <View>
        {data.map((job, i) => (
          <View key={i}>
            <Text>{job.company}</Text>
            <List>
              {job.tasks.map(task => (
                <Item>{task}</Item>
              ))}
            </List>
          </View>
        ))}
      </View>
    </View>
  )
}

export default Experience
