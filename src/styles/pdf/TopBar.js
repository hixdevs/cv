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
      fontFamily: "Prompt",
      backgroundColor: theme.primary,
      color: theme.textSide,
      width: "100%",
      height: "25%",
    },
  })
