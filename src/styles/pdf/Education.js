import { StyleSheet } from "@react-pdf/renderer"

import global from "./global"

export default theme =>
  StyleSheet.create({
    ...global,

    container: {
      display: "flex",
      width: "100%",
      height: "auto",
      display: "flex",
      padding: "0 20",
    },

    heading: {
      widht: "100%",
      letterSpacing: 1.5,
      fontSize: 11,
      textTransform: "uppercase",
      color: theme.secondary,
      marginTop: 5,
    },

    header: {
      widht: "100%",
      alignItems: "center",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },

    school: {
      textDecoration: "none",
      color: theme.secondary,
      marginBottom: 5,
      marginTop: 5,
      textTransform: "uppercase",
    },

    description: {
      lineHeight: 1.3,
    },
  })
