import { StyleSheet } from "@react-pdf/renderer"

import global from "./global"
import { theme } from "./themes"

export default StyleSheet.create({
  ...global,
  page: {
    flexDirection: "row-reverse",
    padding: 5,
  },

  panel: {
    width: "2%",
    backgroundColor: theme.ternary,
    opacity: 0.5,
  },
})
