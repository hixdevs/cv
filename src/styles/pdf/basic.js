import { StyleSheet } from "@react-pdf/renderer"

import global from "./global"

export default StyleSheet.create({
  ...global,
  page: {
    flexDirection: "row-reverse",
    padding: 5,
  },
})
