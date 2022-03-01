import { StyleSheet } from "@react-pdf/renderer"

import global from "./global"

export default theme =>
  StyleSheet.create({
    ...global,

    container: {
      display: "flex",
      margin: "6 auto 10",
      width: "90%",
      lineHeight: 1.2,
    },
    heading: {
      letterSpacing: 1.5,
      fontSize: 11,
      textTransform: "uppercase",
      color: theme.secondary,
      marginBottom: 10,
    },
  })
