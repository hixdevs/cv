import { StyleSheet } from "@react-pdf/renderer"

import global from "./global"

export default StyleSheet.create({
  ...global,

  item: {
    marginBottom: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  bulletPoint: {
    width: 13,
    fontSize: 8,
    paddingLeft: 2,
  },

  content: {
    // fontSize: "20px",
  },
})
