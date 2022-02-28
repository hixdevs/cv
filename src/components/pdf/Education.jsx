import { Text, View, Link } from "@react-pdf/renderer"
import React from "react"
import createStyles from "../../styles/pdf/Education"
import List, { Item } from "./List"
import { format } from "date-fns"
import usePdfTheme from "../../hooks/usePdfTheme"

const Education = ({ data }) => {
  const formatDate = date => format(new Date(date), ["yyyy"])
  const theme = usePdfTheme()
  const styles = createStyles(theme)
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Education</Text>
      <View>
        {data.map((school, idx) => (
          <View key={idx}>
            <View style={styles.header}>
              <Text style={styles.school}>{school.school}</Text>
              <Text style={styles.years}>{`${formatDate(
                school.years.start,
              )} - ${
                school.years.end === "now"
                  ? "Now"
                  : formatDate(school.years.end)
              }`}</Text>
            </View>
            <Text
              style={styles.description}
            >{`${school.degree} of ${school.faculty}`}</Text>
            <Text>{`Specialization - ${school.specialization}`}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}

export default Education
