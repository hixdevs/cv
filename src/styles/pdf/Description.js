import { StyleSheet } from "@react-pdf/renderer"

import global from "./global"

export default StyleSheet.create({
  ...global,

  container: {
    fontSize: 10,
    display: "flex",
    padding: "5 10",

    // padding: "0 20",
    margin: "20 auto 0",
    width: "90%",
    height: "auto",
    lineHeight: 1.2,
  },
})
