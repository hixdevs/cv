import React from "react"
import Contact from "./Contact"
import Interests from "./Interests"
import Personal from "./Personal"
import Skills from "./Technologies"
import { View } from "@react-pdf/renderer"
import styles from "../../styles/pdf/SideBar"
import Rodo from "./Rodo"

const SideBar = () => {
  return (
    // <View >
    <View style={styles.container}>
      <Personal />
      <Contact />
      <Skills />
      <Interests />
      <Rodo />
    </View>
    // </View>
  )
}

export default SideBar
