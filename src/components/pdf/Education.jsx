import { Text, View } from "@react-pdf/renderer"
import React from "react"
import createStyles from "../../styles/pdf/Education"
import { format } from "date-fns"
import usePdfTheme from "../../hooks/usePdfTheme"

const Education = ({ data }) => {
  console.log("data:", data)

  const formatDate = date => format(new Date(date), ["yyyy"])
  const theme = usePdfTheme()
  const styles = createStyles(theme)
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Education</Text>
      <View>
        {data.map((school, idx) => (
          <View key={idx}>
            <Text style={styles.school}>{school.school}</Text>
            <View>
              {school.degrees.map((degree, idx) => (
                <View key={idx} style={{ marginBottom: 5 }}>
                  <View style={styles.header}>
                    <Text>{` ${school.faculty} - ${degree.degree}`}</Text>
                    <Text style={styles.years}>{`${formatDate(
                      degree.years.start,
                    )} - ${
                      degree.years.end === "now"
                        ? "Now"
                        : formatDate(degree.years.end)
                    }`}</Text>
                  </View>
                  <Text style={styles.description}>
                    {degree.specialization
                      ? `Specialization - ${degree.specialization}`
                      : null}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        ))}
      </View>
      {/* <View>
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
      </View> */}
    </View>
  )
}

export default Education
