import { StyleSheet } from "@react-pdf/renderer"

import global from "./global"

export default StyleSheet.create({
  ...global,

  container: {
    display: "flex",
    borderRight: "3px solid #c2c2d6",
    backgroundColor: "#e0e0eb",
    width: "35%",
  },
})
