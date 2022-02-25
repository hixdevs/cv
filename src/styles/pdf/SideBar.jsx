import { StyleSheet, Font } from "@react-pdf/renderer"
import global from "./global"
import Oswald from "../../Oswald.ttf"

Font.register({
  family: "Oswald",
  src: Oswald,
})

export default StyleSheet.create({
  ...global,

  container: {
    fontFamily: "Oswald",
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
