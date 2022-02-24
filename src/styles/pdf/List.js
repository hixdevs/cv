import { StyleSheet } from "@react-pdf/renderer"

import global from "./global"

export default StyleSheet.create({
  ...global,

  item: {
    fontSize: 13,
    marginBottom: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  bulletPoint: {
    width: 10,
    fontSize: 10,
    paddingLeft: 2,
  },

  content: {
    // fontSize: "20px",
  },
})
