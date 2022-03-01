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
      fontSize: 11,
      textDecoration: "none",
      color: theme.link,
      // marginBottom: 8,
      marginTop: 8,
      // textTransform: "uppercase",
    },

    header: {
      marginTop: 8,
      marginBottom: 5,
      alignItems: "center",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      color: theme.secondary,
    },

    years: {
      // textTransform: "uppercase",
    },
    heading: {
      letterSpacing: 1.5,
      fontSize: 11,
      textTransform: "uppercase",
      color: theme.primary,
    },

    list: {
      marginBottom: 5,
    },
    title: {
      fontSize: 10,
    },
  })
