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
    backgroundColor: "#734448",
    opacity: 0.5,
  },
})
