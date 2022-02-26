import { View } from "@react-pdf/renderer"
import React from "react"
import Education from "./Education"
import Experience from "./Experience"
import styles from "../../styles/pdf/MainBox"
import Description from "../../components/pdf/Description"
import Technologies from "./Technologies"
import Related from "./Related"

const MainBox = ({ data }) => {
  const { description, experience, education, technologies, related } = data
  console.log("data:", data)

  return (
    <View style={styles.container}>
      {description ? <Description data={description} /> : null}
      {experience ? <Experience data={experience} /> : null}
      {education ? <Education education={education} /> : null}
      <View style={styles.techRel}>
        <Technologies data={technologies} />
        <Related data={related} />
      </View>

      {}
    </View>
  )
}

export default MainBox
