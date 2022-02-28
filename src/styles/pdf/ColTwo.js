import { StyleSheet, Font } from "@react-pdf/renderer"
import global from "./global"
import Prompt from "../../Prompt.ttf"

Font.register({
  family: "Prompt",
  src: Prompt,
})

export default theme =>
  StyleSheet.create({
    ...global,

    container: {
      // margin: "auto 0",
      display: "flex",
      alignContent: "center",
      backgroundColor: "#fafafa",
      width: "50%",
    },
  })
