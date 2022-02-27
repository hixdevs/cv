import { StyleSheet, Font } from "@react-pdf/renderer"
import global from "./global"
import Prompt from "../../Prompt.ttf"
import { theme } from "./themes"

Font.register({
  family: "Prompt",
  src: Prompt,
})

export default StyleSheet.create({
  ...global,

  container: {
    padding: "0 5",
    fontSize: 9,
    letterSpacing: 0.3,
    lineHeight: 1.1,
    fontFamily: "Prompt",
    display: "flex",
    backgroundColor: theme.secondary,
    color: theme.textMain,
    width: "63%",
  },

  techRel: {
    padding: "2 0",
    flexDirection: "row",
    margin: "0 auto",
    width: "90%",
    justifyContent: "space-around",
  },
})
