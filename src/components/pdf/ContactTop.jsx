import { View, Text, Link } from "@react-pdf/renderer"
import React from "react"
import createStyles from "../../styles/pdf/ContactTop"
import usePdfTheme from "../../hooks/usePdfTheme"

const Contact = ({ data }) => {
  const { email, address, phone } = data
  const theme = usePdfTheme()
  const styles = createStyles(theme)
  return (
    <View style={styles.container}>
      <View style={styles.contact}>
        <Text>{phone}</Text>
        <Link style={styles.email} href={`mailto:${email}`}>
          {email}
        </Link>
        {address.showAddress ? (
          <View>
            <Text>
              {`${address.street}, ${address.postCode}, ${address.city}, ${address.state}, ${address.country} `}{" "}
            </Text>
          </View>
        ) : null}
      </View>
    </View>
  )
}

export default Contact
