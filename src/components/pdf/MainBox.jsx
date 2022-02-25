import { View } from "@react-pdf/renderer"
import React from "react"
import Education from "./Education"
import Experience from "./Experience"
import styles from "../../styles/pdf/MainBox"
import Description from "../../components/pdf/Description"

const MainBox = ({ data }) => {
  const { description, experience, education } = data
  console.log("data:", data)

  return (
    <View style={styles.container}>
      <Description data={description} />
      <Experience data={experience} />
      <Education education={education} />
    </View>
  )
}

export default MainBox
