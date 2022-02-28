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

    source: {
      textDecoration: "none",
      color: theme.link,
      lineHeight: 1.5,
    },
    heading: {
      letterSpacing: 1.5,
      fontSize: 11,
      textTransform: "uppercase",
      marginBottom: 10,
      color: theme.secondary,
    },
  })
