import { View, Text, Image } from "@react-pdf/renderer"
import React from "react"
import styles from "../../styles/pdf/Personal"

const Personal = ({ data }) => {
  console.log("data:", data)

  const { firstName, lastName, photo, title } = data

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        {/* for Image see: https://react-pdf.org/components#source-object */}
        <Image src={`../../../public/img/${photo}`} />
      </View>
      <View style={styles.name}>
        <Text>{firstName} </Text>
        <Text>{lastName}</Text>
      </View>
      <View>{title ? <Text style={styles.title}>{title}</Text> : null}</View>
    </View>
  )
}

export default Personal
