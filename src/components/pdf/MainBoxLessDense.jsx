import { View } from "@react-pdf/renderer"
import React from "react"
import Education from "./Education"
import Experience from "./Experience"
import createStyles from "../../styles/pdf/MainBoxLessDense"
import Description from "../../components/pdf/Description"
import Technologies from "./Technologies"
import Related from "./Related"
import usePdfTheme from "../../hooks/usePdfTheme"

const MainBoxLessDense = ({ data }) => {
  const { description, experience, education, technologies, related } = data

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
        <View style={styles.relTech}>
          {technologies ? <Technologies data={technologies} /> : null}
          {related ? <Related data={related} /> : null}
        </View>
      </View>
    </View>
  )
}

export default MainBoxLessDense
