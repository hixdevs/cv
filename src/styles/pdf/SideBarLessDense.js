import { StyleSheet, Font } from "@react-pdf/renderer"
import global from "./global"
import Prompt from "../../../src/Prompt.ttf"

Font.register({
  family: "Prompt",
  src: Prompt,
})

export default theme =>
  StyleSheet.create({
    ...global,

    container: {
      margin: "0 auto",
      flexDirection: "row",
      paddingLeft: 10,
      // paddingBottom: 150,
      flexWrap: "wrap",
      // alignItems: "flex-end",
      paddingTop: 22,
      fontFamily: "Prompt",
      fontSize: 10,
      backgroundColor: theme.primary,
      color: theme.textLight,
      width: "33%",
    },
  })
