import { View } from "@react-pdf/renderer"
import React from "react"
import Education from "./Education"
import Experience from "./Experience"
import createStyles from "../../styles/pdf/MainBox"
import Description from "../../components/pdf/Description"

import usePdfTheme from "../../hooks/usePdfTheme"

const MainBox = ({ data }) => {
  const { description, experience, education } = data

  const theme = usePdfTheme()
  const styles = createStyles(theme)

  return (
    <View style={styles.container}>
      <View
        style={{
          maxHeight: "100%",
          width: "95%",
          margin: "auto",
        }}
      >
        {description ? <Description data={description} /> : null}
        {experience ? <Experience data={experience} /> : null}
        {education ? <Education data={education} /> : null}
      </View>
    </View>
  )
}

export default MainBox
