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
    padding: "0 5",
    fontSize: 9,
    lineHeight: 1,
    fontFamily: "OpenSans",
    display: "flex",
    backgroundColor: "#f5f3f0",
    color: "#333333",
    width: "63%",
  },

  // techRel: {
  //   padding: "2 10",
  //   flexDirection: "row",
  //   margin: "0 auto",
  //   width: "90%",
  // justifyContent: "space-around",
  // },
})
