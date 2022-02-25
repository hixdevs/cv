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
      <Interests data={interests} />
      <Rodo data={rodo} />
    </View>
  )
}

export default SideBar
