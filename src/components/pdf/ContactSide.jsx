import { View, Text, Link } from "@react-pdf/renderer"
import React from "react"
import createStyles from "../../styles/pdf/ContactSide"
import usePdfTheme from "../../hooks/usePdfTheme"

const ContactSide = ({ data }) => {
  const { email, address, phone } = data
  const theme = usePdfTheme()
  const styles = createStyles(theme)
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Contact</Text>
      <View style={styles.contact}>
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

export default ContactSide
