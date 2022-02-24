import { View, Text, Image } from "@react-pdf/renderer"
import React from "react"
import styles from "../../styles/pdf/Personal"

const Personal = () => {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image src="../../../public/img/profile.jpg" />
      </View>
      <View style={styles.name}>
        <Text>Wiktor </Text>
        <Text>Plaga</Text>
      </View>
      <View>
        <Text style={styles.title}>Software Engineer</Text>
      </View>
    </View>
  )
}

export default Personal
