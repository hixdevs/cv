import { StyleSheet } from "@react-pdf/renderer"

import global from "./global"

export default theme =>
  StyleSheet.create({
    ...global,

    container: {
      fontSize: 10,
      margin: "10 auto",
      display: "flex",
      width: "100%",
      height: "auto",
      padding: "0 15",
    },

    heading: {
      widht: "100%",
      letterSpacing: 1.5,
      fontSize: 12,
      textTransform: "uppercase",
      color: theme.primary,
      marginBottom: 5,
      paddingTop: 3,
    },

    header: {
      fontSize: 10,
      widht: "100%",
      marginBottom: 2,
      alignItems: "center",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },

    school: {
      textDecoration: "none",
      color: theme.textDark,
      marginBottom: 7,
      marginTop: 5,
      fontSize: 11,
    },

    years: {
      color: theme.textDark,
      fontSize: 10,
    },
  })
