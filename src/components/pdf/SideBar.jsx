import React from "react"
import Contact from "./Contact"
import Interests from "./Interests"
import PersonalSide from "./PersonalSide"
import { View } from "@react-pdf/renderer"
import createStyles from "../../styles/pdf/SideBar"
import Rodo from "./Rodo"
import usePdfTheme from "../../hooks/usePdfTheme"
// import Related from "./Related"
// import Technologies from "./Technologies"

const SideBar = ({ data }) => {
  const { personal, contact, interests, rodo, related, technologies } = data
  const theme = usePdfTheme()
  const styles = createStyles(theme)
  return (
    <View style={styles.container}>
      <PersonalSide data={personal} />
      <Contact data={contact} />
      {/* <Related data={related} /> */}
      {/* <Technologies data={technologies} /> */}

      {interests.length > 0 ? <Interests data={interests} /> : null}

      {rodo ? <Rodo data={rodo} /> : null}
    </View>
  )
}

export default SideBar
