import { View, Text, Link, Image } from "@react-pdf/renderer"
import React from "react"
import styles from "../../styles/pdf/Contact"
import { AiOutlineMail } from "react-icons/ai"

const Contact = () => {
  return (
    <View style={styles.container}>
      <Link style={styles.email} href="mailto:mowianamnieola@gmail.com">
        mowianamnieola@gmail.com
      </Link>
      <Text>792 808 932</Text>
      <View style={styles.address}>
        <Text>Filipowska 5, </Text>
        <Text>16-423 </Text>
        <Text>Bakalarzewo, </Text>
        <Text>Podlsaskie, </Text>
        <Text>Polska</Text>
      </View>
    </View>
  )
}

export default Contact
