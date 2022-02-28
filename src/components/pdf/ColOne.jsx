import { View } from "@react-pdf/renderer"
import React from "react"
import Education from "./Education"
import createStyles from "../../styles/pdf/ColOne"
import Description from "../../components/pdf/Description"
import Technologies from "./Technologies"
import usePdfTheme from "../../hooks/usePdfTheme"

const ColOne = ({ data }) => {
  console.log("description:", description)

  console.log("data:", data)

  const { description, experience, education, technologies, related } = data
  console.log("education:", education)

  const theme = usePdfTheme()
  const styles = createStyles(theme)

  return (
    <View style={styles.container}>
      {description ? <Description data={description} /> : null}
      <Technologies data={technologies} />
      {education ? <Education data={education} /> : null}
    </View>
  )
}

export default ColOne
