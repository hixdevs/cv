import { View, Text, Link } from "@react-pdf/renderer"
import React from "react"
import createStyles from "../../styles/pdf/Experience"
import List, { Item } from "./List"
import { format } from "date-fns"
import usePdfTheme from "../../hooks/usePdfTheme"

const Experience = ({ data }) => {
  data.sort((a, b) =>
    a.positions.map(position => position.years.start) <
    b.positions.map(position => position.years.start)
      ? 1
      : -1,
  )
  const formatDate = date => format(new Date(date), ["MMM yyyy"])
  const theme = usePdfTheme()
  const styles = createStyles(theme)

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Experience</Text>
      <View>
        {data.map((job, idx) => (
          <View key={idx}>
            {job.link ? (
              <Link style={styles.companyLink} href={job.link}>
                {job.company}
              </Link>
            ) : (
              <Text style={styles.companyText}>{job.company}</Text>
            )}
            {job.positions.map((position, idx) => (
              <View key={idx}>
                <View style={styles.header}>
                  <Text style={styles.title}>{position.title}</Text>
                  <Text style={styles.years}>{`${formatDate(
                    position.years.start,
                  )} - ${
                    position.years.end === "now"
                      ? "Now"
                      : formatDate(position.years.end)
                  }`}</Text>
                </View>
                {position.topParagraph ? (
                  <Text style={styles.topParagraph}>
                    {position.topParagraph}
                  </Text>
                ) : null}
                <List>
                  {position.tasks.map((task, idx) => (
                    <Item key={idx}>{task}</Item>
                  ))}
                </List>
                {position.bottomParagraph ? (
                  <Text style={styles.bottomParagraph}>
                    {position.bottomParagraph}
                  </Text>
                ) : null}
              </View>
            ))}
          </View>
        ))}
      </View>
    </View>
  )
}

export default Experience
