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
      backgroundColor: theme.secondary,
      display: "flex",
      width: "50%",
    },
    techRel: {
      padding: "2 0",
      flexDirection: "row",
      margin: "10 auto",
      width: "90%",
      justifyContent: "space-around",
    },
  })
