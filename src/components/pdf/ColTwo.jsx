import { View } from "@react-pdf/renderer"
import React from "react"
import Experience from "./Experience"
import createStyles from "../../styles/pdf/ColTwo"
import usePdfTheme from "../../hooks/usePdfTheme"

const ColOne = ({ data }) => {
  const { experience } = data
  const theme = usePdfTheme()
  const styles = createStyles(theme)

  return (
    <View style={styles.container}>
      <View style={{ width: "95%", margin: "auto" }}>
        {experience ? <Experience data={experience} /> : null}
      </View>
    </View>
  )
}

export default ColOne
