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
      // alignContent: "center",
      backgroundColor: theme.ternary,
      width: "50%",
    },
  })
