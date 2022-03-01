import { StyleSheet } from "@react-pdf/renderer"

import global from "./global"

export default theme =>
  StyleSheet.create({
    ...global,

    container: {
      margin: "10 auto",
      display: "flex",
      width: "100%",
      height: "auto",
      padding: "0 15",
    },

    heading: {
      widht: "100%",
      letterSpacing: 1.5,
      fontSize: 11,
      textTransform: "uppercase",
      color: theme.secondary,
      marginTop: 5,
      marginBottom: 5,
    },

    header: {
      widht: "100%",
      // marginBottom: 2,
      alignItems: "center",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      // textTransform: "uppercase",
    },

    school: {
      textDecoration: "none",
      color: theme.secondary,
      marginBottom: 3,
      marginTop: 5,
      textTransform: "uppercase",
    },
  })
