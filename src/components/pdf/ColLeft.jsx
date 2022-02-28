import { View } from "@react-pdf/renderer"
import React from "react"
import Education from "./Education"
import createStyles from "../../styles/pdf/ColLeft"
import Description from "./Description"
import Technologies from "./Technologies"
import usePdfTheme from "../../hooks/usePdfTheme"
import Related from "./Related"
import Interests from "./Interests"

const ColLeft = ({ data }) => {
  const { description, education, technologies, related, interests } = data

  const theme = usePdfTheme()
  const styles = createStyles(theme)

  return (
    <View style={styles.container}>
      <View style={{ width: "90%", margin: "10 auto" }}>
        {description ? <Description data={description} /> : null}
        {education ? <Education data={education} /> : null}
        {/* <View style={styles.techRel}> */}
        <Technologies data={technologies} />
        <Related data={related} />
        {/* </View> */}
        <Interests data={interests} />
      </View>
    </View>
  )
}

export default ColLeft
