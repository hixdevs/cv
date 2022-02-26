import React from "react"
import Contact from "./Contact"
import Interests from "./Interests"
import Personal from "./Personal"
import { View } from "@react-pdf/renderer"
import styles from "../../styles/pdf/SideBar"
import Rodo from "./Rodo"
// import Related from "./Related"

const SideBar = ({ data }) => {
  const { personal, contact, interests, rodo, related } = data
  console.log("interests:", interests)

  return (
    <View style={styles.container}>
      <Personal data={personal} />
      <Contact data={contact} />
      {/* {related.length > 0 ? <Related data={related} /> : null} */}
      {interests.length > 0 ? <Interests data={interests} /> : null}
      {rodo ? <Rodo data={rodo} /> : null}
    </View>
  )
}

export default SideBar
