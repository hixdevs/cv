import { StyleSheet } from "@react-pdf/renderer"

import global from "./global"

export default theme =>
  StyleSheet.create({
    ...global,
    container: {
      margin: "10 auto",
      padding: "0 15",
      width: "100%",
      display: "flex",
      height: "auto",
    },

    contact: {
      lineHeight: 1.8,
      letterSpacing: 0.6,
    },

    email: {
      color: theme.link,
      textDecoration: "none",
      textTransform: "uppercase",
    },

    address: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      lineHeight: 1.3,
    },

    heading: {
      letterSpacing: 1.5,
      fontSize: 11,
      textTransform: "uppercase",
      marginBottom: 10,
      color: theme.primary,
    },
  })
