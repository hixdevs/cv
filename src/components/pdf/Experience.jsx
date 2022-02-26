import { View, Text, Link } from "@react-pdf/renderer"
import React from "react"
import styles from "../../styles/pdf/Experience"
import List, { Item } from "./List"
import { format } from "date-fns"

const Experience = ({ data }) => {
  data.sort((a, b) => (a.years.start < b.years.start ? 1 : -1))
  const formatDate = date => format(new Date(date), ["MMM yyyy"])

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Experience</Text>
      <View>
        {data.map((job, idx) => (
          <View key={idx}>
            <View style={styles.header}>
              <Link style={styles.company} href={job.link}>
                {job.company}
              </Link>
              <Text style={styles.years}>{`${formatDate(job.years.start)} - ${
                job.years.end === "now" ? "Now" : formatDate(job.years.end)
              }`}</Text>
            </View>
            <List>
              {job.tasks.map((task, idx) => (
                <Item style={styles.list} key={idx}>
                  {task}
                </Item>
              ))}
            </List>
          </View>
        ))}
      </View>
    </View>
  )
}

export default Experience
