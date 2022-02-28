import React from "react"
import createStyles from "../../styles/pdf/Interests"
import { View, Text } from "@react-pdf/renderer"
import List from "../../components/pdf/List"
import usePdfTheme from "../../hooks/usePdfTheme"

const Interests = ({ data }) => {
  const theme = usePdfTheme()
  const styles = createStyles(theme)
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Interests</Text>
      <View style={styles.interests}>
        <List>
          {data.map((interests, i) => (
            <Text key={i}>{interests.join(", ")}</Text>
          ))}
        </List>
      </View>
    </View>
  )
}

export default Interests
