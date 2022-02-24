import { View, Text, Image } from "@react-pdf/renderer"
import React from "react"
import styles from "../../styles/pdf/Personal"
import Contact from "./Contact"

const Personal = () => {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image src="../../../public/img/profile.jpg" />
      </View>
      <View style={styles.name}>
        <Text>Olagusia </Text>
        <Text>Plagusia</Text>
      </View>
    </View>
  )
}

export default Personal
