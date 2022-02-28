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
      backgroundColor: theme.ternary,
      display: "flex",
      width: "50%",
    },
    techRel: {
      flexDirection: "row",
      width: "100%",
      justifyContent: "space-between",
    },
  })
