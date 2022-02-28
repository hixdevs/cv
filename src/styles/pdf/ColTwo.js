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
      border: "1px solid black",
      backgroundColor: "#fafafa",
      display: "flex",
      justifySelf: "flex-end",
      width: "50%",
    },
  })
