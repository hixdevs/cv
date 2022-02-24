import { StyleSheet } from "@react-pdf/renderer"

import global from "./global"

export default StyleSheet.create({
  ...global,

  container: {
    display: "flex",
    margin: "10 auto",
    width: "90%",
    height: "auto",
    borderTop: "3px solid #fff5f5",

    // border: "1px solid gray",
    // backgroundColor: "white",
  },
})
