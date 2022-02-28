import { View } from "@react-pdf/renderer"
import React from "react"
import Experience from "./Experience"
import createStyles from "../../styles/pdf/ColRight"
import usePdfTheme from "../../hooks/usePdfTheme"

const ColLeft = ({ data }) => {
  const { experience } = data
  const theme = usePdfTheme()
  const styles = createStyles(theme)

  return (
    <View style={styles.container}>
      <View style={{ width: "100%", margin: "10 auto", paddingRight: 10 }}>
        {experience ? <Experience data={experience} /> : null}
      </View>
    </View>
  )
}

export default ColLeft
