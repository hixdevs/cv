import React from "react"
import Contact from "./Contact"
import Interests from "./Interests"
import Personal from "./Personal"
import { View } from "@react-pdf/renderer"
import styles from "../../styles/pdf/SideBar"
import Rodo from "./Rodo"
import Technologies from "./Technologies"

const SideBar = ({ data }) => {
  const { personal, contact, technologies, interests, rodo } = data

  return (
    <View style={styles.container}>
      <Personal data={personal} />
      <Contact data={contact} />
      <Technologies data={technologies} />
      <Interests data={interests} />
      <Rodo data={rodo} />
    </View>
  )
}

export default SideBar
