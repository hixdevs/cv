import { StyleSheet } from "@react-pdf/renderer"

import global from "./global"

export default StyleSheet.create({
  ...global,

  item: {
    marginBottom: 2,
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 15,
  },
  bulletPoint: {
    width: 10,
    fontSize: 8,
  },
})
