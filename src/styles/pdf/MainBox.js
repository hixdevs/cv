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
      margin: "10 auto",
      fontSize: 9,
      letterSpacing: 0.3,
      lineHeight: 1.1,
      fontFamily: "Prompt",
      display: "flex",
      backgroundColor: theme.ternary,
      color: theme.textMain,
      width: "65%",
    },
  })
