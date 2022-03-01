import { StyleSheet } from "@react-pdf/renderer"

import global from "./global"

export default theme =>
  StyleSheet.create({
    ...global,
    container: {
      margin: "10 auto",
      padding: "0 15",
      width: "100%",
      height: "auto",
    },

    heading: {
      letterSpacing: 1.5,
      fontSize: 11,
      textTransform: "uppercase",
      marginBottom: 10,
      color: theme.primary,
    },
    technologies: {
      lineHeight: 1.3,
    },
  })
