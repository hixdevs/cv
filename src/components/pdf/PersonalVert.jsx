import { View, Text, Image } from "@react-pdf/renderer"
import React from "react"
import createStyles from "../../styles/pdf/PersonalVert"
import usePdfTheme from "../../hooks/usePdfTheme"

const PersonalVert = ({ data }) => {
  const { firstName, lastName, title } = data
  const theme = usePdfTheme()
  const styles = createStyles(theme)
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image
          src={{
            uri: "http://localhost:3000/img/wp.jpg",
            method: "GET",
            headers: {},
            body: "",
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.name}>
        <Text>{firstName} </Text>
        <Text>{lastName}</Text>
      </View>
      <View>{title ? <Text style={styles.title}>{title}</Text> : null}</View>
    </View>
  )
}

export default PersonalVert
