import { StyleSheet, Font } from "@react-pdf/renderer"

import global from "./global"

export default StyleSheet.create({
  ...global,

  container: {
    fontSize: 10,
    margin: "15 auto 0",
    lineHeight: 1.3,
  },
})
