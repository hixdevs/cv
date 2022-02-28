import { StyleSheet } from "@react-pdf/renderer"

import global from "./global"

export default theme =>
  StyleSheet.create({
    ...global,

    container: {
      display: "flex",
      margin: "10 auto",
      padding: "5 10",
      width: "95%",
      height: "auto",
    },

    heading: {
      letterSpacing: 1.5,
      fontSize: 11,
      textTransform: "uppercase",
      color: theme.heading,
      marginTop: 5,
    },

    header: {
      alignItems: "center",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },

    school: {
      textDecoration: "none",
      color: theme.ternary,
      marginBottom: 8,
      marginTop: 8,
      textTransform: "uppercase",
    },

    description: {
      lineHeight: 1.3,
    },
  })
