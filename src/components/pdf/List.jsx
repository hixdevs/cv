import React from "react"
import { Text, View } from "@react-pdf/renderer"
import styles from "../../styles/pdf/List"

const List = ({ children }) => children

export const Item = ({ children }) => (
  <View style={styles.item}>
    <Text style={styles.bulletPoint}>•</Text>
    <Text style={styles.content}>{children}</Text>
  </View>
)
export default List
