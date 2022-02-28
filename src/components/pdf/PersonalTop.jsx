import { View, Text, Image } from "@react-pdf/renderer"
import React from "react"
import createStyles from "../../styles/pdf/PersonalTop"
import usePdfTheme from "../../hooks/usePdfTheme"
import DescriptionTop from "../pdf/DescriptionTop"
// import ContactTop from "../pdf/ContactTop"

const PersonalTop = ({ data }) => {
  console.log("data:", data)

  // const { contact, description } = data
  const { firstName, lastName, title } = data.personal

  const theme = usePdfTheme()
  const styles = createStyles(theme)
  return (
    <View style={styles.container}>
      <View style={styles.imgageContainer}>
        <Image
          src={{
            uri: "http://localhost:3000/img/wp.jpg",
            method: "GET",
            headers: {},
            body: "",
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.personal}>
        <View style={styles.name}>
          <Text>{`${firstName} ${lastName}`} </Text>
        </View>
        <View>{title ? <Text style={styles.title}>{title}</Text> : null}</View>
        {/* <DescriptionTop data={description} /> */}
        {/* <ContactTop data={contact} /> */}
      </View>
    </View>
  )
}

export default PersonalTop