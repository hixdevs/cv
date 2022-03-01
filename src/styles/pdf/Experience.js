import { StyleSheet } from "@react-pdf/renderer"
import global from "./global"

export default theme =>
  StyleSheet.create({
    ...global,

    container: {
      display: "flex",
      padding: "5 15",
      width: "100%",
      maxHeight: "100%",
    },

    company: {
      textDecoration: "none",
      color: theme.link,
      // marginBottom: 8,
      marginTop: 8,
      textTransform: "uppercase",
    },

    header: {
      alignItems: "center",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },

    years: {
      textTransform: "uppercase",
    },
    heading: {
      letterSpacing: 1.5,
      fontSize: 11,
      textTransform: "uppercase",
      color: theme.secondary,
    },

    title: {
      marginTop: 8,
      marginBottom: 5,
    },

    list: {
      marginBottom: 5,
    },
  })
