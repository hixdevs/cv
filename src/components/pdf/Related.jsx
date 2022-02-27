import React from "react"
import { View, Text, Link } from "@react-pdf/renderer"
import createStyles from "../../styles/pdf/Related"
import usePdfTheme from "../../hooks/usePdfTheme"

const Related = ({ data }) => {
  const theme = usePdfTheme()
  const styles = createStyles(theme)

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Related</Text>
      <View>
        {data.map((source, idx) => (
          <Link style={styles.source} key={idx} href={source.url}>
            {source.name}
          </Link>
        ))}
      </View>
    </View>
  )
}

export default Related
