import { StyleSheet } from "@react-pdf/renderer"

import global from "./global"

export default StyleSheet.create({
  ...global,

  container: {
    display: "flex",
    margin: "10 auto",
    padding: "5 10",
    borderTop: "2px solid #4d3319",
    width: "95%",
    height: "auto",
  },
})
