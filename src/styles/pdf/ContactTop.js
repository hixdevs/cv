import { StyleSheet } from "@react-pdf/renderer"

import global from "./global"

export default theme =>
  StyleSheet.create({
    ...global,
    container: {
      color: theme.textLight,
      marginTop: 10,
    },
    email: {
      color: theme.textLight,
      textDecoration: "none",
      textTransform: "uppercase",
    },

    contact: {
      justifyContent: "flex-start",
      justifyItems: "space-around",
      display: "flex",
      flexDirection: "row",
    },
  })
