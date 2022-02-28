import { StyleSheet } from "@react-pdf/renderer"

import global from "./global"

export default StyleSheet.create({
  ...global,

  container: {
    display: "flex",
    margin: "10 auto",
    padding: "0 15",
    width: "100%",
    height: "auto",
    lineHeight: 1.2,
  },
})
