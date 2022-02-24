import { View } from "@react-pdf/renderer"
import React from "react"
import Education from "./Education"
import Experience from "./Experience"
import styles from "../../styles/pdf/MainBox"

const MainBox = () => {
  return (
    <View style={styles.mainBox}>
      <Experience />
      <Education />
    </View>
  )
}

export default MainBox
