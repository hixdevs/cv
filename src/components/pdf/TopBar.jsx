import React from "react"
import PersonalTop from "./PersonalTop"
import { View } from "@react-pdf/renderer"
import createStyles from "../../styles/pdf/TopBar"
import usePdfTheme from "../../hooks/usePdfTheme"

const TopBar = ({ data }) => {
  const theme = usePdfTheme()
  const styles = createStyles(theme)
  return (
    <View style={styles.container}>
      <PersonalTop data={data} />
    </View>
  )
}

export default TopBar
