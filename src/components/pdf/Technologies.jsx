import { Text, View } from "@react-pdf/renderer"
import React from "react"
import createStyles from "../../styles/pdf/Technologies"
import List from "./List"
import usePdfTheme from "../../hooks/usePdfTheme"

const Technologies = ({ data }) => {
  const theme = usePdfTheme()
  const styles = createStyles(theme)

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Technologies</Text>
      <View style={styles.technologies}>
        <List>
          {data
            ? data.map((technologies, i) => (
                <Text key={i}>{technologies.join(", ")}</Text>
              ))
            : null}
        </List>
      </View>
    </View>
  )
}

export default Technologies
