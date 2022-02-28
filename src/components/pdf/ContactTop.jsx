import { View, Text, Link } from "@react-pdf/renderer"
import React from "react"
import styles from "../../styles/pdf/ContactTop"

const Contact = ({ data }) => {
  const { email, address, phone } = data
  return (
    <View style={styles.container}>
      <View style={styles.contact}>
        <Text style={styles.heading}>Contact</Text>
        <Text>{phone}</Text>
        <Link style={styles.email} href={`mailto:${email}`}>
          {email}
        </Link>
      </View>
      {address.showAddress ? (
        <View style={styles.address}>
          <Text>{address.street}, </Text>
          <Text>{address.postCode}, </Text>
          <Text>{address.city}, </Text>
          <Text>{address.state}, </Text>
          <Text>{address.country}</Text>
        </View>
      ) : null}
    </View>
  )
}

export default Contact
