import { StyleSheet } from "@react-pdf/renderer"

import global from "./global"

export default theme =>
  StyleSheet.create({
    ...global,
    page: {
      flexDirection: "row",
    },
    panel: {
      width: "2%",
      backgroundColor: theme.secondary,
      opacity: 0.5,
    },
  })
