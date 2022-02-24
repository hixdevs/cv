import { View } from "@react-pdf/renderer"
import React from "react"
import Education from "./Education"
import Experience from "./Experience"
import styles from "../../styles/pdf/MainBox"
import Description from "../../components/pdf/Description"

const MainBox = () => {
  return (
    <View style={styles.container}>
      <Description />
      <Experience />
      <Education />
    </View>
  )
}

export default MainBox
