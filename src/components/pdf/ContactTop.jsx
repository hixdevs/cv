import { View, Text, Link } from "@react-pdf/renderer"
import React from "react"
import createStyles from "../../styles/pdf/ContactTop"
import usePdfTheme from "../../hooks/usePdfTheme"

const Contact = ({ data }) => {
  const { email, address, phone } = data
  const { street, postCode, city, state, country } = address
  const theme = usePdfTheme()
  const styles = createStyles(theme)
  return (
    <View style={styles.container}>
      <View style={styles.contact}>
        <Text>
          {phone ? phone : null}
          {"  "}
          {
            <Link style={styles.email} href={`mailto:${email}`}>
              {email}
            </Link>
          }
          {address.showAddress ? (
            <View>
              <Text>
                {`  ${street}, ${postCode}, ${city}, ${state}, ${country} `}{" "}
              </Text>
            </View>
          ) : null}
        </Text>
      </View>
    </View>
  )
}

export default Contact
