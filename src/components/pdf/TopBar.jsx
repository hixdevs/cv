import React from "react"
import PersonalTop from "./PersonalTop"
import { View } from "@react-pdf/renderer"
import createStyles from "../../styles/pdf/TopBar"
import usePdfTheme from "../../hooks/usePdfTheme"

const TopBar = ({ data }) => {
  console.log("data:", data)

  // const { personal, contact } = data
  const theme = usePdfTheme()
  const styles = createStyles(theme)
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <PersonalTop data={data} />
      </View>
    </View>
  )
}

export default TopBar
