import { StyleSheet, Font } from "@react-pdf/renderer"
import global from "./global"
import OpenSans from "../../OpenSans.ttf"

Font.register({
  family: "OpenSans",
  src: OpenSans,
})
export default StyleSheet.create({
  ...global,

  container: {
    fontSize: 9,
    fontFamily: "OpenSans",
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
