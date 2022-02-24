import { StyleSheet } from "@react-pdf/renderer"

import global from "./global"

export default StyleSheet.create({
  ...global,

  container: {
    display: "flex",
    // borderTop: "2px solid #4d3319",

    // border: "1px solid black",
    // backgroundColor: "white",
    padding: "5 10",
    margin: "20 auto 0",
    width: "95%",
    height: "auto",
    fontSize: 13,
  },
})
