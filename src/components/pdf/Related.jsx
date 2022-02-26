import React from "react"
import { View, Text, Link } from "@react-pdf/renderer"
import styles from "../../styles/pdf/Related"

const Related = ({ data }) => {
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
