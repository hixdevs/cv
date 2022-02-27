import React from "react"
import Contact from "./Contact"
import Interests from "./Interests"
import PersonalHor from "./PersonalHor"
import { View } from "@react-pdf/renderer"
import createStyles from "../../styles/pdf/TopBar"
import usePdfTheme from "../../hooks/usePdfTheme"

const TopBar = ({ data }) => {
  const { personal } = data
  const theme = usePdfTheme()
  const styles = createStyles(theme)
  return (
    <View style={styles.container}>
      <PersonalHor data={personal} />
    </View>
  )
}

export default TopBar
