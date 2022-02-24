import { StyleSheet } from "@react-pdf/renderer"

import global from "./global"

export default StyleSheet.create({
  ...global,

  container: {
    display: "flex",
    backgroundColor: "#f5f0eb",
    color: "#333333",
    width: "65%",
  },
})
