import { StyleSheet, Font } from "@react-pdf/renderer"
import global from "./global"
import Ubuntu from "../../Ubuntu.ttf"

Font.register({
  family: "Ubuntu",
  src: Ubuntu,
})
export default StyleSheet.create({
  ...global,

  container: {
    fontFamily: "Ubuntu",
    display: "flex",
    backgroundColor: "#42413e",
    color: "white",
    width: "35%",
  },

  layout: {
    display: "flex",
    width: "95%",
    margin: "0 auto",
  },
})
