import { View, Text, Link } from "@react-pdf/renderer"
import React from "react"
import styles from "../../styles/pdf/Contact"
// import { AiOutlineMail } from "react-icons/ai"

const Contact = ({ data }) => {
  const { email, address, phone } = data
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact</Text>
      <Link style={styles.email} href={`mailto:${email}`}>
        {email}
      </Link>
      <Text>{phone}</Text>
      <View style={styles.address}>
        <Text>{address.street}, </Text>
        <Text>{address.postCode}, </Text>
        <Text>{address.city}, </Text>
        <Text>{address.state}, </Text>
        <Text>{address.country}</Text>
      </View>
    </View>
  )
}

export default Contact
