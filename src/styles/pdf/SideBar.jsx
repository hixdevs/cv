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
      margin: "0 auto",
      paddingTop: 10,
      fontFamily: "Prompt",
      fontSize: 9,
      backgroundColor: theme.primary,
      color: theme.textLight,
      width: "33%",
    },
  })
