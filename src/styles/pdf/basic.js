import { StyleSheet } from "@react-pdf/renderer"

import global from "./global"

export default StyleSheet.create({
  ...global,
  page: {
    flexDirection: "row-reverse",
    padding: 5,
  },

  panel: {
    width: "2%",
    backgroundColor: "#b59c8a",
    opacity: 0.6,
  },
})
