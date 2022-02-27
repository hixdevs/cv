import { StyleSheet } from "@react-pdf/renderer"

import global from "./global"

export default theme =>
  StyleSheet.create({
    ...global,
    page: {
      flexDirection: "row",
      padding: 5,
    },

    panel: {
      width: "2%",
      backgroundColor: theme.ternary,
      opacity: 0.5,
    },
  })
