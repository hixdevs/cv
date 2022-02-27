import React from "react"
import Contact from "./Contact"
import Interests from "./Interests"
import Personal from "./Personal"
import { View } from "@react-pdf/renderer"
import styles from "../../styles/pdf/SideBar"
import Rodo from "./Rodo"

const SideBar = ({ data }) => {
  const { personal, contact, interests, rodo } = data

  return (
    <View style={styles.container}>
      <Personal data={personal} />
      <Contact data={contact} />
      {interests.length > 0 ? <Interests data={interests} /> : null}
      {rodo ? <Rodo data={rodo} /> : null}
    </View>
  )
}

export default SideBar
