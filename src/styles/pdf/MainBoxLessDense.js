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
      display: "flex",
      width: "65%",
      fontSize: 10,
      letterSpacing: 0.3,
      lineHeight: 1.1,
      fontFamily: "Prompt",
      backgroundColor: theme.ternary,
      color: theme.textMain,
    },
  })
