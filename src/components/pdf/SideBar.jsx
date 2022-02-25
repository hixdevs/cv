import React from "react"
import Contact from "./Contact"
import Interests from "./Interests"
import Personal from "./Personal"
import { View } from "@react-pdf/renderer"
import styles from "../../styles/pdf/SideBar"
import Rodo from "./Rodo"
import Technologies from "./Technologies"

const SideBar = () => {
  return (
    <View style={styles.container}>
      {/* <View style={styles.layout}> */}
      <Personal />
      <Contact />
      <Technologies />
      <Interests />
      <Rodo />
      {/* </View> */}
    </View>
  )
}

export default SideBar
