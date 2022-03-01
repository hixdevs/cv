import { StyleSheet } from "@react-pdf/renderer"
import global from "./global"

export default StyleSheet.create({
  ...global,

  container: {
    width: "30%",
    // height: "100%",
    position: "absolute",
    right: "70%",
    // display: "flex",
    // border: "1px solid black",
  },
})
