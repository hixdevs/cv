import React from "react"
import Contact from "./ContactSide"
import Interests from "./Interests"
import PersonalSide from "./PersonalSide"
import { View } from "@react-pdf/renderer"
import createStyles from "../../styles/pdf/SideBar"
import Rodo from "./Rodo"
import usePdfTheme from "../../hooks/usePdfTheme"
import Related from "./Related"
import Technologies from "./Technologies"

const SideBar = ({ data }) => {
  const { personal, contact, interests, rodo, related, technologies } = data
  const theme = usePdfTheme()
  const styles = createStyles(theme)
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "90%",
          margin: "0 auto",
        }}
      >
        <PersonalSide data={personal} />
        {contact ? <Contact data={contact} /> : null}
        {related ? <Related data={related} /> : null}
        {technologies ? <Technologies data={technologies} /> : null}
        {interests.length > 0 ? <Interests data={interests} /> : null}
        {rodo ? <Rodo data={rodo} /> : null}
      </View>
    </View>
  )
}

export default SideBar
