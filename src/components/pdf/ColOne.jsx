import { View } from "@react-pdf/renderer"
import React from "react"
import Education from "./Education"
import createStyles from "../../styles/pdf/ColOne"
import Description from "../../components/pdf/Description"
import Technologies from "./Technologies"
import usePdfTheme from "../../hooks/usePdfTheme"
import Contact from "./Contact"
import Related from "./Related"

const ColOne = ({ data }) => {
  console.log("description:", description)

  console.log("data:", data)

  const { description, contact, education, technologies, related } = data
  console.log("education:", education)

  const theme = usePdfTheme()
  const styles = createStyles(theme)

  return (
    <View style={styles.container}>
      <View style={{ width: "95%", margin: "auto" }}>
        {description ? <Description data={description} /> : null}
        <View style={styles.techRel}>
          <Technologies data={technologies} />
          <Related data={related} />
        </View>
        {education ? <Education data={education} /> : null}
        <Contact data={contact} />
      </View>
    </View>
  )
}

export default ColOne
